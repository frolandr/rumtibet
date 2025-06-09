/*===========================================================================*/
// Плавная прокрутка при клике на пункте меню к якорю                        */
/*===========================================================================*/
const anchors = document.querySelectorAll('a.menu__link');                     //получаем все ссылки в меню
const animationTime = 300;                                                     //время анимации
const framesCount = 20;                                                        //количество кадров

for (let i = 0; i < anchors.length; i++) {                                     //создаем цикл для перебора
    anchors[i].addEventListener('click', function(e) {                         //вешаем обработчик события
        e.preventDefault();                                                    //убираем стандартное поведение

        let coordY = document.querySelector(anchors[i].getAttribute('href')).getBoundingClientRect().top + window.pageYOffset; //для каждой ссылки берем соответствующий ему элемент и определяем его координату Y

        let scroller = setInterval(function() {                                //запускаем интервал
            let scrollBy = coordY / framesCount;                               //сколько скроллить за 1 такт
      
            if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) { //если к-во пикселей для скролла за 1 такт больше расстояния до элемента и дно страницы не достигнуто
                window.scrollBy(0, scrollBy);                                  //то скроллим на к-во пикселей, которое соответствует одному такту
            }
            else {
                window.scrollTo(0, coordY);                                    //иначе добираемся до элемента
                clearInterval(scroller);                                       //отменяем, выходим из интервала
            }
        }, animationTime / framesCount);                                       // время интервала равняется частному от времени анимации и к-ва кадров
    });
};
/*---------------------------------------------------------------------------*/