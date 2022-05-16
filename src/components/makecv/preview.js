function preview(e){
    var a = document.getElementById("black-overlay--fulscreen");
    a.style.display = "block"
    document.getElementById("black-overlay--preview").setAttribute("src",e.target.offsetParent.offsetParent.lastChild.getAttribute("src"))
}
export const closePreview = () =>{
    var a = document.getElementById("black-overlay--fulscreen");
    a.style.display = "none"
    var b = document.getElementById("black-overlay--preview");
    b.addEventListener('click',function (event){
        event.stopPropagation()
    })
}
export default preview;