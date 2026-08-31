import { useRef, useState, useEffect } from "react";

function VideoPlayer({ videoId, thumbnail }) {
  const iframeRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);

  // Show controls on mouse move
  const handleMouseMove = () => {
    setShowControls(true);

    setTimeout(() => {
      setShowControls(false);
    }, 3000);
  };

  return (
    <div
      className="relative w-full h-[300px] md:h-[450px] bg-black rounded-xl overflow-hidden group"
      onMouseMove={handleMouseMove}
    >
      {/*Thumbnail before play */}
      {!isPlaying && (
        <>
          <img
            src={thumbnail}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40"></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={() => setIsPlaying(true)}
              className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center text-black text-2xl hover:scale-110 transition"
            >
              ▶
            </button>
          </div>
        </>
      )}

      {/* YouTube Player */}
      {isPlaying && (
        <iframe
          ref={iframeRef}
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0`}
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      )}

      {/* Custom Controls */}
      {isPlaying && (
        <div
          className={`absolute bottom-0 w-full px-4 py-3 bg-gradient-to-t from-black/90 to-transparent transition ${
            showControls ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Progress Bar */}
          <div className="w-full h-1 bg-gray-600 rounded mb-3">
            <div className="w-1/3 h-1 bg-yellow-500 rounded"></div>
          </div>

          {/* Controls Row */}
          <div className="flex items-center justify-between text-white text-sm">

            {/* Left Controls */}
            <div className="flex items-center gap-4">

              {/* Play/Pause */}
              <button
                onClick={() => setIsPlaying(false)}
                className="hover:text-yellow-400"
              >
                ⏸
              </button>

              {/* Volume */}
              <input
                type="range"
                min="0"
                max="100"
                className="w-24"
              />
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-4">

              {/* Fullscreen */}
              <button
                onClick={() => {
                  const el = iframeRef.current;
                  if (el.requestFullscreen) el.requestFullscreen();
                }}
                className="hover:text-yellow-400"
              >
                ⛶
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default VideoPlayer;