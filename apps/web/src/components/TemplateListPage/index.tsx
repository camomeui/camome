import Image from "next/image";
import Link from "next/link";
import React from "react";

import { ExtractContentMeta } from "@/lib/contentlayer";
import { Tag } from "@camome/core/Tag";
import { Template } from "contentlayer/generated";

import styles from "./styles.module.scss";

type Props = {
  templates: ExtractContentMeta<Template>[];
};

export default function TemplateListPage({ templates }: Props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Templates</h1>
      <div className={styles.grid}>
        {templates.map((temp) => (
          <div key={temp._id} className={styles.card}>
            {temp.screenshots?.length && (
              <div className={styles.card__imgWrap}>
                <Image src={temp.screenshots[0]} alt="" fill />
              </div>
            )}
            <h2 className={styles.card__name}>
              <Link href={`/templates/${temp.slug}`}>{temp.name}</Link>
            </h2>
            <p className={styles.card__description}>{temp.description}</p>
            <div className={styles.card__bottom}>
              <p className={styles.card__author}>
                <span>By</span>{" "}
                <span className={styles.card__author__name}>{temp.author}</span>
              </p>
              <Tag size="sm">{temp.price ? temp.price : "FREE"}</Tag>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
