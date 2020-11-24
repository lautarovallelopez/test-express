const {OperativoController} = include('/controllers');

module.exports = router => {
    router.route('/')
        .get(OperativoController.fetch)
        .post(OperativoController.create);
    router.route('/:id')
        .put(OperativoController.update)
        .delete(OperativoController.delete)
        .get(OperativoController.fetchOne);
    return router;
};
