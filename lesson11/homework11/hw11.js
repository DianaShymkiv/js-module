// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

// let form = document.createElement('form');
// form.setAttribute('name', 'form1');
//
// let inputName = document.createElement('input');
// inputName.setAttribute('name', 'username');
//
// let inputAge = document.createElement('input');
// inputAge.setAttribute('name', 'age');
//
// let button = document.createElement('button');
// button.innerText = 'send';
//
// form.append(inputName, inputAge, button);
// document.body.appendChild(form);
//
// let form1 = document.forms.form1;
// form1.onsubmit = (e) => {
//     e.preventDefault();
//     let name = form1.username.value;
//     let age = form1.age.value;
// //     console.log(e.target);
//
//     let user = {
//         name: name,
//         age: age,
//     }
//
//     localStorage.setItem('userData', JSON.stringify(user));
// }

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let form = document.createElement('form');
form.setAttribute('name', 'car');

let inputModel = document.createElement('input');
inputModel.setAttribute('name', 'model');

let inputType = document.createElement('input');
inputType.setAttribute('name', 'type');

let inputVolume = document.createElement('input');
inputVolume.setAttribute('name', 'volume');

let button = document.createElement('button');
button.innerText = 'save';

form.append(inputModel, inputType, inputVolume, button);
document.body.appendChild(form);

let arr = [];
localStorage.setItem('carOptions', JSON.stringify(arr));

let formCar = document.forms.car;
formCar.onsubmit = (e) => {
    e.preventDefault();

    let carOptions = {
        model: formCar.model.value,
        type: formCar.type.value,
        volume: formCar.volume.value,
    }

    let data = localStorage.getItem('carOptions');
    let cars = JSON.parse(data);
    cars.push(carOptions);
    localStorage.setItem('carOptions', JSON.stringify(cars));
}
