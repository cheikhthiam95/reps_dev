class ApiError extends Error {
    constructor(message, status = 400) {
        super(message);
        this.status = status;
        this.isHandled = true;
        this.name = "ApiError";
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
        super(message || 'User Not authorized to access to this ressource', 401);
    }
}