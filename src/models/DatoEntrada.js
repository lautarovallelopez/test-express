const ModelCreate = include('/helpers/modelCreate');
const name = 'DatoEntrada';
const isArray = require('lodash/isArray');
const uuid = require('uuidv4').uuid;
const head = require('lodash/head');
const tableName = 'SNN_DATOS_ENTRADA';
const map = require('lodash/map');
const selectableProps = [
    'id',
    'id_propio',
    'id_original_concatenado',
    'frase01_original',
    'frase02_original',
    'frase03_original',
    'frase04_original',
    'frase05_original',
    'frase06_original',
    'frase07_original',
    'frase08_original',
    'frase09_original',
    'frase10_original',
    'frase11_original',
    'frase12_original',
    'frase_auxiliar01_original',
    'frase_auxiliar02_original',
    'frase_auxiliar03_original',
    'frase_auxiliar04_original',
    'frase_auxiliar05_original',
    'frase_auxiliar06_original',
    'dato_numerico01_original',
    'dato_numerico02_original',
    'dato_numerico03_original',
    'dato_numerico04_original',
    'dato_alfabetico01_original',
    'dato_alfabetico02_original',
    'dato_alfabetico03_original',
    'dato_alfabetico04_original',
    'dato_alfanumerico01_original',
    'dato_alfanumerico02_original',
    'dato_alfanumerico03_original',
    'dato_alfanumerico04_original',
    'dato_decimal01_original',
    'dato_decimal02_original',
    'id_operativo',
    'id_lote'
];
const timeout = 1000000;
class DatoEntrada extends ModelCreate{
    constructor(props){
        super({
            ...props,
            name,
            tableName,
            selectableProps,
            timeout
        });
    }

    insertMany(props, id_operativo, id_lote) {
        if (isArray(props) && head(props) instanceof Object) {
            const inserts = map(props, prop => ({
                id: uuid(),
                ...prop,
                __v: 0,
                id_operativo,
                id_lote,
                createdAt: new Date()
            }));
            if (this.transaction) {
                return this.transaction(this.tableName).insert(inserts).timeout(this.timeout);
            }
            return this.knex.insert(inserts).returning(this.selectableProps)
                .into(this.tableName).timeout(this.timeout);
        }
        return Promise.reject('not a valid array of data');
    }
}
module.exports = knex => new DatoEntrada({knex});
