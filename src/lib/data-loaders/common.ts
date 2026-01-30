import { z } from "zod";

export const socialProfileSchema = z.object({
  name: z.string(),
  icon: z
    .string()
    .regex(/^(lucide-|si-)/)
    .lowercase(),
  url: z.url(), // Not z.httpUrl() because it can be mailto:email@email.com type url too.
});
