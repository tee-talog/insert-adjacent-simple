import * as insertHTML from "../index";

const {
	insertHTMLBeforeBegin,
	insertHTMLAfterBegin,
	insertHTMLBeforeEnd,
	insertHTMLAfterEnd,

	insertElementBeforeBegin,
	insertElementAfterBegin,
	insertElementBeforeEnd,
	insertElementAfterEnd,

	insertTextBeforeBegin,
	insertTextAfterBegin,
	insertTextBeforeEnd,
	insertTextAfterEnd,
} = insertHTML;

const elm1 = document.getElementById("elm1");

if (elm1 != null) {
	insertHTMLBeforeBegin(elm1, "<span>before-begin</span>");
	insertHTMLAfterBegin(elm1,  "<span>after-begin</span>");
	insertHTMLBeforeEnd(elm1,   "<span>before-end</span>");
	insertHTMLAfterEnd(elm1,    "<span>after-end</span>");
}


const elm2 = document.getElementById("elm2");

if (elm2 != null) {
	const elmBeforeBegin = document.createElement("span");
	elmBeforeBegin.textContent = "before-begin";
	elmBeforeBegin.className = "border2";
	insertElementBeforeBegin(elm2, elmBeforeBegin);

	const elmAfterBegin = document.createElement("span");
	elmAfterBegin.textContent = "after-begin";
	elmAfterBegin.className = "border2";
	insertElementAfterBegin(elm2, elmAfterBegin);

	const elmBeforeEnd = document.createElement("span");
	elmBeforeEnd.textContent = "before-end";
	elmBeforeEnd.className = "border2";
	insertElementBeforeEnd(elm2, elmBeforeEnd);

	const elmAfterEnd = document.createElement("span");
	elmAfterEnd.textContent = "after-end";
	elmAfterEnd.className = "border2";
	insertElementAfterEnd(elm2, elmAfterEnd);
}


const elm3 = document.getElementById("elm3");

if (elm3 != null) {
	insertTextBeforeBegin(elm3, "before-begin");
	insertTextAfterBegin(elm3,  "after-begin");
	insertTextBeforeEnd(elm3,   "before-end");
	insertTextAfterEnd(elm3,    "after-end");
}


