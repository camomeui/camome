import NextLink from "next/link";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function A({ href, ref, ...props }: JSX.IntrinsicElements["a"]) {
  return href ? <NextLink href={href} {...props} /> : null;
}
