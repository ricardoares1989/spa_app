const API = 'https://rickandmortyapi.com/api/character/'

const getData = async (id) => {
//    Si la funcion no recibe un id va a traer la api, si si va a hacer render.
    const apiUrl = id ? `${API}${id}` : API;
    // Vamos a hacer el llamado al fetch.
    try {
        const response = await fetch(apiUrl);
        return await response.json();
    } catch (error) {
        console.log('Fetch Error', error);
    }
};


export default getData;