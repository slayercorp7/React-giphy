import React, { useState } from "react";
import AddCategorie from "./AddCategorie";
import GifGrid from "./GifGrid";

const GifExpertApp = () => {
  //const categories = ["one punch", "samurai x", "dragon ball"];
  const [categories, setCategories] = useState(["doom"]);

//   const handleAdd = () =>{
//       setCategories([...categories, 'prueba']);
//   }

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />
      <AddCategorie categories={setCategories}/>
      <ol>
        {categories.map((categorie) => {
          return <GifGrid key={categorie} categorie={categorie}/>;
        })}
      </ol>
    </>
  );
};

export default GifExpertApp;
