const fs = require("fs");
const { inlineSource } = require("inline-source");

(async () => {
    console.log("1) HTML okunuyor...");
    let html = fs.readFileSync("index.html", "utf8");

    console.log("2) Inline processing...");
    const result = await inlineSource(html, {
        rootpath: "./",
        compress: true,
        attribute: false
    });

    console.log("3) Çıktı yazılıyor...");

    // dist klasörü yoksa oluştur
    if (!fs.existsSync("dist")) {
        fs.mkdirSync("dist");
    }

    fs.writeFileSync("dist/index.html", result);

    console.log("BİTTİ!");
})();
