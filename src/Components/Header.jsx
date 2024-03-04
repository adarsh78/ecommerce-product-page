import React from "react";

const Header = ({
  countInCart,
  handleAddToCart,
  menuOpen,
  onOpen,
  onClose,
  cartModalOpen,
  onModalToggle,
  deleteFromCart,
}) => {
  return (
    <>
      <div className="py-4 px-5 flex items-center justify-between relative lg:border-b-2 lg:mb-4">
        <div className="flex items-center gap-4">
          <img
            onClick={onOpen}
            src="/icon-menu.svg"
            alt="icon-menu"
            className="lg:hidden sm: block"
          />
          <header className="text-3xl font-bold text-[color:hsl(220,13%,3%)] mb-2">
            sneakers
          </header>

          <nav className="sm: hidden lg:flex items-center text-[color:hsl(219,9%,45%)] gap-6 ml-10 font-medium text-[14px] cursor-pointer">
            <p className="hover:underline underline-offset-[31px] decoration-orange-500 decoration-[3px]">Collections</p>
            <p className="hover:underline underline-offset-[31px] decoration-orange-500 decoration-[3px]">Men</p>
            <p className="hover:underline underline-offset-[31px] decoration-orange-500 decoration-[3px]">Women</p>
            <p className="hover:underline underline-offset-[31px] decoration-orange-500 decoration-[3px]">About</p>
            <p className="hover:underline underline-offset-[31px] decoration-orange-500 decoration-[3px]">Contact</p>
          </nav>
        </div>

        <aside className="flex items-center gap-5 lg:gap-10">
          <img
            onClick={onModalToggle}
            className="relative lg:w-4 sm:w-7 cursor-pointer"
            src="/icon-cart.svg"
            alt="icon-cart"
          />
          {handleAddToCart && countInCart > 0 && (
            <span className="absolute bg-[color:hsl(26,100%,55%)] px-2 text-[10px] font-bold text-white rounded-md top-[17px] right-[66px] lg:top-[19px] lg:right-[80px]">
              {countInCart}
            </span>
          )}

          <img
            src="/image-avatar.png"
            alt="image-avatar"
            width={35}
            className="cursor-pointer border-2 border-white hover:border-2 hover:border-orange-500 rounded-full"
          />
        </aside>
      </div>

      {menuOpen && (
        <>
          <div className="absolute w-[260px] h-[1000px] bg-white top-0 z-20 p-6">
            <img
              onClick={onClose}
              src="/icon-close.svg"
              alt="icon-close"
            />
            <div className="flex flex-col gap-3 mt-10 font-bold text-[color:hsl(220,13%,3%)]">
              <p>Collections</p>
              <p>Men</p>
              <p>Women</p>
              <p>About</p>
              <p>Contact</p>
            </div>
          </div>

          <div className="w-screen h-[1000px] bg-[color:hsla(0,0%,0%,0.75)] top-0 absolute" />
        </>
      )}

      {cartModalOpen && (
        <>
          <div className="absolute w-[350px] h-[325px] lg:h-[225px]  bg-white shadow-lg shadow-gray-600/50 z-10 left-3 top-[85px] rounded-lg lg:left-[1000px] lg:top-[65px]">
            <div className="p-6 font-bold text-[color:hsl(220,13%,3%)] border-b-2">
              Cart
            </div>

            {countInCart > 0 ? (
              <div className="p-6">
                <div className="flex items-center gap-4">
                  <img
                    src="/image-product-1-thumbnail.jpg"
                    alt="image-product-1-thumbnail"
                    width={60}
                    className="rounded-md lg:w-10"
                  />
                  <div className="font-medium text-[color:hsl(219,9%,45%)] text-[14px]">
                    <p>Fall Limited Edition Sneakers</p>
                    <p>
                      $125.00 x {countInCart}{" "}
                      <span className="text-[color:hsl(220,13%,3%)] font-bold">
                        ${125 * countInCart}.00
                      </span>
                    </p>
                  </div>
                  <img
                    onClick={deleteFromCart}
                    src="/icon-delete.svg"
                    alt=""
                    className="cursor-pointer"
                  />
                </div>

                <button className="flex items-center justify-center gap-4 bg-[color:hsl(26,100%,55%)] shadow-lg shadow-orange-500/50  w-full py-4 px-6 text-white mt-10 rounded-xl cursor-pointer lg:h-[50px] lg:mt-5">
                  Checkout
                </button>
              </div>
            ) : (
              <div className="text-[color:hsl(219,9%,45%)] font-bold text-center mt-[100px] lg:mt-[60px]">
                <p>Your cart is empty</p>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Header;
