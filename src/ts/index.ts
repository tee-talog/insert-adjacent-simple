export function insertHTMLBeforeBegin(element: HTMLElement, text: string): void {
	element.insertAdjacentHTML("beforebegin", text);
};
export function insertHTMLAfterBegin(element: HTMLElement, text: string): void {
	element.insertAdjacentHTML("afterbegin", text);
};
export function insertHTMLBeforeEnd(element: HTMLElement, text: string): void {
	element.insertAdjacentHTML("beforeend", text);
};
export function insertHTMLAfterEnd(element: HTMLElement, text: string): void {
	element.insertAdjacentHTML("afterend", text);
};

export function insertElementBeforeBegin(targetElement: HTMLElement, element: HTMLElement): HTMLElement | null {
	return targetElement.insertAdjacentElement("beforebegin", element);
};
export function insertElementAfterBegin(targetElement: HTMLElement, element: HTMLElement): HTMLElement | null {
	return targetElement.insertAdjacentElement("afterbegin", element);
};
export function insertElementBeforeEnd(targetElement: HTMLElement, element: HTMLElement): HTMLElement | null {
	return targetElement.insertAdjacentElement("beforeend", element);
};
export function insertElementAfterEnd(targetElement: HTMLElement, element: HTMLElement): HTMLElement | null {
	return targetElement.insertAdjacentElement("afterend", element);
};

