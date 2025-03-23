import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Entre Pawtes | Éducatrice comportementaliste canine à Lille",
    short_name: "Entre Pawtes",
    description:
      "Entre Pawtes propose des services d'éducation et de comportementalisme canin sur Lille et ses alentours",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    theme_color: "#345b3f",
    background_color: "#ffffff",
    display: "standalone",
    start_url: "/",
    orientation: "portrait",
    lang: "fr-FR",
    dir: "ltr",
    categories: ["education", "pets", "services"],
    scope: "/",
  };
}
