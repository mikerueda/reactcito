;(() => {
	let rootElement, rootDomElement

	class Component {

	}

	const appendProp = (element, name, value) => {
		element.setAttribute(name, value)
	}

	const createReactcitoElement = (tagName, props) => {
		let { textContent, children } = props
		const domElement = document.createElement(tagName)
		if (textContent) domElement.innerText = textContent
		children && children.forEach((child) => domElement.appendChild(child))
		Object.entries(props).forEach((prop) => appendProp(domElement, prop[0], prop[1]))
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
	window.Reactcito = {
		render: renderElement
	}
	
})()