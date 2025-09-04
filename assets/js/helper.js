class Helper {
    Root() {
        return this.Element({ selector: "#root" });
    }

    Element({ selector }) {
        return document.querySelector(selector);
    }

    Elements({ selector }) {
        return document.querySelectorAll(selector);
    }

    Insert({ 
        node, 
        wrapper = this.Root(), 
        position = "beforeend",
        css
    }) {
        if(css) this.Style(css);
        return wrapper.insertAdjacentHTML(position, node);
    }

    Text({
        text, 
        wrapper = this.Root, 
        position = "beforeend"
    }) {
        return wrapper.insertAdjacentText(position, text);
    }

    Title(title) {
        return this.Element({ selector: "head title" }).innerText = title;
    }

    Style(css) {
        const style = this.Element({ selector: 'style[data-injected="true"]' });
        const inline = css.replace(/\s+/g, "").trim();
        if(!style) {
            const head = this.Element({selector: "head" });
            return this.Insert({
                node: `<style data-injected="true">${inline}</style>`, 
                wrapper: head
            });
        } 
        if(style.innerText.indexOf(inline) === -1) {
            this.Text({
                text: inline, 
                wrapper: style
            });
        }
    }

    Execute(callback) {
        document.addEventListener("DOMContentLoaded", callback);
    }
}

export default new Helper();