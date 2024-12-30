import React from "react";

// Dynamically import all images using Webpack's `import.meta.glob` or Vite's equivalent
const imageImports = import.meta.glob("../assets/images/*.JPG", { eager: true });
const images = Object.values(imageImports).map((img) => img.default);

const Gallery = () => {
  return (
    <div className="container mx-auto py-2">
      <h1 className=" text-secondary text-4xl font-bold text-center mb-8">Some Glimpses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md">
            <img
              src={img}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
