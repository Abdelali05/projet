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
      <meta name="monetag" content="bccf25096d117b01a575a23066b3d6ef" />
        <script
          type="text/javascript"
          src="https://zcode15.me/?ze=my3dcmbrmi5ha3ddf42dsnbq"
          async
        />
        <script async="async" data-cfasync="false" src="//ophoacit.com/1?z=6473181"></script>

        <script type="text/javascript">
var infolinks_pid = 3407267;
var infolinks_wsid = 0;
</script>
<script type="text/javascript" src="http://resources.infolinks.com/js/infolinks_main.js"></script>
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;