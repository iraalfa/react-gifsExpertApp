
 export const getGifts = async(category) => {
     /* encodeURI = para quitar los espacios */
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=rg2K9YervftsIwlY3u2LpPTTLbr5htFO`
    const response = await fetch(url) // llamada a la url
    const {data} = await response.json() // extrayendo el parametro data de la respuesta, ese parametro contiene todo la info de los gifts

    const gifts = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })

    return gifts
}