/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */
// Возьмите свой код из предыдущей практики
"use strict";

const movieDB = {
    movies: [
        "Логан",
        "Ла-ла лэнд",
        "Одержимость",
        "Лига справедливости",
        "Скотт Пилигрим против..."
    ]
};
movieDB.movies.sort();

const addingInput = document.querySelector(".adding__input"),
      btnEvent = document.querySelector('button');



btnEvent.addEventListener('click', (event) => {
    event.preventDefault();
    if (addingInput.value != "") {  
        let input = checkLenght(addingInput.value);
        movieDB.movies.push(input);
        addingInput.value = "";   
        renderList();          
    }
});

function checkLenght (word) {
    if (word.length >= 21) {
        word = word.slice(0, 21);
        word += "...";
    }
    return word;
}



function renderList () {
    let listElement = document.querySelectorAll(".promo__interactive-item");  
    listElement.forEach(i => { 
        i.remove();
    }); 
    for (let i = 0; i < movieDB.movies.length; i++) {
        let listItem = document.createElement('li');
        listItem.classList.add("promo__interactive-item");
        listItem.textContent = `${i + 1}. ${movieDB.movies[i]}`;
       
        let deletebtn = document.createElement("div");
        deletebtn.classList.add("delete");
        listItem.appendChild(deletebtn);
        document.querySelector('.promo__interactive-list').appendChild(listItem);
        let buttonDelete = document.querySelectorAll(".delete");
        buttonDelete.forEach(i => {
            i.addEventListener('click', (e) => {
            e.target.parentNode.parentNode.removeChild(i.parentNode); 
            console.log(movieDB.movies);      
        });
});

    }
}
renderList();


// let buttonDelete = document.querySelectorAll(".delete");
// buttonDelete.forEach(i => {
//     i.addEventListener('click', (e) => {
//         e.target.parentNode.parentNode.removeChild(i.parentNode); 
//         console.log(movieDB.movies);      
//     });
// });

const checkboxEvent = document.querySelector('checkbox');
checkboxEvent.addEventListener('change', function()  {
    if (this.checked) {
        console.log("Checkbox is checked..");
    } else {
        console.log("Checkbox is not checked..");
    }
});



const adv = document.querySelectorAll(".promo__adv img");
adv.forEach(item => {
    item.remove();
});

document.querySelector(".promo__genre").textContent = "ДРАМА";


const bg = document.querySelector(".promo__bg");
bg.style.backgroundImage = "url(img/bg.jpg)";











