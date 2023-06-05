class InafeBox {
    _domElement;
    constructor(parent , imageSources) {
        this._domElement = this.#createElement(parent, imageSources);
    }

    showHideImages() {
        let image = this._domElement.querySelector('img')
        let isVisible = image.style.display === 'block'
        image.style.display =isVisible ? 'none' : 'block';
        let button = this._domElement.querySelector('button')
        button.textContent = isVisible ? 'Hide image' :"Show image"
    }

    #createElement(parent,imageSource) {
        let div = document.createElement("div");
        let image = document.createElement("img");
        image.src = imageSource;
        let button = document.createElement("button");
        button.textContent = "Hide image";

        button.addEventListener("click",this.showHideImages.bind(this) )

        div.appendChild(image);
        div.appendChild(button);

        parent.appendChild(div);

        return div;
    }

}
let main = document.getElementById('main')
let catImage = new InafeBox(main, 'https://http.cat/100')