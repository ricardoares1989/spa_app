import Header from "../templates/Header";
import Home from "../pages/Home";
import Character from "../pages/Character";
import Error404 from "../pages/Error404";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";


const routes = {
    '/': Home,
    '/:id': Character,
    '/404': Error404,
    '/contact': 'Contact'
};

const router = async () => {
    const header = null || document.getElementById('header');
    const content =  null || document.getElementById('content');
    header.innerHTML = await Header();
    // Obtenemos la seccion en la que estamos.
    // derivada del hash
    let route = await resolveRoutes(getHash());
    // Obtenemos el template que vamos a renderizar derivado de la ruta.
    let render = routes[route] ? routes[route] : Error404;

    content.innerHTML = await render();
};


export default router;