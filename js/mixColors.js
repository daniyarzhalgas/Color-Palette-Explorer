class mixedColor{
    constructor(root){
        this.root= root;
        this.colorParam = null;
    }
    mixColor(){
        let firstColorRgbValues = window.getComputedStyle(this.root.querySelector(".firstColor")).backgroundColor.match(/\d+/g);
        let secondColorRgbValues = window.getComputedStyle(this.root.querySelector(".secondColor")).backgroundColor.match(/\d+/g);

        
        let mixedColor = [
            Math.round((Number(firstColorRgbValues[0]) + Number(secondColorRgbValues[0])) / 2),  
            Math.round((Number(firstColorRgbValues[1]) + Number(secondColorRgbValues[1])) / 2),  
            Math.round((Number(firstColorRgbValues[2]) + Number(secondColorRgbValues[2])) / 2)   
        ];
        let redHex = mixedColor[0].toString(16).padStart(2, "0");     
        let greenHex = mixedColor[1].toString(16).padStart(2, "0"); 
        let blueHex = mixedColor[2].toString(16).padStart(2, "0");  


        let hexColor = "#" + redHex + greenHex + blueHex;
        console.log("colors mixed result is: "+hexColor);

        this.colorParam = hexColor;
    }
}