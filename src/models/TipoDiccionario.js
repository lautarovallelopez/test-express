const ModelCreate = include('/helpers/modelCreate');
const name = 'TipoDiccionario';
const tableName = 'SNN_TIPOS_DE_DICCIONARIOS_LINGUISTICOS';
const selectableProps = [
    'id_tipologia_de_diccionarios',
    'descripcion',
    'si_palabra_no_frase',
    'si_descripcion_destino',
    'expresion_regular',
    'dominio',
    'observacion',
    'supervisado',
    'id_usuario',
    'fecha_alta'
];
class TipoDiccionario extends ModelCreate{
    constructor(props){
        super({
            ...props,
            name,
            tableName,
            selectableProps
        });
    }
}
module.exports = knex => new TipoDiccionario({knex});
