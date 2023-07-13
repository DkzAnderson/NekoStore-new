
// Funciones del inicio

function Home(){
    interfazHome.style.display = 'grid'
    interfazDescripcion.style.display = 'none'
    interfazVideoPlayer.style.display = 'none'
    menuInterfaz.style.display = 'none'
    interfazFilterCategories.style.display = 'none'

    videoMedia.src = ''
}

function selectSerie(number){

    serieSelected = seriesContainer[number]

        // dibuja los botones correspondientes según temporadas
        count = serieSelected.caps.length
        i= 0
        seasonContainer.forEach(element => {
            if(count != i){
                element.style.display = 'flex'
                i++
            } else {
                element.style.display = 'none'
            }
    
        });
        i= 0

        setCaps(serieSelected);
        serieSelected.setDescription();
        interfazHome.style.display = 'none'
        interfazDescripcion.style.display = 'grid'

}

let visible = false

function headerCategory(){
    
    if(visible == false){
        headerButtonCategories.style.display = 'flex'
        visible = true
    } else {
        headerButtonCategories.style.display = 'none'
        visible = false
    }

}

// Funciones del menu
let latestPage

function showMenu(){
    // tomamos la pagina anterior 
    if (interfazHome.style.display == 'grid')latestPage = document.getElementById('home')
    if(interfazVideoPlayer.style.display == 'flex')latestPage = interfazVideoPlayer
    if(interfazDescripcion.style.display == 'grid')latestPage = interfazDescripcion
    if(interfazFilterCategories.style.display == 'grid') latestPage = interfazFilterCategories
    // volvemos a la pagina anterior
    if(menuInterfaz.style.display == 'flex'){
        latestPage.style.display = 'grid'
        menuInterfaz.style.display = 'none'
    } else{
    // entramos al menu
        interfazHome.style.display = 'none'
        interfazVideoPlayer.style.display = 'none'  // revisar reproducción
        interfazDescripcion.style.display = 'none'
        interfazFilterCategories.style.display = 'none'
        menuInterfaz.style.display = 'flex'
    }

}

function showMenuCategories(){
    if(menuButtonCategoriesGlide.style.display == 'flex'){
        categoriesArrowDown.style.display = 'flex'
        categoriesArrowDown.style.display = 'none'
        menuButtonCategoriesGlide.style.display = 'none'
    } else {
        categoriesArrowDown.style.display = 'flex'
        categoriesArrowDown.style.display = 'none'
        menuButtonCategoriesGlide.style.display = 'flex'
    }
}

function searchCategory(categorie){
    videoMedia.src = ''
    let a = 0
    categoriesArticlesContainer.forEach(element => {
        element.container.style.display = 'none'
        element.img.style.display = 'none'
        element.txt.style.display = 'none'
        a++
    });


    let serieCount = 0
                // buscar en el contenedor de series la categoria elegida
            seriesContainer.forEach(element => {
                if(element.categorie[0] == categorie || 
                    element.categorie[1] == categorie || 
                    element.categorie[2] == categorie){
                    categoriesArticlesContainer[serieCount].serie = element
                    categoriesArticlesContainer[serieCount].setDescription()
                    categoriesArticlesContainer[serieCount].container.style.display = 'grid'
                    categoriesArticlesContainer[serieCount].img.style.display = 'flex'
                    categoriesArticlesContainer[serieCount].txt.style.display = 'flex'
                    serieCount++
                } else {
                    // no mostrar los articulso vacios
                    categoriesArticlesContainer[serieCount].container.style.display = 'none'
                    categoriesArticlesContainer[serieCount].serie = ""
                }
            })
               // evaluar si hay algun resultado en los contenedores, si no lo hay mostrara
               // al usuario el mensaje de no hay resultados.
            if(categoriesArticlesContainer[0].container.style.display   == 'none' &&
                categoriesArticlesContainer[1].container.style.display  == 'none' &&
                categoriesArticlesContainer[2].container.style.display  == 'none' &&
                categoriesArticlesContainer[3].container.style.display  == 'none' &&
                categoriesArticlesContainer[4].container.style.display  == 'none' &&
                categoriesArticlesContainer[5].container.style.display  == 'none' &&
                categoriesArticlesContainer[6].container.style.display  == 'none' &&
                categoriesArticlesContainer[7].container.style.display  == 'none' &&
                categoriesArticlesContainer[8].container.style.display  == 'none' &&
                categoriesArticlesContainer[9].container.style.display  == 'none'){
                    categorieSearchType.innerText = "Lo sentimos, no hay resultados para esta categoría."
            } else {
                categorieSearchType.innerText = `Categoría : ${categorie}`
            }

             // cerrar el menu y mostrar los resultados
            interfazHome.style.display = 'none'
            interfazDescripcion.style.display = 'none'
            menuInterfaz.style.display = 'none'
            interfazFilterCategories.style.display = 'grid'
}

function selectCategorie(categorie){
    switch (categorie) {
        case dictionary.action:
            searchCategory(categorie);
            break;

        case dictionary.adventure:
            searchCategory(categorie);
            break;
        
        case dictionary.fantasy:
            searchCategory(categorie);
            break;
        
        case dictionary.isekai:
            searchCategory(categorie);
            break;

        case dictionary.shonen:
            searchCategory(categorie);
            break;

        case dictionary.supernatural:
            searchCategory(categorie);
            break;

        default:
            break;
    }


}

// Funciones de las descripciones

function showCap(cap){
    /*
        se busca en la serie seleccionada el capitulo
        y se trae directamente del arreglo por su index.
        se agregan a los elementos:
            titulo, descripcion y el src del video
    */
    capSelected = cap
    capSelected--
    switch (seasonSelected) {
        case 0:
            videoTitle.innerText = serieSelected.name
            videoDescription.innerText = `${serieSelected.name} T1: episodio ${capSelected+1} `
            videoMedia.src = serieSelected.caps[0][capSelected]
            break;
        case 1:
            videoTitle.innerText = serieSelected.name
            videoDescription.innerText =  `${serieSelected.name} T2: episodio ${capSelected+1} `
            videoMedia.src = serieSelected.caps[1][capSelected]
            break;
        case 2:
            videoTitle.innerText = serieSelected.name
            videoDescription.innerText =  `${serieSelected.name} T3: episodio ${capSelected+1} `
            videoMedia.src = serieSelected.caps[2][capSelected]
            break;
        case 3:
            videoTitle.innerText = serieSelected.name
            videoDescription.innerText =  `${serieSelected.name} T4: episodio ${capSelected+1} `
            videoMedia.src = serieSelected.caps[3][capSelected]
            break;
        case 4:
            videoTitle.innerText = serieSelected.name
            videoDescription.innerText =  `${serieSelected.name} OVA: episodio ${capSelected+1} `
            videoMedia.src = serieSelected.caps[4][capSelected]
            break;
        default:
            break;
    }
    
    interfazDescripcion.style.display = 'none'
    interfazVideoPlayer.style.display = 'flex'
}

function setCaps(){
    /*
    agrega la descripción de los capítulos según la temporada y 
    la cantidad de capítulos de la temporada.
    también hace desaparecer el resto de contenedores
    si no tienen una descripción.

    */
    count= 0
    switch (seasonSelected) {
        case 0:
            descriptionCaps.forEach(element => {
                // agregar textos al contenedor de capitulos
                if(count <= serieSelected.caps[0].length){
                    element.style.display = 'flex'
                    element.innerText = `Episodio ${count+1}`
                    count++
                }else{
                    element.innerHTML = ""
                    element.style.display = 'none'
                }
            });
            break;
        case 1:
            descriptionCaps.forEach(element => {
                if(count <= serieSelected.caps[1].length){
                    element.style.display = 'flex'
                    element.innerText = `Episodio ${count+1}`
                    count++
                }else{
                    element.style.display = 'none'
                }
            });
            break;
        case 2:
            descriptionCaps.forEach(element => {
                if(count <= serieSelected.caps[2].length){
                    element.style.display = 'flex'
                    element.innerText = `Episodio ${count+1}`
                    count++
                }else{
                    element.style.display = 'none'
                }
            });
            break;
        case 3 :
            descriptionCaps.forEach(element => {
                if(count <= serieSelected.caps[3].length){
                    element.style.display = 'flex'
                    element.innerText = `Episodio ${count+1}`
                    count++
                }else{
                    element.style.display = 'none'
                }
            });
            break;
        case 4 :
                descriptionCaps.forEach(element => {
                    if(count <= serieSelected.caps[4].length){
                        element.style.display = 'flex'
                        element.innerText = `Episodio ${count+1}`
                        count++
                    }else{
                        element.style.display = 'none'
                    }
                });
                break;
        default:
            descriptionCaps.forEach(element => {
                // se carga la primera temporada por defecto
                if(count <= serieSelected.caps[0].length){
                    element.style.display = 'flex'
                    element.innerText = `Episodio ${count+1}`
                    count++
                }else{
                    element.style.display = 'none'
                }
            });
            break;
    }
    // elimina le ultimo elemento dibujado(el cual deberia estar vacio)
        count--
        descriptionCaps[count].style.display = 'none'
        for (count ; count < descriptionCaps.length; count++) {
            descriptionCaps[count].style.display = 'none'
        }
}

function setSeason(season){

    seasonArrows.forEach(element => {
        element.style.display= 'none'
    });
    seasonArrows[season].style.display = 'flex'
    seasonSelected = season
    setCaps(serieSelected);

}

// Funciones del media Player

function videoPlayer(direction){
    capSelected
    if(direction == "next" && capSelected <= (serieSelected.caps[seasonSelected].length - 2)){
        capSelected = capSelected + 2
        showCap(capSelected);
    } else if (direction == "back" && capSelected >= 1){
        capSelected = capSelected--
        showCap(capSelected)
    }
}

// funciones de la interfaz de busqueda por categoría

function selectSerieCategory(item){
    let a = categoriesArticlesContainer[item].serie
    serieSelected = a

    count = serieSelected.caps.length
    i= 0
    seasonContainer.forEach(element => {
        if(count != i){
            element.style.display = 'flex'
            i++
        } else {
            element.style.display = 'none'
        }

    });
    i= 0

    setCaps(serieSelected);
    serieSelected.setDescription();
    interfazHome.style.display = 'none'
    interfazFilterCategories.style.display = 'none'
    interfazDescripcion.style.display = 'grid'

}


