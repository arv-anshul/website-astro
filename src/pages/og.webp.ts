import { generateOgImage, type OgImageData } from "@/lib/og";

const imageData: OgImageData = {
  title: "Home - ARV",
  description: "Personal website of ARV built with Astro.",
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
