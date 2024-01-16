const { StatusCodes } = require("http-status-codes");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const {
  NotFoundError,
  BadRequest,
  UnauthenticatedError,
} = require("../errors/custom-error");

//models
const { User } = require("../models");

exports.register = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequest("please provide  email and password");
  }

  const checkUser = await User.findOne({
    where: {
      email: email,
    },
  });

  if (checkUser) {
    throw new BadRequest("email already exists");
  }

  //hash password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);
  req.body.password = hashPassword;

  const newUser = await User.create(req.body);

  //generate jwt token
  // const token = jwt.sign(
  //   { id: newUser.id, email: newUser.email, role: newUser.role },
  //   process.env.JWT_SECRET_KEY,
  //   { expiresIn: "7d" }
  // );

  res.status(StatusCodes.CREATED).json({
    msg: "user created ",
    user: newUser.toJSON(),
    // token,
  });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequest("please provide  email and password");
  }

  const user = await User.findOne({
    where: {
      email: email,
    },
  });

  if (!user) {
    throw new UnauthenticatedError("invalid credintials");
  }

  //compare password
  const isMatach = await bcrypt.compare(req.body.password, user.password);

  if (!isMatach) {
    throw new UnauthenticatedError("invalid password");
  }

  const token = jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "7d" }
  );

  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
    secure: false,
  });

  res.status(StatusCodes.OK).json({
    user: {
      id: user.id,
      email: user.email,
      role: user.role,
    },
    // token,
  });
};

exports.logout = async (req, res) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
    secure: false,
  });

  res.status(StatusCodes.OK).json({
    msg: "successfuly logged out",
  });
};
