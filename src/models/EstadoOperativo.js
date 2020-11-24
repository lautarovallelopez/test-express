const ModelCreate = include('/helpers/modelCreate');
const name = 'EstadoOperativo';
const tableName = 'SNN_ESTADO_OPERATIVO';
const selectableProps = [
    'id',
    'id_estado_operativo',
    'descripcion',
    'observacion',
    'dominio',
    'id_usuario'
];
class EstadoOperatico extends ModelCreate{
    constructor(props){
        super({
            ...props,
            name,
            tableName,
            selectableProps
        });
    }
}
module.exports = knex => new EstadoOperatico({knex});
