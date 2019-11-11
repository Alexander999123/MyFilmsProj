class ModalViwe{
    constructor(otionsElementId){
        this.inputSrcImg = document.querySelector(`#${otionsElementId.inputImg}`);
        this.inputNameFilm = document.querySelector(`#${otionsElementId.inputNameFilm}`);
        this.inputDescription = document.querySelector(`#${otionsElementId.description}`);
        this.element = document.querySelector(`.${otionsElementId.modalWindow}`);
        this.buttonSave = document.querySelector(`.${otionsElementId.save}`);
        this.buttonClose = document.querySelector(`.${otionsElementId.close}`);
        this.buttonAdd = document.querySelector(`.${otionsElementId.add}`);
        this.buttonDelete = document.querySelector(`.${otionsElementId.delete}`);
        this.imgContainer = document.querySelector(`.${otionsElementId.imgContainer}`)

        //event
        this.buttonSave.addEventListener('click', this.save);
        this.buttonClose.addEventListener('click', this.close);
        this.buttonDelete.addEventListener('click', this.delete);
        this.buttonAdd.addEventListener('click', this.addFilm);
        this.inputSrcImg.addEventListener('input', this.srcImgChange);
        this.choiceFilmId = "";
    }

    toggleElement(){
        let style = getComputedStyle(this.element);

        if(style.display === 'none')
            this.element.style.display = 'flex';
        else{
            this.element.style.display = 'none';
            this.clearInformation()
        }
    }

    setInformation(movie){
        this.choiceFilmId = movie.ID;
        this.imgContainer.setAttribute('src', movie.srcImage);
        this.inputNameFilm.value = movie.Title;
        this.inputSrcImg.value = movie.srcImage;
        this.inputDescription.textContent = movie.Description;     
    }

    save(element){
        let options = {
            "Description": modalView.inputDescription.value,
            "srcImage": modalView.inputSrcImg.value,
            "Title": modalView.inputNameFilm.value
        }

        if(element.target.textContent === "edit")
            movieList.editFilm(modalView.choiceFilmId, options);
        else
            movieList.addFilm(options);

        modalView.toggleElement();
    }

    close(){
        modalView.toggleElement();
    }

    delete(){
        movieList.deleteFilm(modalView.choiceFilmId);
        modalView.toggleElement();
    }

    clearInformation(){
        this.choiceFilmId = "";
        this.imgContainer.setAttribute('src', "");
        this.inputNameFilm.value = "";
        this.inputSrcImg.value = "";
        this.inputDescription.textContent = "";
    }

    srcImgChange(){
        modalView.imgContainer.setAttribute('src', this.value);
        console.log(this);
    }

    addFilm(){
        modalView.toggleElement();
        modalView.buttonSave.textContent = "add";
        modalView.buttonDelete.style.display = "none"
    }
}