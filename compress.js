document.addEventListener("DOMContentLoaded", function() {
    const compressButton = document.getElementById("compressButton");
    const inputText = document.getElementById("inputText");
    const outputLink = document.getElementById("outputLink");

    compressButton.addEventListener("click", function() {
        const inputData = inputText.value;
        const compressedData = LZMA.compress(inputData);//压缩函数
        const compressedBase64 = btoa(String.fromCharCode(...new Uint8Array(compressedData)));
        const url = `http://itty.bitty.site/#/${compressedBase64}`;
        outputLink.innerHTML = `<a href="${url}" target="_blank">Click here to open the compressed content</a>`;
    });
});
