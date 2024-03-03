import React, { useState } from "react";
import LightBox from "./Lightbox";

const Hero = ({
  count,
  incrementCount,
  decrementCount,
  handleAddToCart,
  images,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImgURL, setCurrentImgURL] = useState("/image-product-1.jpg");
  const [selectedThumbnail, setSelectedThumbnail] = useState(1);
  const [lightBoxModalOpen, setLightBoxModalOpen] = useState(false);

  const handleThumbnailClick = (imgURL, thumbnailNumber) => {
    setCurrentImgURL(imgURL);
    setSelectedThumbnail(thumbnailNumber);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const onOpenLightBox = () => {
    setLightBoxModalOpen(true);
  }

  const onCLoseLightBox = () => {
    setLightBoxModalOpen(false);
  }


  return (
    <>
      <div className="lg:hidden">
        <img src={images[currentIndex]} alt="image-product-1"/>
        <img
          onClick={prevImage}
          className="cursor-pointer absolute top-[240px] left-[16px] bg-white px-4 py-3 rounded-full"
          src="/icon-previous.svg"
          alt="icon-previous"
        />
        <img
          onClick={nextImage}
          className="cursor-pointer absolute top-[240px] right-[16px] bg-white px-4 py-3 rounded-full"
          src="/icon-next.svg"
          alt="icon-next"
        />
      </div>

      <div className="lg:flex items-center justify-center gap-20 lg:mt-[70px] lg:w-[950px] lg:mx-auto">
      <div className="sm: hidden lg:block">
      <img
        src={currentImgURL}
        alt={`image-product-${selectedThumbnail}`}
        className="w-[400px] rounded-lg cursor-pointer"
        onClick={onOpenLightBox}
      />

      <div className="flex justify-between mt-10">
        {[1, 2, 3, 4].map((thumbnailNumber) => (
          <img
            key={thumbnailNumber}
            onClick={() => handleThumbnailClick(`/image-product-${thumbnailNumber}.jpg`, thumbnailNumber)}
            src={`/image-product-${thumbnailNumber}-thumbnail.jpg`}
            alt={`image-product-${thumbnailNumber}-thumbnail`}
            width={80}
            className={`rounded-lg hover:opacity-50 cursor-pointer ${thumbnailNumber === selectedThumbnail ? 'opacity-50 border-2 border-orange-500' : ''}`}
          />
        ))}
        
      </div>
    </div>

        <div className="p-5 lg:w-[500px] lg:mb-4">
          <p className="text-[color:hsl(26,100%,55%)] font-bold uppercase tracking-widest lg:text-[12px] sm: text-[14px]">
            sneaker company
          </p>
          <h1 className="text-[color:hsl(220,13%,3%)] text-3xl font-bold my-4 lg:text-4xl">
            Fall Limited Edition Sneakers
          </h1>
          <p className="text-[color:hsl(219,9%,45%)] text-[15px]">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          <div className="flex items-center justify-between mt-7 lg:flex-col lg:items-start lg:gap-2">
            <div className="flex items-center gap-4">
              <h2 className="text-[color:hsl(220,13%,3%)] text-3xl font-bold">
                $125.00
              </h2>
              <span className="text-[color:hsl(26,100%,55%)] bg-[color:hsl(25,100%,94%)] px-2 rounded-md font-bold">
                50%
              </span>
            </div>
            <span className="text-[color:hsl(220,14%,75%)] font-bold line-through">
              $250.00
            </span>
          </div>

          <div className="mt-8 lg:flex lg:items-center lg:gap-4">
            <div className="flex items-center justify-between w-full bg-[color:hsl(223,64%,98%)] shadow-lg shadow-gray-300/40  py-4 px-6 rounded-xl cursor-pointer lg:w-[150px]">
              <img
                onClick={decrementCount}
                src="/icon-minus.svg"
                alt="icon-minus"
                className="lg:w-3 hover:opacity-70"
              />
              <p className="font-bold text-[color:hsl(220,13%,3%)] text-xl lg:text-sm">
                {count}
              </p>
              <img
                onClick={incrementCount}
                src="/icon-plus.svg"
                alt="icon-plus"
                className="lg:w-3 hover:opacity-70"
              />
            </div>
            <button
              onClick={handleAddToCart}
              className="flex items-center justify-center gap-4 bg-[color:hsl(26,100%,55%)] hover:opacity-70 shadow-lg shadow-orange-500/50  w-full py-4 px-6 text-white mt-5 rounded-xl cursor-pointer lg:w-[240px] lg:m-0"
            >
              <img src="/icon-cart.svg" alt="icon-cart" />
              <p className="font-bold text-xl lg:text-sm">Add to cart</p>
            </button>
          </div>
        </div>
      </div>

      <div className="sm: hidden lg:block"> 
      <LightBox 
      lightBoxModalOpen={lightBoxModalOpen}
      onCLoseLightBox={onCLoseLightBox}
      nextImage={nextImage}
      prevImage={prevImage}
      currentIndex={currentIndex}
      images={images}
      />
      </div>
    </>
  );
};

export default Hero;
