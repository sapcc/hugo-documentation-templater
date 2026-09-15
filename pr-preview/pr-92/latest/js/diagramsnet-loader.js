function htmlEncode(string) {
    var returnVal = `<div class="mxgraph" style="max-width:100%;border:1px solid transparent;" data-mxgraph='{&quot;highlight&quot;:&quot;#0000ff&quot;,&quot;nav&quot;:true,&quot;resize&quot;:true,&quot;toolbar&quot;:&quot;zoom layers lightbox&quot;,&quot;edit&quot;:&quot;_blank&quot;,&quot;xml&quot;:&quot;`
    returnVal += string.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "\\&quot;").replace(/(\r\n|\n|\r)/gm, "")
    returnVal += `"}'></div>`
    return returnVal
}

document.addEventListener("DOMContentLoaded", function(event) {
    // diagrams.net pre-loader
    if (document.querySelectorAll("mxfile").length != 0) {
        var drawIoFile = document.querySelectorAll("mxfile")
        drawIoFile.forEach(function(el, index) {
            el.outerHTML = htmlEncode(el.outerHTML)
            if (index + 1 == drawIoFile.length) {
                var head = document.getElementsByTagName('head')[0]
                var script = document.createElement('script')
                script.src = 'https://viewer.diagrams.net/js/viewer-static.min.js'
                head.appendChild(script)
            }
        })
    }
})
