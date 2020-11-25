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
            const soportes = await Soporte.findAll();
            const tiposOperativos = await TipoOperativo.findAll();
            const estadosOperativos = await EstadoOperativo.findAll();
            const frecuencias = await Frecuencia.findAll();
            const tiposPreguntas = await TipoPregunta.findAll();
            const estadosLotes = await EstadoLote.findAll();
            const tiposDiccionarios = await TipoDiccionario.findAll();
            const variables = await Variable.findAll();
            const entradasCampos = await EntradaCampo.findAll();
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
