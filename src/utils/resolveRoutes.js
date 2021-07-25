const resolveRoutes = (route) => {
    if (route.length <= 3) {
        // 3 es el mayor numero que vamos a tener.
        return route === '/' ? route: '/:id';
    }
    return `/${route}`; // nos puede retornar about.
}

export default resolveRoutes;