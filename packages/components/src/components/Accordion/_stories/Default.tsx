import { Accordion } from "@camome/components/Accordion";

export default function Default() {
  return <Accordion items={data} />;
}

const data = [
  {
    summary: "Section 1",
    details:
      "Lorem ipsum dolor sit amet, ei vocent reformidans has, cum eu nonumes oporteat praesent. ",
  },
  {
    summary: "Section 2",
    details: "Cum laudem splendide ei, te sumo nobis mea.",
  },
  {
    summary: "Section 3",
    details:
      "Cu mel homero oporteat partiendo, te vim iuvaret nonumes. Stet ipsum at sit, justo ludus audiam nec ei, an paulo disputando vim.",
  },
];

Default.parameters = {
  layout: "padded",
};
