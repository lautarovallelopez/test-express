const {OptionsController} = include('/controllers');

module.exports = router => {
    router.route('/').get(OptionsController.select);
    return router;
};
