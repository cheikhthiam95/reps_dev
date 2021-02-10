const { ValidationError, BulkWriteError} = require('../Errors/consts')
// Middleware to check all kind of errors which come from the API

module.exports = (err, req, res, next) => {
    if(err) {
        switch(err.name) {
            case ValidationError:
                err.isHandled = true;
                err.status = 422;
                break;
            case BulkWriteError:
                err.isHandled = true;
                err.status = 400;
                break;
        }
        if(!err.isHandled) console.log("Unhandled Error from App 'Error Middleware'", err);
        const errorObject = {
            message:err.message || err,
            status: err.status || 500,
            data: err.data
        }
        res.status(errorObject.status).json(errorObject);
    }
};