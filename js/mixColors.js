class mixedColor{
    constructor(root){
        this.root= root;
        this.colorParam = null;
    }
    mixColor(){
        let firstColorRgbValues = window.getComputedStyle(this.root.querySelector(".fisrtColor")).backgroundColor.match(/\d+/g);
        let secondColorRgbValues = window.getComputedStyle(this.root.querySelector(".secondColor")).backgroundColor.match(/\d+/g);

        console.log(firstColorRgbValues);
        console.log(secondColorRgbValues);
        let mixedColor = [
            Math.round((Number(firstColorRgbValues[0]) + Number(secondColorRgbValues[0])) / 2),   // Average of red values
            Math.round((Number(firstColorRgbValues[1]) + Number(secondColorRgbValues[1])) / 2),   // Average of green values
            Math.round((Number(firstColorRgbValues[2]) + Number(secondColorRgbValues[2])) / 2)    // Average of blue values
        ];
        console.log(mixedColor);
        let redHex = mixedColor[0].toString(16).padStart(2, "0");     // Convert red to hex
        let greenHex = mixedColor[1].toString(16).padStart(2, "0"); // Convert green to hex
        let blueHex = mixedColor[2].toString(16).padStart(2, "0");   // Convert blue to hex
            
        let hexColor = "#" + redHex + greenHex + blueHex;
        this.colorParam = hexColor;
    }
}