class shchange{

    constructor(selectedColor , root){
        this.selectedColor = selectedColor;
        this.root = root;
    }
    changeShadeColors(){
        document.querySelector(".shade-color1").style.background = this.selectedColor;
        document.querySelector(".shade-color2").style.background = this.selectedColor;
        document.querySelector(".shade-color3").style.background = this.selectedColor;
        document.querySelector(".shade-color4").style.background = this.selectedColor;
        document.querySelector(".shade-color5").style.background = this.selectedColor;
    }
}