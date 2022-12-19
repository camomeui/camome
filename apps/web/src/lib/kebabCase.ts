import { slug } from "github-slugger";

export default function kebabCase(str: string) {
  return slug(str);
}
