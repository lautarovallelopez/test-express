const {Operativo} = include('/models');
class OperativoController{
    static async fetch(req, res, next){
        try{
            const total = await Operativo.countDocuments(req.query);
            const operativos = await Operativo.find(req.query);
            res.send({
                operativos,
                total,
                limit: parseInt(process.env.PAGE_SIZE)
            });
        }catch(error){
            next(error);
        }
    }
    static async create(req, res, next){
        try{
            await Operativo.startTransaction();
            const result = await Operativo.insertOne(req.body);
            Operativo.commitTransaction();
            res.send({result});
        }catch(error){
            console.log(error);
            next(error);
        }
    }
    static async update(req, res, next){
        try{
            await Operativo.startTransaction();
            const result = await Operativo.updateOne({id_operativo : req.params.id}, req.body, 'id_operativo');
            await Operativo.commitTransaction();
            res.send({result});
        }catch(error){
            next(error);
        }
    }
    static async delete(req, res, next){
        try{
            await Operativo.startTransaction();
            const result = await Operativo.deletedOne({id_operativo : req.params.id});
            await Operativo.commitTransaction();
            res.send({result});
        }catch(error){
            next(error);
        }
    }
    static async fetchOne(req, res, next){
        try{
            await Operativo.startTransaction();
            const result = await Operativo.findOne({id_operativo : req.params.id});
            await Operativo.commitTransaction();
            res.send(result);
        }catch(error){
            next(error);
        }
    }
}

module.exports = OperativoController;
