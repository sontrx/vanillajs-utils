import { uglify } from "rollup-plugin-uglify";

export default {
    input: 'src/main.js',
    output: {
        file: 'dist/js/main.js',
        format: 'umd',
        name: 'app',
    },
    plugins: [uglify()],
};