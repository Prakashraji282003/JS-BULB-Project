function change(){
    var imag=document.getElementById("bulb");
    if(imag.src.match("off"))
    {
        imag.src="./assets/on.jpg";

    } 
    else
    {
   imag.src="./assets/off.jpg";
    }
}
