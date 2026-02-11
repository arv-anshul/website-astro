import { generateOgImage, type OgImageData } from "@/lib/og";

const imageData: OgImageData = {
  title: "Journal - ARV",
  description: "Weekly Journals written by ARV.",
  icon: "lucide:notebook-pen",
};

export const GET = async ({
  request,
}: {
  props: OgImageData;
  request: Request;
}) => {
  const imageBuffer = await generateOgImage(request.url, imageData);
  return new Response(imageBuffer);
};
