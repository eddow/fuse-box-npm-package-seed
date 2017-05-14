const {FuseBox, Sparky} = require("fuse-box");

const fuse = FuseBox.init({
    homeDir: "./src",
    package: {
        name: 'fuse-box-npm-package-seed',
        main: 'src/index.ts',
    },
    output: "dist/$name.js",
});

fuse.dev();

fuse.bundle("index.js")
    .instructions("> index.ts")
    .watch();

fuse.run();

Sparky.task("default", () => {
        return Sparky.watch("./assets", {base: "./src"})
            .dest("./dist");
    }
);