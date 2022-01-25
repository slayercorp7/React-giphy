
export const getGifs = async (categorie) => {
    const URI =
      `https://api.giphy.com/v1/gifs/search?api_key=PAq1tqg7bJZrMh487TFG8xgzQoHvn2bQ&q=${encodeURI(categorie)}&limit=10`;

    const res = await fetch(URI);
    const { data } = await res.json();
    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title ? img.title : "sin titulo",
        url: img.images?.downsized_medium.url,
      };
    });
    return(gifs);
  };