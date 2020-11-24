const {DBFFile} = require('dbffile');
const jsonfile = require('jsonfile');
class FileModel{
    static async readDbfFile(file){
        const dbf = await DBFFile.open(`public/lote/${file}`);
        const registros = await dbf.readRecords();
        return registros;
    }
    static async writeJsonFile(directory, file, registros){
        await jsonfile.writeFileSync(`public/${directory}/${file}`, registros, { EOL: '\r\n' });
        return true;
    }
    static readJsonFile(directory, file){
        return jsonfile.readFileSync(`public/${directory}/${file}`);
    }
}

module.exports = FileModel;
