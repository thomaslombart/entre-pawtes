import type { MDXComponents } from "mdx/types";
import Info from "./app/components/Info";
import Canigourmand from "./app/components/Canigourmand";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Info,
    Canigourmand,
  };
}
