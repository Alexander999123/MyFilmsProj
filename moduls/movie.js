class MovieList extends Component {
    constructor(id){
        super(id);

        this.list = [];
        this.URL = "http://localhost:3000/films";
    };

    async setFilmsList(){
        const METHOD = "GET";
        this.list = JSON.parse( await this.ReqestToServer(METHOD, this.URL) ).list;
    }

    async addFilm(movie){
        const METHOD = "POST";
        this.ReqestToServer(METHOD, this.URL, {movie});
        this.setFilmsList();
    }

    async deleteFilm(id){
        const METHOD = "DELETE";
        this.ReqestToServer(METHOD, this.URL, {"id":id}); 
    }

    async editFilm(id, options){
        const METHOD = "PUT";
        this.ReqestToServer(METHOD, this.URL, {"id":id, options:{options}});
    }

    async getByOptions(options){
        const SEARCH = "/getByOptions";
        const METHOD = "POST";
        this.list = JSON.parse ( await this.ReqestToServer(METHOD, this.URL + SEARCH, {"options":{options}}) );
    }
}