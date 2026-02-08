// @ts-check

import mdx from "@astrojs/mdx";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import yaml from "@rollup/plugin-yaml";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import mermaid from "astro-mermaid";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeKatex from "rehype-katex";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkGithubAlerts from "remark-github-alerts";
import remarkMath from "remark-math";
import syncContentAssets from "./src/integrations/sync-content-assets";

// https://astro.build/config
export default defineConfig({
  site: "https://arv-anshul.github.io",
  base: "/v2",
  server: {
    port: 3000,
  },
  integrations: [
    icon(),
    mdx(),
    syncContentAssets(),
    mermaid({
      mermaidConfig: {
        layout: "elk",
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss(), yaml()],
  },
  redirects: {
    "/about": "/",
    "/resume":
      "https://cdn.jsdelivr.net/gh/arv-anshul/resume@main/pdf/basic.pdf",
  },
  markdown: {
    syntaxHighlight: false,
    remarkPlugins: [
      [remarkGfm, { singleTilde: false }],
      remarkGithubAlerts,
      remarkMath,
    ],
    rehypePlugins: [
      rehypeSlug,
      rehypeKatex,
      rehypeAutolinkHeadings,
      [
        rehypePrettyCode,
        {
          theme: "dark-plus",
          transformers: [
            transformerCopyButton({
              visibility: "hover",
              feedbackDuration: 2500,
            }),
          ],
        },
      ],
    ],
  },
});
