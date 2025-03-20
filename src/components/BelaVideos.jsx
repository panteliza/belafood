import React from "react";

// Importing videos
import bela1 from "../assets/videos/bela1.mp4";
import bela2 from "../assets/videos/bela2.mp4";
import bela3 from "../assets/videos/bela3.mp4";
import bela4 from "../assets/videos/bela4.mp4";
import bela5 from "../assets/videos/bela5.mp4";

const videos = [
  { src: bela1, title: "A Day at Bela Farmhouse" },
  { src: bela4, title: "Farm-to-Table Experience" },
  { src: bela3, title: "Bela's Rustic Charm" },
  { src: bela5, title: "Evening at the Eatery" },
  { src: bela2, title: "Breathtaking View from Bela" },
];

const BelaVideos = () => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-3">Bela Farmhouse & Eatery</h2>
        <p className="text-gray-600 mb-10">
          Take a glimpse into the heartwarming experience we offer.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {videos.map((video, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
            >
              <video
                src={video.src}
                controls
                className="w-full h-64 object-cover"
              />
              <div className="bg-gray-100 py-3 px-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BelaVideos;
