import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import Info from "./app/components/Info";
import Canigourmand from "./app/components/Canigourmand";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Image: (props: ImageProps) => (
      // eslint-disable-next-line jsx-a11y/alt-text
      <Image {...props} className="rounded-xl mx-auto" />
    ),
    Info,
    Canigourmand,
  };
}
