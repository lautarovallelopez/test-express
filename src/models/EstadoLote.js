const ModelCreate = include('/helpers/modelCreate');
const name = 'EstadoLote';
const tableName = 'SNN_ESTADO_LOTE';
const selectableProps = [
    'id',
    'id_estado_lote',
    'descripcion',
    'observacion',
    'dominio'
];
class EstadoLote extends ModelCreate{
    constructor(props){
        super({
            ...props,
            name,
            tableName,
            selectableProps
        });
    }
}
module.exports = knex => new EstadoLote({knex});
