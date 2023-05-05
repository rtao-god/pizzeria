const {src, dest} = require('gulp')

const sass = require("gulp-sass")(require("sass"))


function styles() {
    return src('src/mainSass/main.sass')
        .pipe(sass())
        .pipe(dest("src/css"))
}

exports.styles = styles