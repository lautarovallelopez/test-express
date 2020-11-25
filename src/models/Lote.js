const ModelCreate = include('/helpers/modelCreate');
const name = 'Lote';
const tableName = 'SNN_LOTES';
const selectableProps = [
    'id',
    'id_operativo',
    'id_lote',
    'descripcion',
    'observacion',
    'dominio',
    'nombre_archivo',
    'formato_archivo',
    'cantidad_de_registros_informados',
    'fecha_carga_datos_lote',
    'fecha_fin_carga_datos_lote',
    'id_estado_lote',
    'calidad_lote_total',
    'nivel_error_lote_total',
    'lote_rechazado',
    'id_usuario',
    'archivo_json',
    'cantidad_registros_dbf',
    'cantidad_de_registros_insertados'
];

class Lote extends ModelCreate{
    constructor(props){
        super({
            ...props,
            name,
            tableName,
            selectableProps
        });
    }
}

module.exports = knex => new Lote({knex});
