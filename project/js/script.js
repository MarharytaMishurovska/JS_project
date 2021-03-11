"use strict";

document.addEventListener('DOMContentLoaded', () => {
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

    const adv = document.querySelectorAll(".promo__adv img"),
          background = document.querySelector(".promo__bg"),
          addForm = document.querySelector("form.add"),
          addingInput = addForm.querySelector(".adding__input"),
          btnEvent = document.querySelector('button'),
        //   inputCheckbox = document.getElementsByTagName("input")[2];
          inputCheckbox = addForm.querySelector("[type='checkbox']");


        addForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const newFilm = addingInput.value;
            const favorite = inputCheckbox.checked;

            movieDB.movies.push(newFilm);
        });
        // btnEvent.addEventListener('click', (event) => {
        //     event.preventDefault();
        //     if (addingInput.value != "") {
        //         let input = checkLenght(addingInput.value);
        //         movieDB.movies.push(input);
        //         addingInput.value = "";
        //         renderList();
        //     }
        // });

    function checkLenght(word) {
        if (word.length >= 21) {
            word = word.slice(0, 21);
            word += "...";
        }
        return word;
    }



    function renderList() {
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




    inputCheckbox.addEventListener('change', function () {
        if (this.checked) {
            console.log("Checkbox is checked..");
        } else {
            console.log("Checkbox is not checked..");
        }
    });
    inputCheckbox.id = 'checkbox';



    adv.forEach(item => {
        item.remove();
    });

    document.querySelector(".promo__genre").textContent = "ДРАМА";


    background.style.backgroundImage = "url(img/bg.jpg)";








});