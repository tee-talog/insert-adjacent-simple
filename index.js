module.exports.insertHTMLBeforeBegin = function insertHTMLBeforeBegin(element, text) {
	element.insertAdjacentHTML("beforebegin", text);
};
module.exports.insertHTMLAfterBegin = function insertHTMLAfterBegin(element, text) {
	element.insertAdjacentHTML("afterbegin", text);
};
module.exports.insertHTMLBeforeEnd = function insertHTMLBeforeEnd(element, text) {
	element.insertAdjacentHTML("beforeend", text);
};
module.exports.insertHTMLAfterEnd = function insertHTMLAfterEnd(element, text) {
	element.insertAdjacentHTML("afterend", text);
};

module.exports.insertElementBeforeBegin = function insertElementBeforeBegin(targetElement, element) {
	targetElement.insertAdjacentElement("beforebegin", element);
};
module.exports.insertElementAfterBegin = function insertElementAfterBegin(targetElement, element) {
	targetElement.insertAdjacentElement("afterbegin", element);
};
module.exports.insertElementBeforeEnd = function insertElementBeforeEnd(targetElement, element) {
	targetElement.insertAdjacentElement("beforeend", element);
};
module.exports.insertElementAfterEnd = function insertElementAfterEnd(targetElement, element) {
	targetElement.insertAdjacentElement("afterend", element);
};

