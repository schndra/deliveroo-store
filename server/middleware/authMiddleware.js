const {
  UnauthorizedError,
  UnauthenticatedError,
} = require("../errors/custom-error");
const jwt = require("jsonwebtoken");

const { User } = require("../models");

const authMiddleware = async (req, res, next) => {
  console.log(req.cookies);
  const { token } = req.cookies;
  if (!token) {
    throw new UnauthenticatedError("Authentication Failed");
  }

  try {
    const data = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log(data);
    //add user to post

    const user = await User.findOne({
      where: {
        id: Number(data.id),
      },
      attributes: { exclude: ["password"] },
    });

    req.user = user;
    next();
  } catch (error) {
    throw new UnauthenticatedError("Authentication fialed");
  }
};

module.exports = authMiddleware;
