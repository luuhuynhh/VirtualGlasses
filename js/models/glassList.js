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
        ele.innerHTML = `<img src="${glass.virtualImg}"/>`;

        const glassesInfo = document.querySelector("#glassesInfo");
        // console.log(glassesInfo);
        let content = `
            <div class="title">${glass.name} - ${glass.brand} (${glass.color})</div>
            <button class="btn btn-danger">$${glass.price}</button><span class="green">Stocking</span>
            <p class="description">${glass.description}</p>
        `
        glassesInfo.innerHTML = content;
        glassesInfo.style.display = "block";
    }
}