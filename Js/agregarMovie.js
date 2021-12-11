function saveMovie(){
    const name=document.getElementById('movieName').value;
    const director=document.getElementById('movieDirector').value;
    const genre=document.getElementById('movieGenre').value;
    const category=document.getElementById('movieCategory').value;
    const age=document.getElementById('movieAge').value;
    const destacada=document.getElementById('isFeatured').checked;
    const publicada=document.getElementById('isPublished').checked;
    let movies= JSON.parse(localStorage.getItem('movies'))
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