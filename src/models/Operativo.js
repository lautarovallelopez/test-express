const ModelCreate = include('/helpers/modelCreate');
const name = 'Operativo';
const tableName = 'SNN_OPERATIVO';
const selectableProps = [
    'id',
    'id_operativo',
    'id_fuente',
    'descripcion',
    'observacion',
    'dominio',
    'fecha_llegada_operativo',
    'total_registros_operativo',
    'contacto_operativo',
    'mail_contacto',
    'fecha_inicio_codificacion',
    'fecha_fin_codificacion',
    'fecha_entrega_operativo',
    'id_estado_operativo',
    'calidad_total_operativo',
    'nivel_error_operativo',
    'id_usuario'
];
class OperativoModel extends ModelCreate{
    constructor(props){
        super({
            ...props,
            name,
            tableName,
            selectableProps
        });
    }
}

module.exports = knex => new OperativoModel({knex});
