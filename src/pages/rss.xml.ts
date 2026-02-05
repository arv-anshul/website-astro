import { getCollection } from "astro:content";
import rss, { type RSSOptions } from "@astrojs/rss";
import MarkdownIt from "markdown-it";
import sanitizeHtml from "sanitize-html";

export async function GET(context: RSSOptions) {
  const blog = await getCollection("blog");
  const parser = new MarkdownIt();

  return rss({
    title: "ARV's Blog",
    description:
      "A Data Scientist passionate about harnessing GenAI to solve real-world problems.",
    site: context.site,
    items: blog.map((post) => ({
      link: `/v2/blog/${post.id}`,
      pubDate: post.data.date,
      content: sanitizeHtml(parser.render(post.body || ""), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
      }),
      ...post.data,
    })),
    customData: "<language>en-us</language>",
    trailingSlash: false,
  });
}
