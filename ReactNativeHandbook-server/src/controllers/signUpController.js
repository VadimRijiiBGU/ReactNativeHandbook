const routeUtils = require('../utils/handleResponse');
const statusCode = require('../const/statusCode');
const signUpRepository = require('../repositories/signUpRepository');

function signUp(req) {
    console.log(req.body);
    const { email, password } = req.body;
    return signUpRepository.signUp(email, password);
}

module.exports = {
    signUp: routeUtils.handleResponse(signUp, statusCode.CREATED, statusCode.CONFLICT)
};
