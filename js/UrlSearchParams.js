class URLSearchParams{
    constructor(url, root){
        this.url = url;
        this.root = root;
        this.colorParam = null;
    }
  
    recyclingUrl(){
        const urlParams = new URLSearchParams(window.location.search);
        console.log(urlParams);
        this.colorParam = "004d0eA8";
        const opacityParam = "66";
        const saturationParam = "47"
        const opacity = parseInt(opacityParam);
        const saturation = parseInt(saturationParam);

        let slider = document.getElementById("sliderOpacity");
        let sliderValue = document.getElementById("sliderValue");
        let progressBar = document.getElementById("progress");

        progressBar.value = opacity;
        progressBar.style.opacity = opacity / 100;
        slider.value = opacity;
        sliderValue.textContent = opacity;

        let sliderSaturation = document.getElementById("sliderSaturation");
        let sliderValueSaturation = document.getElementById("sliderValueSaturation");
        let progressBarSaturation = document.getElementById("progressSaturation");

        progressBarSaturation.value = saturation;
        sliderSaturation.value = saturation;
        sliderValueSaturation.textContent = saturation;
        this.root.querySelector(".selected-color").style.filter =`saturate(${sliderSaturation.value}%)`;
        
        let hexToOpacityValue = `0${ Math.round( ( 255 / 100 ) * slider.value ).toString( 16 ) }`.slice( -2 ).toUpperCase();
        let  newColorWithOpacity =  this.colorParam.substring(0,7) + hexToOpacityValue;
        this.root.querySelector(".selected-color").style.background = newColorWithOpacity;
    }
}