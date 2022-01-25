import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem  from "./GifGridItem";
const GifGrid = ({ categorie }) => {
  const {data:images, loading} = useFetchGifs(categorie);

  return (
    <>
      <h3 className="animate__animated animate__bounceInRight">{categorie}</h3>
      {loading && <p className="animate__animated animate__backInUp">Loading...</p>}
      <div className="card-grid">
        {images.map((img) => {
          return <GifGridItem key={img.id} {...img} />;
        })}
      </div>
    </>
  );
};

export default GifGrid;
