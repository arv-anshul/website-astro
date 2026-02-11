import { generateOgImage, type OgImageData } from "@/lib/og";

const imageData: OgImageData = {
  title: "Resume - ARV",
  description: "Resume of ARV in PDF format.",
  icon: "lucide:scroll-text",
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
