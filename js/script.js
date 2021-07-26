
const renderIcons = (icons, targetElement) => {
   //*  GIRO NELL'ARRAY DI OGGETTI PER CREARE IL TEMPLATE
//creo una stringa vuota
let iconsTemplate = '';
// giro nell'array per crearne il template
icons.forEach((icon) =>{
    iconsTemplate += `
    <div class="col col-sm-4 col-md-2 text-center">
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





const cardSection = document.querySelector('#icons .row');
renderIcons(icons, cardSection);