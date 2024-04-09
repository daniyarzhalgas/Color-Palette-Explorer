class ColorPicker{
  constructor(root){
        this.root = root; 
        this.colorjoe=colorjoe.rgb(this.root.querySelector(".colorjoe"));
        this.selectedColor = null;
        this.currentColor = null;
        this.shadeColors = ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"];
        this.colorjoe.show();
        let slider = document.getElementById("sliderOpacity");

        slider.oninput = () => {
            let progressBar = document.getElementById("progress");
            progressBar.value = slider.value;
            progressBar.style.opacity = slider.value / 100;
            let sliderValue = this.root.querySelector('.sliderValue');
            sliderValue.innerHTML = slider.value;
            let hexToOpacityValue = `0${ Math.round( ( 255 / 100 ) * slider.value ).toString( 16 ) }`.slice( -2 ).toUpperCase();
            let  newColorWithOpacity =  this.selectedColor.substring(0,7) + hexToOpacityValue;
            this.root.querySelector(".selected-color").style.background = newColorWithOpacity;
            this.root.querySelector(".selected-color-text").textContent = newColorWithOpacity;
        };
          
        let sliderSaturation = document.getElementById("sliderSaturation");
        sliderSaturation.oninput = () => {
              let progressBar = document.getElementById("progressSaturation");
              progressBar.value = sliderSaturation.value;
              progressBar.style.filter = `saturate(${sliderSaturation.value}%)`;
              let sliderValue = document.getElementById("sliderValueSaturation");
              sliderValue.innerHTML = sliderSaturation.value;
              this.root.querySelector(".selected-color").style.filter =`saturate(${sliderSaturation.value}%)`;

           
            //   let originalHex = this.currentColor;
            //   let newSaturation = -0.2; // Decrease saturation by 20%
            //   let newHex = this.adjustSaturation(originalHex, newSaturation);
            //   console.log("Original Hex:", originalHex);
            //   console.log("Adjusted Hex:", newHex);
             // this.setSelectedColor(color.hex()  , true);

            };

        if(window.location.search !== ""){
          let url =  new URLSearchParams(window.location.search,this.root);
          url.recyclingUrl();
          this.setSelectedColor("#"+url.colorParam);
          new shchange(this.selectedColor ,document).changeShadeColors();
        }else{
          this.setSelectedColor("#004d0e");
        }

        this.colorjoe.on("change", color => {
            let slider = document.getElementById("sliderOpacity");
            let sliderValue = document.getElementById("sliderValue");
            let progressBar = document.getElementById("progress");
            // color._saturation = 0; // i should change saturation params 
            progressBar.value = 100;
            progressBar.style.opacity = 100;
            slider.value = 100;
            sliderValue.textContent = 100;

            this.currentColor = color;
           
            this.setSelectedColor(color.hex()  , true);
            // to change shade colors 
            new shchange(this.selectedColor ,document).changeShadeColors();
          });
                
        
        // this.root.querySelectorAll(".shade-color").forEach((el, i) => {
        //     this.showShadeColor(el, this.shadeColors[i]);
            
        //     el.addEventListener("click" , e => {

        //         console.log("shaded section clicked");
        //         this.shadeColors = ["#ff0000","#ff0000","#ff0000","#ff0000","#ff0000"];

        //         console.log(this.shadeColors);
        //         console.log(e.button);
        //        if(e.button == 1){
        //              this.saveColor(this.selectedColor,i);
        //             this.showShadeColor(el,this.selectedColor);
        //        }

        //         this.setSelectedColor(el.dataset.color);
        //     });
        // });

        document.getElementById(".randomColorButton").addEventListener('click' , event => {
            this.getNewColor();
        });

       document.getElementById(".combineButton").addEventListener('click' , event => {
          let mix = new mixedColor(this.root);
          mix.mixColor();
          this.setSelectedColor(mix.colorParam);
        });
        this.root.querySelector(".fisrtColor").addEventListener('click' , event => {
            console.log("first color clikced");
            this.root.querySelector(".fisrtColor").style.background = this.selectedColor;  
        });
        
        this.root.querySelector(".secondColor").addEventListener('click' , event => {
            console.log("second color clikced");
            this.root.querySelector(".secondColor").style.background = this.selectedColor;  
        });
       
    }

    // Function to convert hex to HSL
 hexToHSL(hex) {
    // Convert hex to RGB first
    let r = 0, g = 0, b = 0;
    if (hex.length === 4) {
      r = parseInt(hex[1] + hex[1], 16);
      g = parseInt(hex[2] + hex[2], 16);
      b = parseInt(hex[3] + hex[3], 16);
    } else if (hex.length === 7) {
      r = parseInt(hex.slice(1, 3), 16);
      g = parseInt(hex.slice(3, 5), 16);
      b = parseInt(hex.slice(5, 7), 16);
    }
  
    // Then to HSL
    r /= 255, g /= 255, b /= 255;
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
  
    if (max === min) {
      h = s = 0; // achromatic
    } else {
      let d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
  
    return [h, s, l];
  }
  
  // Function to convert HSL to hex
   HSLToHex(hsl) {
    let [h, s, l] = hsl;
    let r, g, b;
    if (s === 0) {
      r = g = b = l; // achromatic
    } else {
      let hue2rgb = function hue2rgb(p, q, t) {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1/6) return p + (q - p) * 6 * t;
        if (t < 1/2) return q;
        if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
      };
  
      let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      let p = 2 * l - q;
      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
    }
  
    let toHex = function(x) {
      let hex = Math.round(x * 255).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };
  
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }
  
  // Adjust saturation of a hex color
   adjustSaturation(hex, saturation) {
    let hsl = this.hexToHSL(hex);
    hsl[1] += saturation; // Adjust saturation
    hsl[1] = Math.max(0, Math.min(1, hsl[1])); // Ensure it's within 0-1 range
    return this.HSLToHex(hsl);
  }
  

    getNewColor(){
        var symbols, hexColor;
        symbols = "0123456789ABCDEF";
        hexColor = "";
        for(var i = 0; i < 6;i++ ){
            hexColor = hexColor + symbols[Math.floor(Math.random() * 16)];
        }
        var randomColor = '#' + hexColor;
        this.setSelectedColor(randomColor);
    }
    
    setSelectedColor(color , skipCjUpdate = false){
        this.selectedColor = color;
        this.root.querySelector(".selected-color-text").textContent = color;
        this.root.querySelector(".selected-color").style.background = color;
        
        if(!skipCjUpdate){
            this.colorjoe.set(color);
        }
    }

    // not used
    getShadeColors(){
        return shadeColors;
    }
    // not used
    showShadeColor(element, color){
        element.style.background = color;
        element.dataset.color = color;
    }
    // not used
    saveColor(color,i){
        this.ShadeColors[i] = color;
    }
}