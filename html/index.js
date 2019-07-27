function goTo(name) {
    window.location.hash = name;
}

function openFrame(name) {
    let url = 'https://media.jamesjohnson.io/'
    let frame = document.createElement("iframe")
    frame.src = url + name
    document.getElementById("about").innerHTML = ""
    if (document.getElementsByTagName("iframe").length > 0) {
        let frames = document.getElementsByTagName("iframe")
        for (let framer of frames) {
            framer.remove()
        }
        document.getElementById("frames").appendChild(frame)
    } else {
        document.getElementById("frames").appendChild(frame)
    }
}