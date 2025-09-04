class Helper {
    Root() {
        return this.Element({ selector: "#root" });
    }

    async Fetch(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
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
        if(css) this.Css({ css });
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

    Css({ css, position }) {
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
                wrapper: style,
                position
            });
        }
    }

    Reset(reset) {
        this.Css({
            css: reset,
            position: "beforebegin"
        });
    }

    Execute(callback) {
        document.addEventListener("DOMContentLoaded", callback);
    }
}

function rem(px) {
    return `${px / 16}rem`
}

const l = new Helper();

export { l, rem };