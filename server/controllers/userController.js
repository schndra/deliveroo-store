const { StatusCodes } = require("http-status-codes");
const { NotFoundError } = require("../errors/custom-error");

//models
const { User } = require("../models");

exports.getCurrentUser = async (req, res) => {
  const user = await User.findOne({
    where: {
      id: Number(req.user.id),
    },
    attributes: { exclude: ["password"] },
  });

  const currUser = user.toJSON();
  res.status(StatusCodes.OK).json({ user: currUser });
};

exports.getSingleUser = async (req, res) => {
  const u = await User.findOne({
    where: {
      id: Number(req.params.id),
    },
  });

  if (!u) {
    throw new NotFoundError(`theres is no user with id: ${req.params.id}`);
  }

  res.status(StatusCodes.OK).json({
    user: u.toJSON(),
  });
};
