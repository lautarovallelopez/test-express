const ModelCreate = include('/helpers/modelCreate');
const name = 'TipoPregunta';
const tableName = 'SNN_TIPO_PREGUNTA';
const selectableProps = [
    'id',
    'id_abierta_cerrada',
    'descripcion'
];
class TipoPregunta extends ModelCreate{
    constructor(props){
        super({
            ...props,
            name,
            tableName,
            selectableProps
        });
    }
}
module.exports = knex => new TipoPregunta({knex});
