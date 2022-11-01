'use strict';

const DomElement = function(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
};

DomElement.prototype.creacteDom = function() {
    if(this.selector[0] === '.') {
        const div = document.createElement('div');
        div.classList.add(this.selector.slice(1));
        div.style.cssText = `
        height: ${this.height}px;
        width: ${this.width}px;
        background: ${this.bg};
        font-size: ${this.fontSize}px;
        `;
        div.textContent = "Любой текст";
        return div;
    }
    if(this.selector[0] === '#') {
        const parag = document.createElement('p');
        parag.id = (this.selector.slice(1));
        parag.style.cssText = `
        height: ${this.height}px;
        width: ${this.width}px;
        background: ${this.bg};
        font-size: ${this.fontSize}px;
        `;
        parag.textContent = "Любой текст";
        return parag;
    }
};

const newObjDiv = new DomElement('.block', 100, 100, 'red', 16);
const newObjParag = new DomElement('#best', 50, 70, 'green', 14);

console.log(newObjDiv.creacteDom());
console.log(newObjParag.creacteDom());

