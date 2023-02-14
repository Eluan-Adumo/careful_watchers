const handleMouseOut = () =>{
    let item = document.querySelector("#service-drop-down");
    item.style.visibility = "hidden";
}

const handleMouseOver = () =>{
    let item = document.querySelector("#service-drop-down");
    item.style.visibility = "visible";
}

export  {handleMouseOut, handleMouseOver};