import WebpackObfuscator from "webpack-obfuscator"
import path from 'path';
import {
    fileURLToPath
} from 'url';
const __filename = fileURLToPath(
    import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.join(__dirname, '/dist/');

export default {

    // production mode
    mode: "production",

    // input file
    entry: ["./src/fishjoy.js", "./src/R.js", "./src/Utils.js", "./src/FishManager.js", "./src/FishGroup.js", "./src/leaderboard.js",
        "./src/views/Fish.js", "./src/views/Cannon.js", "./src/views/Bullet.js", "./src/views/Num.js", "./src/views/Player.js"
    ],

    plugins: [
        new WebpackObfuscator({
            rotateStringArray: true
        }, [])
    ],

    // output file
    output: {
        // file name
        filename: "bundle.js",

        // complete path
        path: DIST_DIR

    }
}