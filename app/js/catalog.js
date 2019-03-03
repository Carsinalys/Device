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

    container[1].addEventListener('touchleave', function (e) {
        for (let i=0; i<hiddenItem.length; i++) {
            hiddenItem[i].classList.remove('hidden_active');
        }
    });
});