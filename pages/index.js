import { useState } from "react";
import copy from "copy-to-clipboard";

const Index = () => {
  const [videoURL, setVideoURL] = useState("");
  const [thumbnailOptions, setThumbnailOptions] = useState([]);
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const getYouTubeThumbnail = (url) => {
    let regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    let match = url.match(regExp);

    if (match && match[1].length === 11) {
      const videoURL = match[1];
      const thumbnailBaseUrl = "http://img.youtube.com/vi/";

      const options = [
        { resolution: "HD (1280x720)", code: "maxresdefault" },
        { resolution: "SD (640x480)", code: "sddefault" },
        { resolution: "Normal (480x360)", code: "hqdefault" },
        { resolution: "Medium (320x180)", code: "mqdefault" },
        { resolution: "Low (120x90)", code: "default" },
      ];

      const thumbnailOptions = options.map((option) => ({
        resolution: option.resolution,
        url: `${thumbnailBaseUrl}${videoURL}/${option.code}.jpg`,
      }));

      setThumbnailOptions(thumbnailOptions);
      setVideoURL("");
    } else {
      setThumbnailOptions([]);
    }
  };

  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === "en" ? "fr" : "en");
  };

  return (
    <div className="container mx-auto px-4 py-8 ">
      <header className="mb-8" style={{ width: '47%' }}>
        <h1 className="text-3xl font-bold mb-2">
          {currentLanguage === "en"
            ? "Free YouTube Thumbnail Downloader online in 5 sizes "
            : "Téléchargeur de Miniatures YouTube Gratuit en ligne en 5 tailles "}
        </h1>
        
        <p className="text-gray-700">
          {currentLanguage === "en"
            ? "Download high-quality thumbnails from YouTube videos quickly and easily with our online tool. Simply paste the video URL, and get access to visually stunning thumbnails for your content creation needs.and also get 5 different qualities SD,MQ,HQ,HD,4K. Try it now!"
            : "Téléchargez rapidement et facilement des miniatures de haute qualité à partir de vidéos YouTube avec notre outil en ligne. Il vous suffit de coller l'URL de la vidéo et d'obtenir un accès à des miniatures visuellement époustouflantes pour répondre à vos besoins de création de contenu. Obtenez également 5 qualités différentes : SD, MQ, HQ, HD, 4K. Essayez-le dès maintenant !."}
        </p>
      </header>

      <div className="max-w-xl">
        <div className="flex flex-col items-center">
          <input
            type="text"
            className="w-full md:w-1/2 px-4 py-2 border rounded"
            placeholder={currentLanguage === "en" ? "Enter YouTube URL" : "Entrez l'URL de la Vidéo YouTube"}
            value={videoURL}
            onChange={(e) => setVideoURL(e.target.value)}
          />
          <button
            className="btn-blue mt-2"
            style={{ fontSize: '16px', backgroundColor: '#FF5733', borderRadius: '8px' }}
            onClick={() => getYouTubeThumbnail(videoURL)}
          >
            {currentLanguage === "en" ? "Download YouTube Thumbnail" : "Télécharger la Miniature YouTube"}
          </button>
          <button onClick={toggleLanguage} className="btn-blue mt-2" style={{ marginLeft: '30px' }}>
            {currentLanguage === "en" ? "Toggle Language" : "Changer de Langue"}
          </button>
        </div>
      </div>

      {thumbnailOptions.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">
            {currentLanguage === "en" ? "Thumbnail Options" : "Options de Miniatures"}
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {thumbnailOptions.map((option, index) => (
              <div key={index} className="thumbnail-option">
                <img src={option.url} alt={`Thumbnail ${index + 1}`} />
                <button
                  className="btn-blue mt-2"
                  onClick={() => copy(option.url)}
                >
                  {currentLanguage === "en" ? "Copy Image URL" : "Copier l'URL de l'Image"}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

<div className="mt-8 text-center" style={{ padding: '9%' }}>
  {/* Content */}


  <h2 className="text-2xl font-semibold mb-4 text-blue-600">
    {currentLanguage === "en"
      ? "How to Download YouTube Thumbnails: A Complete Guide"
      : "Téléchargeur de Miniatures YouTube Gratuit en Ligne"}
  </h2>
  <p className="text-gray-700 mb-6">
    {currentLanguage === "en"
      ? "Do you want to download YouTube thumbnails for your own videos or other videos? Do you want to know how to download them in different sizes and qualities? Do you want to learn how to make your own YouTube thumbnails? If you answered yes to any of these questions, then this article is for you.  In this article, we will show you everything you need to know about YouTube thumbnails, including what they are, why they are important, and how to download them using our free online tool. We will also give you some tips and tricks on how to create effective YouTube thumbnails for your videos. By the end of this article, you will be able to download any YouTube thumbnail you want with ease."
      : "Découvrez notre téléchargeur de miniatures YouTube gratuit en ligne, la destination ultime pour obtenir des miniatures vibrantes et haute résolution à partir de vidéos YouTube. Notre outil convivial simplifie le processus, vous permettant de prévisualiser et de télécharger facilement des miniatures accrocheuses de différentes tailles et résolutions. Que vous soyez créateur de contenu, marketeur ou passionné de vidéos, notre service gratuit est conçu pour répondre à vos besoins. Rehaussez le contenu de votre chaîne YouTube avec des miniatures professionnellement conçues - essayez-le maintenant et démarquez-vous !"}
  </p>

  <h2 className="text-2xl font-semibold mb-2 text-blue-600">
    {currentLanguage === "en"
      ? "What Are YouTube Thumbnails and Why Are They Important?"
      : "Comment Puis-je Facilement Obtenir des Miniatures de Vidéos YouTube en Ligne ?"}
  </h2>
  <p className="text-gray-700 mb-6" style={{ margin: '2%' }}>

    {currentLanguage === "en" ? (
      <>
        YouTube thumbnails are the small images that appear next to the video titles on YouTube. They are like the cover of a book or the poster of a movie. They give a glimpse of what the video is about and why it is worth watching.

YouTube thumbnails are important for several reasons:<br />

<b>They attract attention:</b>YouTube thumbnails can make your videos stand out from the crowd and grab the attention of potential viewers. A good thumbnail can spark curiosity, interest, or emotion in your audience and make them want to click on your video.<br />
<b>They increase views:</b>YouTube thumbnails can directly affect your click-through rate (CTR), which is the percentage of people who click on your video after seeing it. A higher CTR means more views, more watch time, more engagement, and more revenue for your channel.<br />
<b>They improve SEO:</b> YouTube thumbnails can also help your videos rank higher on search engines like Google and Bing. Search engines use thumbnails as one of the factors to determine the relevance and quality of your videos. A relevant and high-quality thumbnail can boost your SEO and drive more organic traffic to your channel.<br />

      </>
    ) : (
      <>
        Obtenez facilement les miniatures de vidéos YouTube avec notre outil spécialisé. Si vous souhaitez télécharger des miniatures de vidéos YouTube, notre outil convivial simplifie le processus. Suivez ces étapes simples pour une expérience fluide :
        <br />
        1) Trouvez la vidéo YouTube dont vous souhaitez obtenir la miniature.
        <br />
        2) Cliquez sur l'icône 'Partager' située commodément sous le lecteur vidéo.
        <br />
        3) Choisissez 'Copier' parmi les options fournies, ou copiez simplement l'URL depuis la barre d'adresse de votre navigateur.
        <br />
        4) Rendez-vous sur notre page dédiée au Téléchargement de Miniatures YouTube.
        <br />
        5) Collez le lien copié dans le champ d'entrée prévu à cet effet.
        <br />
        6) Cliquez sur 'Télécharger', et en quelques instants, votre miniature de haute qualité sera prête au téléchargement.
      </>
    )}
  </p>

  <h2 className="text-2xl font-semibold mb-2 text-blue-600">
    {currentLanguage === "en"
      ? "How To Download YouTube Thumbnails Using Online Tools and Extensions"
      : "Téléchargements Illimités, Aucune Restriction?"}
  </h2>
  <p className="text-gray-700 mb-6">
    {currentLanguage === "en" ? (
      <>
       If you don’t want to use the manual method of downloading YouTube thumbnails, you can use some online tools and extensions that can make the process easier and faster. There are many online tools and extensions available for downloading YouTube thumbnails, but we recommend using our free online YouTube Thumbnail Downloader tool, which is the best and most reliable one.<br />

Our YouTube Thumbnail Downloader tool is a user-friendly and powerful tool that allows you to download any YouTube thumbnail in seconds. You just need to copy and paste the URL of the video you want to download the thumbnail from, and our tool will do the rest. You can choose from different sizes and resolutions of thumbnails, and download them in JPG or PNG format. You can also preview the thumbnails before downloading them.<br />

Our YouTube Thumbnail Downloader tool is compatible with all devices, including PCs, smartphones, and tablets. You can access it from any browser, without installing any software or extension. You can also use it to download thumbnails from your own videos, from other videos, and from playlists and channels.<br />

<b>To use our YouTube Thumbnail Downloader tool, follow these simple steps:<br /></b><br />

<b>1-</b> Go to our YouTube Thumbnail Downloader page.<br />
<b>2-</b>Paste the URL of the video whose thumbnail you want to download into the input field.<br />
<b>3-</b>Click on the “Download” button and wait for a few seconds.<br />
<b>5-</b>You will see a preview of the thumbnail and a list of different sizes and resolutions available for download.<br />
<b>6-</b>Choose the size and resolution you want and click on the “Download” button below it.<br />
<b>7-</b>Your thumbnail will be downloaded to your device in JPG or PNG format.<br />
That’s it! You have successfully downloaded the thumbnail of any YouTube video using our free online tool. You can repeat this process for any other video you want. You can also use this tool to make your own YouTube thumbnails, which we will show you in the next section.<br />
      </>
    ) : (
      <>
        Notre plateforme offre un accès illimité pour télécharger un nombre illimité de miniatures, sans frais.
      </>
    )}
  </p>

 
    
  
</div>
</div>
  );
};

export default Index;
