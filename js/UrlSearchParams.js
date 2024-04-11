class URLSearchParams{
  constructor(url, root){
    this.url = url;
    this.root = root;
    this.colorParam = null;
  }
  recyclingUrl(){
    let urlParams = this.getUrlParams(window.location.search);
    
    this.colorParam = urlParams["color"];
    let opacity = urlParams["opacity"];
    let saturation = urlParams["saturation"];
    
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
  getUrlParams(url) {
    let params = {};
    let urlParts = url.split("?");
      
    if (urlParts.length >= 2) {
      let paramString = urlParts[1];
      let paramPairs = paramString.split("&");
      
      for (let pair of paramPairs) {
        let keyValue = pair.split("=");
        let key = decodeURIComponent(keyValue[0]);
        let value = decodeURIComponent(keyValue[1]);
        params[key] = value;
      }
    }
    return params;
  }
}