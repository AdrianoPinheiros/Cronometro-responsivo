
var sec=00;
var min=00;
var hr=00;
var interval;




function start(){
    interval= setInterval(watch,1000)
}


function pause(){ 
    clearInterval(interval)
}


function stop(){   
    clearInterval(interval)
    sec=0;
    min=0;
    document.getElementById("watch").textContent='00:00:00';
}


function twoDigit(digit){
    if(digit<10){
        return('0'+digit)
    }else{
        return(digit)
    }


}


function watch(){
    sec++
    if(sec==60){
        min++
        sec=0
        if(min==60){
            min=0
            hr++
        }
    }

   document.getElementById("watch").textContent=twoDigit(hr) + ':' + twoDigit(min) +':'+ twoDigit(sec);

}