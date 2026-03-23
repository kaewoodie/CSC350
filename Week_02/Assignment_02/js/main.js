
// https://getbootstrap.com/docs/5.0/getting-started/introduction/
// https://www.w3schools.com/bootstrap5/bootstrap_grid_basic.php
// https://getbootstrap.com/docs/5.3/content/tables/

// Singer JSON Objects
const singerJSON1 = '{ "name":"Usher Raymond IV", "dob":"11/14/1978", "hometown":"Chattanooga, TN", "songs":"Yeah!, Burn, Confessions" } ';
const singerJSON2 = '{ "name":"Mariah Carey", "dob":"3/27/1969", "hometown":"Huntington, NY", "songs":"Emotions, Fantasy, Shake it Off" } ';
const singerJSON3 = '{ "name":"Michael Jackson", "dob":"8/29/1958", "hometown":"Gary, IN", "songs":"Remember the Time, Thriller, You Rock My World" } ';
const singerJSON4 = '{ "name":"Beyoncé Knowles-Carter", "dob":"9/4/1981", "hometown":"Houston, TX", "songs":"Irreplaceable, VIRGOs GROOVE, HEATED" } ';
const singerJSON5 = '{ "name":"Summer Marjani Walker", "dob":"4/11/1996", "hometown":"Atlanta, GA", "songs":"Over It, Bitter, Tonight" } ';

// Create JS objects
let singer1 = JSON.parse(singerJSON1);
let singer2 = JSON.parse(singerJSON2);
let singer3 = JSON.parse(singerJSON3);
let singer4 = JSON.parse(singerJSON4);
let singer5 = JSON.parse(singerJSON5);

// Array of Singer JS objects
let singersList = [singer1, singer2, singer3, singer4, singer5];

// Loop through each Singer
listSingers(singersList);

/** Populates Table Row Data */
function listSingers(array) {
    // Loop through the list and append to the table body
    array.forEach((singer) => {
    document.querySelector("#tbody").innerHTML +=
        `<tr><td>${singer.name}</td>
        <td>${singer.dob}</td>
        <td>${singer.hometown}</td>
        <td>${singer.songs}</td></tr>`;
    })
}