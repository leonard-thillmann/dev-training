import Heading from "@/components/common/heading";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <Heading text={String(children)}></Heading>,
    ...components,
  };
}
