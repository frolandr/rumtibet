/*================================== МЕНЮ ===================================*/


/* Получаем ссылки ----------------------------------------------------------*/
const overlay = document.querySelector('.overlay');                            //оверлей
const burgerInput = document.querySelector(".burger__input");                  //input бургер
const menu = document.querySelector('.menu');                                  //меню
const menuItems = document.querySelectorAll('.menu__item');                    //все элементы меню
/*---------------------------------------------------------------------------*/


/* Клик по кнопке бургера (крестик) -----------------------------------------*/
burgerInput.addEventListener('click', function () {                            //слушаем click
    overlay.classList.toggle("active");                                        //на оверлей меняем класс .active
    //menu.classList.toggle("active");                                           //на кнопке тоже меняем класс .active
});
/*---------------------------------------------------------------------------*/


/* По клику устанавливаем класс current -------------------------------------*/
menuItems.forEach(item => {                                                    //перебираем все пункты меню
    item.addEventListener('click', function(event) {                           //вешаем на них обработчики "click"
        menuItems.forEach(item => {                                            //перебираем список и
            if (item.classList.contains('current')) {                          //если это был активный пункт меню, то
                item.classList.remove('current');                              //удаляем класс активного пункта
            }

            if (item.firstChild === event.target) {                            //получаем потомка и если по нему был клик, то
                item.classList.add('current');                                 //устанавливаем ему класс current

                if (burgerInput.checked) {                                     //если установлен .checked, то
                    burgerInput.checked = false;                               //сбрасывыаем его
                    overlay.classList.toggle("active");                        //на оверлей меняем класс .active
                }
            }
        });
    });
});
/*---------------------------------------------------------------------------*/


/* Если ширина экрана больше 767 пикс, то закрываем мобильное меню ----------*/
window.addEventListener('resize', () => {                                      //обработчик изменение размера
    if (window.innerWidth > 767) {
        if (overlay.classList.contains("active")) {                            //если на overlay установлен active, то
            burgerInput.checked = false;                                       //сбрасывыаем на input checked
            overlay.classList.remove("active");                                //на оверлей удаляем класс .active
            //menu.classList.remove("active");                                   //
        }
    }
});
/*---------------------------------------------------------------------------*/