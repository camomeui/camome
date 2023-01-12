import React from "react";

import { DocsComponentMeta } from "@/types";
import { Tag } from "@camome/components/Tag";

import styles from "./styles.module.scss";

type Props = {
  data: DocsComponentMeta[];
};

export default function PropsTables({ data }: Props) {
  return (
    <section className={styles.list}>
      {data
        .filter((item) => item.props.length > 0)
        .map((item) => (
          <React.Fragment key={item.displayName}>
            <PropsTable data={item} />
          </React.Fragment>
        ))}
    </section>
  );
}

function PropsTable({ data }: { data: DocsComponentMeta }) {
  return (
    <section className={styles.table}>
      <h2 className={styles.displayName}>{data.displayName}</h2>
      {data.props.map(({ name, type, defaultValue, required, description }) => (
        <React.Fragment key={name}>
          <hgroup className={styles.propName}>
            <h3>
              <code>{name}</code>
            </h3>
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
                  <code>{description}</code>
                </dd>
              </Row>
            )}
            <Row>
              <dt>Type</dt>
              <dd>
                <code>{type}</code>
              </dd>
            </Row>
            {defaultValue && (
              <Row>
                <dt>Default</dt>
                <dd>
                  <code>{defaultValue}</code>
                </dd>
              </Row>
            )}
          </dl>
        </React.Fragment>
      ))}
    </section>
  );
}

function Row({ children }: { children: React.ReactNode }) {
  return <div className={styles.row}>{children}</div>;
}
