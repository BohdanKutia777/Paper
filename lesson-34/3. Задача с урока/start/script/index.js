import { render } from "./render.js";
import { fetchUserData, renderUserData } from "./reqest.js";
const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');

document.addEventListener('DOMContentLoaded', () => {
    render();
});


const searchUser = () => {
    const userName = userNameInputElem.value;
    userNameInputElem.value = "";
    fetchUserData(userName)
    .then(dataUser => renderUserData(dataUser));
    
}


showUserBtnElem.addEventListener('click', searchUser);
