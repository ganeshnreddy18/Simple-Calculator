function addToTextBar(num){
    document.querySelector('.text-bar').value += num;
}

function allClear(){
    document.querySelector('.text-bar').value='';
}

function dle(){
    let textbar = document.querySelector('.text-bar').value;
    textbar = textbar.slice(0,-1);
    document.querySelector('.text-bar').value = textbar;
}

function calculate(){
    let textbar = document.querySelector('.text-bar').value;
    try{
        let result = eval(textbar);
        console.log(result);
        if(result===NaN || result===Infinity ){
            document.querySelector('.text-bar').value = 'Invalid Input';
        }
        else{
            document.querySelector('.text-bar').value = result;
        }
    }catch(err){
        document.querySelector('.text-bar').value = 'ERROR';
    }
}