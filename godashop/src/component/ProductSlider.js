import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function ProductSlider({ product }) {
  const images = [
    {
      original: product.featured_image,
      thumbnail: product.featured_image,
    },
  ];

  const moreImages = product.thumbnailItems.map((thumbnailItem) =>
    ({
      original: thumbnailItem.name,
      thumbnail: thumbnailItem.name
    })
  );
  
  const allImages = [...images, ...moreImages];

  return <ImageGallery items={allImages} showPlayButton={false} />
}
