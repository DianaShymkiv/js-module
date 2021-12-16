let products = JSON.parse(localStorage.getItem('productList'));

let wrap = document.createElement('div');
wrap.style.display = 'flex';
wrap.style.flexDirection = 'column';
wrap.style.alignItems = 'center';

let div = document.createElement('div');
div.style.display = 'flex';
div.style.flexWrap = 'wrap';
div.style.marginLeft = '30px';
// div.style.justifyContent = 'center';
div.style.columnGap = '20px';
div.style.rowGap = '20px';

for (const product of products) {
    let divProduct = document.createElement('div');
    divProduct.style.border = '1px solid darkGrey';
    divProduct.style.padding = '10px';

    let img = document.createElement('img');
    img.src = `${product.image}`;

    let title = document.createElement('h2');
    title.style.borderTop = '1px solid black';
    title.style.borderBottom = '1px solid black';
    title.style.marginTop = '10px';
    title.style.marginBottom = '10px';
    title.style.paddingTop = '10px';
    title.style.paddingBottom = '10px';
    title.style.display = 'flex';
    title.style.justifyContent = 'center';
    title.innerText = `${product.title}`;

    let count = document.createElement('p');
    count.innerHTML = `<b>Count:</b> ${product.count}`;

    let price = document.createElement('p');
    price.innerHTML = `<b>Price:</b> ${product.price}`;

    let buttonDelete = document.createElement('button');
    buttonDelete.innerText = 'Delete product';

    buttonDelete.onclick = () => {
        divProduct.style.display = 'none';
        let productData = JSON.parse(localStorage.getItem('productList'));
        productData.splice(products.indexOf(product), 1);
        localStorage.setItem('productList',JSON.stringify(productData));
    }

    divProduct.append(img,title,count,price,buttonDelete);
    div.appendChild(divProduct);
    wrap.appendChild(div);
}

let buttonDeleteAll = document.createElement('button');
buttonDeleteAll.innerText = 'Delete all products';
buttonDeleteAll.style.margin = '20px';
buttonDeleteAll.style.padding = '10px';
buttonDeleteAll.style.width = '150px';

buttonDeleteAll.onclick = (ev) => {
    ev.preventDefault();
    let div = document.getElementsByTagName('div')
    for (const item of div) {
        item.style.display = 'none';
    }
    localStorage.removeItem('productList');
}

wrap.appendChild(buttonDeleteAll);
document.body.appendChild(wrap);