// jest.config.js
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.(css|scss|png|jpg|svg)$": "jest-transform-stub",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
