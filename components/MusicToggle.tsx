"use client";

import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (playing) {
        audio.pause();
      } else {
        if (audio.readyState < 2) {
          audio.load();
        }
        await audio.play();
      }

      setPlaying(!playing);
    } catch (err) {
      console.error("Playback error:", err);
    }
  };

  return (
    <>
      <button
        onClick={toggleMusic}
        className="
   h-11 w-11
          rounded-full
          border border-border
          bg-background/70
          backdrop-blur-md
          flex items-center justify-center
          transition-all duration-300
          hover:scale-105
          active:scale-95
          shadow-lg shadow-black/10 dark:shadow-black/40
          ring-1 ring-blue-400/30
          hover:ring-blue-400/60
  "
      >
        {playing ? (
          <Volume2 size={18} strokeWidth={1.5} />
        ) : (
          <VolumeX size={18} strokeWidth={1.5} />
        )}
      </button>

      <audio ref={audioRef} loop preload="auto">
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>
    </>
  );
}