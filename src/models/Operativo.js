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
    'fecha_llegada_paquete',
    'formato_del_archivo',
    'total_registros',
    'contacto_operativo',
    'mail_contacto',
    'fecha_inicio_codificacion',
    'fecha_fin_codificacion',
    'fecha_entrega_operativo',
    'id_estado_operativo',
    'calidad_operativo',
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
