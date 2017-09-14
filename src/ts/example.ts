import * as insertHTML from "./index";

const {
	insertHTMLBeforeBegin,
	insertHTMLAfterBegin,
	insertHTMLBeforeEnd,
	insertHTMLAfterEnd,

	insertElementBeforeBegin,
	insertElementAfterBegin,
	insertElementBeforeEnd,
	insertElementAfterEnd,
} = insertHTML;

const elm1 = document.getElementById("elm1");

if (elm1 != null) {
	insertHTMLBeforeBegin(elm1, "before-begin");
	insertHTMLAfterBegin(elm1,  "after-begin");
	insertHTMLBeforeEnd(elm1,   "before-end");
	insertHTMLAfterEnd(elm1,    "after-end");
}

const elm2 = document.getElementById("elm2");

if (elm2 != null) {
	const elmBeforeBegin = document.createElement("span");
	elmBeforeBegin.textContent = "before-begin";
	insertElementBeforeBegin(elm2, elmBeforeBegin);

	const elmAfterBegin = document.createElement("span");
	elmAfterBegin.textContent = "after-begin";
	insertElementAfterBegin(elm2, elmAfterBegin);

	const elmBeforeEnd = document.createElement("span");
	elmBeforeEnd.textContent = "before-end";
	insertElementBeforeEnd(elm2, elmBeforeEnd);

	const elmAfterEnd = document.createElement("span");
	elmAfterEnd.textContent = "after-end";
	insertElementAfterEnd(elm2, elmAfterEnd);
}



