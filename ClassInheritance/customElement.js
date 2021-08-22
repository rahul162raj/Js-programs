class CCHTMLElement {
  attributes = [];
  setAttributes(attributeName, attributeValue) {
    let attributeObject = {
      name: attributeName,
      value: attributeValue,
    };
    this.attributes.push(attributeObject);
  }
  click() {
    alert("called parent prototype method");
  }
  focus() {
    alert("focused");
  }
}

// paragraph element
class CCHTMLParagraphElement extends CCHTMLElement {
  constructor() {
    super();
  }
  value = "";
  render() {
    renderElement(
      `<p ${this.attributes
        .map((attribute) => `${attribute.name} = ${attribute.value}`)
        .join(" ")}>${this.value}</p>`
    );
  }
}

// image element
class CCHTMLImageElement extends CCHTMLElement {
  constructor() {
    super();
  }
  src = "";
  render() {
    renderElement(
      `<img  src=${this.src} ${this.attributes
        .map((attribute) => `${attribute.name} = ${attribute.value}`)
        .join(" ")} />`
    );
  }
}

// render Element to DOM
function renderElement(element) {
  let container = document.getElementById("customElementContainer");
  container.innerHTML += element;
}

// create element based on tag name
export default function createCCHTMLElement(tag) {
  switch (tag) {
    case "p": {
      return new CCHTMLParagraphElement();
    }
    case "img": {
      return new CCHTMLImageElement();
    }
  }
}
