export function insertHTMLBeforeBegin(element: Element, text: string): void {
	element.insertAdjacentHTML("beforebegin", text);
};
export function insertHTMLAfterBegin(element: Element, text: string): void {
	element.insertAdjacentHTML("afterbegin", text);
};
export function insertHTMLBeforeEnd(element: Element, text: string): void {
	element.insertAdjacentHTML("beforeend", text);
};
export function insertHTMLAfterEnd(element: Element, text: string): void {
	element.insertAdjacentHTML("afterend", text);
};

export function insertElementBeforeBegin(targetElement: Element, element: Element): Element | null {
	return targetElement.insertAdjacentElement("beforebegin", element);
};
export function insertElementAfterBegin(targetElement: Element, element: Element): Element | null {
	return targetElement.insertAdjacentElement("afterbegin", element);
};
export function insertElementBeforeEnd(targetElement: Element, element: Element): Element | null {
	return targetElement.insertAdjacentElement("beforeend", element);
};
export function insertElementAfterEnd(targetElement: Element, element: Element): Element | null {
	return targetElement.insertAdjacentElement("afterend", element);
};

