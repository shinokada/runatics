const ANALYTICS_ID = "G-56Q5D99ZCL";
const load = ({ url }) => {
  const layoutMetaTags = {
    title: "Runatics",
    description: "A simple Google analyics component for Svelte Runes project.",
    keywords: "svelte, runes, google, analytics",
    twitter: {
      card: "summary_large_image",
      site: "@shinokada",
      handle: "@shinokada",
      title: "Runatics",
      description: "A simple Google analyics component for Svelte Runes project.",
      image: "https://open-graph-vercel.vercel.app/api/runatics",
      imageAlt: "Runatics"
    },
    og: {
      type: "website",
      title: "Runatics",
      description: "A simple Google analyics component for Svelte Runes project.",
      url: url.href,
      image: "https://open-graph-vercel.vercel.app/api/runatics",
      imageAlt: "Runatics",
      siteName: "Runatics",
      imageWidth: "1200",
      imageHeight: "630"
    }
  };
  return {
    layoutMetaTags,
    ANALYTICS_ID
  };
};
export {
  load
};
