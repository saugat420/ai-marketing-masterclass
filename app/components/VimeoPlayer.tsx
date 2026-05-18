"use client";

import { useRef, useState } from "react";

type VimeoPlayerProps = {
  videoId: string;
  title: string;
};

export function VimeoPlayer({ videoId, title }: VimeoPlayerProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const sendVimeoCommand = (method: string, value?: unknown) => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ method, value }),
      "https://player.vimeo.com",
    );
  };

  const togglePlayback = () => {
    if (isPlaying) {
      sendVimeoCommand("pause");
      setIsPlaying(false);
      return;
    }

    sendVimeoCommand("setVolume", 1);
    sendVimeoCommand("play");
    setIsPlaying(true);
  };

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-black">
      <iframe
        ref={iframeRef}
        src={`https://player.vimeo.com/video/${videoId}?autopause=0&badge=0&byline=0&controls=0&dnt=1&muted=0&pip=0&portrait=0&preload=auto&title=0`}
        title={title}
        className="h-full w-full"
        loading="eager"
        allow="autoplay; encrypted-media; picture-in-picture"
      />
      <button
        type="button"
        onClick={togglePlayback}
        className={`absolute grid place-items-center text-white transition focus:outline-none ${
          isPlaying
            ? "inset-0 cursor-pointer bg-transparent"
            : "left-1/2 top-1/2 size-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/45 bg-slate-950/72 shadow-[0_18px_54px_rgba(0,0,0,0.45),0_0_34px_rgba(34,211,238,0.26)] backdrop-blur hover:scale-105 hover:border-cyan-200/70 hover:bg-cyan-950/78 focus:ring-2 focus:ring-cyan-300/50 sm:size-20"
        }`}
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        {!isPlaying ? (
          <span className="ml-1 h-0 w-0 border-y-[0.7rem] border-l-[1.05rem] border-y-transparent border-l-white sm:border-y-[0.85rem] sm:border-l-[1.3rem]" />
        ) : null}
      </button>
    </div>
  );
}
