let i=0;
function chkNext(){
    let list = document.getElementsByClassName('chk');

    list[i].checked=true;
    i++
    
}

function resetChk(){
    i=0
}