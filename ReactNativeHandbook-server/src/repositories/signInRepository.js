const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');
// const Android = mongoose.model('Android');
// const Component = mongoose.model('Component');

const customError = require('../const/customError');
const JWT = require('../const/JWT');

class SignInRepository {
    async signIn(email, password) {

        // try {
        //     const android1 = new Android({ version: 8, name: 'Oreo', releaseDate: new Date()});
        //     const android2 = new Android({ version: 9, name: 'Pie', releaseDate: new Date()});
        //     const android3 = new Android({ version: 10, name: 'Q', releaseDate: new Date()});
        //
        //     await Promise.all([android1.save(), android2.save(), android3.save()]);
        //     const Component1 = new Component({ name: 'Component1', description: '', releaseDate: new Date(), version: 1.1, androidVersions: [android1, android2, android3 ] });
        //     const Component2 = new Component({ name: 'Component2', description: '', releaseDate: new Date(), version: 1.2, androidVersions: [android1, android2, android3 ] });
        //     const Component3 = new Component({ name: 'Component3', description: '', releaseDate: new Date(), version: 1.3, androidVersions: [android1, android2, android3 ] });
        //
        //     await Promise.all([Component1.save(), Component2.save(), Component3.save()]);
        //
        //     return {
        //         data: {
        //             token: 'Created!'
        //         }
        //     }
        // } catch (err) {
        //     console.log(err);
        // }
        try {
            if (!email || !password) {
                throw new customError('You must provide email and password');
            }

            const user = await User.findOne({ email });

            if (!user) {
                throw new customError('Incorrect email or password');
            }

            if (user.password !== password) {
                throw new customError('Incorrect email or password');
            }

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

module.exports = new SignInRepository();
