"use strict";

var _A08_ExportModule = require("./A08_ExportModule");

var _A09_DefaultModule = _interopRequireDefault(require("./A09_DefaultModule"));

var _jqueryMin = _interopRequireDefault(require("node_modules/jquery/dist/jquery.min.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 아직 브라우저에서 지원하지 않는다.
// default로 넘어온 값은 임의의 이름으로 설정해 사용가능하다.
// 즉 onAdd로 넘어온 값을 abc라는 이름으로 사용하겠다
console.log(_A08_ExportModule.num);
console.log((0, _A08_ExportModule.onAdd)(10, 20));
console.log((0, _A08_ExportModule.longNameFunction)());
console.log((0, _A09_DefaultModule["default"])(100, 299));