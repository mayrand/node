 let fetch = require('node-fetch');
/*
fetch('https://rickandmortyapi.com/api/episode', {
    method: 'GET'
}).then(response => {
    return response.json();
}).then(function (data) {
    console.log(data);
}).catch(err => { console.log(err); }); */

var query = "query{character(id:1){name}}";
fetch('https://rickandmortyapi.com/graphql/', {
    method: 'POST',
    body: JSON.stringify({
        query
      })
}).then(response => {
    return JSON.parse(response.json());
}).then(function (data) {
    console.log(data);
}).catch(err => { console.log(err); });