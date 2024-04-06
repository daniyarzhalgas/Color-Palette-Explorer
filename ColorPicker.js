class ColorPicker{
                 constructor(root){
                    this.root = root; 
                    this.colorjoe=colorjoe.rgb(this.root.querySelector(".colorjoe"));
                    this.selectedColor = null;
                    this.shadeColors = ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"];;
                    this.colorjoe.show();
                    if(window.location.search !== ""){
                        this.setSelectedColor("#"+window.location.search.split(',')[1]);
                    }else{
                        this.setSelectedColor("#7875c5");
                    }
                    
                    
                    this.colorjoe.on("change", color => {
                        //console.log(color);
                        const encodedColor = encodeURIComponent(color);
                        //console.log(encodedColor);
                        color._saturation =Number(this.root.querySelector(".sliderValue").textContent)/100;
                        this.setSelectedColor(color.hex()  , true);
  
                        this.shadeColors = ["#ffff00","#ffff00","#ffff00","#ffff00","#ffff00"];
                       // console.log(this.shadeColors[0]);
                        
                    });

                    

                    this.root.querySelectorAll(".shade-color").forEach((el, i) => {
                        this.showShadeColor(el, this.shadeColors[i]);
                        
                        el.addEventListener("click" , e => {
                            if(e.button == 1){
                                this.saveColor(this.selectedColor,i);
                                this.showShadeColor(el,this.selectedColor);
                            }

                            this.setSelectedColor(el.dataset.color);
                        });
                     });
                }
                setSelectedColor(color , skipCjUpdate = false){
                    this.selectedColor = color;
                     this.root.querySelector(".selected-color-text").textContent = color;
                    this.root.querySelector(".selected-color").style.background = color;

                    if(!skipCjUpdate){
                        this.colorjoe.set(color);
                    }
                }
                getShadeColors(){
                 return ShadeColors;
                 
                }

                showShadeColor(element, color){
                    element.style.background = color;
                    element.dataset.color = color;
                }
                saveColor(color,i){
                    this.ShadeColors[i] = color;
                }
               
}