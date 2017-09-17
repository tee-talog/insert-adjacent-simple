"use strict";
exports.__esModule = true;
function insertHTMLBeforeBegin(element, text) {
    element.insertAdjacentHTML("beforebegin", text);
}
exports.insertHTMLBeforeBegin = insertHTMLBeforeBegin;
;
function insertHTMLAfterBegin(element, text) {
    element.insertAdjacentHTML("afterbegin", text);
}
exports.insertHTMLAfterBegin = insertHTMLAfterBegin;
;
function insertHTMLBeforeEnd(element, text) {
    element.insertAdjacentHTML("beforeend", text);
}
exports.insertHTMLBeforeEnd = insertHTMLBeforeEnd;
;
function insertHTMLAfterEnd(element, text) {
    element.insertAdjacentHTML("afterend", text);
}
exports.insertHTMLAfterEnd = insertHTMLAfterEnd;
;
function insertElementBeforeBegin(targetElement, element) {
    return targetElement.insertAdjacentElement("beforebegin", element);
}
exports.insertElementBeforeBegin = insertElementBeforeBegin;
;
function insertElementAfterBegin(targetElement, element) {
    return targetElement.insertAdjacentElement("afterbegin", element);
}
exports.insertElementAfterBegin = insertElementAfterBegin;
;
function insertElementBeforeEnd(targetElement, element) {
    return targetElement.insertAdjacentElement("beforeend", element);
}
exports.insertElementBeforeEnd = insertElementBeforeEnd;
;
function insertElementAfterEnd(targetElement, element) {
    return targetElement.insertAdjacentElement("afterend", element);
}
exports.insertElementAfterEnd = insertElementAfterEnd;
;
