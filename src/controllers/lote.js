const {Lote} = include('/models');

class LoteController{
    static async fetch(req, res, next){
        try{
            await Lote.startTransaction();
            console.log(req.query);
            const lotes = await Lote.find(req.query);
            await Lote.commitTransaction();
            res.send({lotes});
        }catch(error){
            next(error);
        }
    }
    static async create(req, res, next){
        try{
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
            if(req.storedFile){
                req.body.nombre_archivo = req.storedFile.filename;
            }
            await Lote.startTransaction();
            const result = await Lote.insertOne(req.body);
            await Lote.commitTransaction();
            res.send({result});
        }catch(error){
            next(error);
        }
    }
}

module.exports = LoteController;
