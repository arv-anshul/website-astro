import { generateOgImage, type OgImageData } from "@/lib/og";

const imageData: OgImageData = {
  title: "Projects - ARV",
  description: "See all the project created by ARV.",
  icon: "lucide:rocket",
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
