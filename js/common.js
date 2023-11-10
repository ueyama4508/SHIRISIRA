
function question(e) {
    let q = document.getElementById("answer"+ e)
    if(q.style.display == "none"){
        q.style ="display: block;"
    }else if(q.style.display == "block"){
        q.style ="display: none;"
    }else{
    }
    }

    window.addEventListener('resize',function(){
        let topimg = document.getElementsByClassName("topimg").src
        if(window.innerWidth <= 450 + "px"){
            console.log(window.innerWidth)
            console.log(topimg)

        }

    })
