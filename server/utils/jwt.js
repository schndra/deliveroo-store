const jwt = require("jsonwebtoken");

const createJWT = ({ payload }) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET_KEY);
  return token;
};

const attachCookie = ({ res, user, refreshToken }) => {
  const access_token = createJWT({ payload: { user } });
  const refresh_token = createJWT({ payload: { user, refreshToken } });

  const day = 1000 * 60 * 60 * 24;

  res.cookie("accessToken", access_token, {
    httpOnly: true,
    secure: false,
    maxAge: 1000,
    // expires: new Date(Date.now() + day),
    // signed: true,
  });

  res.cookie("refreshToken", refresh_token, {
    httpOnly: true,
    secure: false,
    // maxAge: 1000,
    expires: new Date(Date.now() + day),
    // signed: true,
  });
};

module.exports = {
  createJWT,
  attachCookie,
};
