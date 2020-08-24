let texto = []
let textos_length = document.querySelectorAll('div.Grid__cell.flx-s\\:1.p-r\\:4 > p').length + 1
let author = document.querySelector("#video-container > div:nth-child(2) > div > div > div > div.p-x\\:1.d\\:f.a-i\\:c.flx-g\\:1 > div > div > div.flx-g\\:1.c\\:black > div > div > div.m-b\\:\\.5.d\\:f.f\\:1.a-i\\:c > div:nth-child(1)").innerText
let title = document.querySelector("#video-container > div:nth-child(2) > div > div > div > div.p-x\\:1.d\\:f.a-i\\:c.flx-g\\:1 > div > div > div.flx-g\\:1.c\\:black > div > div > div:nth-child(2) > h1").innerText
var fileName = `${title}.json`

for(let i = 2; i <= textos_length; i ++) {

    const dados = document.querySelector(`#content > div > div:nth-child(4) > div.p\\:2.p-t\\:4\\@md > section > div:nth-child(${i}) > div.Grid__cell.flx-s\\:1.p-r\\:4 > p`).innerText
    
    texto.push(dados)
}
let text_body = texto.join('\n')

var uri = {
    author,
    body: text_body,
    title: title,
    type: "video",
    url: window.location.href
}


window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem
window.requestFileSystem(window.TEMPORARY, 1024 * 1024, fs => {
        fs.root.getFile(fileName, {
            create: true
        }, fileEntry => {
            fileEntry.createWriter( fileWriter => {
                let fileData = ['\ufeff' + JSON.stringify(uri)]
                let blob = new Blob(fileData)
                fileWriter.addEventListener("writeend", function () {
                    let fileUrl = fileEntry.toURL();
                    let link = document.createElement('a')
                    link.href = fileUrl
                    link.download = fileName
                    document.body.appendChild(link)
                    link.click()
                    document.body.removeChild(link)
                }, false)
                fileWriter.write(blob)
            },() => {})
        }, () => {})
}, () => {})