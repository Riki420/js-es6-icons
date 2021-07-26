
const renderIcons = (icons, targetElement) => {
   //*  GIRO NELL'ARRAY DI OGGETTI PER CREARE IL TEMPLATE
//creo una stringa vuota
let iconsTemplate = '';

// giro nell'array per crearne il template
icons.forEach((icon, index) =>{
    //creo una stringa vuota
    let hasOffSet = '';
    if(index == 0 || index % 5 == 0){       //quando l'index è = a 0 aggiunge un offset
    hasOffSet = 'offset-md-1';
    }
    iconsTemplate += `
    <div class="col col-sm-4 col-md-2 text-center ${hasOffSet}">
        <div class="card">
            <div class="card-body">
                <i class="${icon.family} ${icon.prefix}${icon.name} fa-x2"></i>
                <h6>${icon.name.toUpperCase()}</h6>
            </div>
        </div>
    </div>
    `
}); 
targetElement.innerHTML = iconsTemplate;

}

//*STAMPO IN PAGINA
const cardSection = document.querySelector('#icons .row');
renderIcons(icons, cardSection);