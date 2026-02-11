import { generateOgImage, type OgImageData } from "@/lib/og";

const imageData: OgImageData = {
  title: "Blog - ARV",
  description: "Blogs written by ARV.",
  icon: "lucide:newspaper",
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
