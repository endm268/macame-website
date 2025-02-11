"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const VideoPlayer = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videos = [
    {
      id: 1,
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      title: "Video 1",
    },
    {
      id: 2,
      src: "https://www.w3schools.com/html/movie.mp4",
      title: "Video 2",
    },
    {
      id: 3,
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      title: "Video 3",
    },
  ];

  return (
    <div className="flex flex-col items-center p-4">
      <div className="grid grid-cols-3 gap-4">
        {videos.map((video) => (
          <Dialog key={video.id}>
            <DialogTrigger asChild>
              <motion.div
                className="cursor-pointer relative"
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedVideo(video.src)}
              >
                <video
                  className="w-64 h-40 object-cover rounded-lg shadow-lg"
                  muted
                >
                  <source src={video.src} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg font-bold rounded-lg">
                  Play
                </div>
              </motion.div>
            </DialogTrigger>
            <DialogContent className="max-w-2x">
              <VisuallyHidden>
                {" "}
                <DialogTitle>hi</DialogTitle>
              </VisuallyHidden>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="relative w-full"
              >
                <video controls autoPlay className="w-full rounded-lg">
                  <source src={selectedVideo || ""} type="video/mp4" />
                </video>
              </motion.div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default VideoPlayer;
