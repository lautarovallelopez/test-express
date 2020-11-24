const {
    Soporte,
    TipoOperativo,
    EstadoOperativo,
    Frecuencia,
    TipoPregunta,
    EstadoLote,
    TipoDiccionario,
    Variable,
    EntradaCampo
} = include('/models');

class OptionsController{
    static async select(req, res, next){
        try{
            const soportes = await Soporte.findAll(['id_soporte', 'descripcion']);
            const tiposOperativos = await TipoOperativo.findAll(['id_tipo_operativo', 'descripcion']);
            const estadosOperativos = await EstadoOperativo.findAll(['id_estado_operativo', 'descripcion']);
            const frecuencias = await Frecuencia.findAll(['id_frecuencia', 'descripcion']);
            const tiposPreguntas = await TipoPregunta.findAll(['id_abierta_cerrada', 'descripcion']);
            const estadosLotes = await EstadoLote.findAll(['id_estado_lote', 'descripcion']);
            const tiposDiccionarios = await TipoDiccionario.findAll(['id_tipologia_de_diccionarios', 'dominio']);
            const variables = await Variable.findAll(['id_variable', 'nombre']);
            const entradasCampos = await EntradaCampo.findAll(['id_nombre_campo_entrada']);
            res.send({
                soportes,
                tiposOperativos,
                estadosOperativos,
                frecuencias,
                tiposPreguntas,
                estadosLotes,
                tiposDiccionarios,
                variables,
                entradasCampos
            });
        }catch(error){
            next(error);
        }
    }
}

module.exports = OptionsController;
