

const data = [
    { id:"1", src: "./imagecreteria/hoeses.webp", text: "Будинки"},
    { id:"2", src: "./imagecreteria/studios.webp", text: "Студії"},
    { id:"3", src: "./imagecreteria/apartament.webp", text: "Квартири"},
    { id:"4", src: "./imagecreteria/rooms.webp", text: "Кімнати"},
];
const listEl = document.querySelector(".criteria-list");
const modalEl= document.querySelector(".background");
const modalInnerEl =document.querySelector(".modal-content");
const closeModalbtn = document.querySelector(".close-btn");
const openModalbtn = document.querySelector(".open-btn");



listEl.addEventListener("click", (event)=>{
if (event.target === event.currentTarget) {
    return;
}
 const liEl = event.target.closest(".criteria-list-item");
 modalEl.classList.remove("is-hidden");
 window.addEventListener("keydown", pressEscape);

 const idx =  liEl.dataset.id;
const dataCard = data.find((elem)=>{
    return elem.id === idx;
 });
 modalInnerEl.innerHTML = ` 

<img class="modal-img" src="${dataCard.src}" alt="${dataCard.text}">
<p class="modal-text">${dataCard.text}</p>`;


});


openModalbtn.addEventListener("click" , ()=>{
 modalEl.classList.remove("is-hidden");

 window.addEventListener("keydown", pressEscape);
});


closeModalbtn.addEventListener('click' , (event)=>{
    event.stopPropagation();
    modalEl.classList.add("is-hidden");

    window.removeEventListener("keydown", pressEscape);
});


modalEl.addEventListener("click", (event) => {

    if (event.target === event.currentTarget) {
         modalEl.classList.add("is-hidden");

         window.removeEventListener("keydown", pressEscape);
    }
    
});


function pressEscape(event) {
    if (event.code === "Escape") {
        modalEl.classList.add("is-hidden") 
        window.removeEventListener("keydown", pressEscape);
    }
   
};

