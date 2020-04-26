const mongoose = require('mongoose');

const Component = mongoose.model('Component');

class ComponentRepository {
    async getComponent(req) {
        try {
            const components = await Component.find();
            console.log('Components', components);

            return {
                data: components
            };

        } catch (err) {
            throw err;
        }
    }
}

module.exports = new ComponentRepository();
