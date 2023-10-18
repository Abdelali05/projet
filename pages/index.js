import { useState } from "react";
import copy from "copy-to-clipboard";




const Index = () => {
  const [videoURL, setVideoURL] = useState("");
  const [thumbnailOptions, setThumbnailOptions] = useState([]);

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

  return (
    <div className="container mx-auto px-4 py-8 ">
 
<header className="mb-8" style={{width: '47%'}} >
    <h1 className="text-3xl font-bold mb-2">
      Free  Youtube Thumbnail Downloader
    </h1>
      <p className="text-gray-700 ">
        Elevate Your Content with High-Resolution YouTube Video Thumbnails!
      </p>
      <p className="text-gray-700 ">
        Unlock stunning visuals for your videos with our top-tier thumbnail downloader. Access premium, crystal-clear images to captivate your audience and enhance your content. Download now for a visual boost like never before.
      </p>
    </header>

  <div className="max-w-xl">
    <div className="flex flex-col items-center">
      <input
        type="text"
        className="w-full md:w-1/2 px-4 py-2 border rounded"
        placeholder="Enter YouTube URL"
        value={videoURL}
        onChange={(e) => setVideoURL(e.target.value)}
      />
      <button
  className="btn-blue mt-2"
  style={{ fontSize: '16px', backgroundColor: '#FF5733', borderRadius: '8px' }}
  onClick={() => getYouTubeThumbnail(videoURL)}
>
  Get  Thumbnails
</button>

    </div>
  </div>
  {thumbnailOptions.length > 0 && (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Thumbnail Options</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {thumbnailOptions.map((option, index) => (
          <div key={index} className="thumbnail-option">
            <img src={option.url} alt={`Thumbnail ${index + 1}`} />
            <button
              className="btn-blue mt-2"
              onClick={() => copy(option.url)}
            >
              Copy Image URL
            </button>
          </div>
        ))}
      </div>
    </div>
  )}
</div>


  );
};

export default Index;
