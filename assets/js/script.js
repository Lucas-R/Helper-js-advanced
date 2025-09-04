import Helper from "./helper.js";

Helper.Execute(() => {
    Helper.Title("Home");

    Helper.Style(`
        body {
            background: blue
        }
    `);

    Helper.Insert({
        node: `
            <div class="box">
                <p>New Element</p>
            </div>
        `,
    });

        Helper.Insert({
        node: `
            <div class="box">
                <p>New Element</p>
            </div>
        `,
        css: `
            .box {
                width: 100px;
                height: 100px;
                background: black
            }     
        `
    });
});