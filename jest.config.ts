//jest.config.js

type ALIAS_PATH = { [key: string]: string };
type ALIAS_PATHS = { [key: string]: string[] };

const TS_CONFIG_PATH = './tsconfig.json';
const compilerOptions = require(TS_CONFIG_PATH).compilerOptions;
// console.log('msg', compilerOptions.paths);


const srcPath:string = '<rootDir>/src';
const jestAliases:ALIAS_PATH = {};
// let tsDefinedPaths:ALIAS_PATHS = { "~/common/*": ["common/*"] }
let tsDefinedPaths:ALIAS_PATHS = compilerOptions.paths;

Object.keys(tsDefinedPaths).forEach((item) => {
  const key = item.replace('/*', '/(.*)');
  const path = tsDefinedPaths[item][0].replace('/*', '/$1');
  jestAliases[key] = srcPath + '/' + path;
});

module.exports = {
  'roots': [
    '<rootDir>/src'
  ],
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  'moduleNameMapper': jestAliases
};