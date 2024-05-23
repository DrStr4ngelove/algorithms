// jest.config.js
module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest", // Transpile JavaScript and JSX files using babel-jest
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  preset: "ts-jest",
  moduleFileExtensions: ["js", "jsx", "json", "node", "ts", "tsx"], // Recognize these file extensions
};
