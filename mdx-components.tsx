import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

import Canigourmand from "@/app/components/Canigourmand";
import Info from "@/app/components/Info";
import Mastication from "@/app/components/Mastication";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Image: (props: ImageProps) => (
      // eslint-disable-next-line jsx-a11y/alt-text
      <Image {...props} className="rounded-xl mx-auto" />
    ),
    Info,
    Mastication,
    Canigourmand,
  };
}
