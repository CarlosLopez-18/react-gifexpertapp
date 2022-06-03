

export const getGifs = async (Category) => {
    const Url = `https://api.giphy.com/v1/gifs/search?api_key=HKx1THYh0Wit2h4ohTD9EKuBgxhjTEx8&q=${encodeURI(Category)}&limit=10`;
    const resp = await fetch(Url);
    const {data} = await resp.json();

    const Gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return Gifs;

}