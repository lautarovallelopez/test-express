module.exports = {
    '/api/options' : {
        get : {
            summary : 'Lista de todas las opciones',
            security : [],
            responses : {
                200 : {
                    description : 'ok',
                    content : {'application/json' : {schema : {type : 'object'}}}
                },
                default : {
                    description : 'error',
                    content : {'application/json' : {schema : {$ref : '#/components/schemas/Error'}}}
                }
            }
        }
    }
};
