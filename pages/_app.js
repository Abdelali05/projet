import "../styles/index.css";
import { Fragment } from "react";
import { DefaultSeo } from "next-seo";
import Head from 'next/head'; // Import Head from next/head



function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <DefaultSeo
        title="Get YouTube Thumbnail for free Online "
        description="Are you looking for a fast and easy way to download YouTube thumbnails in high quality? Whether you need them for your own videos or for inspiration, our online tool can help you. Just enter the YouTube video URL and choose from five different qualities: SD, MQ, HQ, HD, and 4K. You can download the thumbnails as JPEG or WebP images and use them for your content creation needs. Our tool is free, reliable, and compatible with all devices. Try it now and see the difference!"
        canonical="https://get-youtubethumbnail.com"
        openGraph={{
          url: "https://get-youtubethumbnail.com",
          title: "Get YouTube Thumbnail for free Online",
          description: "Download high-quality thumbnails from YouTube videos quickly and easily with our online tool. Simply paste the video URL, and get access to visually stunning thumbnails for your content creation needs.and also get 5 different qualities SD,MQ,HQ,HD,4K. Try it now!",
          site_name: "Get YouTube Thumbnail for free Online",
        }}
      />
      <Head> {/* Head component should be inside Fragment */}
      <meta name="monetag" content="bccf25096d117b01a575a23066b3d6ef" />
      <meta name="p:domain_verify" content="18e7b62a5543123fb40507f90ccfbb5c"/>
        <script
          type="text/javascript"
          src="https://zcode15.me/?ze=my3dcmbrmi5ha3ddf42dsnbq"
          async
        />
        <script async="async" data-cfasync="false" src="//ophoacit.com/1?z=6473181"></script>

        <script type="text/javascript">
        <script type="text/javascript" src="https://zcode15.me/?ze=g4ytkzbrmu5ha3ddf42dsnry" async></script>


        
      
      {/* Rest of your component's content */}
    

</script>

<script data-cfasync="false" src="//d17757b88bjr2y.cloudfront.net/?rjbbd=1006003"></script>
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;