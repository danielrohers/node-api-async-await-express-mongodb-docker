module.exports = {

  catch404(req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  },

  handler(err, req, res, next) {
    if (!next) return;
    const success = false;
    const message = err.message || err;
    const status = err.status || 500;

    if (err.name === 'ValidationError') {
      const errors = [];
      for (const key in err.errors) {
        errors.push(err.errors[key].message);
      }
      res.status(400).json({ success, status: 400, message: errors });
    }

    res.status(status).json({ success, status, message });
  },

};

