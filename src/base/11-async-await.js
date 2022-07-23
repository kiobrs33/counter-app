export const getImagen = async() => {
    try {
        const apiKey = 'ClxqkR7tvIhb1CbNDv8sIRShv0FmHduz';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();
        const { url } =  data.images.original;
        
        return url;

    } catch (error) {
        return 'No existe!';
    }
}