import { l, rem } from "./helper.js";

l.Reset(`
    * {
        padding: 0;
        margin: 0;
    }
`);

l.Execute(async () => {
    const data = await l.Fetch("./assets/data/posts.json");

    l.Title("Posts");

    l.Insert({
        node: `
            <div class="box">
                ${data.map(post => (`
                    <div>
                        <p>${post.title}</p>
                        <p>${post.description}</p>
                    </div>
                `)).join("")}
            </div>
        `,
        css: `
            .box{
                display: flex;
                gap: ${rem(100)}
            }
        `
    });
});