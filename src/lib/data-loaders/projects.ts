import { z } from "zod";
import { iconSchema, socialProfileSchema } from "./common";

const projectSchema = z.object({
  primary_url: z.string(), // Not any strict UrlType because this can be a relative url too.
  title: z.string(),
  description: z.string(),
  highlights: z.array(z.string()).min(3).optional(),
  urls: z.array(socialProfileSchema),
  tech_icons: z.array(iconSchema).min(1),
  completed_on: z
    .string()
    .regex(
      /(January|February|March|April|May|June|July|August|September|October|November|December),\s20\d{2}$/
    ),
});

const projectsIndexSchema = z.object({
  projects: z.array(projectSchema),
});

export type Project = z.infer<typeof projectSchema>;
export type ProjectsData = z.infer<typeof projectsIndexSchema>;

export async function loadProjectsData(): Promise<ProjectsData> {
  const rawProjectsData = await import("data/projects.yaml");
  return projectsIndexSchema.parse(rawProjectsData);
}
