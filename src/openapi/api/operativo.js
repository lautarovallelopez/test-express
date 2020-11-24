module.exports = {
    '/api/operativo' : {
        get : {
            summary : 'List of Operativos',
            security : [],
            responses : {
                200 : {
                    description : 'ok',
                    content : {
                        'application/json' : {
                            schema : {
                                type : 'object',
                                properties : {
                                    limit : {type : 'integer'},
                                    total : {type : 'integer'},
                                    operativos : {
                                        type : 'array',
                                        items : {$ref : '#/components/schemas/Operativo'}
                                    }
                                }
                            }
                        }
                    }
                },
                default : {
                    description : 'Error',
                    content : {'application/json' : {schema : {$ref : '#/components/schemas/Error'}}}
                }
            }
        },
        post : {
            summary : 'Create new operativo',
            security : [],
            requestBody : {
                required : true,
                description : 'The Operativo to create',
                content : {'application/json' : {schema : {$ref :   '#/components/schemas/Operativo'}}}
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
    '/api/operativo/{id}' : {
        get : {
            security : [],
            summary : 'Get a single opertivo',
            parameters : [
                {
                    in : 'path',
                    name : 'id',
                    required : true,
                    schema : {type : 'integer'},
                    description : 'Operativo ID'
                }
            ],
            responses : {
                200 : {
                    description : 'Ok',
                    content : {'application/json' : {schema : {type : 'object'}}}
                },
                default : {
                    description : 'Error',
                    content : {'application/json' : {schema : {$ref : '#/components/schemas/Error'}}}
                }
            }
        },
        put : {
            security : [],
            summary : 'Update a single opertivo',
            parameters : [
                {
                    in : 'path',
                    name : 'id',
                    required : true,
                    schema : {type : 'integer'},
                    description : 'Operativo ID'
                }
            ],
            requestBody : {
                required : true,
                description : 'Props to update',
                content : {'application/json' : {schema : {$ref : '#/components/schemas/Operativo'}}}
            },
            responses : {
                200 : {
                    description : 'Ok',
                    content : {'application/json' : {schema : {type : 'object'}}}
                },
                default : {
                    description : 'Error',
                    content : {'application/json' : {schema : {$ref : '#/components/schemas/Error'}}}
                }
            }
        },
        delete : {
            security : [],
            summary : 'Delete a single opertivo',
            parameters : [
                {
                    in : 'path',
                    name : 'id',
                    required : true,
                    schema : {type : 'integer'},
                    description : 'Operativo ID'
                }
            ],
            responses : {
                200 : {
                    description : 'Ok',
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
