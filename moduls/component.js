class Component {
    constructor(id){
        this.elementBase = document.querySelector(id);
    }
    
    ReqestToServer(method, url, body = null){
        return new Promise((resolve, reject)=>{
            let xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.addEventListener('load', ()=>{
                if(xhr.status === 200){
                    resolve(xhr.response);
                }
                else{
                    reject("Error: Bad request");
                }
            })
            xhr.addEventListener('error', ()=>{
                reject("Error: ", xhr.status)
            })
            if(method.toLowerCase() !== "get" && body !== null){
                xhr.setRequestHeader("Content-type", "application/json")
                xhr.send( JSON.stringify(body) );
            }
            else{
                xhr.send();
            }
        })
    }
}