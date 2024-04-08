class ColorPicker{
    constructor(root){
        this.root = root; 
        this.colorjoe=colorjoe.rgb(this.root.querySelector(".colorjoe"));
        this.selectedColor = null;
        this.shadeColors = ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"];
        this.colorjoe.show();
        let slider = document.getElementById("slider");

        slider.oninput = () => {
            let progressBar = document.getElementById("progress");
            progressBar.value = slider.value;
            progressBar.style.opacity = slider.value / 100;
            let sliderValue = this.root.querySelector('.sliderValue');
            sliderValue.innerHTML = slider.value;
            let hexToOpacityValue = `0${ Math.round( ( 255 / 100 ) * slider.value ).toString( 16 ) }`.slice( -2 ).toUpperCase();
            let  newColorWithOpacity =  this.selectedColor.substring(0,7) + hexToOpacityValue;
            this.root.querySelector(".selected-color").style.background = newColorWithOpacity;

            //this.setSelectedColor(newColorWithOpacity);
          };
          

        if(window.location.search !== ""){
            const urlParams = new URLSearchParams(window.location.search);

            const colorParam = urlParams.get('color');
            const opacityParam = urlParams.get('opacity');
            const opacity = parseInt(opacityParam);

            this.setSelectedColor("#"+colorParam);
            let slider = document.getElementById("slider");
            let sliderValue = document.getElementById("sliderValue");
            let progressBar = document.getElementById("progress");

            progressBar.value = opacity;
            progressBar.style.opacity = opacity / 100;
            slider.value = opacity;
            sliderValue.textContent = opacity;
            
            let hexToOpacityValue = `0${ Math.round( ( 255 / 100 ) * slider.value ).toString( 16 ) }`.slice( -2 ).toUpperCase();
            let  newColorWithOpacity =  this.selectedColor.substring(0,7) + hexToOpacityValue;
            this.root.querySelector(".selected-color").style.background = newColorWithOpacity;
            
            

        }else{
            this.setSelectedColor("#43ff64");
        }
        this.colorjoe.on("change", color => {
            const encodedColor = encodeURIComponent(color);
           //color._saturation =Number(this.root.querySelector(".sliderValue").textContent)/100;;
            this.setSelectedColor(color.hex()  , true);
  
        });

        
            
        this.root.querySelectorAll(".shade-color").forEach((el, i) => {
            this.showShadeColor(el, this.shadeColors[i]);
            
            el.addEventListener("click" , e => {

                console.log("shaded section clicked");
                this.shadeColors = ["#ff0000","#ff0000","#ff0000","#ff0000","#ff0000"];

                console.log(this.shadeColors);
                console.log(e.button);
               if(e.button == 1){
                     this.saveColor(this.selectedColor,i);
                    this.showShadeColor(el,this.selectedColor);
               }

                this.setSelectedColor(el.dataset.color);
            });
        });

        
        this.randomColorButton = document.getElementById(".randomColorButton");
        randomColorButton.addEventListener('click' , event => {
            this.getNewColor();
        });

        this.combineButton = document.getElementById(".combineButton");
        combineButton.addEventListener('click' , event => {
            console.log("combine button clicked");

            let firstColorRgbValues = window.getComputedStyle(this.root.querySelector(".fisrtColor")).backgroundColor.match(/\d+/g);
            let secondColorRgbValues =window.getComputedStyle(this.root.querySelector(".secondColor")).backgroundColor.match(/\d+/g);

            console.log(firstColorRgbValues);
            console.log(secondColorRgbValues);
            let mixedColor = [
                Math.round((Number(firstColorRgbValues[0]) + Number(secondColorRgbValues[0])) / 2),   // Average of red values
                Math.round((Number(firstColorRgbValues[1]) + Number(secondColorRgbValues[1])) / 2),   // Average of green values
                Math.round((Number(firstColorRgbValues[2]) + Number(secondColorRgbValues[2])) / 2)    // Average of blue values
              ];
              console.log(mixedColor);
              let rgbColor = `rgb(${mixedColor[0]}, ${mixedColor[1]}, ${mixedColor[3]})`;
             // this.setSelectedColor(rgbColor);

              let redHex = mixedColor[0].toString(16).padStart(2, "0");     // Convert red to hex
              let greenHex = mixedColor[1].toString(16).padStart(2, "0"); // Convert green to hex
              let blueHex = mixedColor[2].toString(16).padStart(2, "0");   // Convert blue to hex
            
              // Combine the hexadecimal values
              let hexColor = "#" + redHex + greenHex + blueHex;

            console.log(hexColor);
            this.setSelectedColor(hexColor);

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
        //this.root.querySelector(".fisrtColor").style.background = color;        
        
    
        if(!skipCjUpdate){
            this.colorjoe.set(color);
        }
    }
    getShadeColors(){
        return shadeColors;
    }

    showShadeColor(element, color){
        element.style.background = color;
        element.dataset.color = color;
    }
    saveColor(color,i){
        this.ShadeColors[i] = color;
    }
}