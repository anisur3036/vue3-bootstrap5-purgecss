const postCssPurge = require("@fullhuman/postcss-purgecss");
const vuePath = /\.vue(\?.+)?$/;

module.exports = {
    plugins: [
        // postCssPurge({
        //     contentFunction: (sourceInputFile) => {
        //         if (vuePath.test(sourceInputFile)) {
        //             return [sourceInputFile.replace(vuePath, ".vue")];
        //         }
        //         return ["src/**/*.vue", "index.html"];
        //     },
        //     defaultExtractor(content) {
        //         if (content.startsWith("<template")) {
        //             content = content.split("</template")[0] + "</template>";
        //         }
        //         return content.match(/[\w-/:]+(?<!:)/g) || [];
        //     },
        //     safelist: [
        //         /-(leave|enter|appear)(|-(to|from|active))$/,
        //         /^(?!(|.*?:)cursor-move).+-move$/,
        //         /^router-link(|-exact)-active$/,
        //         /data-v-.*/,
        //     ],
        // }),
    ],
};
