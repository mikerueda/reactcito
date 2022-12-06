;(() => {
	let rootElement, rootDomElement

	class Component {

	}

	const createReactcitoElement = (tagName, props) => {
		let { textContent, children } = props
		const domElement = document.createElement(tagName)
		if (textContent) domElement.innerText = textContent
		children && children.forEach((child) => domElement.appendChild(child))
		return domElement	
	}

	const renderElement = (element, domElement) => {
		rootElement = element
		rootDomElement = domElement
		const currentDom = rootElement.render()
		rootDomElement.appendChild(currentDom)
	}

	window.Component = Component
	window.createElement = createReactcitoElement
	window.MiniReact = {
		render: renderElement
	}
	
})()