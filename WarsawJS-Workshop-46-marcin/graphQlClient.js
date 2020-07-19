import pkg from 'graphql-request';
const { request } = pkg;

const query = `{character(id:1){name}}`;

request('https://rickandmortyapi.com/graphql', query).then((data) => console.log(data))