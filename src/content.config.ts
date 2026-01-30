import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// TODO: Sync this with Astro 6
// import { iconSchema } from "@/lib/data-loaders/common";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z
      .string()
      .regex(/^(lucide:|simple-icons:)/)
      .toLowerCase(),
    author: z.enum(["Anshul Raj Verma"] as const),
    date: z.date(),
  }),
});

export const collections = { blog };
