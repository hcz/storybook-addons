(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{198:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default="\n--gap: 16px;\n--col-gap-third: calc(var(--gap) * 0.33);\n--col-gap-half: calc(var(--gap) * 0.5);\n--col-gap-two-thirds: calc(var(--gap) * 0.66);\n--col-gap-full: var(--gap);\n--col-gap-2x: calc(var(--gap) * 2);\n--col-gap-3x: calc(var(--gap) * 3);\n\n@media screen and (min-width: 737px) {\n\t--gap: 32px;\n}\n\n@media screen and (min-width: 1024px) {\n\t--gap: 40px;\n}\n\n@media screen and (min-width: 1280px) {\n\t--gap: 48px;\n}\n"},345:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default="\n--color-bg-brand: #56453;\n--color-bg-action: #1754f7;\n--color-bg-selection: #cc51f5;\n--color-bg-hover: #f924cd;\n--color-bg-border: #e10de;\n--color-bg-stripe: #7a7205;\n--color-bg-ghost: #2cece1;\n--color-bg-default: #727a06;\n--color-bg-tone: #a23c2b;\n--color-bg-soft: #ac4404;\n--color-bg-success: #afc4e;\n--color-bg-alert: #c832dc;\n--color-bg-warning: #5456eb;\n--color-bg-normal: #cbd54c;\n--color-bg-system: #ada130;\n--color-bg-link: #76b772;\n--color-typo-brand: #88f110;\n--color-typo-primary: #9f7b1c;\n--color-typo-promo: #ededbb;\n--color-typo-secondary: #a5ef45;\n--color-typo-ghost: #a35649;\n--color-typo-disable: #babf8d;\n--color-typo-success: #81a2f5;\n--color-typo-warning: #cb2cbd;\n--color-typo-alert: #462736;\n--color-typo-normal: #2cc273;\n--color-typo-system: #ef1bd2;\n--color-link: #56fe81;\n--color-link-external: #d7bd8c;\n--color-link-minor: #fc87e6;\n--color-link-hover: #e35e4b;\n"},346:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default="\n--color-bg-brand: #40b9d5;\n--color-bg-action: #2ef798;\n--color-bg-selection: #c9c687;\n--color-bg-hover: #87ad24;\n--color-bg-border: #bbbd33;\n--color-bg-stripe: #b70112;\n--color-bg-ghost: #4838a;\n--color-bg-default: #f009f6;\n--color-bg-tone: #495cd9;\n--color-bg-soft: #ec0ad0;\n--color-bg-success: #15492d;\n--color-bg-alert: #bdd7aa;\n--color-bg-warning: #6c799;\n--color-bg-normal: #1a15ab;\n--color-bg-system: #51fdda;\n--color-bg-link: #4dd83;\n--color-typo-brand: #b79917;\n--color-typo-primary: #cd6768;\n--color-typo-promo: #da7bb2;\n--color-typo-secondary: #18d5b2;\n--color-typo-ghost: #8027c6;\n--color-typo-disable: #abb9f4;\n--color-typo-success: #3628f2;\n--color-typo-warning: #24ce69;\n--color-typo-alert: #828be7;\n--color-typo-normal: #5cfe1;\n--color-typo-system: #60ac41;\n--color-link: #43fa2a;\n--color-link-external: #8ca58d;\n--color-link-minor: #13701a;\n--color-link-hover: #91edb4;\n"},347:function(module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.themepack=void 0;var src_1=__webpack_require__(890),colorMyDefault_1=__importDefault(__webpack_require__(345)),colorMyBrand_1=__importDefault(__webpack_require__(891)),colorMyInverse_1=__importDefault(__webpack_require__(892)),colorMySuccess_1=__importDefault(__webpack_require__(893)),colorProjectBrand_1=__importDefault(__webpack_require__(894)),colorProjectDefault_1=__importDefault(__webpack_require__(346)),colorProjectInverse_1=__importDefault(__webpack_require__(895)),colorProjectSuccess_1=__importDefault(__webpack_require__(896)),gapMedium_1=__importDefault(__webpack_require__(198)),gapSmall_1=__importDefault(__webpack_require__(897)),defaultMyTheme_1=__importDefault(__webpack_require__(898)),defaultProjectTheme_1=__importDefault(__webpack_require__(899));exports.themepack={brand:["Brand",src_1.pack({My:defaultMyTheme_1.default,Project:defaultProjectTheme_1.default})],color:["Color",src_1.pack({colorMyDefault:colorMyDefault_1.default,colorMyBrand:colorMyBrand_1.default,colorMyInverse:colorMyInverse_1.default,colorMySuccess:colorMySuccess_1.default},(function(_a){var brand=_a.brand;return!!brand&&"My"===brand})),src_1.pack({colorProjectBrand:colorProjectBrand_1.default,colorProjectDefault:colorProjectDefault_1.default,colorProjectInverse:colorProjectInverse_1.default,colorProjectSuccess:colorProjectSuccess_1.default},(function(_a){var brand=_a.brand;return!!brand&&"Project"===brand}))],gap:["Gap",src_1.pack({gapSmall:gapSmall_1.default,gapMedium:gapMedium_1.default})]}},348:function(module,exports,__webpack_require__){__webpack_require__(349),__webpack_require__(698),module.exports=__webpack_require__(699)},482:function(module,exports){},699:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(41),__webpack_require__(33),__webpack_require__(27),__webpack_require__(42),__webpack_require__(43),__webpack_require__(73);var _storybook_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(129),_themepack__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(347);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_6__.addParameters)({themepack:{preloadedState:{brand:"My"},pack:_themepack__WEBPACK_IMPORTED_MODULE_7__.themepack,icon:"mirror",usePreview:!0,labelForClear:"Remove",sortFunction:function sortFunction(a,b){return"brand"===a?1:a===b?0:a>b?1:-1},styles:{preview:"\n\t\t\t\tborder-color: var(--color-bg-border);\n\t\t\t\tcolor: var(--color-typo-brand);\n\t\t\t\tbackground-color: var(--color-bg-default);\n\t\t\t",iframe:"\n\t\t\t\tbackground-color: var(--color-bg-default);\n\t\t\t"}}});var context=__webpack_require__(900);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_6__.configure)((function(){context.keys().forEach((function(filename){return context(filename)}))}),module)}.call(this,__webpack_require__(700)(module))},890:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.pack=void 0,exports.pack=function pack(options,condition){var pack={options:[]};if(Array.isArray(options))pack.options=options;else{if(!options)return;pack.options=Object.keys(options).map((function(label){return{css:options[label],label:label}}))}return"function"==typeof condition&&(pack.condition=condition),pack}},891:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default="\n--color-bg-brand: #3e49dc;\n--color-bg-action: #c803d0;\n--color-bg-selection: #d72bb1;\n--color-bg-hover: #301a32;\n--color-bg-border: #22068d;\n--color-bg-stripe: #accaf3;\n--color-bg-ghost: #ef4772;\n--color-bg-default: #525e50;\n--color-bg-tone: #1c87d3;\n--color-bg-soft: #bfabc3;\n--color-bg-success: #7a6277;\n--color-bg-alert: #b09e4;\n--color-bg-warning: #cb33b5;\n--color-bg-normal: #45619d;\n--color-bg-system: #20ad3f;\n--color-bg-link: #239e3;\n--color-typo-brand: #4b3565;\n--color-typo-primary: #7828f6;\n--color-typo-promo: #8db0a1;\n--color-typo-secondary: #4c0dbb;\n--color-typo-ghost: #16802;\n--color-typo-disable: #9759e1;\n--color-typo-success: #482493;\n--color-typo-warning: #c31e4;\n--color-typo-alert: #f1509c;\n--color-typo-normal: #f764d6;\n--color-typo-system: #79e201;\n--color-link: #258b73;\n--color-link-external: #d4503c;\n--color-link-minor: #b44854;\n--color-link-hover: #f0227e;\n"},892:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default="\n--color-bg-brand: #69221e;\n--color-bg-action: #879d60;\n--color-bg-selection: #b72ae6;\n--color-bg-hover: #616b7a;\n--color-bg-border: #667bd9;\n--color-bg-stripe: #d64845;\n--color-bg-ghost: #9786fc;\n--color-bg-default: #54e790;\n--color-bg-tone: #e316fd;\n--color-bg-soft: #987b7a;\n--color-bg-success: #c4e309;\n--color-bg-alert: #44fd14;\n--color-bg-warning: #9dca92;\n--color-bg-normal: #5e3c13;\n--color-bg-system: #de59e1;\n--color-bg-link: #96c73a;\n--color-typo-brand: #b1120d;\n--color-typo-primary: #aca958;\n--color-typo-promo: #a970f9;\n--color-typo-secondary: #c9ab8d;\n--color-typo-ghost: #148693;\n--color-typo-disable: #c91221;\n--color-typo-success: #386b92;\n--color-typo-warning: #76c331;\n--color-typo-alert: #c1a1f8;\n--color-typo-normal: #e8cc74;\n--color-typo-system: #2d6864;\n--color-link: #9db5e0;\n--color-link-external: #df41f2;\n--color-link-minor: #d9ddf8;\n--color-link-hover: #e363f7;\n"},893:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default="\n--color-bg-brand: #bf1ebc;\n--color-bg-action: #b8ac8c;\n--color-bg-selection: #fbc767;\n--color-bg-hover: #7cff7c;\n--color-bg-border: #e6fc54;\n--color-bg-stripe: #802b34;\n--color-bg-ghost: #cf0887;\n--color-bg-default: #4b9ef0;\n--color-bg-tone: #733adb;\n--color-bg-soft: #5c9a4c;\n--color-bg-success: #5d0a25;\n--color-bg-alert: #cfcd4f;\n--color-bg-warning: #fb9bc2;\n--color-bg-normal: #b98fe;\n--color-bg-system: #636639;\n--color-bg-link: #ed62ae;\n--color-typo-brand: #b228a0;\n--color-typo-primary: #d65966;\n--color-typo-promo: #6a937;\n--color-typo-secondary: #8ab670;\n--color-typo-ghost: #774c53;\n--color-typo-disable: #110866;\n--color-typo-success: #77d0e0;\n--color-typo-warning: #e58f94;\n--color-typo-alert: #e73544;\n--color-typo-normal: #b9bd01;\n--color-typo-system: #713a5e;\n--color-link: #eaab47;\n--color-link-external: #1be8f;\n--color-link-minor: #c4f8ba;\n--color-link-hover: #927962;\n"},894:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default="\n--color-bg-brand: #606e1a;\n--color-bg-action: #df0b02;\n--color-bg-selection: #61cb39;\n--color-bg-hover: #df2fbc;\n--color-bg-border: #112c45;\n--color-bg-stripe: #17a378;\n--color-bg-ghost: #59e842;\n--color-bg-default: #a86c0f;\n--color-bg-tone: #e10c3b;\n--color-bg-soft: #bff95d;\n--color-bg-success: #7a3280;\n--color-bg-alert: #bf0cbc;\n--color-bg-warning: #2cec08;\n--color-bg-normal: #17e11f;\n--color-bg-system: #794284;\n--color-bg-link: #20b0a0;\n--color-typo-brand: #d76f6a;\n--color-typo-primary: #ddad63;\n--color-typo-promo: #4bdb56;\n--color-typo-secondary: #ab4024;\n--color-typo-ghost: #852be0;\n--color-typo-disable: #ad4ff8;\n--color-typo-success: #a66a0e;\n--color-typo-warning: #395cb2;\n--color-typo-alert: #9eb639;\n--color-typo-normal: #4586e0;\n--color-typo-system: #3a130e;\n--color-link: #d2d4c7;\n--color-link-external: #16da3a;\n--color-link-minor: #994520;\n--color-link-hover: #af736a;\n"},895:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default="\n--color-bg-brand: #8009a2;\n--color-bg-action: #ca7707;\n--color-bg-selection: #772b5;\n--color-bg-hover: #23cf22;\n--color-bg-border: #d7c3e7;\n--color-bg-stripe: #2ce31a;\n--color-bg-ghost: #aa6996;\n--color-bg-default: #2f3411;\n--color-bg-tone: #828fda;\n--color-bg-soft: #d15b8c;\n--color-bg-success: #86bcb;\n--color-bg-alert: #ed86c1;\n--color-bg-warning: #220b7b;\n--color-bg-normal: #ea7b91;\n--color-bg-system: #2f30c4;\n--color-bg-link: #3ea7a4;\n--color-typo-brand: #9281fc;\n--color-typo-primary: #46aac4;\n--color-typo-promo: #107c67;\n--color-typo-secondary: #ccac36;\n--color-typo-ghost: #9d05ca;\n--color-typo-disable: #f42fb0;\n--color-typo-success: #e92e30;\n--color-typo-warning: #73606e;\n--color-typo-alert: #b08b78;\n--color-typo-normal: #152609;\n--color-typo-system: #73e095;\n--color-link: #502c66;\n--color-link-external: #88659d;\n--color-link-minor: #6105dd;\n--color-link-hover: #5fffd9;\n"},896:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default="\n--color-bg-brand: #24f144;\n--color-bg-action: #ff7350;\n--color-bg-selection: #a50bc8;\n--color-bg-hover: #9c1db7;\n--color-bg-border: #b554d0;\n--color-bg-stripe: #663ede;\n--color-bg-ghost: #562f69;\n--color-bg-default: #9286c3;\n--color-bg-tone: #e5033b;\n--color-bg-soft: #2e3dc5;\n--color-bg-success: #b7f048;\n--color-bg-alert: #817bfc;\n--color-bg-warning: #1acc52;\n--color-bg-normal: #52f345;\n--color-bg-system: #3c1931;\n--color-bg-link: #fbfc80;\n--color-typo-brand: #1d5802;\n--color-typo-primary: #1f16d2;\n--color-typo-promo: #b975a3;\n--color-typo-secondary: #1367a3;\n--color-typo-ghost: #55ed96;\n--color-typo-disable: #440494;\n--color-typo-success: #a59add;\n--color-typo-warning: #594655;\n--color-typo-alert: #f21bdb;\n--color-typo-normal: #9c0f5e;\n--color-typo-system: #9f82a1;\n--color-link: #aff4a7;\n--color-link-external: #b16eac;\n--color-link-minor: #6e94f4;\n--color-link-hover: #38a8ac;\n"},897:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default="\n--gap: 12px;\n--col-gap-third: calc(var(--gap) * 0.33);\n--col-gap-half: calc(var(--gap) * 0.5);\n--col-gap-two-thirds: calc(var(--gap) * 0.66);\n--col-gap-full: var(--gap);\n--col-gap-2x: calc(var(--gap) * 2);\n--col-gap-3x: calc(var(--gap) * 3);\n\n@media screen and (min-width: 737px) {\n\t--gap: 20px;\n}\n\n@media screen and (min-width: 1024px) {\n\t--gap: 24px;\n}\n\n@media screen and (min-width: 1280px) {\n\t--gap: 32px;\n}\n"},898:function(module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var colorMyDefault_1=__importDefault(__webpack_require__(345)),gapMedium_1=__importDefault(__webpack_require__(198));exports.default="\n"+colorMyDefault_1.default+"\n"+gapMedium_1.default+"\n"},899:function(module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var colorProjectDefault_1=__importDefault(__webpack_require__(346)),gapMedium_1=__importDefault(__webpack_require__(198));exports.default="\n"+colorProjectDefault_1.default+"\n"+gapMedium_1.default+"\n"},900:function(module,exports,__webpack_require__){var map={"./index.example.tsx":901};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=900},901:function(module,exports,__webpack_require__){"use strict";(function(module){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__importDefault(__webpack_require__(73));__webpack_require__(129).storiesOf("Demo",module).add("zh ✨",(function(){return react_1.default.createElement("div",{style:{display:"inline-block",fontFamily:"Arial, Helvetica, sans-serif",borderRadius:"var(--col-gap-2x)",border:"var(--col-gap-third) solid var(--color-bg-stripe)",background:"repeating-linear-gradient(-45deg, var(--color-bg-tone) 0 2px, var(--color-bg-default) 0 7px)",color:"var(--color-typo-normal)",textShadow:"-1px 1px 5px var(--color-bg-soft), 1px 1px 1px var(--color-bg-normal)",padding:"var(--gap)"}},"見賢思齊焉。見不賢而禸自省也。")})).add("en ✨",(function(){return react_1.default.createElement("p",{style:{display:"block",fontFamily:"Arial, Helvetica, sans-serif",color:"var(--color-typo-brand)",background:"var(--color-bg-brand)",textShadow:"-1px 1px 5px var(--color-bg-brand), 1px 1px 1px var(--color-bg-normal)",padding:"var(--gap)"}},"When you meet someone better than yourself, turn your thoughts to becoming his equal.",react_1.default.createElement("br",null),"When you meet someone not as good as you are, look within and examine your own self.")}))}).call(this,__webpack_require__(95)(module))}},[[348,1,2]]]);
//# sourceMappingURL=main.bundle.js.map