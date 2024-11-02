let textscr=document.getElementById("text-screen");
    function display(num){
        textscr.value += num;
    }
    function clearall(){
        textscr.value = "";
    }
    function del(){
        textscr.value=textscr.value.slice(0,-1);
    }
    function calculate(){
        try{
            textscr.value=eval(textscr.value);
        }
        catch(error){
            alert("Calculation is not possible");
        }
    }