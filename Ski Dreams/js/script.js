for(let i=0; i <= 2; i++){
    document.getElementById("services").getElementsByClassName("box")[i].addEventListener("mouseover", ()=>{
        let box = document.getElementsByClassName("box")[i];
        let overlay = box.getElementsByClassName("overlay")[0];
        let image = box.getElementsByTagName("img")[0];
        overlay.style.top = "0%";
        image.style.opacity = "0";
        
    });
    document.getElementById("services").getElementsByClassName("box")[i].addEventListener("mouseout", ()=>{
        let box = document.getElementsByClassName("box")[i];
        let overlay = box.getElementsByClassName("overlay")[0];
        let image = box.getElementsByTagName("img")[0];
        overlay.style.top = "100%";
        image.style.opacity = "1";
    });
}