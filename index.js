

class Ball{
    
    constructor(body){
        this.body=document.querySelector("body")
    }
    createDot(){

 
            let ball=document.createElement("img")
            ball.src="heart.svg"
            ball.className="ball"

            this.body.appendChild(ball)


    }
    moveball(){
        setTimeout(()=>{
            let allball=document.querySelectorAll(".ball")
            allball.forEach((ball)=>{
                
                ball.className="moveball"
                ball.style.transition="2s"
                
                ball.style.height="20px"
                ball.style.width="20px"
                ball.style.borderRadius="100%"
                ball.style.margin="50px"
                ball.style.position="absolute"
                let left = Math.random() * 1000;
                
                ball.style.marginLeft=`${left}px`
                let top=Math.random() * 1000
                ball.style.marginTop=`${top}px`
                
            })
        },1000)
    }
    dialogue(){
        let button=document.querySelector(".button")
        button.onclick=()=>{
            console.log("clicked")
            let box=document.querySelector(".box")
            box.style.display="inline"
           
          
            
            
            
        }
    }
}

ballmethod=new Ball()
ballmethod.createDot()
ballmethod.moveball()
ballmethod.dialogue()
setInterval(()=>{
    ballmethod.createDot()
    ballmethod.moveball()
},50)
setInterval(()=>{
    let balls=document.querySelectorAll(".moveball")
    balls.forEach((ball)=>{
        ball.style.backgroundColor="white"

    })
},3000)

setTimeout(()=>{
    let blind=document.querySelector(".blindfold")
    blind.style.width="0px"
},1000)

