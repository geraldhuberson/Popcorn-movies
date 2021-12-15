function saveMovie(){
    const name=document.getElementById('movieName1').value;
    const director=document.getElementById('movieDirector1').value;
    const genre=document.getElementById('movieGenre1').value;
    const category=document.getElementById('movieCategory1').value;
    const age=document.getElementById('movieAge1').value;
    const destacada=document.getElementById('isFeatured1').checked;
    const publicada=document.getElementById('isPublished1').checked;
    let movies= JSON.parse(localStorage.getItem('movies1'))
    if (movies==null){
        movies=[]
    }
    const newMovie={
        id:movies.length+1,
        nombre:name,
        director:director,
        genero:genre,
        categoria:category,
        año:age,
        destacada:destacada,
        publicada:publicada,
        
    }
 
    movies.push(newMovie)
    let moviesLS=JSON.stringify(movies)
    localStorage.setItem('movies',moviesLS)
    document.getElementById('add-movie-form').reset()
        
    }