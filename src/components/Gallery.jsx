import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const closeModal = () => setSelectedImage(null);

  return (
    <div className="p-5 sm:p-8">
      <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
        {[
          "https://images.pexels.com/photos/2204196/pexels-photo-2204196.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/1756959/pexels-photo-1756959.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/136405/pexels-photo-136405.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/4752861/pexels-photo-4752861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/1144864/pexels-photo-1144864.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/4164640/pexels-photo-4164640.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/1552104/pexels-photo-1552104.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/2468339/pexels-photo-2468339.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/28076/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/4164765/pexels-photo-4164765.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/4164763/pexels-photo-4164763.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/116077/pexels-photo-116077.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://assets.website-files.com/6222467346073366639d12d5/622279ecfb239c13ae7715ad_lucas-calloch-vXubmL12t50-unsplash.jpg", // Added the image you shared
        ].map((src, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <motion.img
              src={src}
              alt="Gallery"
              className="rounded-md cursor-pointer transition-transform duration-300 transform hover:scale-110"
              onClick={() => setSelectedImage(src)}
            />
          </motion.div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <img
              src={selectedImage}
              alt="Selected"
              className="rounded-lg max-w-full max-h-screen"
            />
            <button
              className="absolute top-2 right-2 text-white bg-black rounded-full px-3 py-1"
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
            >
              ✕
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
