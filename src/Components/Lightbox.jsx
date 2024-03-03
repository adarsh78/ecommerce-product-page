import React from "react";

const Lightbox = ({
  lightBoxModalOpen,
  onCLoseLightBox,
  nextImage,
  prevImage,
  currentIndex,
  images,
}) => {
  return (
    <>
      {lightBoxModalOpen && (
        <>
          <div className="flex flex-col gap-5 w-[465px] absolute left-[520px] top-[50px] z-50">
            <img
              onClick={onCLoseLightBox}
              src="/icon-close.svg"
              alt="icon-close"
              width={20}
              className="self-end cursor-pointer hover:text-[color:hsl(26,100%,55%)] close-svg"
            />

            <img
              className="cursor-pointer absolute top-[240px] -left-[20px] bg-white px-4 py-3 rounded-full hover:fill-orange-500"
              src="/icon-previous.svg"
              alt="icon-previous"
              onClick={prevImage}
            />

            <img
              className="cursor-pointer absolute top-[240px] -right-[20px] bg-white px-4 py-3 rounded-full"
              src="/icon-next.svg"
              alt="icon-next"
              onClick={nextImage}
            />

            <img
              src={images[currentIndex]}
              alt="image-product-1"
              className="w-[465px] rounded-lg"
            />

            <div className="flex gap-5 justify-center mt-4">
              {[1, 2, 3, 4].map((thumbnailNumber) => (
                <img
                  key={thumbnailNumber}
                  src={`/image-product-${thumbnailNumber}-thumbnail.jpg`}
                  alt={`image-product-${thumbnailNumber}-thumbnail`}
                  width={80}
                  className={`rounded-lg cursor-pointer hover:opacity-50 ${thumbnailNumber === currentIndex + 1 ? 'opacity-50 border-2 border-orange-500' : ''}`}
                />
              ))}
            </div>
          </div>
          <div className="bg-[color:hsla(0,0%,0%,0.75)] w-screen h-screen top-0 left-0 z-40 absolute" />
        </>
      )}
    </>
  );
};

export default Lightbox;
