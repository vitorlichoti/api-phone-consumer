const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

class VerifyIsAuth {

  static async checkIfUserIsAuth(req, res, next) {
    const { authorization } = req.headers;
    try {
      const response = await axios.get(`${process.env.AUTH_API_URL}/validate`, {
        headers: {
          authorization,
        },
      });

      if (response.status === 200) {
        next();
      } else {
        return res.status(401).json({ message: 'Token expired' });
      }

    } catch (error) {
      if (error.response.status === 400) {
        return res.status(401).json({ message: 'jwt must be provided' });
      }

      return res.status(401).json({ message: 'Token expired' });
    }
  }

}

module.exports = VerifyIsAuth;
