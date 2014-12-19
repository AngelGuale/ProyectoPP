function mantenerID() { 
    var url = document.URL;
    var res = url.split("=");
    var id= res[res.length-1];
    console.log(id);

    var links=document.getElementsByClassName("link");

    for (i = 0; i < links.length; i++) {
         links[i].setAttribute("href",links[i].getAttribute("href")+"? id="+id);
        
    }
   
}
 window.addEventListener("load",mantenerID,false);