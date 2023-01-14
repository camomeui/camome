import clsx from "clsx";
import React from "react";

import type { DocsComponentParams, DocsComponentClass } from "@/types";

import Heading from "@/components/Heading";
import { Table } from "@camome/components/Table";
import { Tag } from "@camome/components/Tag";
import { type ColorScheme } from "@camome/system";
import { toKebabCase, uppercaseFirst } from "@camome/utils";

import styles from "./styles.module.scss";

type Props = {
  data: DocsComponentParams[];
  id?: string;
};

export default function ComponentParamTables({ data, id }: Props) {
  const variables = data.flatMap((comp) => comp.cssVariables);
  const classes = data.flatMap((comp) => comp.classes);
  const hasProps = data.flatMap((comp) => comp.props).length > 0;
  const hasVariables = variables.length > 0;
  const hasClasses = classes.length > 0;
  return (
    <section className={styles.container} id={id}>
      {hasProps && <PropTable data={data} />}
      {hasVariables && <VariableTable data={variables} />}
      {hasClasses && <ClassTable data={classes} />}
      {!hasProps && !hasVariables && <div>Nothing to show...</div>}
    </section>
  );
}

function PropTable({ data }: { data: DocsComponentParams[] }) {
  return (
    <section className={styles.tableSection}>
      <Heading Level="h2" id="props">
        React props
      </Heading>
      {data
        .filter((item) => item.props.length > 0)
        .map((item) => (
          <div className={styles.propsTable} key={item.displayName}>
            <Heading Level="h3" id={toKebabCase(item.displayName)}>
              {item.displayName}
            </Heading>
            {item.props.map(
              ({ name, type, defaultValue, required, description }) => (
                <React.Fragment key={name}>
                  <hgroup className={styles.propName}>
                    <h4>
                      <code className={styles.code}>{name}</code>
                    </h4>
                    {required && (
                      <Tag size="sm" variant="solid" colorScheme="success">
                        Required
                      </Tag>
                    )}
                  </hgroup>
                  <dl className={styles.dl}>
                    {description && (
                      <Row>
                        <dt>Description</dt>
                        <dd>
                          <p>{description}</p>
                        </dd>
                      </Row>
                    )}
                    <Row>
                      <dt>Type</dt>
                      <dd>
                        <code className={styles.code}>{type}</code>
                      </dd>
                    </Row>
                    {defaultValue && (
                      <Row>
                        <dt>Default</dt>
                        <dd>
                          <code className={styles.code}>{defaultValue}</code>
                        </dd>
                      </Row>
                    )}
                  </dl>
                </React.Fragment>
              )
            )}
          </div>
        ))}
    </section>
  );
}

function Row({ children }: { children: React.ReactNode }) {
  return <div className={styles.row}>{children}</div>;
}

function VariableTable({
  data,
}: {
  data: DocsComponentParams["cssVariables"];
}) {
  const variables = data.reduce(
    (acc, curr) => [
      ...acc,
      ...(acc.map((v) => v.name).includes(curr.name) ? [] : [curr]),
    ],
    [] as DocsComponentParams["cssVariables"]
  );
  return (
    <section className={styles.tableSection}>
      <Heading Level="h2" id="variables">
        CSS variables
      </Heading>
      <Table className={styles.variableTable}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {variables.map((variable) => (
            <tr key={variable.name}>
              <td>
                <code className={clsx(styles.code, styles.variable)}>
                  --{`cmm`}-{variable.name}
                </code>
              </td>
              <td>
                <VarTypeTag type={variable.type} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </section>
  );
}

function VarTypeTag({
  type,
}: {
  type: DocsComponentParams["cssVariables"][number]["type"];
}) {
  return (
    <Tag size="sm" colorScheme={type === "theme" ? "primary" : "success"}>
      {uppercaseFirst(type)}
    </Tag>
  );
}

function ClassTable({ data }: { data: DocsComponentParams["classes"] }) {
  return (
    <section className={styles.tableSection}>
      <Heading Level="h2" id="classes">
        Classes
      </Heading>
      <Table className={styles.variableTable}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {data.map((_class) => (
            <tr key={_class.name}>
              <td>
                <code className={clsx(styles.code, styles.variable)}>
                  {_class.name}
                </code>
              </td>
              <td>
                <ClassTypeTag type={_class.type} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </section>
  );
}

function ClassTypeTag({ type }: { type: DocsComponentClass["type"] }) {
  return (
    <Tag size="sm" colorScheme={classTypeTagColor[type]}>
      {uppercaseFirst(type).replace("-", " ")}
    </Tag>
  );
}

const classTypeTagColor: {
  [T in DocsComponentClass["type"]]: ColorScheme;
} = {
  block: "neutral",
  element: "success",
  modifier: "primary",
  "color-scheme": "primary",
  size: "primary",
  variant: "primary",
};
