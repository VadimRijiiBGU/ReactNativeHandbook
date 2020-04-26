const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
//const User = mongoose.model('User');

const customError = require('../const/customError');
const JWT = require('../const/JWT');

class SignUpRepository {
    async signUp(email, password) {
        try {
            if (!email || !password) {
                throw new customError('You must provide email and password');
            }

            const userExists = await User.findOne({email});

            if (userExists) {
                throw new customError('This email already in use');
            }

            const user = new User({ email, password });
            await user.save();
            const token = jwt.sign({ id: user._id }, JWT.secret, { expiresIn: JWT.live });

            return {
                data: {
                    token
                }
            };
        } catch (err) {
            throw err;
        }
    }
}

module.exports = new SignUpRepository();
