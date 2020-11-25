const {EstructuraOperativoController} = include('controllers');
module.exports = router => {
    router.route('/')
        .get(EstructuraOperativoController.fetch)
        .post(EstructuraOperativoController.create);
    router.route('/campos').get(EstructuraOperativoController.fetchCampos);
    router.route('/:id_estructura')
        .get(EstructuraOperativoController.fetchOne)
        .delete(EstructuraOperativoController.delete)
        .put(EstructuraOperativoController.update);
    return router;
};
