module.exports = {
    '/api/estructuraOperativo' : {
        get : {
            summary : 'Estructura',
            security : [],
            parameters : [
                {
                    in : 'query',
                    name : 'id_operativo',
                    required : false,
                    schema : {type : 'integer'}
                }
            ],
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
        },
        post : {
            summary : 'Crear una Estructura',
            security : [],
            requestBody : {
                required : true,
                content : {'application/json' : {schema : {type : 'object'}}}
            },
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
    },
    '/api/estructuraOperativo/{id_estructura}' : {
        get : {
            summary : 'Estructura',
            security : [],
            parameters : [
                {
                    in : 'path',
                    name : 'id_estructura',
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
                    description : 'error',
                    content : {'application/json' : {schema : {$ref : '#/components/schemas/Error'}}}
                }
            }
        },
        put : {
            summary : 'Actualizar estructura',
            security : [],
            parameters : [
                {
                    in : 'path',
                    name : 'id_estructura',
                    required : true,
                    schema : {type : 'integer'}
                }
            ],
            requestBody : {
                description : 'Actualizaciones',
                content : {'application/json' : {schema : {type : 'object'}}}
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
        },
        delete : {
            summary : 'Actualizar estructura',
            security : [],
            parameters : [
                {
                    in : 'path',
                    name : 'id_estructura',
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
    }
};
