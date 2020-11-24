const ModelCreate = include('/helpers/modelCreate');
const name = 'TipoOperativo';
const tableName = 'SNN_TIPO_OPERATIVO';
const selectableProps = [
    'id',
    'id_tipo_operativo',
    'descripcion'
];
class TipoOperativo extends ModelCreate{
    constructor(props){
        super({
            ...props,
            name,
            tableName,
            selectableProps
        });
    }
}
module.exports = knex => new TipoOperativo({knex});
