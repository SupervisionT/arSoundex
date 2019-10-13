import {terser} from 'rollup-plugin-terser';

module.exports = {
  plugins: [terser()],
  input: 'src/index.js',
  output: [
    {
      file: 'bundle/index.esm.js',
      format: 'esm',
    },
    {
      file: 'bundle/index.js',
      format: 'cjs',
    },
  ],
};
