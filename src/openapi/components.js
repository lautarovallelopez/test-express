module.exports = {
    schemas: {
        User: {
            type: 'object',
            properties: {
                id: {
                    description: 'id of user',
                    type: 'string',
                    format: 'uuid'
                },
                username: {
                    description: 'Username.',
                    type: 'string'
                },
                name: {
                    description: 'Name.',
                    type: 'string'
                },
                surname: {
                    description: 'Surname.',
                    type: 'string'
                },
                documentId: {
                    description: 'Document or CUIT.',
                    type: 'string'
                },
                email: {
                    description: 'Email.',
                    type: 'string',
                    format: 'email'
                },
                deleted: {
                    type: 'boolean',
                    description: 'If the user its deleted from the current APP'
                }
            },
            required: [
                'id',
                'name',
                'surname',
                'documentId',
                'email',
                'deleted'
            ]
        },
        Profile: {
            type: 'object',
            properties: {
                token: {
                    type: 'string',
                    nullable: true
                },
                success: {
                    type: 'boolean',
                    nullable: true
                },
                user: {
                    allOf: [{$ref: '#/components/schemas/User'}],
                    type: 'object',
                    required: [
                        'roles'
                    ],
                    properties: {
                        role: {
                            type: 'array',
                            items: {type: 'string'}
                        },
                        attributes: {type: 'object'}
                    }
                }
            }
        },
        Operativo : {
            type : 'object',
            properties : {
                id : {
                    description: 'id of user',
                    type: 'string',
                    format: 'uuid'
                },
                id_operativo : {type : 'integer'},
                id_fuente : {
                    type : 'integer',
                    nullable : true
                },
                descripcion : {
                    type : 'string',
                    nullable : true
                },
                observacion : {
                    type : 'string',
                    nullable : true
                },
                dominio : {
                    type : 'string',
                    nullable : true
                },
                fecha_llegada_paquete : {
                    oneOf:[
                        {type : 'string'},
                        {type: 'object'}
                    ],
                    nullable : true
                },
                formato_del_archivo : {
                    type : 'string',
                    nullable : true
                },
                total_registros : {
                    type : 'integer',
                    nullable: true
                },
                contacto_operativo : {
                    type : 'string',
                    nullable : true
                },
                mail_contacto : {
                    type: 'string',
                    nullable : true
                },
                fecha_inicio_codificacion : {
                    oneOf:[
                        {type : 'string'},
                        {type: 'object'}
                    ],
                    nullable : true
                },
                fecha_fin_codificacion : {
                    oneOf:[
                        {type : 'string'},
                        {type: 'object'}
                    ],
                    nullable : true
                },
                fecha_entrega_operativo : {
                    oneOf:[
                        {type : 'string'},
                        {type: 'object'}
                    ],
                    nullable : true
                },
                id_estado_operativo : {
                    type : 'integer',
                    nullable : true
                },
                calidad_operativo : {
                    type : 'number',
                    nullable: true
                },
                nivel_error_operativo : {
                    type : 'number',
                    nullable: true
                },
                id_usuario : {
                    type : 'integer',
                    nullable : true
                }
            }
        },
        Error: {
            type: 'object',
            required: [
                'code',
                'message'
            ],
            properties: {
                code: {
                    type: 'integer',
                    format: 'int32'
                },
                message: {type: 'string'}
            }
        }
    },
    securitySchemes: {
        bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT'
        }
    }
};
