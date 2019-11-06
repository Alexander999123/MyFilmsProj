class GenresList extends Component{
    constructor(id){
        super(id);

        this.list = [];
    }

    async setGenresList(){
        const URL = "http://localhost:3000/genres";
        const METHOD = "GET";
        this.list = JSON.parse( await this.ReqestToServer(METHOD, URL) ).list;
    }   
}