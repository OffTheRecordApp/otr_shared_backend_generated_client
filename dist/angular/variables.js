"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COLLECTION_FORMATS = exports.BASE_PATH = void 0;
var core_1 = require("@angular/core");
exports.BASE_PATH = new core_1.InjectionToken('basePath');
exports.COLLECTION_FORMATS = {
    'csv': ',',
    'tsv': '   ',
    'ssv': ' ',
    'pipes': '|'
};
