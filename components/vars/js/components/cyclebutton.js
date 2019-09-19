const darkest = require('../darkest.js');
const staticAliases = require('../staticAliases.js');
const fontGlobals = require('../fontGlobals.js');
const large = require('../large.js');
const dimensionGlobals = require('../dimensionGlobals.js');
exports["text-color"] = darkest["text-color"];
exports["icon-color"] = darkest["icon-color"];
exports["border-size"] = staticAliases["border-size-thin"];
exports["background-color"] = darkest["background-color-transparent"];
exports["border-color"] = darkest["border-color-transparent"];
exports["hold-icon-color"] = darkest["icon-color"];
exports["text-color-hover"] = darkest["text-color-hover"];
exports["icon-color-hover"] = darkest["icon-color-hover"];
exports["border-size-hover"] = staticAliases["border-size-thin"];
exports["background-color-hover"] = darkest["background-color-transparent"];
exports["border-color-hover"] = darkest["border-color-transparent"];
exports["hold-icon-color-hover"] = darkest["icon-color-hover"];
exports["text-color-down"] = darkest["text-color-down"];
exports["icon-color-down"] = darkest["icon-color-down"];
exports["border-size-down"] = staticAliases["border-size-thin"];
exports["background-color-down"] = darkest["gray-300"];
exports["border-color-down"] = darkest["gray-300"];
exports["hold-icon-color-down"] = darkest["icon-color-down"];
exports["text-color-key-focus"] = darkest["text-color-hover"];
exports["icon-color-key-focus"] = darkest["icon-color-focus"];
exports["border-size-key-focus"] = staticAliases["border-size-thick"];
exports["border-color-key-focus"] = darkest["border-color-focus"];
exports["background-color-key-focus"] = darkest["background-color-transparent"];
exports["hold-icon-color-key-focus"] = darkest["icon-color-hover"];
exports["text-color-mouse-focus"] = darkest["text-color-hover"];
exports["text-color-disabled"] = darkest["text-color-disabled"];
exports["icon-color-disabled"] = darkest["icon-color-disabled"];
exports["border-size-disabled"] = staticAliases["border-size-thin"];
exports["background-color-disabled"] = darkest["background-color-transparent"];
exports["border-color-disabled"] = darkest["border-color-transparent"];
exports["hold-icon-color-disabled"] = darkest["icon-color-disabled"];
exports["text-font-family"] = staticAliases["body-text-font-family"];
exports["text-font-style"] = fontGlobals["style-regular"];
exports["text-font-weight"] = staticAliases["body-text-font-weight"];
exports["text-line-height"] = staticAliases["body-text-line-height"];
exports["text-letter-spacing"] = fontGlobals["letter-spacing-none"];
exports["text-transform"] = "none";
exports["text-size"] = large["font-size-default"];
exports["icon-size"] = large["workflow-icon-size"];
exports["text-baseline"] = large["size-150"];
exports["height"] = large["single-line-height"];
exports["min-width"] = large["size-400"];
exports["border-radius"] = large["border-radius-regular"];
exports["text-padding-x"] = large["size-150"];
exports["icon-padding-x"] = large["size-85"];
exports["icon-padding-y"] = large["size-85"];
exports["hold-icon-padding-bottom"] = large["size-40"];
exports["hold-icon-padding-right"] = large["size-40"];
exports["hold-icon-size"] = large["size-65"];
exports["touch-hit-x"] = dimensionGlobals["size-50"];
exports["touch-hit-y"] = dimensionGlobals["size-50"];