import request from 'superagent';

const authURL = 'https://evening-plains-61927.herokuapp.com/api/auth/';
const meURL = 'https://evening-plains-61927.herokuapp.com/api/me/favorites';

const URL = 'https://evening-plains-61927.herokuapp.com/api/characters';

export async function signUp(deets) {
    return await request.post(`${authURL}/signup`, deets)
}
export async function login(deets) {
    return await request.post(`${authURL}/signin`, deets)
}
export async function getChars(charName) {
    const data = await request.get(`${URL}?search=${charName}`);
    return data.body.results
}
export async function addFav(object, user) {
    return await request.post(meURL, object).set('Authorization', user.token);
}
export async function getMyFavs(user) {
    return await request.get(meURL).set('Authorization', user.token);
}
export async function deleteFav(favId, user) {
    return await request.delete(`${meURL}/${favId}`).set('Authorization', user.token);
}