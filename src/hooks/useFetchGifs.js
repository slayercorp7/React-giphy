import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifts";

export const useFetchGifs = (categorie) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    setTimeout(() => {
      getGifs(categorie).then((imgs) =>
        setState({
          data: imgs,
          loading: false,
        })
      );
    }, 3000);
  }, [categorie]);

  return state;
};
