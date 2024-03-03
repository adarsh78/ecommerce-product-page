import React, { useState } from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'

const App = () => {

  const [count, setCount] = useState(0);
  const [countInCart, setCountInCart] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartModalOpen, setCartModalOpen] = useState(false);

  const incrementCount = () => {
    setCount(count + 1);
  }

  const decrementCount = () => {
    if(count > 0) {
      setCount(count - 1);
    }
  }

  const handleAddToCart = () => {
    setCountInCart(count)
  }

  const onOpen = () => {
    setMenuOpen(true);
  }

  const onClose = () => {
    setMenuOpen(false);
  }

  const onModalToggle = () => {
    setCartModalOpen(prev => !prev);
  }

  const deleteFromCart = () => {
    setCountInCart(0);
  }

  const imageURLs = ["/image-product-1.jpg", "/image-product-2.jpg", "/image-product-3.jpg", "/image-product-4.jpg"];




  return (
    <>
    <div className='lg:w-[1100px] m-auto'>
    <Header 
    count={count}
    handleAddToCart={handleAddToCart}
    countInCart={countInCart}
    menuOpen={menuOpen}
    onOpen={onOpen}
    onClose={onClose}
    cartModalOpen={cartModalOpen}
    onModalToggle={onModalToggle}
    deleteFromCart={deleteFromCart}
    />
    <Hero 
    count={count}
    incrementCount={incrementCount}
    decrementCount={decrementCount}
    handleAddToCart={handleAddToCart}
    images={imageURLs}
    />
    </div>
    </>
  )
}

export default App