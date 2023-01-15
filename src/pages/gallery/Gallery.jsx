import React from 'react';
import HeaderSection from '../../components/HeaderSection/HeaderSection';
import HeaderImage from '../../images/header_bg_3.jpg';
// import Images from '../../data';

import './gallery.css';

const Gallery = () => {

  const galleryLength = 15;
  const images = [];

  for (let i = 1; i <= galleryLength; i++){
    images.push(require(`../../images/gallery${i}.jpg`))
  }

  return (
    <>
      <HeaderSection title="Galeria" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolor nisi voluptatem velit nesciunt repellendus!
      </HeaderSection>
      <section className="gallery">
        <div className="container container__gallery">
          {
            images.map((image, index) => {
              return (
                <article key={index}>
                  <img src={image} alt={`Galeria Imagem ${index + 1}`} />
                </article>
              )
            })
          }
        </div>
      </section>
    </>
  )
}

export default Gallery;