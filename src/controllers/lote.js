const {Lote} = include('/models');

class LoteController{
    static async fetch(req, res, next){
        try{
            const {
                page,
                ...query
            } = req.query;
            await Lote.startTransaction();
            const total = await Lote.countDocuments(query);
            const lotes = await Lote.findLimit({
                skip: page,
                filter: query
            });
            Lote.commitTransaction();
            res.send({
                lotes,
                campos : Lote.selectableProps,
                total,
                limit: parseInt(process.env.PAGE_SIZE)
            });
        }catch(error){
            next(error);
        }
    }
    static async create(req, res, next){
        try{
            if(req.storedFile){
                req.body.nombre_archivo = req.storedFile.filename;
            }
            await Lote.startTransaction();
            const result = await Lote.insertOne(req.body);
            await Lote.commitTransaction();
            res.send({
                success : true,
                result
            });
        }catch(error){
            next(error);
        }
    }
    static async update(req, res, next){
        try{
            const {id_lote} = req.params;
            if(req.storedFile){
                req.body.nombre_archivo = req.storedFile.filename;
            }
            await Lote.startTransaction();
            const result = await Lote.updateOne({id_lote}, req.body);
            await Lote.commitTransaction();
            res.send({
                sucess: true,
                result
            });
        }catch(error){
            next(error);
        }
    }
    static async delete(req, res, next){
        try{
            const {id_lote} = req.params;
            await Lote.startTransaction();
            const result = await Lote.deletedOne({id_lote});
            await Lote.commitTransaction();
            res.send({
                success : true,
                result
            });
        }catch(error){
            next(error);
        }
    }
}

module.exports = LoteController;
