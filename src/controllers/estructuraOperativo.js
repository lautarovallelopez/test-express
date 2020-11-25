const {EstructuraOperativo} = include('/models');
class EstructuraOperativoController {
    static async fetch(req, res, next){
        try{
            await EstructuraOperativo.startTransaction();
            const estructuras = await EstructuraOperativo.find(req.query);
            await EstructuraOperativo.commitTransaction();
            res.send({
                estructuras,
                campos : EstructuraOperativo.selectableProps
            });
        }catch(error){
            next(error);
        }
    }
    static async fetchOne(req, res, next){
        try{
            await EstructuraOperativo.startTransaction();
            const estructura = await EstructuraOperativo.findOne(req.params);
            await EstructuraOperativo.commitTransaction();
            res.send({estructura});
        }catch(error){
            next(error);
        }
    }
    static async create(req, res, next){
        try{
            await EstructuraOperativo.startTransaction();
            const result = await EstructuraOperativo.insertOne(req.body);
            await EstructuraOperativo.commitTransaction();
            res.send({result});
        }catch(error){
            next(error);
        }
    }
    static async update(req, res, next){
        try{
            await EstructuraOperativo.startTransaction();
            const result = await EstructuraOperativo.updateOne(req.params, req.body);
            await EstructuraOperativo.commitTransaction();
            res.send({
                result,
                success : true
            });
        }catch(error){
            next(error);
        }
    }
    static async delete(req, res, next){
        try{
            await EstructuraOperativo.startTransaction();
            const result = await EstructuraOperativo.deletedOne(req.params);
            await EstructuraOperativo.commitTransaction();
            res.send({
                result,
                success : true
            });
        }catch(error){
            next(error);
        }
    }
    static async fetchEstructura(req, res, next){
        try{
            await EstructuraOperativo.startTransaction();
            req.campos = await EstructuraOperativo.find({id_operativo:req.params.id_operativo}, ['nombre_original', 'id_nombre_campo_entrada']);
            await EstructuraOperativo.commitTransaction();
            next();
        }catch(error){
            next(error);
        }
    }
}

module.exports = EstructuraOperativoController;
