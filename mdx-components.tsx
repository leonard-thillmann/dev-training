import type { MDXComponents } from "mdx/types";
import Heading from "./components/heading/heading";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <Heading text={String(children)}></Heading>,
    ...components,
  };
}
