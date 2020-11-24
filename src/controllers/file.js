const {
    EstructuraOperativo,
    Lote
} = include('/models');
const FileModel = include('/helpers/file');
const head = require('lodash/head');
const map = require('lodash/map');
const replace = require('lodash/replace');
const forEach = require('lodash/forEach');
const clone = require('lodash/clone');
const chunk = require('lodash/chunk');
const assign = require('lodash/assign');
class FileController{

    static async createJsonFile(req, res, next){
        try{
            const searchColums = ['nombre_original', 'id_nombre_campo_entrada'];
            const {id_operativo} = req.body;
            const dbfFile = head(req.files).filename;
            if(dbfFile){
                const registros = await FileModel.readDbfFile(dbfFile);
                const jsonFile = replace(dbfFile, '.dbf', '.json');
                const estructuras = await EstructuraOperativo.find({id_operativo}, searchColums);
                const registrosParaGuardar = map(registros, (registro, index) => {
                    const filterObject ={index};
                    forEach(estructuras, estructura=>{
                        filterObject[estructura.id_nombre_campo_entrada] = clone(registro[estructura.nombre_original]);
                    });
                    return filterObject;
                });
                FileModel.writeJsonFile('lotesPreparados', jsonFile, registrosParaGuardar);
                assign(req.body, {
                    nombre_archivo : dbfFile,
                    archivo_json : jsonFile,
                    cantidad_registros_dbf : registrosParaGuardar.length
                });
            }else{
                console.log('No se cargaron archivos');
            }
            next();
        }catch(error){
            next(error);
        }
    }

    static async readJsonFile(req, res, next){
        try{
            const {archivo_json} = head(await Lote.find(req.params));
            req.registros = chunk(FileModel.readJsonFile('lotesPreparados', archivo_json), 100);
            next();
        }catch(error){
            next(error);
        }
    }
}
module.exports = FileController;
