const { StatusCodes } = require("http-status-codes");
const { Restaurant, Category } = require("../models");
const { NotFoundError } = require("../errors/custom-error");

exports.getAllRestaurants = async (req, res) => {
  const r = await Restaurant.findAll({
    include: [{ model: Category, as: "categories" }],
  });

  res.status(StatusCodes.OK).json({
    data: r,
  });
};

exports.getRestaurantById = async (req, res) => {
  const r = await Restaurant.findAll({
    where: {
      id: Number(req.params.id),
    },
    include: [{ model: Category, as: "categories" }],
  });

  if (!r) {
    throw new NotFoundError(`restaurant not found with id ${req.params.id}`);
  }

  res.status(StatusCodes.OK).json({
    data: r,
  });
};
