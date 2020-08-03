import React from 'react'
import useNasaAPI from './useNasaAPI';

const Entries = () => {
  const images = useNasaAPI('apollo 11')
  console.warn(images);

  return(
    <div>
      {images.map((image) => (
        <div>
          <h4>{image.data[0].title}</h4>
          {
            image.links && image.links.map((link) => (
              link.render === "image" && <img src={link.href} alt="" />
            ))
          }
        </div>
      ))}
    </div>
  );
};

export default Entries;