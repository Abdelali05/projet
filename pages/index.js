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
          <button onClick={toggleLanguage} className="btn-blue mt-2">
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
          {currentLanguage === "en" ? "About YT Thumbnail Downloader" : "À Propos du Téléchargeur de Miniatures YT"}
        </h2>
        <p className="text-gray-700">
          {currentLanguage === "en"
            ? "Our YT (YouTube Thumbnail) Downloader is a powerful tool that allows you to efficiently 'Get Youtube Thumbnail js' without the need for any installations. It's completely 'free download' for anyone looking to 'get youtube thumbnail from URL'."
            : "Notre Téléchargeur de Miniatures YT (YouTube Thumbnail) est un outil puissant qui vous permet d'obtenir efficacement des miniatures YouTube sans avoir besoin d'installer quoi que ce soit. C'est un téléchargement complètement gratuit pour toute personne cherchant à obtenir une miniature YouTube à partir de l'URL."}
        </p>

        {/* ... Rest of your content in both languages ... */}
      </div>

      {/* ... Additional content ... */}
      
     
    </div>
  );
};

export default Index;
