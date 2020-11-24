const operativo = require('./operativo');
const estructuraOperativo = require('./estructuraOperativo');
const options = require('./options');
const lote = require('./lote');

module.exports = {
    ...operativo,
    ...estructuraOperativo,
    ...options,
    ...lote
};
