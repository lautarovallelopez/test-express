const ModelCreate = include('/helpers/modelCreate');
const name = 'Variable';
const tableName = 'SNN_VARIABLES';
const selectableProps = [
    'id_variable',
    'nombre',
    'abreviatura',
    'digitos',
    'supervisado',
    'dominio',
    'observacion',
    'id_padre',
    'id_usuario',
    'fecha_alta'
];
class Variable extends ModelCreate{
    constructor(props){
        super({
            ...props,
            name,
            tableName,
            selectableProps
        });
    }
}
module.exports = knex => new Variable({knex});
