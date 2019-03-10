//поиск
document.addEventListener('DOMContentLoaded', function () {
    let searchInput = document.querySelector('.search_input'),
        searchForm = document.querySelector('.search_form'),
        submitBtn = document.querySelector('.search_submit');

    searchInput.addEventListener('focus', function () {
        searchForm.classList.add('search_form_focus');
        submitBtn.classList.add('search_submit_focus');
    });

    searchInput.addEventListener('blur', function () {
        setTimeout(function () {
            searchForm.classList.remove('search_form_focus');
            submitBtn.classList.remove('search_submit_focus');
        }, 1500);
    });
});
//стили svg
window.onload = function () {
    let userSvg = document.querySelectorAll('.action_signin_object'), //svg
        compareSvg = document.querySelectorAll('.action_compare_object'),
        cartSvg = document.querySelectorAll('.action_cart_object'),
        plusSvg = document.querySelector('.action_plus_object'),
        logoSvg= document.querySelector('.logo_object'),
        footerLogoSvg = document.querySelector('.footer_logo_object'),
        footerSocialSvg = document.querySelectorAll('.social_object'),
        singBtn = document.querySelector('.action_signin_link'),  //links
        footerBtn = document.querySelectorAll('.footer_nav_link'),
        footerSocial = document.querySelectorAll('.social_link'),
        catalog = document.querySelector('.catalog_link'),
        links = document.querySelectorAll('.list_link'),
        logoLink = document.querySelector('.logo_link'),
        footerLogoLink = document.querySelector('.footer_logo_link');

    //цвета для футера
    userSvg[1].contentDocument.getElementById('user').setAttribute('fill','#ffe27f');
    compareSvg[1].contentDocument.getElementById('compare').setAttribute('fill','#ffe27f');
    cartSvg[1].contentDocument.getElementById('cart').setAttribute('fill','#ffe27f');
    footerLogoSvg.contentDocument.getElementById('logo').setAttribute('fill','#ffe27f');
    footerSocialSvg[0].contentDocument.getElementById('facebook').setAttribute('fill','#7c7c7c');
    footerSocialSvg[1].contentDocument.getElementById('instagram').setAttribute('fill','#7c7c7c');
    footerSocialSvg[2].contentDocument.getElementById('twitter').setAttribute('fill','#7c7c7c');

    //наборы цветов
    const colorsHeader = new SetColors('#000000', '#7b6e46', '#bda762' ),
        colorsHeaderLogo = new SetColors('#000000', '#444444', '#666666'),
        colorsFooterLinks = new SetColors('#ffe27f', '#ffc700', '#8d7534'),
        colorsFooterSocial = new SetColors('#7c7c7c', '#b4b4b4', '#575757');

    //кнструктор цвета
    function SetColors(one, two, tree) {
        this.color1 = one;
        this.color2 = two;
        this.color3 = tree;
    }

    //функция для смены цвета svg
    function changeSVG (item,id,color) {
        item.contentDocument.getElementById(id).setAttribute('fill',color)
    }

    //обработчик
    function addListener (element, object, id, colors) {
        element.addEventListener('mouseover', function () {
            changeSVG(object, id, colors.color2);
        });
        element.addEventListener('mouseout', function () {
            changeSVG(object, id, colors.color1);
        });
        element.addEventListener('mousedown', function () {
            changeSVG(object, id, colors.color3);
        });
        element.addEventListener('mouseup', function () {
            changeSVG(object, id, colors.color2);
        });
    }

    addListener(singBtn, userSvg[0], 'user', colorsHeader);
    addListener(logoLink, logoSvg, 'logo', colorsHeaderLogo);
    addListener(footerBtn[0], userSvg[1], 'user', colorsFooterLinks);
    addListener(links[0], compareSvg[0], 'compare', colorsHeader);
    addListener(footerBtn[1], compareSvg[1], 'compare', colorsFooterLinks);
    addListener(links[1], cartSvg[0], 'cart', colorsHeader);
    addListener(footerBtn[2], cartSvg[1], 'cart', colorsFooterLinks);
    addListener(catalog, plusSvg, 'plus', colorsHeader);
    addListener(footerLogoLink, footerLogoSvg, 'logo', colorsFooterLinks);
    addListener(footerSocial[0], footerSocialSvg[0], 'facebook', colorsFooterSocial);
    addListener(footerSocial[1], footerSocialSvg[1], 'instagram', colorsFooterSocial);
    addListener(footerSocial[2], footerSocialSvg[2], 'twitter', colorsFooterSocial);

// выравнивание блоков form и goods
//     let goodsContainer = document.querySelectorAll('.goods_container'),
//         formContainer = document.querySelector('.form_cover');
//     if (goodsContainer[1].offsetHeight > formContainer.offsetHeight) {
//         let y = goodsContainer[1].offsetHeight + 'px';
//         formContainer.style.height = y;
//     }

};

//всплывашка товары header
document.addEventListener('DOMContentLoaded', function () {
    let shopMenu = document.querySelector('.header_bottom'),
        catalogLink = document.querySelector('.action_plus_cover');

    catalogLink.addEventListener('click', function () {
        shopMenu.classList.toggle('header_bottom_active');
    });
});

// form
//form range
document.addEventListener('DOMContentLoaded', function () {
    let range1 = document.querySelector('.range1'),
        range2 = document.querySelector('.range2'),
        value1 = document.querySelector('.value1'),
        value2 = document.querySelector('.value2'),
        thumbs = document.querySelectorAll('.form_range_thumb');

    range1.oninput = function () {
        this.value=Math.min(this.value,this.parentNode.childNodes[5].value-1);
        var value=(100/(parseInt(this.max)-parseInt(this.min)))*parseInt(this.value)-(100/(parseInt(this.max)-parseInt(this.min)))*parseInt(this.min);
        var children = this.parentNode.childNodes[1].childNodes;
        children[1].style.width=value+'%';
        children[5].style.left=value+'%';
        children[7].style.left=value+'%';
        value1.innerHTML=this.value;
    };

    range2.oninput = function () {
        this.value=Math.max(this.value,this.parentNode.childNodes[3].value-(-1));
        var value=(100/(parseInt(this.max)-parseInt(this.min)))*parseInt(this.value)-(100/(parseInt(this.max)-parseInt(this.min)))*parseInt(this.min);
        var children = this.parentNode.childNodes[1].childNodes;
        children[3].style.width=(100-value)+'%';
        children[5].style.right=(100-value)+'%';
        children[9].style.left=value+'%';
        value2.innerHTML=this.value;
        thumbs[1].style.background = '#63b000';
        thumbs[1].style.border = '2px #fff solid';
    };

    range1.addEventListener('mousedown', function () {
        thumbs[0].style.background = '#63b000';
        thumbs[0].style.border = '2px #fff solid';
    });

    range1.addEventListener('mouseup', function () {
        thumbs[0].style.background = '#fff';
        thumbs[0].style.border = '2px #000 solid';
    });

    range1.addEventListener('touchstart', function () {
        thumbs[0].style.background = '#63b000';
        thumbs[0].style.border = '2px #fff solid';
    });

    range1.addEventListener('touchend', function () {
        thumbs[0].style.background = '#fff';
        thumbs[0].style. border = '2px #000 solid';
    });


    range2.addEventListener('mousedown', function () {
        thumbs[1].style.background = '#63b000';
        thumbs[1].style.border = '2px #fff solid';
    });

    range2.addEventListener('mouseup', function () {
        thumbs[1].style.background = '#fff';
        thumbs[1].style.border = '2px #000 solid';
    });


    range2.addEventListener('touchstart', function () {
        thumbs[1].style.background = '#63b000';
        thumbs[1].style.border = '2px #fff solid';
    });

    range2.addEventListener('touchend', function () {
        thumbs[1].style.background = '#fff';
        thumbs[1].style.border = '2px #000 solid';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    let item = document.querySelectorAll('.goods_item'),
        container = document.querySelectorAll('.goods_container'),
        hiddenItem =document.querySelectorAll('.hidden');

    container[1].addEventListener('touchenter', function (e) {
        for (let i=0; i<item.length; i++) {
            if (e.target === item[i]) {
                hiddenItem[i].classList.add('hidden_active');
            }
        }
    });

    container[1].addEventListener('touchleave', function () {
        for (let i=0; i<hiddenItem.length; i++) {
            hiddenItem[i].classList.remove('hidden_active');
        }
    });
});

//ajax

function getXmlHttp(){
    var xmlhttp;
    try {
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
        try {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (E) {
            xmlhttp = false;
        }
    }
    if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
        xmlhttp = new XMLHttpRequest();
    }
    return xmlhttp;
}
// sort

var clone = new Object(); // создал глобальый объект в который будет записан нодлист с сервера
var newObject = new Object(); // объект для сортировок по форме

//sort by price

document.addEventListener('DOMContentLoaded', function () {

//ajax in sort
    var req = getXmlHttp();
    req.open('GET', 'test.html', true);
    req.onreadystatechange = function() {
        if (req.readyState == 4) {
            if(req.status == 200) {
                req.responseText.split('split');

                for (let i=0; i<req.responseText.split('split').length; i++) {
                    let item = document.createElement('div');
                    item.setAttribute('class','goods_item');
                    item.innerHTML = req.responseText.split('split')[i];
                    clone[i] = item; //заполнение объекта с товарами для сортировки

                    // container.appendChild(item);
                    // console.log(Object.keys(clone).length);
                    // console.log(clone);
                }
                backup(clone);
                identifyListNumber(Object.keys(newObject).length);
                addChildren(newObject);

            }
        }
    };
    req.send(null);
    req.addEventListener('loadend', function () {
        // навешиваем обработчик на завершение работы ajax
        let form = document.querySelector('.form');

        // сортировка по цене //////////////////////////////////////////////////////////////////////////////////
        form.addEventListener('change', function () { // обработчик срабатывает на изменении фрмы
            let minPrice = document.querySelector('.value1').innerHTML,
                maxPrice = document.querySelector('.value2').innerHTML,
                arr = [];

            clearObject(newObject);//очищаем буферный объект для запонения отсортированныит свойствами
            let i = 0;
            for (let key in clone) {  // работа с клонированными элементами в объекте clone
                if (parseFloat(clone[i].children[1].children[1].innerHTML) < maxPrice && parseFloat(clone[i].children[1].children[1].innerHTML) > minPrice) {
                            arr.push(i);
                        }
                i++;
            }
            for (let y=0; y<arr.length; y++) {// добавляю отдельным циклом т к нужет правильный порядок элементов (1 2 3 4 ...)
                newObject[y] = clone[arr[y]];
            }
            identifyListNumber(Object.keys(newObject).length);
            addChildren(newObject);
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {// листание по страничкам
    let arrowUp = document.querySelector('.sort_arrow_up'),
        arrowDown = document.querySelector('.sort_arrow_down'),
        nextBtn = document.querySelector('.nav_next_link'),
        prewBtn = document.querySelector('.nav_prew_link'),
        links = document.querySelectorAll('.nav_link');

    arrowUp.addEventListener('click', function () {
        let arrValues = [],
            temporaryObject = new Object();

        for (let i=0; i<Object.keys(newObject).length; i++) {
            arrValues.push(parseFloat(newObject[i].children[1].children[1].innerHTML));
        }
        arrValues.sort(function(a, b) { return a - b;  }).reverse();
        for (let y=0; y<arrValues.length; y++) {
            for (let x=0; x<Object.keys(newObject).length; x++) {
                if (arrValues[y] === parseFloat(newObject[x].children[1].children[1].innerHTML)) {
                    temporaryObject[y] = newObject[x];
                }
            }
        }
        identifyListNumber(Object.keys(temporaryObject).length);
        addChildren(temporaryObject);
        if (arrowUp.classList.contains('active_arrow_up')) {
            return false
        } else {
            arrowUp.classList.add('active_arrow_up');
            arrowDown.classList.remove('active_arrow_down');
        }
    });

    arrowDown.addEventListener('click', function () {
        let arrValues = [],
            temporaryObject = new Object();

        for (let i=0; i<Object.keys(newObject).length; i++) {
            arrValues.push(parseFloat(newObject[i].children[1].children[1].innerHTML));
        }
        arrValues.sort(function(a, b) { return a - b;  });
        for (let y=0; y<arrValues.length; y++) {
            for (let x=0; x<Object.keys(newObject).length; x++) {
                if (arrValues[y] === parseFloat(newObject[x].children[1].children[1].innerHTML)) {
                    temporaryObject[y] = newObject[x];
                }
            }
        }
        identifyListNumber(Object.keys(temporaryObject).length);
        addChildren(temporaryObject);
        if (arrowDown.classList.contains('active_arrow_up')) {
            return false
        } else {
            arrowUp.classList.remove('active_arrow_up');
            arrowDown.classList.add('active_arrow_down');
        }
    });

    nextBtn.addEventListener('click', function () {

    });
});

function identifyListNumber(number) {// определение количества страниц
    let page = Math.ceil(number/4);
    addListNumber(page);
}

function addListNumber(number) {// добавление страниц
    let navList = document.querySelectorAll('.nav_list'),
        navItem = document.querySelectorAll('.nav_item'),
        listNumber = number;
    removeListNumbers(navItem);
    for (let i=0; i<listNumber; i++) {
        let listItem = document.createElement('li'),
            listLink = document.createElement('a');
        listItem.setAttribute('class', 'nav_item');
        listLink.setAttribute('class', 'nav_link');
        if (i === 0) {
            listLink.classList.add('nav_link_active');
        }
        listLink.innerHTML = (i+1);
        listItem.appendChild(listLink);
        navList[0].appendChild(listItem);
    }

}

function addChildren(obj) {// добавление элементов
    let box = document.querySelector('.goods'),
        links = document.querySelectorAll('.nav_link'),
        linksBox = document.querySelectorAll('.nav_list'),
        n;
    removeChildren(box);
    if (Object.keys(obj).length < 4) {//проверка если длинна объекта меньше 4-х
        n= Object.keys(obj).length;
    } else {
        n = 4;
    }
    for (let y=0; y<n; y++) {
        box.appendChild(obj[y]);
    }
    linksBox[0].addEventListener('click', function (e) {// слушатель кликов по страничкам снизу
        for (let i=0; i<links.length; i++) {
            if (e.target === links[i]) {
                changeStyleLink(links,i);
                removeChildren(box);
                for (let y=((i+1)*4-4); y<((i+1)*4); y++) {
                    if (Object.keys(obj).length > y){// провека: y не должен быть больше длинны объекта или получим ошибку т к длтнна объкта бывает меньше y
                        box.appendChild(obj[y]);
                    } else {
                        return false;
                    }

                }
            }
        }
    });
}
function changeStyleLink(list, number) {// смена стилей линков
    for (let i=0; i<list.length; i++) {
        list[i].classList.remove('nav_link_active');
    }
    list[number].classList.add('nav_link_active');
}
function  removeListNumbers(item) {// очистка ссылок снизу
    for (let i=0; i<item.length; i++) {
        item[i].remove();
    }
}
function backup(original) {// копирование оригинального объекта
    for (let i=0; i<Object.keys(original).length; i++) {
        newObject[i] = original[i];
    }
}
function clearObject(obj) {// очистка буферного объекта
    Object.getOwnPropertyNames(obj).forEach(function (prop) {
        delete obj[prop];
    });
}
function removeChildren (box) {// очистка поля с товарами
    for (let z=(box.children.length-1); z>-1; z--) {
        box.children[z].remove();
    }
}