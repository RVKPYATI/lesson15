'use strict';

const DomElement = function(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
};

DomElement.prototype.creacteDom = function() {
    const addElem = (elem)=> {
        elem.classList.add(this.selector.slice(1));
        elem.style.cssText = `
        height: ${this.height}px;
        width: ${this.width}px;
        background: ${this.bg};
        font-size: ${this.fontSize}px;
        `;
        elem.textContent = "Любой текст";
        return elem;
    };
    if(this.selector[0] === '.') {
        const div = document.createElement('div');
        addElem(div);
        return div;
        
    }
    if(this.selector[0] === '#') {
        const parag = document.createElement('p');
        addElem(parag);
        return parag;
    }
};

const newObjDiv = new DomElement('.block', 100, 100, 'red', 16);
const newObjParag = new DomElement('#best', 50, 70, 'green', 14);

document.body.append(newObjDiv.creacteDom());
document.body.append(newObjParag.creacteDom());


