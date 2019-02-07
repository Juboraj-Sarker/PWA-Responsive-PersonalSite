var x = document.getElementById("icon");
var mainContent = document.getElementById("mainContent");
var sideBar = document.getElementById("sidebar");
var titleBar = document.getElementById("titleBar");

var drawerOpen = false;
var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);


if(w<700){

    //mobile
        if(!drawerOpen){

            titleBar.setAttribute("style", "display: block;  margin-left:0px; position:fixed;");
            
        } 
}



x.addEventListener('click', function(){

  

    if(w<700){

        if(drawerOpen){

            sideBar.setAttribute("style", "display: none; ")
           // mainContent.setAttribute("style", "display: block; width: 100%; margin-left:0px; margin-top: 50px;");
            titleBar.setAttribute("style", "display: block; width:100%; margin-left:0px; position:fixed;");
            drawerOpen = false;
            
    
        }else{
    
            sideBar.setAttribute("style", "display: block; width: 70%; ");
          //  mainContent.setAttribute("style", "display: block;  margin-left:70%; margin-top: 50px;");
            titleBar.setAttribute("style", "display: block; position:fixed;  margin-left:70%;");
            drawerOpen = true;
        }

    }else if (w>700){

        

        if(!drawerOpen){

            sideBar.setAttribute("style", "display: none; width:250px;")
            titleBar.setAttribute("style", "display: block; width:100%; margin-left:0px; position:fixed;");
            mainContent.setAttribute("style", "display: block; width: 100%; margin-left:0px; margin-top: 65px;");
            drawerOpen = true;

        }else{

            sideBar.setAttribute("style", "display: block;  width:250px;")
            titleBar.setAttribute("style", "display: block; position:fixed;  margin-left:250px");
            mainContent.setAttribute("style", "display: block;   margin-top: 65px;");
            drawerOpen = false;
        }
    }
   

});


mainContent.addEventListener('click', function(){

    

   if(w<700){

    if(drawerOpen){

        sideBar.setAttribute("style", "display: none;")
        mainContent.setAttribute("style", "display: block; width: 100%; margin-left:0px; margin-top: 65px;");
        titleBar.setAttribute("style", "display: block; width:100%; margin-left:0px; position:fixed;");
        drawerOpen = false;
       }
   }

});