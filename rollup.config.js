import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

export default {
    input: "index.ts",
    output: [
        {
            file: "dist/index.cjs.js",
            format: "cjs",
            sourcemap: true,
        },
        {
            file: "dist/index.esm.js",
            format: "esm",
            sourcemap: true,
        },
    ],
    plugins: [peerDepsExternal(), resolve(), commonjs(), typescript()],
    external: ["react"],
};
