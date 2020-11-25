const ModelCreate = include('/helpers/modelCreate');
const name = 'Frecuencia';
const tableName = 'SNN_FRECUENCIA';
const selectableProps = [
    'id_frecuencia',
    'descripcion'
];
class Frecuencia extends ModelCreate{
    constructor(props){
        super({
            ...props,
            name,
            tableName,
            selectableProps
        });
    }
}
module.exports = knex => new Frecuencia({knex});
