

export const getGif = async(category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI (category)}&limit=5&api_key=4yP59quFLVT42Ny4Ly7X0SlBoBhy89Xa`;
    const resp = await fetch(url);
    const {data} = await resp.json();

const gifs = data.map(img => {
    return {
        id: img.id,
        image:img.images,
        title:img.title,
        url: img.images?.downsized_medium.url
        }
    })
    return gifs;
};