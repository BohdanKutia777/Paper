import { render } from "./render.js";
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');

export const fetchUserData = async userName => {
    const responce = await fetch(`https://api.github.com/users/${userName}`);
    if(responce.ok) {
        return await responce.json();
    }
    throw new Error ('Failed to load data');
};
export const renderUserData = userData => {
    const { avatar_url, name, location, repos_url } = userData;
    render(avatar_url);
    userNameElem.textContent = name;
    userLocationElem.textContent = location ? `from ${location}` : '';    
}

export const fetchRepositories = async url => {
    const responce = await fetch(url); 
    if (responce.ok) {
        return await responce.json();
    }
    throw new Error ('Failed to load data');
};