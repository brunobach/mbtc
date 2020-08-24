/* eslint-disable no-useless-escape */
export default [
    { code: `
let text = []
let txts_length = document.querySelectorAll('div.Grid__cell.flx-s\\\\:1.p-r\\\\:4 > p').length + 1
let author = document.querySelector("div.m-b\\\\:\\\\.5.d\\\\:f.f\\\\:1.a-i\\\\:c > div:nth-child(1)").innerText
let title = document.querySelector("div > div:nth-child(2) > h1").innerText
let fileName = \`\${title}.json\`\
\n
for(let i = 2; i <= txts_length; i ++) {
    const data = document.querySelector(\`section > div:nth-child(\${i}\) > div.Grid__cell.flx-s\\\\:1.p-r\\\\:4 > p\`).innerText
    text.push(data)
}
let text_body = text.join('\\n\')
    
let data_json = {
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
                    let fileData = ['\\ufeff\' + JSON.stringify(data_json)]
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
        `},
    {
        code: `
let text = document.querySelector("#materia > div:nth-child(2) > article > div.mat-columns > div.mat-content > div.mat-txt").innerText
let author = document.querySelector("#materia > div:nth-child(2) > div.mat-topo > a > div > div.cln-info > h1").innerText
let title = document.querySelector("#materia > div:nth-child(2) > article > div.mat-columns > div.mat-content > div.mat-header > h1").innerText
let fileName = \`\${title}.json\`\

let data_json = {
    author,
    body: text,
    title: title,
    type: "article",
    url: window.location.href
}

window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem
window.requestFileSystem(window.TEMPORARY, 1024 * 1024, fs => {
        fs.root.getFile(fileName, {
            create: true
        }, fileEntry => {
            fileEntry.createWriter( fileWriter => {
                let fileData = ['\\ufeff\' + JSON.stringify(data_json)]
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
        
`
    },

    {
        code: `
let text = []
let author = document.querySelector("#materia > div:nth-child(2) > article > div.mat-columns > div.mat-content > div.mat-header > div.hdr-bottom > div.hdr-meta > div > span.meta-item.meta-aut").innerText
let title = document.querySelector("#materia > div:nth-child(2) > article > div.mat-columns > div.mat-content > div.mat-header > h1").innerText
let textos_length = document.querySelectorAll('div.mat-txt > p').length - 1 

text.push(document.querySelector("#materia > div:nth-child(2) > article > div.mat-columns > div.mat-content > div.mat-header > h2").innerText + '.')

for(let i = 0; i <= textos_length; i ++) {

    const dados = document.querySelectorAll('div.mat-txt > p')[i].innerText
    
    text.push(dados)
}
let text_body = text.join('\\n\')

let data_json = {
    author,
    body: text_body,
    title: title,
    type: "article",
    url: window.location.href
}

let fileName = \`\${title}.json\`\ 

window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem
window.requestFileSystem(window.TEMPORARY, 1024 * 1024, fs => {
        fs.root.getFile(fileName, {
            create: true
        }, fileEntry => {
            fileEntry.createWriter( fileWriter => {
                let fileData = ['\\ufeff\' + JSON.stringify(data_json)]
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

        `
    }
]