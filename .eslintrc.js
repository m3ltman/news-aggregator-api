module.exports = {
  extends: [
    'airbnb-base',
  ],
  rules: {
    "no-underscore-dangle":  ["error", { "allow": ["_id"] }],
    "max-len": ["error", { "code": 135 }],
  },
};
