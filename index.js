const data = [
  { id: "1", src: "./imagecreteria/hoeses.webp", text: "Будинки" },
  { id: "2", src: "./imagecreteria/studios.webp", text: "Студії" },
  { id: "3", src: "./imagecreteria/apartament.webp", text: "Квартири" },
  { id: "4", src: "./imagecreteria/rooms.webp", text: "Кімнати" },
];
const listEl = document.querySelector(".criteria-list");
const modalEl = document.querySelector(".background");
const modalInnerEl = document.querySelector(".modal-content");
const closeModalbtn = document.querySelector(".close-btn");
listEl.addEventListener("click", (event) => {
  if (event.target === event.currentTarget) {
    return;
  }
  const liEl = event.target.closest(".criteria-list-item");
  modalEl.classList.remove("is-hidden");
  window.addEventListener("keydown", pressEscape);
  const idx = liEl.dataset.id;
  const dataCard = data.find((elem) => {
    return elem.id === idx;
  });

  modalInnerEl.innerHTML = ` 
    <img class="modal-img" src="${dataCard.src}" alt="${dataCard.text}">
    <p class="modal-text">${dataCard.text}</p>`;
});


closeModalbtn.addEventListener("click", (event) => {
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
    modalEl.classList.add("is-hidden");
    window.removeEventListener("keydown", pressEscape);
  }
}
const exampldata = [
  { id: "1", src: "./image/01.webp", text: "Nantes <br>10 753 готелі" },
  { id: "2", src: "./image/02.webp", text: "Montpellier <br>11 386 готелів" },
  { id: "3", src: "./image/03.webp", text: "Paris <br>12 278 готелів" },
  { id: "4", src: "./image/04.webp", text: "Venezia <br>14 120 готелів" },
  { id: "5", src: "./image/05.webp", text: "Firenze <br>7 988 готелі" },
  { id: "6", src: "./image/06.webp", text: "Roma<br>12 809 готелів" },
  { id: "7", src: "./image/07.webp", text: "Selvia<br>8 984готелів" },
  { id: "8", src: "./image/08.webp", text: "Madrit<br>15 325 готелів" },
  { id: "9", src: "./image/09.webp", text: "Mallorca<br>9 825 готелів" },
];
const listElem = document.querySelectorAll(".tour-list");
const examplmodalEl = document.querySelector(".section4-background");
const examplcloseModalbtn = document.querySelector(".section4-close-btn");
const examplInnerEl = document.querySelector(".section4-modal-content");

listElem[0].addEventListener("click", handleCliCard);
listElem[1].addEventListener("click", handleCliCard);
listElem[2].addEventListener("click", handleCliCard);

function handleCliCard(event) {
  if (event.target === event.currentTarget) {
    return;
  }
  const examplliEl = event.target.closest(".tour-list-item");
  examplmodalEl.classList.remove("is-hidden");
  window.addEventListener("keydown", pressEscapeCards);
  console.log(examplliEl);
  const examplidx = examplliEl.dataset.id;
  const exampldataCard = exampldata.find((elem) => {
    return elem.id === examplidx;
  });

  examplInnerEl.innerHTML = `  
        <img class="section4-modal-img" src="${exampldataCard.src}" alt="${exampldataCard.text}"> 
        <p class="section4-modal-text">${exampldataCard.text}</p>`;
}


examplcloseModalbtn.addEventListener("click", (event) => {
  event.stopPropagation();
  examplmodalEl.classList.add("is-hidden");

  window.removeEventListener("keydown", pressEscapeCards);
});

examplmodalEl.addEventListener("click", (event) => {
  if (event.target === event.currentTarget) {
    examplmodalEl.classList.add("is-hidden");

    window.removeEventListener("keydown", pressEscapeCards);
  }
});

function pressEscapeCards(event) {
  console.log(event);
  if (event.code === "Escape") {
    examplmodalEl.classList.add("is-hidden");
    window.removeEventListener("keydown", pressEscapeCards);
  }
}
