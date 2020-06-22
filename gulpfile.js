'use strict';

var fs      = require('file-system');
var gulp    = require('gulp');
var gutil   = require('gulp-util');

var uglify  = require('gulp-uglify');
var notify  = require('gulp-notify');
var rename  = require('gulp-rename');
var del     = require('del');

var apis = [
        {
            swagger: 'api/otr-service.json',
            moduleName: 'otrBackendService',
            className: 'OtrService'
        }
];

gulp.task('clean', function(){
    del(['dist']).then(function(paths) {
        console.log("Deleted files and folders:\n" + paths.join('\n'));
    });
});

gulp.task('otr-angular', function(done){
    
    var CodeGen = require('swagger-js-codegen').CodeGen;
    var dest = 'dist';
    apis.forEach(function(api){
        var swagger = JSON.parse(fs.readFileSync(api.swagger, 'utf-8'));
        var source = CodeGen.getAngularCode({ moduleName: api.moduleName, className: api.className, swagger: swagger });
        gutil.log('Generated ' + api.moduleName + '.js from ' + api.swagger);

        var generatedApiFile = dest + '/' + api.moduleName + '.js';
        fs.writeFileSync(generatedApiFile, source, 'UTF-8');

        //var otherSources = 'input/**/*.js';

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
});


gulp.task('codegen', ['otr-angular']);
