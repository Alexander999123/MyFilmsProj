
window.pageRestart = main();

async function main(){
    let movieList = new MovieList("#films");
    let genresList = new GenresList("#genre");
    
    await Promise.all(
        [
            movieList.setFilmsList(), 
            genresList.setGenresList(),
        ]
    );

    let modalView = new ModalViwe(
        {
            "modalWindow":"modal__window-viwe-film",
            "inputImg":"srcImg",
            "inputNameFilm":"nameFilm",
            "description":"filmDiscription",
            "save":"movie-edit",
            "add":"button__add-film",
            "close":"movie-cansel",
            "delete":"move-delete",
            "imgContainer":"img-modal-film"
        }
    );
    
    let movieView = new MovieView(movieList.elementBase);

    movieView.setPages(movieList.list);

    movieView.showViewFilm(movieView.createViewFilms(movieView.pagesElements[0]))
    movieView.setListPagesMenu();

    window.modalView = modalView;
    window.movieView = movieView;
    window.movieList = movieList;
}
 
window.viewRestart = async function restart(){
    movieView.clear();
    movieView.removePageMenu();
    movieList.list = [];
    movieView.pagesElements = [];
    
    await movieList.setFilmsList();
    movieView.setPages(movieList.list);

    movieView.showViewFilm(movieView.createViewFilms(movieView.pagesElements[0]))
    movieView.setListPagesMenu();
}