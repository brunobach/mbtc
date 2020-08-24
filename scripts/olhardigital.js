let text = document.querySelector("#materia > div:nth-child(2) > article > div.mat-columns > div.mat-content > div.mat-txt").innerText
let author = document.querySelector("#materia > div:nth-child(2) > div.mat-topo > a > div > div.cln-info > h1").innerText
let title = document.querySelector("#materia > div:nth-child(2) > article > div.mat-columns > div.mat-content > div.mat-header > h1").innerText

let dados = {
    author,
    body: text,
    title: title,
    type: "article",
    url: window.location.href
}

let fileName = `${title}.json`

window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem
window.requestFileSystem(window.TEMPORARY, 1024 * 1024, fs => {
        fs.root.getFile(fileName, {
            create: true
        }, fileEntry => {
            fileEntry.createWriter( fileWriter => {
                let fileData = ['\ufeff' + JSON.stringify(dados)]
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