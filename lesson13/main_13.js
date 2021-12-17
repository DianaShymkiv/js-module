// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар.

let divTitle = document.createElement('div');
divTitle.innerText = 'Product title';

let divCount = document.createElement('div');
divCount.innerText = 'Product count';

let divPrice = document.createElement('div');
divPrice.innerText = 'Price';

let divImg = document.createElement('div');
divImg.innerText = 'Image';

let form = document.createElement('form');
form.setAttribute('name', 'form');

let inputTitle = document.createElement('input');
inputTitle.setAttribute('name', 'title');
inputTitle.style.margin = '5px 0';

let inputCount = document.createElement('input');
inputCount.setAttribute('name', 'count');
inputCount.style.margin = '5px 0';

let inputPrice = document.createElement('input');
inputPrice.setAttribute('name', 'price');
inputPrice.style.margin = '5px 0';

let inputImg = document.createElement('input');
inputImg.setAttribute('name', 'image');
inputImg.style.margin = '5px 0';

let button = document.createElement('button');
button.innerText = `Save`;
button.style.marginLeft = '15px';

// let buttonList = document.createElement('button');
// buttonList.innerText = 'products list';

let divA = document.createElement('div');
divA.style.marginTop = '20px';
divA.style.padding = '10px';
divA.style.width = '90px';
divA.style.display = 'flex';
divA.style.justifyContent = 'center';
divA.style.borderRadius = '3px';
divA.style.border = '1px solid rgb(118, 118, 118)';
divA.style.backgroundColor = 'rgb(239, 239, 239)';

let a  = document.createElement('a');
a.setAttribute('href', 'list.html');
a.innerText = 'products list';
a.style.textDecoration = 'none';
a.style.color = 'black';

form.append(divTitle,inputTitle,divCount,inputCount,divPrice,inputPrice,divImg,inputImg,button,divA);
divA.appendChild(a);
document.body.append(form, divA);


let listArr = [];
localStorage.setItem('productList',JSON.stringify(listArr));

// let form1 = document.forms.form;
button.onclick = (ev) => {
    ev.preventDefault();

    form.title.value = '';
    form.count.value = '';
    form.price.value = '';
    form.image.value = '';

    let productList = {
        title : form.title.value,
        count: form.count.value,
        price: form.price.value,
        image: form.image.value,
    }

    let data = localStorage.getItem('productList');
    let products = JSON.parse(data);
    products.push(productList);
    localStorage.setItem('productList', JSON.stringify(products));

}



