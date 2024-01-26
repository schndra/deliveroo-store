const {
  UnauthorizedError,
  UnauthenticatedError,
} = require("../errors/custom-error");
const jwt = require("jsonwebtoken");

const { User } = require("../models");
const { Token } = require("../models");
const { attachCookie } = require("../utils/jwt");

const authMiddleware = async (req, res, next) => {
  const { refreshToken, accessToken } = req.cookies;
  // console.log(req.cookies, "yelow");

  // const { token, accessToken, refreshToken } = req.cookies;

  // console.log(accessToken, refreshToken);
  // if (!token) {
  //   throw new UnauthenticatedError("Authentication Failed");
  // }
  // console.log(refreshToken)

  try {
    if (accessToken) {
      const data = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
      // console.log(data);

      const user = await User.findOne({
        where: {
          id: Number(data.user.id),
        },
        attributes: { exclude: ["password"] },
      });

      req.user = user;
      return next();
    }

    const refreshTokenData = jwt.verify(
      refreshToken,
      process.env.JWT_SECRET_KEY
    );

   
    const existingToken = await Token.findOne({
      where: {
        userId: Number(refreshTokenData.user.id),
        refreshToken: refreshTokenData.refreshToken,
      },
    });

    // console.log(existingToken.toJSON(), 'data')
    const user = await User.findOne({
      where: {
        id: Number(existingToken.userId),
      },
      attributes: { exclude: ["password"] },
    });

        // console.log(existingToken.toJSON(), 'data')

    // console.log(user.toJSON(), "sxis");

    if (!existingToken) {
      throw new UnauthenticatedError("Authentication failed");
    }

    attachCookie({
      res,
      user: refreshTokenData.user,
      refreshToken: existingToken.refreshToken,
    });
    // console.log(data.user);
    req.user = user;
    next();
  } catch (error) {
    throw new UnauthenticatedError("Authentication failed");
  }
};

module.exports = authMiddleware;
