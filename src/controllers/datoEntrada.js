const {DatoEntrada} = include('/models');
const map = require('lodash/map');

class DatoEntradaController{
    static async insert(req, res, next){
        try{
            const {
                id_operativo,
                id_lote
            } = req.params;
            await DatoEntrada.startTransaction();
            const result = await Promise.all(map(req.registros, registro => {
                return DatoEntrada.insertMany(registro, id_operativo, id_lote);
            }));
            await DatoEntrada.commitTransaction();
            res.send({
                success : true,
                registrosInsertados : result.length,
                message : result[9]
            });
        }catch(error){
            next(error);
        }
    }
}

module.exports = DatoEntradaController;
