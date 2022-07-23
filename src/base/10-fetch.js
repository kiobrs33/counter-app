const apiKey = 'ClxqkR7tvIhb1CbNDv8sIRShv0FmHduz';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);


//Promesas anidadas para RESP.JSON que tiene una promesa aparte
peticion
    .then(resp => resp.json() )
    .then( ({ data }) => {
        const {url} = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
    .catch(console.warn);