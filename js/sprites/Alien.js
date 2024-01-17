class Alien {

    constructor(id){
        this.node = document.querySelector("#"+id);
        this.speed = 2;
        console.log(this.node);
        this.move();

        this.node.addEventListener("click", () => {        
            if(timeRemaining)
            {
                this.move();
                score.value++;
            }
        })
    }

    tick() {
        console.log("tick");
        
        let rect = this.node.getBoundingClientRect().y;
        this.node.style.top = rect-this.speed+"px";  
    }

    move(){

        this.node.style.left = 100+Math.random()*(window.innerWidth-200)+"px";
        this.node.style.top = "600px";
    }
}