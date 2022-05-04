import React, { useState, useRef } from 'react';
import {SubHeading } from '../../components'
import { images} from '../../constants';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    direction === 'left' ? current.scrollLeft -= 300 : current.scrollLeft += 300;
  }

  const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];

return (
 <div className="app__gallery flex__center">
   <div className="app__gallery-content">
     <SubHeading title="Instagram" />
     <h1 className="headtext__cormorant">Photo Gallery</h1>
     <p className="p__opensans" stymle={{color :'#AAA', marginTop: '2rem'}}>Lorem Ipsum</p>
     <button type="button" className="custom__button">View on Instagram</button>
   </div>
   <div className="app__gallery-images">
     <div className="app__gallery-images_container" ref={scrollRef}>
       {galleryImages.map((image, index)=> (
         <div key={`gallery-image-${index+1}`}className="app__gallery-images_card flex__center">
           <img src={image} alt="gallery" /> 
           <BsInstagram className="gallery__image-icon" />
         </div>
       ))}
     </div>
     <div className="app__gallery-images_arrows">
       <BsArrowLeftShort className="gallery__arrow-icon" onClick={()=> scroll('left')} />
       <BsArrowRightShort className="gallery__arrow-icon" onClick={()=> scroll('right')} />
     </div>
   </div>
 </div>
);
}

export default Gallery;
