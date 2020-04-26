const routeUtils = require('../utils/handleResponse');
const statusCode = require('../const/statusCode');
const componentRepository = require('../repositories/componentRepository');

function getComponent(req) {
    console.log(222, req.body);
    console.log(222, req.params);
    return componentRepository.getComponent(req);
}

function createComponent(req) {
    return componentRepository.createComponent(req);
}

function updateComponent(req) {
    return componentRepository.updateComponent(req);
}

function removeComponent(req) {
    return componentRepository.removeComponent(req);
}

module.exports = {
    get: routeUtils.handleResponse(getComponent, statusCode.OK, statusCode.NOT_FOUND),
    create: routeUtils.handleResponse(createComponent, statusCode.CREATED, statusCode.CONFLICT),
    update: routeUtils.handleResponse(updateComponent, statusCode.OK, statusCode.CONFLICT),
    remove: routeUtils.handleResponse(removeComponent, statusCode.OK, statusCode.NOT_FOUND)
};
