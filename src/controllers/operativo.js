const {Operativo} = include('/models');
class OperativoController{
    static async fetch(req, res, next){
        try{
            const {
                page,
                ...query
            } = req.query;
            await Operativo.startTransaction();
            const total = await Operativo.countDocuments(query);
            const operativos = await Operativo.findLimit({
                skip: page,
                filter: query
            });
            Operativo.commitTransaction();
            res.send({
                operativos,
                campos : Operativo.selectableProps,
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
            await Operativo.startTransaction();
            const result = await Operativo.updateOne({id_operativo : req.params.id}, req.body);
            await Operativo.commitTransaction();
            res.send({
                success : true,
                result
            });
        }catch(error){
            next(error);
        }
    }
    static async delete(req, res, next){
        try{
            await Operativo.startTransaction();
            const result = await Operativo.deletedOne({id_operativo : req.params.id});
            await Operativo.commitTransaction();
            res.send({
                success : true,
                result
            });
        }catch(error){
            next(error);
        }
    }
    static async fetchOne(req, res, next){
        try{
            await Operativo.startTransaction();
            const operativo = await Operativo.findOne({id_operativo : req.params.id});
            await Operativo.commitTransaction();
            res.send({operativo});
        }catch(error){
            next(error);
        }
    }
}

module.exports = OperativoController;
