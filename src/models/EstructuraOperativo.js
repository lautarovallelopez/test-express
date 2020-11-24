const ModelCreate = include('/helpers/modelCreate');
const map = require('lodash/map');
const name = 'EstructuraOperativo';
const tableName = 'SNN_ESTRUCTURA_OPERATIVO';
const idName = 'id_estructura';
const selectableProps = [
    'id',
    'id_operativo',
    'id_estructura',
    'nombre_original',
    'id_nombre_campo_entrada',
    'es_parte_del_id',
    'tipo_de_dato',
    'tamanio_dato',
    'tiene_decimales',
    'decimales',
    'posicion_inicial',
    'posicion_final',
    'hay_conversion_dato',
    'observacion',
    'dominio',
    'id_fuente',
    'id_pregunta',
    'id_usuario'
];
class EstructuraOperativo extends ModelCreate{
    constructor(props){
        super({
            ...props,
            name,
            tableName,
            selectableProps,
            idName
        });
    }
    alterKey(props, operativoId){
        const inserts = map(props, prop => ({
            id_operativo : operativoId,
            tipo_de_dato : prop.type,
            tamanio_dato : prop.size,
            nombre_original : prop.name,
            decimales : prop.decimalPlaces
        }));
        const result = this.insertMany(inserts);
        return result;
    }
}

module.exports = knex => new EstructuraOperativo({knex});
