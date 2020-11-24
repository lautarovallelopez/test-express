const ModelCreate = include('helpers/modelCreate');
const name = 'EntradaCampo';
const tableName = 'SNN_DATOS_ENTRADA_CAMPOS';
const selectableProps = [
    'id',
    'id_nombre_campo_entrada',
    'tipo_dato'
];
class EntradaCampo extends ModelCreate{
    constructor(props){
        super({
            ...props,
            name,
            tableName,
            selectableProps
        });
    }
}

module.exports = knex => new EntradaCampo({knex});
