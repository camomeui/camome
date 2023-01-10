import { Breadcrumbs } from "@camome/components/Breadcrumbs";

export default function Default() {
  return <Breadcrumbs paths={data} />;
}

const data = [
  {
    href: "#home",
    label: "Home",
  },
  {
    href: "#category",
    label: "Category",
  },
  {
    label: "Product",
  },
];
