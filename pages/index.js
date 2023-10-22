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
            ? "Free YouTube Thumbnail Downloader "
            : "Téléchargeur de Miniatures YouTube Gratuit "}
        </h1>
        
        <p className="text-gray-700">
          {currentLanguage === "en"
            ? ""
            : ""}
        </p>
        <p className="text-gray-700">
          {currentLanguage === "en"
            ? ""
            : ""}
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

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">
          {currentLanguage === "en" ? "Free Online thumbnail  Youtube Downloader" : " Téléchargeur de Miniatures gratuit en ligne "}
        </h2>
        <p className="text-gray-700">
          {currentLanguage === "en"
            ? "Discover our Free Online Thumbnail YouTube Downloader, your go-to destination for snagging vibrant and high-resolution thumbnails from YouTube videos. Our user-friendly tool simplifies the process, allowing you to effortlessly preview and download eye-catching thumbnails in various sizes and resolutions. Whether you're a content creator, marketer, or video enthusiast, our free service is tailored to meet your needs. Elevate your YouTube content with professionally curated thumbnails – try it now and make your videos stand out!."
            : "Découvrez notre Téléchargeur de Miniatures YouTube gratuit en ligne, votre destination privilégiée pour obtenir des miniatures vibrantes et haute résolution à partir de vidéos YouTube. Notre outil convivial simplifie le processus, vous permettant de prévisualiser et de télécharger facilement des miniatures accrocheuses de différentes tailles et résolutions. Que vous soyez créateur de contenu, marketeur ou passionné de vidéos, notre service gratuit est conçu pour répondre à vos besoins. Rehaussez le contenu de votre chaîne YouTube avec des miniatures professionnellement conçues - essayez-le maintenant et démarquez-vous !."}
        </p>
        <h2 className="text-xl font-semibold mb-4">
  {currentLanguage === "en"
    ? "How Can I Easily Obtain YouTube Video Thumbnails Online?"
    : "Comment puis-je facilement obtenir des miniatures de vidéos YouTube en ligne ?"}
</h2>
<p className="text-gray-700">
  {currentLanguage === "en" ? (
    <>
      Effortlessly Obtain YouTube Video Thumbnails with Our Specialized Tool. If you're looking to download YouTube video thumbnails, our user-friendly tool streamlines the process. Follow these simple steps for a seamless experience:<br />
      1) Find the YouTube video for which you'd like to acquire the thumbnail.<br />
      2) Click the 'Share' icon conveniently located below the video player.<br />
      3) Opt to 'Copy' from the provided options, or simply copy the URL from your browser's address bar.<br />
      4) Proceed to our dedicated YouTube Thumbnail Downloader page.<br />
      5) Paste the copied link into the designated input field.<br />
      6) Hit 'download', and within moments, your high-quality thumbnail will be ready for download.
    </>
  ) : (
    <>
      Obtenez Facilement les Miniatures de Vidéo YouTube avec Notre Outil Spécialisé. Si vous souhaitez télécharger des miniatures de vidéos YouTube, notre outil convivial simplifie le processus. Suivez ces étapes simples pour une expérience fluide :<br />
    
1) Trouvez la vidéo YouTube dont vous souhaitez obtenir la miniature.<br />
2) Cliquez sur l'icône 'Partager' située commodément sous le lecteur vidéo.<br />
3) Choisissez 'Copier' parmi les options fournies, ou copiez simplement l'URL depuis la barre d'adresse de votre navigateur.<br />
4) Rendez-vous sur notre page dédiée au Téléchargement de Miniatures YouTube.<br />
5) Collez le lien copié dans le champ d'entrée prévu à cet effet.<br />
6) Cliquez sur 'télécharger', et en quelques instants, votre miniature de haute qualité sera prête au téléchargement.<br />

    </>
  )}
</p>

      </div>

      {/* ... Additional content ... */}
      
     
    </div>
  );
};

export default Index;
