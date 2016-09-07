(function() {

class ImgSizeScanner{
    
     constructor(filename) {
        this.filename = filename;
        this.testTimer = null;
        //We should save the global instance because 'setInterval' will change 'this' to the 'window'.
        ImgSizeScanner.instance = this;

    }

    createImg(){
        var img = new Image();
        img.src = this.filename;
        this.img = img;
        this.getImgSize();
    }

    getImgSize() {
      //pay attention to that only ONE TIMER will be allowed at the same time!
        if(this.img.width * this.img.height == 0 && this.testTimer==null){   
             this.testTimer = setInterval(function(){
                ImgSizeScanner.instance.getImgSize();
             },40);
        }
        if(this.img.width * this.img.height != 0){
            clearInterval(ImgSizeScanner.instance.testTimer);
            this.testTimer=null;
            console.log("Size Already Loaded");
            console.log(`WIDTH: ${this.img.width} ||HEIGHT: ${this.img.height}`);
            //Till here we already got the img size and you can do the next.
        }
    }
}

this.ImgSizeScanner = ImgSizeScanner;

})();
