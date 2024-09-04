class UseFont extends HTMLElement {
	connectedCallback() {
		const newLink = document.createElement('link');
		newLink.rel = 'stylesheet';
		newLink.href = this.getAttribute('href');
		document.head.appendChild(newLink);
		this.remove();
	}
}

customElements.define('use-font', UseFont);
