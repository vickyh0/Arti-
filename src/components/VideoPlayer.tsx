import React, { useState, useRef } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

// ─── Your uploaded video ──────────────────────────────────────────────────────
import conceptVideo from '@/assets/.aistudio/mockups/WhatsApp Video 2026-06-09 at 7.13.09 PM.mp4';
// ─────────────────────────────────────────────────────────────────────────────

export default function VideoPlayer() {
  const [videoSrc] = useState<string>(conceptVideo);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration);
  };

  const seekTo = (seconds: number) => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = seconds;
    setCurrentTime(seconds);
    if (!isPlaying) {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const formatTime = (t: number) => {
    const mins = Math.floor(t / 60);
    const secs = Math.floor(t % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div id="video-section-container" className="bg-white border-3 border-[#111827] text-[#111827] rounded-xl overflow-hidden snappy-transition">

      {/* Top Banner */}
      <div className="p-4 bg-brand-gray border-b-3 border-[#111827] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <div className="flex items-center gap-2">
          <span className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-pink opacity-75"></span>
            <span className="relative inline-flex rounded-lg h-3 w-3 bg-brand-pink"></span>
          </span>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2D2E49]">
            ARTI_CONCEPT_PLAYBOOK.MP4
          </span>
        </div>
      </div>

      <div className="flex flex-col">

        {/* Video Stage */}
        <div className="bg-[#1F2035] relative flex flex-col justify-between p-6 sm:p-8 overflow-hidden select-none">
          <div className="absolute inset-0 flat-grid-pattern opacity-10 pointer-events-none" />

          {/* Player — portrait, centered */}
          <div className="flex justify-center">
            <div className="relative rounded-xl border-3 border-[#111827] overflow-hidden bg-black w-full max-w-[320px] aspect-[9/16]">
              <video
                ref={videoRef}
                src={videoSrc}
                className="absolute inset-0 w-full h-full object-cover pointer-events-auto cursor-pointer"
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onClick={handlePlayPause}
                playsInline
              />
            </div>
          </div>

          {/* Playback controls */}
          <div className="mt-4 bg-[#FAF9F6] border-2 border-[#111827] rounded-lg p-3 flex items-center gap-3 relative z-10">
            <button
              onClick={handlePlayPause}
              type="button"
              className="w-10 h-10 bg-brand-pink text-white rounded-md border-2 border-[#111827] flex items-center justify-center hover:scale-105 active:scale-95 transition-transform cursor-pointer"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
            </button>

            <div className="flex-1 text-xs space-y-1">
              <div className="flex justify-between font-mono text-[10px] text-[#4B5563]">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration || 86)}</span>
              </div>
              <input
                type="range"
                min={0}
                max={duration || 86}
                value={currentTime}
                step={0.1}
                onChange={(e) => {
                  const val = parseFloat(e.target.value);
                  if (videoRef.current) videoRef.current.currentTime = val;
                  setCurrentTime(val);
                }}
                className="w-full accent-brand-pink cursor-pointer h-1.5 bg-[#E5E7EB] rounded-lg appearance-none"
              />
            </div>

            <button
              onClick={() => seekTo(0)}
              type="button"
              className="w-10 h-10 bg-brand-gray hover:bg-gray-200 text-[#111827] border-2 border-[#111827] rounded-md flex items-center justify-center transition-transform active:scale-95 cursor-pointer"
              title="Restart"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}