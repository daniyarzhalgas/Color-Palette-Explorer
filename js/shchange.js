class shchange{
    constructor(selectedColor , root){
        this.selectedColor = selectedColor;
        this.root = root;
    }
    changeShadeColors(){
      let originalColor = this.selectedColor; // Original HEX color
      let similarColors = this.getSimilarColors(originalColor);
      
      document.querySelector(".shade-color1").style.background = similarColors[0];
      document.querySelector(".shade-color2").style.background =  similarColors[1];
      document.querySelector(".shade-color3").style.background =  similarColors[2];
      document.querySelector(".shade-color4").style.background =  similarColors[3];
      document.querySelector(".shade-color5").style.background =  similarColors[4];
    }
    getSimilarColors(hexColor) {
      let r = parseInt(hexColor.substring(1, 3), 16);
      let g = parseInt(hexColor.substring(3, 5), 16);
      let b = parseInt(hexColor.substring(5, 7), 16);
    
      let similarColors = [];
    
      let redIncreased = `#${this.componentToHex(r + 50)}${this.componentToHex(g)}${this.componentToHex(b)}`;
      if(!redIncreased.includes('-'))
      similarColors.push(redIncreased);
    
      let redDecreased = `#${this.componentToHex(r - 50)}${this.componentToHex(g)}${this.componentToHex(b)}`;
      if(!redDecreased.includes('-'))
      similarColors.push(redDecreased);
    
      let greenIncreased = `#${this.componentToHex(r)}${this.componentToHex(g + 50)}${this.componentToHex(b)}`;
      if(!greenIncreased.includes('-'))
      similarColors.push(greenIncreased);
    
      let greenDecreased = `#${this.componentToHex(r)}${this.componentToHex(g - 50)}${this.componentToHex(b)}`;
      if(!greenDecreased.includes('-'))
      similarColors.push(greenDecreased);
    
      let blueIncreased = `#${this.componentToHex(r)}${this.componentToHex(g)}${this.componentToHex(b + 50)}`;
      if(!blueIncreased.includes('-'))
      similarColors.push(blueIncreased);
    
      let blueDecreased = `#${this.componentToHex(r)}${this.componentToHex(g)}${this.componentToHex(b - 50)}`;
      if(!blueDecreased.includes('-'))
      similarColors.push(blueDecreased);
    
      return similarColors;
    }
  
    componentToHex(c) {
      let hex = c.toString(16);
      return hex.length == 1 ? "0" + hex : hex;
    }   
}