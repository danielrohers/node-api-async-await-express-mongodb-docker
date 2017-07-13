const FooService = require('../services/foo');

module.exports = {

  /**
  * @api {get} /foo List
  * @apiGroup Foo
  *
  * @apiSuccess {Boolean} success=true
  * @apiSuccess {Foo[]} data
  */
  list(req, res, next) {
    FooService
      .list()
      .then(data => res.status(200).json({ success: true, data }))
      .catch(next);
  },

  /**
  * @api {post} /foo Create
  * @apiGroup Foo
  *
  * @apiParam {String} name
  *
  * @apiSuccess {Boolean} success=true
  * @apiSuccess {Foo} data
  */
  create(req, res, next) {
    FooService
      .create(req.body)
      .then(data => res.status(200).json({ success: true, data }))
      .catch(next);
  },

  /**
  * @api {get} /foo/:id Find
  * @apiGroup Foo
  *
  * @apiSuccess {Boolean} success=true
  * @apiSuccess {Foo} data
  */
  findOne(req, res, next) {
    FooService
      .findOne(req.params.id)
      .then(data => res.status(200).json({ success: true, data }))
      .catch(next);
  },

  /**
  * @api {put} /foo/:id Update
  * @apiGroup Foo
  *
  * @apiParam {String} [name]
  *
  * @apiSuccess {Boolean} success=true
  * @apiSuccess {Foo} data
  */
  update(req, res, next) {
    FooService
      .update(req.params.id, req.body)
      .then(data => res.status(200).json({ success: true, data }))
      .catch(next);
  },

  /**
  * @api {delete} /foo/:id Delete
  * @apiGroup Foo
  *
  * @apiSuccess {Boolean} success=true
  */
  delete(req, res, next) {
    FooService
      .delete(req.params.id)
      .then(() => res.status(200).json({ success: true }))
      .catch(next);
  },

};
