class shchange{
    constructor(selectedColor , root){
        this.selectedColor = selectedColor;
        this.root = root;
    }
    changeShadeColors(){
      let originalColor = this.selectedColor; // Original HEX color
      let similarColors = this.getSimilarColors(originalColor);
  
      console.log(similarColors);
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
      if(!redIncreased.includes('-') && redIncreased.length === 7)
      similarColors.push(redIncreased);
    
      let redDecreased = `#${this.componentToHex(r - 50)}${this.componentToHex(g)}${this.componentToHex(b)}`;
      if(!redDecreased.includes('-') && redDecreased.length === 7)
      similarColors.push(redDecreased);
    
      let greenIncreased = `#${this.componentToHex(r)}${this.componentToHex(g + 50)}${this.componentToHex(b)}`;
      if(!greenIncreased.includes('-') && greenIncreased.length === 7)
      similarColors.push(greenIncreased);
    
      let greenDecreased = `#${this.componentToHex(r)}${this.componentToHex(g - 50)}${this.componentToHex(b)}`;
      if(!greenDecreased.includes('-') && greenDecreased.length === 7)
      similarColors.push(greenDecreased);
    
      let blueIncreased = `#${this.componentToHex(r)}${this.componentToHex(g)}${this.componentToHex(b + 50)}`;
      if(!blueIncreased.includes('-') && blueIncreased.length === 7)
      similarColors.push(blueIncreased);
    
      let blueDecreased = `#${this.componentToHex(r)}${this.componentToHex(g)}${this.componentToHex(b - 50)}`;
      if (!blueDecreased.includes('-') && blueDecreased.length === 7) similarColors.push(blueDecreased);

      let redIncreased2 = `#${this.componentToHex(r + 30)}${this.componentToHex(g)}${this.componentToHex(b)}`;
      if(!redIncreased2.includes('-') && redIncreased2.length === 7)
      similarColors.push(redIncreased2);
    
      let redDecreased2 = `#${this.componentToHex(r - 30)}${this.componentToHex(g)}${this.componentToHex(b)}`;
      if(!redDecreased2.includes('-') && redDecreased2.length === 7)
      similarColors.push(redDecreased2);
    
      let greenIncreased2 = `#${this.componentToHex(r)}${this.componentToHex(g + 30)}${this.componentToHex(b)}`;
      if(!greenIncreased2.includes('-') && greenIncreased2.length === 7)
      similarColors.push(greenIncreased2);
    
      let greenDecreased2 = `#${this.componentToHex(r)}${this.componentToHex(g - 30)}${this.componentToHex(b)}`;
      if(!greenDecreased2.includes('-') && greenDecreased2.length === 7)
      similarColors.push(greenDecreased2);
    
      let blueIncreased2 = `#${this.componentToHex(r)}${this.componentToHex(g)}${this.componentToHex(b + 30)}`;
      if(!blueIncreased2.includes('-') && blueIncreased2.length === 7)
      similarColors.push(blueIncreased2);
    
      let blueDecreased2 = `#${this.componentToHex(r)}${this.componentToHex(g)}${this.componentToHex(b - 30)}`;
      if(!blueDecreased2.includes('-') && blueDecreased2.length === 7)
      similarColors.push(blueDecreased2);
    
      return similarColors;
    }
  
    componentToHex(c) {
      let hex = c.toString(16);
      return hex.length == 1 ? "0" + hex : hex;
    }   
}