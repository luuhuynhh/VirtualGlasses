export class GlassList {
    list = [];

    constructor(list) {
        this.list = list;
    }

    renderGlassList(selector) {
        const element = document.querySelector(selector);
        console.log(element);
        const html = this.list.reduce((content, glass) => {
            return content += `
                <img class="col-4 vglasses__items" id=${glass.id} src="${glass.src}"/>
            `
        }, '');
        element.innerHTML = html;
        this.addClickForImgs(selector);
    }
    addClickForImgs(selector) {
        const element = document.querySelector(selector);
        console.log(element);
        const imgs = document.querySelectorAll(`${selector} img`);
        console.log(imgs);
        for (let img of imgs) {
            img.onclick = () => {
                this.thuKinh('#avatar', img);
            }
        }
    }
    thuKinh(selector, img) {
        const ele = document.querySelector(selector);
        const { id } = img;
        const glass = this.list.find(glass => glass.id == id);
        ele.innerHTML = `<img src="${glass.virtualImg}"/>`
    }
}