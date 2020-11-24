const ModelCreate = include('/helpers/modelCreate');
const name = 'Soporte';
const tableName = 'SNN_SOPORTE';
const selectableProps = [
    'id',
    'id_soporte',
    'descripcion'
];

class Soporte extends ModelCreate{
    constructor(props){
        super({
            ...props,
            name,
            tableName,
            selectableProps
        });
    }
}

module.exports = knex => new Soporte({knex});
