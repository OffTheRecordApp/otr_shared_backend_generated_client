'use strict';

const fs = require('file-system');
const gulp    = require('gulp');
const gutil   = require('gulp-util');

const uglify  = require('gulp-uglify');
const notify  = require('gulp-notify');
const rename  = require('gulp-rename');
const del     = require('del');

let apis = [
        {
            swagger: 'api/otr-service.json',
            moduleName: 'otrBackendService',
            className: 'OtrService'
        }
];

function clean() {
    return del(['dist']).then(function(paths) {
        console.log("Deleted files and folders:\n" + paths.join('\n'));
    });
}

function otrAngular(done) {
    
    let CodeGen = require('swagger-js-codegen').CodeGen;
    let dest = 'dist';
    apis.forEach(function(api) {
        let swagger = JSON.parse(fs.readFileSync(api.swagger, 'utf-8'));
        let source = CodeGen.getAngularCode({ moduleName: api.moduleName, className: api.className, swagger: swagger });
        gutil.log('Generated ' + api.moduleName + '.js from ' + api.swagger);

        let generatedApiFile = dest + '/' + api.moduleName + '.js';
        fs.writeFileSync(generatedApiFile, source, 'UTF-8');

        //let otherSources = 'input/**/*.js';

        gulp.src([generatedApiFile]) //otherSources])
            //.pipe(concat('concat.js'))
            //.pipe(rename(api.moduleName + '.js')) //concat file back into module.js
            //.pipe(gulp.dest(dest))

            .pipe(uglify())
            .pipe(rename(api.moduleName + '.min.js'))
            .pipe(gulp.dest(dest))

            .pipe(notify("File has been successfully uglified!"));

    });
    done();
}

exports.codegen = gulp.series(otrAngular);
exports.default = exports.codegen;
