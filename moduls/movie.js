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
        let res = await this.ReqestToServer(METHOD, this.URL, {movie});
        if(res === "Successfully"){
            viewRestart();
        }
    }

    async deleteFilm(id){
        const METHOD = "DELETE";
        let res = await this.ReqestToServer(METHOD, this.URL, {"id":id}); 
        if(res === "Successfully"){
            viewRestart();
        }
    }

    async editFilm(id, options){
        const METHOD = "PUT";
        let res = await this.ReqestToServer(METHOD, this.URL, {"id":id, options});
        if(res === "Successfully"){
            viewRestart();
        }
    }

    async getByOptions(options){
        const SEARCH = "/getByOptions";
        const METHOD = "POST";
        this.list = JSON.parse ( await this.ReqestToServer(METHOD, this.URL + SEARCH, {"options":{options}}) );
    }
}