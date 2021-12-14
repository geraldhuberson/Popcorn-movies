const fila = document.querySelector('.contenedor-carousel');
const films = document.querySelectorAll('.films');

const flechaIzquierda = document.getElementById('flecha-izq');
const flechaDerecha = document.getElementById('flecha-der');

// Flecha der //
flechaDerecha.addEventListener('click', ()  => {
    fila.scrollLeft += fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .active');
    if(indicadorActivo.nextSibling){
        indicadorActivo.nextSibling.classList.add('active');
        indicadorActivo.classList.remove('active');
    }
});

// Flecha izq //
flechaIzquierda.addEventListener('click', ()  => {
    fila.scrollLeft -= fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .active');
    if(indicadorActivo.previousSibling){
        indicadorActivo.previousSibling.classList.add('active');
        indicadorActivo.classList.remove('active');
    }
});

// Paginacion //
const numeroPaginas = Math.ceil(films.length / 5); 
for(let i = 0; i < numeroPaginas; i++){
    const indicador = document.createElement('button');

    if(i === 0){
        indicador.classList.add('active');
    }

    document.querySelector('.indicadores').appendChild(indicador);
    indicador.addEventListener('click', (e) => {
        fila.scrollLeft = i * fila.offsetWidth;

    document.querySelector('indicadores .active').classList.remove('active',
        e.target.classList.add('active'));
    });

}

// Hover 
films.forEach((film) =>{
    film.addEventListener('mouseenter', (e) =>{
        const elemento = e.currentTarget;
        setTimeout(()  => {
            films.forEach(film => film.classList.remove('.hover'));
            elemento.classList.add('hover');
        }, 300);
    });
});

fila.addEventListener('mouseleave', () => {
    films.forEach(film => film.classList.remove('.hover'));
})
