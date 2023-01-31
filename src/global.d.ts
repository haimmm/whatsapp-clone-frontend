// do *not* change this file name, it must be 'global.d.ts' to work as expected !

// reqired in order to import images as 'import img from <path>' instead of 'const img = require(<path>)
// solution found at  https://github.com/Microsoft/TypeScript-React-Starter/issues/12
declare module '*.png'
declare module '*.svg'
