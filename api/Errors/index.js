class ApiError extends Error {
    constructor(message, status = 400,type = 0) {
        super(message);
        this.status = status;
        this.isHandled = true;
        this.name = "ApiError";
        this.type = type
    }
}

exports.ApiError = ApiError;

exports.ForbiddenError = class ForbiddenError extends ApiError {
    constructor(message) {
        super(message || 'Ressource is forbidden You need a greater access', 403);
    }
}

exports.NotAuthorizedError = class NotAuthorizedError extends ApiError {
    constructor(message) { 
    console.log("ALLLLLLLLLLLLLLLLLLLLô");

        super(message || 'User Not authorized to access to this ressource', 401);
    }
}