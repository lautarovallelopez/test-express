module.exports = {
    '/api/lote' : {
        get : {
            summary : 'Get all operativo´s lotes',
            security : [],
            parameters : [
                {
                    in : 'query',
                    name : 'id_operativo',
                    schema : {type : 'integer'}
                },
                {
                    in : 'query',
                    name : 'id_lote',
                    schema : {type : 'integer'}
                }
            ],
            responses : {
                200 : {
                    description : 'ok',
                    content : {'application/json' : {schema : {type : 'object'}}}
                },
                default : {
                    description : 'Error',
                    content : {'application/json' : {schema : {$ref : '#/components/schemas/Error'}}}
                }
            }
        },
        post : {
            summary : 'Get all operativo´s lotes',
            security : [],
            requestBody : {
                required : true,
                content:{
                    'multipart/form-data':{
                        schema:{
                            type : 'object',
                            properties:{
                                lote:{
                                    type: 'string',
                                    format: 'binary'
                                }
                            }
                        }
                    }
                }
            },
            responses : {
                200 : {
                    description : 'ok',
                    content : {'application/json' : {schema : {type : 'object'}}}
                },
                default : {
                    description : 'Error',
                    content : {'application/json' : {schema : {$ref : '#/components/schemas/Error'}}}
                }
            }
        }
    },
    '/api/lote/convert/{id_operativo}/{id_lote}':{
        post : {
            summary : 'Migrate dbf to database',
            security : [],
            parameters : [
                {
                    in : 'path',
                    name : 'id_lote',
                    required : true,
                    schema : {type : 'integer'}
                },
                {
                    in : 'path',
                    name : 'id_operativo',
                    required : true,
                    schema : {type : 'integer'}
                }
            ],
            responses : {
                200 : {
                    description : 'ok',
                    content : {'application/json' : {schema : {type : 'object'}}}
                },
                default : {
                    description : 'Error',
                    content : {'application/json' : {schema : {$ref : '#/components/schemas/Error'}}}
                }
            }
        }
    },
    '/api/lote/prueba' : {
        post : {
            summary : 'Insert ids',
            security : [],
            responses : {
                200 : {
                    description : 'ok',
                    content : {'application/json' : {schema : {type : 'object'}}}
                },
                default : {
                    description : 'Error',
                    content : {'application/json' : {schema : {$ref : '#/components/schemas/Error'}}}
                }
            }
        }
    }
};
