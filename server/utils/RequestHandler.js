/* eslint-disable class-methods-use-this */
/* eslint-disable linebreak-style */
class RequestHandler {
  sendSuccess(res, message, status) {
    return (data) => {
      res.status(status).json({
        type: 'success', message, data,
      });
    };
  }

  sendError(res, message, status) {
    return () => {
      res.status(status).json({
        type: 'Error', message,
      });
    };
  }
}

module.exports = new RequestHandler();
