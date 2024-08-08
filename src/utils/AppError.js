class ApiError extends Error {
    constructor(statusCode, message, errors, statck) {
        super(message)
        this.statusCode = statusCode
        this.message = message
        this.data = null
        this.success = false
        this.errors = errors


        if (statck) {
            this.statck = statck
        } else {
            Error.captureStackTrace(this, this.constructor)
        }

    }
}

export { ApiError }