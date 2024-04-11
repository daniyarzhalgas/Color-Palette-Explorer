class ColorPicker{
  constructor(root){
    this.root = root; 
    this.colorjoe=colorjoe.rgb(this.root.querySelector(".colorjoe"));
    this.selectedColor = null;
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
    };

    if(window.location.search !== ""){
      let url =  new URLSearchParams(window.location.search,this.root);
      url.recyclingUrl();
      this.setSelectedColor("#"+url.colorParam);
      }else{
        try {
          const savedColor = JSON.parse(localStorage.getItem("colorpicker-saved"));
          this.setSelectedColor(savedColor);
        } catch (error) {
          this.setSelectedColor("#2b4363");
        }
        
      }

    this.colorjoe.on("change", color => {
      document.getElementById("sliderOpacity").value =100;
      document.getElementById("sliderValue").textContent = 100;
      let progressBar = document.getElementById("progress");
      progressBar.value = 100;
      progressBar.style.opacity = 100;

      document.getElementById("sliderSaturation").value=100;
      let progressBarS = document.getElementById("progressSaturation");
      progressBarS.value = 100;
      progressBarS.style.filter = `saturate(${100}%)`;
      document.getElementById("sliderValueSaturation").innerHTML = 100;

      document.getElementById("inputColor").value = '';
      this.setSelectedColor(color.hex()  , true);
    });

    let timeoutId;
    document.getElementById("inputColor").addEventListener("input", () =>  {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() =>  {
        let inputValue = document.getElementById("inputColor").value;
        console.log(inputValue.trim());
        if(this.isValidColor(inputValue.trim()))
          this.setSelectedColor(inputValue.trim());
      }, 500); 
    });

    document.getElementById("randomColorButton").addEventListener('click' , event => {
      console.log("random color button cliked");
      this.getNewColor();
    });

    document.getElementById("combineButton").addEventListener('click' , event => {
      let mix = new mixedColor(this.root);
      mix.mixColor();
      this.setSelectedColor(mix.colorParam);
    });

    this.root.querySelector(".firstColor").addEventListener('click' , event => {
      console.log("first color saved "+ document.querySelector(".selected-color-text").textContent);
      document.querySelector(".firstColor").textContent = "";
      this.root.querySelector(".firstColor").style.background = document.querySelector(".selected-color-text").textContent;  
    });
        
    this.root.querySelector(".secondColor").addEventListener('click' , event => {
      console.log("second color saved "+document.querySelector(".selected-color-text").textContent);
      document.querySelector(".secondColor").textContent = "";
      this.root.querySelector(".secondColor").style.background = document.querySelector(".selected-color-text").textContent;  
    });
       
    ['.shade-color1', '.shade-color2', '.shade-color3', '.shade-color4', '.shade-color5'].forEach(selector => {
      this.addColorClickListener(selector);
    });
  }  
   isValidColor(colorString) {
    var s = new Option().style;
    s.color = colorString;
    return s.color !== '';
}

  addColorClickListener(selector) {
    document.querySelector(selector).addEventListener('click', () => {
      console.log("cliked " + selector);
      let myDiv = document.querySelector(selector);
      let computedStyle = window.getComputedStyle(myDiv);
      let backgroundColorRGB = computedStyle.backgroundColor;
      let backgroundColorHex = this.rgbToHex(backgroundColorRGB);
      console.log("selected color set to "+backgroundColorHex);
      this.setSelectedColor(backgroundColorHex);
    });
  }
  rgbToHex(rgb) {
    let hex = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  
    let hexColor = "#";
    for (let i = 1; i <= 3; i++) {
      let component = parseInt(hex[i]).toString(16);
      hexColor += component.length == 1 ? "0" + component : component;
    }
  
    return hexColor.toUpperCase();
  }
  getNewColor(){
    var symbols, hexColor;
    symbols = "0123456789ABCDEF";
    hexColor = "";
    for(var i = 0; i < 6;i++ ){
      hexColor = hexColor + symbols[Math.floor(Math.random() * 16)];
    }
    var randomColor = '#' + hexColor;
    console.log("random color created and result is "+hexColor);
    this.setSelectedColor(randomColor);
  }
  setSelectedColor(color , skipCjUpdate = false){
    this.selectedColor = color;
    if(!(/^[a-zA-Z\s]+$/.test(color)))
    this.root.querySelector(".selected-color-text").textContent = color;
    this.root.querySelector(".selected-color").style.background = color; 
    if(!skipCjUpdate){
      this.colorjoe.set(color);
    }
    new shchange(this.selectedColor ,document).changeShadeColors();
    document.body.style.backgroundColor = this.selectedColor;
    localStorage.setItem("colorpicker-saved", JSON.stringify(this.selectedColor));
  }
}