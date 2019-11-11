class MovieView {
    constructor(element){
        this.element = element;

        this.classView = {
            "containerMainFilms": "container__main-films",
            "containerFilm": "container__film",
            "containerFilmEfect": "container__film-efect",
            "containerInfoFilm":"container__info-film",
            "containerFilmDiscription": "container__film-discription",
            "containerFilmName": "container__film-name",
            "containerMenuList": "container__menu-list",
            "menuList": "menu-list",
            "menuItem": "menu-item",
            "menuItemActive": "menu-item__active",
            "filmName": "film-name",
            "filmDiscription": "film-dicription",
            "containerFilmImg": "container__film-img",
            "img": "img-film"
        }
        
        this.countElementsInPage = 5;
        this.pagesElements = [];
    }

    createViewFilms(movieList){ //return fragment for show elements
        let fragmentElemenst = document.createDocumentFragment('div');

        movieList.forEach(movie => {
            //create elements
            let containerFilm = document.createElement('div'),
                containerFilmImg = document.createElement('div'),
                containerFilmName = document.createElement('div'),
                containerInfoFilm = document.createElement('div'),  
                containerFilmDiscription = document.createElement('div'),
                spanFilmDiscription = document.createElement('span'),
                spanFilmName = document.createElement('span'),
                imgFilm = document.createElement('img')

            //add class 
            containerFilm.classList.add(this.classView.containerFilm);
            containerFilmImg.classList.add(this.classView.containerFilmImg);
            containerFilmName.classList.add(this.classView.containerFilmName);
            containerInfoFilm.classList.add(this.classView.containerInfoFilm)
            containerFilmDiscription.classList.add(this.classView.containerFilmDiscription);
            spanFilmDiscription.classList.add(this.classView.filmDiscription);
            spanFilmName.classList.add(this.classView.filmName);
            imgFilm.classList.add(this.classView.img);

            //add all info about film in element
            imgFilm.src = movie.srcImage;
            spanFilmName.textContent = movie.Title;
            spanFilmDiscription.innerHTML = movie.Description
        
            //add atributes
            containerFilm.setAttribute("data-id", movie.ID)
            containerFilm.addEventListener('click', this.editViewFilm);

            //append elments
            containerFilmImg.append(imgFilm);
            containerFilmName.append(spanFilmName);
            containerFilmDiscription.append(spanFilmDiscription);

            containerInfoFilm.append(containerFilmName);
            containerInfoFilm.append(containerFilmDiscription);

            containerFilm.append(containerFilmImg);
            containerFilm.append(containerInfoFilm);
            fragmentElemenst.append(containerFilm);
        });
        
        return fragmentElemenst;
    }

    setPages(movieList){
        for (let i = 0; i < movieList.length; ) {
            let page = [];
            for (let j = 0; j < this.countElementsInPage; j++) {
                page.push(movieList[i]);
                i++;
                if(typeof movieList[i] === "undefined")
                    break;
            }
            this.pagesElements.push(page);
        }
    }   
    
    setListPagesMenu(){ //menu list (pages switch)
        if(this.pagesElements.length > 0){
            let containerMenuList = document.createElement('div');
            let menuList = document.createElement('ul');
            
            containerMenuList.classList.add(this.classView.containerMenuList);
            menuList.classList.add(this.classView.menuList);
            menuList.addEventListener('click', this.switchStatusActive);
    
            for (let i = 0; i < this.pagesElements.length; i++) {
                let itemMenu = document.createElement('li');
                itemMenu.setAttribute("data-id", i);
                itemMenu.classList.add( this.classView.menuItem );
                itemMenu.textContent = i + 1;
                if(i === 0)
                    itemMenu.classList.add( this.classView.menuItemActive );

                menuList.append(itemMenu);
            }
            this.element.prepend(containerMenuList);
            containerMenuList.append(menuList);
        }
    }

    removePageMenu(){
        document.querySelector(`.${this.classView.containerMenuList}`).remove();
    }
    
    clear(){
        let elFilms = this.element.querySelectorAll(`.${this.classView.containerFilm}`);
        elFilms.forEach(el => el.remove());
    }
    
    delteViewFilm(idFilm){
        //this.element.removeChild(id);
    }

    editViewFilm(){
        let movie = movieList.list.find(x=>x.ID === this.getAttribute("data-id"));
        modalView.buttonSave.textContent = "edit";
        modalView.buttonDelete.style.display = "block";
        modalView.setInformation(movie);
        modalView.toggleElement();
    }   

    showViewFilm(fragment){
        this.element.append(fragment);
    }

    switchStatusActive(event){
        let element = event.target;
        if(element.tagName.toLowerCase() === "li"){
            let idPage = Number(element.getAttribute('data-id'))
            for(let i = 0; i < this.children.length; i++){
                this.children[i].classList.remove('menu-item__active');
            }        
            element.classList.add('menu-item__active');
    
            movieView.clear();
            movieView.showViewFilm(movieView.createViewFilms(movieView.pagesElements[idPage]));
        }
    }   
}