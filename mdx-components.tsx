import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

import Canigourmand from "@/components/Canigourmand";
import Info from "@/components/Info";
import Mastication from "@/components/Mastication";
import Planning from "@/components/Planning";

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
    Planning,
  };
}
