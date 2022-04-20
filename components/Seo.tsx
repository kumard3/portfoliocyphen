/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";

interface Props {
  title: string;
  description: string;
  image: string;
  url: string;
  content: string;
}
export default function SEO({
  title,
  description,
  content,
  image,
  url,
}: Props) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="viewport"
        content="width=device-width,minimum-scale=1,initial-scale=1"
      />
      <meta property="og:type" content={content} />
      <meta name="og:title" property="og:title" content={title} />
      <meta
        name="og:description"
        property="og:description"
        content={description}
      />
      <meta
        property="og:site_name"
        content="Kumar deepanshu Personal Portfolio"
      />

      <meta name="twitter:card" content="It is my personal portfolio" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="@propernoun" />
      <meta name="twitter:creator" content="@propernounco" />

      <meta property="og:image" content={`${image}`} />
      <meta name="twitter:image" content={`${image}`} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={content} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={title} />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta name="robots" content="Index" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>

      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#000" />
    </Head>
  );
}
// import React from "react";
// import Head from "next/head";
// interface Props {
//   data: any
// }
// function SEO({ data }: Props) {
//   return (
//     <Head>
//       <title>{data.title}</title>
//       <meta name="title" content={data.title} />
//       <meta name="author" content="Hanzla Tauqeer" />
//       <meta name="description" content={data.description} />
//       <meta name="keywords" content={data.keywords.join(", ")} />
//       <link rel="canonical" href={data.url} />
// {/* Open Graph / Facebook */}
// <meta property="og:type" content={content} />
// <meta property="og:url" content={data.url} />
// <meta property="og:title" content={data.title} />
// <meta property="og:description" content={data.description} />
// <meta property="og:image" content={data.image} />
// <meta property="og:site_name" content={data.title} />
// {/* Twitter */}
// <meta property="twitter:card" content="summary_large_image" />
// <meta property="twitter:url" content={data.url} />
// <meta property="twitter:title" content={data.title} />
// <meta property="twitter:description" content={data.description} />
// <meta property="twitter:image" content={data.image} />
// <meta name="robots" content="Index" />
// <link rel="manifest" href="/manifest.json" />
//       {/* Favicon */}
//       <link rel="apple-touch-icon" sizes="120x120" href="./favicon.png" />
//       <link rel="icon" type="image/png" sizes="32x32" href="./favicon.png" />
//       <link rel="icon" type="image/png" sizes="16x16" href="./favicon.png" />
//       <script
//         async
//         src="https://code.iconify.design/1/1.0.4/iconify.min.js"
//       ></script>
//     </Head>
//   );
// }

// export default SEO;
