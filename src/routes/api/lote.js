const {
    LoteController,
    FileController,
    DatoEntradaController
} = include('/controllers');

module.exports = router => {
    router.route('/')
        .post(FileController.createJsonFile, LoteController.create)
        .get(LoteController.fetch);
    router.route('/convert/:id_operativo/:id_lote').post(FileController.readJsonFile, DatoEntradaController.insert);
    return router;
};
