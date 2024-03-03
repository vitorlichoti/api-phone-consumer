const axios = require('axios');

class VerifyIsAuth {

  static async checkIfUserIsAuth(req, res, next) {
    const { authorization } = req.headers;
    try {
      const response = await axios.get('http://localhost:3000/api/auth/validate', {
        headers: {
          authorization,
        },
      });

      console.log('response', response.status);

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
