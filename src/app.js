const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const helmet = require('helmet');
const swaggerUi = require('swagger-ui-express');
const {OpenApiValidator} = require('express-openapi-validator');
const multer = require('multer');
const mongoose = require('./helpers/mongoose');
const logger = require('./helpers/logger');

const Router = require('./routes');
const packageJson = require('../package.json');

const {
    BODY_LIMIT,
    NODE_ENV,
    PORT
} = process.env;

class App {
    constructor() {
        /**
         * @var {express} app
         */
        this.app = express();
        process.env.SRC_PATH = path.resolve(__dirname);
    }

    test() {
        this.app.use(bodyParser.json({limit: BODY_LIMIT}));
        this.app.use(bodyParser.urlencoded({extended: true}));
        this._routes();
    }

    _onListening() {
        if(NODE_ENV !== 'test') {
            logger.info(`Started ${packageJson.name} at port ${PORT} in ${NODE_ENV} environment`);
        }
    }

    _onError(err) {
        logger.error(`App Crashed, Error: ${err.errorMessage}`);
        process.exit;
    }

    async init() {
        await this._configure();
        this.app.listen(PORT, this._onListening);
        this.app.on('error', this._onError);
        return this.app;
    }

    _configure() {
        mongoose.configure();
        this._middleWares();
        return this._routes();
    }

    _middleWares() {
        this.app.use(bodyParser.json({limit: BODY_LIMIT}));
        this.app.use(bodyParser.urlencoded({extended: true}));
        this.app.use(cookieParser());
        if (NODE_ENV === 'development') {
            this.app.use(morgan('dev'));
            this.app.use(cors({
                credentials: true,
                origin: /^http:\/\/localhost/
            }));
        } else if(NODE_ENV !== 'test') {
            this.app.disable('x-powered-by');
            this.app.use(helmet());
            this.app.use(helmet.noSniff());
            this.app.use(helmet.referrerPolicy({ policy: 'same-origin' }));
            this.app.use(helmet.featurePolicy({
                features: {
                    fullscreen: ['\'self\''],
                    vibrate: ['\'none\''],
                    payment: ['indec.gob.ar'],
                    syncXhr: ['\'none\'']
                }
            }));
            this.app.use(helmet.contentSecurityPolicy({
                directives: {
                    defaultSrc: ['\'self\''],
                    styleSrc: ['\'self\'', 'maxcdn.bootstrapcdn.com']
                }
            }));
            const sixtyDaysInSeconds = 15768000;
            this.app.use(helmet.hsts({maxAge: sixtyDaysInSeconds}));
            this.app.use(morgan('combined'));
            this.app.use(cors());
        }
        return;
    }
    _storeFile(){
        const storage = multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, `public/${file.fieldname}`);
            },
            filename: function (req, file, cb) {
                cb(null, `${new Date().toISOString()}-${file.originalname}`);
            }
        });
        return storage;
    }
    async _routes() {
        try {
            const apiSpec = include('openapi');
            const options = {swaggerOptions: {validatorUrl: null}};
            this.app.use('/docs', swaggerUi.serve, swaggerUi.setup(apiSpec, options));

            await new OpenApiValidator({
                apiSpec,
                validateRequests: true,
                validateResponses: true,
                fileUploader: {storage: this._storeFile()}
            }).install(this.app);
            Router.configure(this.app);
        } catch (err) {
            console.log(err);
            process.exit;
        }
        return;
    }
}

module.exports = App;
