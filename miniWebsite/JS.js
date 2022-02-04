
function myFuncAlert() {
	alert("Гранидиозные скидки на книги Поэзии!");
    document.getElementById("Alert").innerHTML = alert;
}


function myFunction() {
  document.getElementById("demo").style.fontSize = "25px";
}

function selectProd(){
        let value1 = document.getElementById('prod1');
        let value2 = document.getElementById('prod2');
        let value3 = document.getElementById('prod3');
        let value4 = document.getElementById('prod4');
        let value5 = document.getElementById('prod5');
        let value6 = document.getElementById('prod6');
        let value7 = document.getElementById('prod7');
        let value8 = document.getElementById('prod8');
        let value9 = document.getElementById('prod9');
        let value10 = document.getElementById('prod10');
        let value11 = document.getElementById('prod11');
        let value12 = document.getElementById('prod12');
        let value13 = document.getElementById('prod13');
        let value14 = document.getElementById('prod14');
        let value15 = document.getElementById('prod15');
        let value16 = document.getElementById('prod16');

        const arrayShoppingCart = [];

        if(value1.checked == true){
            let prod1 = document.getElementById('prod1').value;
            arrayShoppingCart.push(prod1);
        }

        if(value2.checked == true){
            let prod2 = document.getElementById('prod2').value;
            arrayShoppingCart.push(prod2);
        }

        if(value3.checked == true){
            let prod3 = document.getElementById('prod3').value;
            arrayShoppingCart.push(prod3);
        }

        if(value4.checked == true){
            let prod4 = document.getElementById('prod4').value;
            arrayShoppingCart.push(prod4);
        }

        if(value5.checked == true){
            let prod5 = document.getElementById('prod5').value;
            arrayShoppingCart.push(prod5);
        }

        if(value6.checked == true){
            let prod6 = document.getElementById('prod6').value;
            arrayShoppingCart.push(prod6);
        }

        if(value7.checked == true){
            let prod7 = document.getElementById('prod7').value;
            arrayShoppingCart.push(prod7);
        }

        if(value8.checked == true){
            let prod8 = document.getElementById('prod8').value;
            arrayShoppingCart.push(prod8);
        }

        if(value9.checked == true){
            let prod9 = document.getElementById('prod9').value;
            arrayShoppingCart.push(prod9);
        }

        if(value10.checked == true){
            let prod2 = document.getElementById('prod10').value;
            arrayShoppingCart.push(prod10);
        }

        if(value11.checked == true){
            let prod11 = document.getElementById('prod11').value;
            arrayShoppingCart.push(prod11);
        }

        if(value12.checked == true){
            let prod12 = document.getElementById('prod12').value;
            arrayShoppingCart.push(prod12);
        }

        if(value13.checked == true){
            let prod13 = document.getElementById('prod13').value;
            arrayShoppingCart.push(prod13);
        }

        if(value14.checked == true){
            let prod14 = document.getElementById('prod14').value;
            arrayShoppingCart.push(prod14);
        }

        if(value15.checked == true){
            let prod15 = document.getElementById('prod15').value;
            arrayShoppingCart.push(prod15);
        }

        if(value16.checked == true){
            let prod16 = document.getElementById('prod16').value;
            arrayShoppingCart.push(prod16);
        }
	document.getElementById('shoppingcart').innerHTML = arrayShoppingCart.toString()
}


$(document).ready(function(){
	$("#hide").click(function(){
		$(".hideText1").toggle(1000)
	});
});


    $(document).ready(function()
            { 

                $("div.mouseOverElem").mouseover(function(){
                    
                    alert("300 руб.");

                });  
                
                $("div.mouseOverElem2").mouseover(function(){
                    
                    alert("500 руб.");

                });

                $("div.mouseOverElem3").mouseover(function(){
                    
                    alert("339 руб.");

                });

                $("div.mouseOverElem4").mouseover(function(){
                    
                    alert("200 руб.");

                });

                $("div.mouseOverElem5").mouseover(function(){
                    
                    alert("217 руб.");

                });

                $("div.mouseOverElem6").mouseover(function(){
                    
                    alert("560 руб.");

                });

                $("div.mouseOverElem7").mouseover(function(){
                    
                    alert("540 руб.");

                });

                $("div.mouseOverElem8").mouseover(function(){
                    
                    alert("540 руб.");

                });

                $("div.mouseOverElem9").mouseover(function(){
                    
                    alert("825 руб.");

                });

                $("div.mouseOverElem10").mouseover(function(){
                    
                    alert("350 руб.");

                });

                $("div.mouseOverElem11").mouseover(function(){
                    
                    alert("210 руб.");

                });

                $("div.mouseOverElem12").mouseover(function(){
                    
                    alert("340 руб.");

                });

                $("div.mouseOverElem13").mouseover(function(){
                    
                    alert("234 руб.");

                });

                $("div.mouseOverElem14").mouseover(function(){
                    
                    alert("1252 руб.");

                });

                $("div.mouseOverElem15").mouseover(function(){
                    
                    alert("450 руб.");

                });

                $("div.mouseOverElem16").mouseover(function(){
                    
                    alert("1600 руб.");

                });
            });

$(document).ready(function(){
  $("#hide").click(function(){
    $(".hide1").hide(1000);
  });

  $("#hide1").click(function(){
    $(".hide2").hide(2000);
  });

  $("#hide2").click(function(){
    $(".hide3").hide(3000);
  });

  $("#hide3").click(function(){
    $(".hide4").hide(4000);
  });
})