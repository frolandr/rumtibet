/*========================================================================*/
/* Проверка поддержки WEBP, добавление класса webp или no-webp для HTML   */
/*========================================================================*/
export function isWebP() {
    function testWebP(callback) {                                              //проверка поддержки WEBP
        let webP = new Image();                                                //
        webP.onload = webP.onerror = function () {                             //
            callback(webP.height == 2);                                        //
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    testWebP(function (support) {                                              //добавление класса webp или no-webp для HTML
        let className = support === true ? 'webp' : 'no-webp';                 //
        document.documentElement.classList.add(className);                     //
    });
}
/*===========================================================================*/