
main();

async function main(){
    let movieList = new MovieList("#films");
    let genresList = new GenresList("#genre");

    await Promise.all(
        [
            movieList.setFilmsList(), 
            genresList.setGenresList(),
        ]
    );

    let movieView = new MovieView(movieList.elementBase);
    window.movieView = movieView;

    movieView.setPages(movieList.list);

    console.log(movieView.pagesElements);

    movieView.showViewFilm(movieView.createViewFilms(movieView.pagesElements[0]))
    movieView.setListPagesMenu();
}
