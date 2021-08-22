function CHTMLElement() {
  //instance members
  this.attributes = [];
  this.setAttributes = function (attributeName, attributeValue) {
    let attributeObject = {
      name: attributeName,
      value: attributeValue,
    };
    this.attributes.push(attributeObject);
  };
}

//prototype members
CHTMLElement.prototype.click = function () {
  alert("called parent prototype method");
};
CHTMLElement.prototype.focus = function () {
  alert("focused");
};

// paragraph element
function CHTMLParagraphElement(param = "") {
  this.value = param;
  this.render = function () {
    renderElement(
      `<p ${this.attributes
        .map((attribute) => `${attribute.name} = ${attribute.value}`)
        .join(" ")}>${this.value}</p>`
    );
  };
}

extend(CHTMLParagraphElement, CHTMLElement);

// image element
function CHTMLImageElement(param = "") {
  this.src = param;
  this.render = function () {
    renderElement(
      `<img  src=${this.src} ${this.attributes
        .map((attribute) => `${attribute.name} = ${attribute.value}`)
        .join(" ")} />`
    );
  };
}

extend(CHTMLImageElement, CHTMLElement);

// inherit only prototype members
function extendProtoOnly(child, parent) {
  child.prototype = Object.create(parent.prototype);
  child.prototype.constructor = child;
}

// inherit both instance and prototype members
function extend(child, parent) {
  child.prototype = new parent();
  child.prototype.constructor = child;
}

// render Element to DOM
function renderElement(element) {
  let container = document.getElementById("customElementContainer");
  container.innerHTML += element;
}

// create element based on tag name
export default function createCHTMLElement(tag) {
  switch (tag) {
    case "p": {
      return new CHTMLParagraphElement();
    }
    case "img": {
      return new CHTMLImageElement();
    }
  }
}
