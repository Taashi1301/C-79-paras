var paraarray=[];
function getpara(){
    for(x=1; x<=5; x++){
        line=document.getElementById("name"+x).value;
        paraarray.push(line);
    }
    console.log(paraarray); 
    document.getElementById("output").innerHTML=paraarray.join(". ");
}