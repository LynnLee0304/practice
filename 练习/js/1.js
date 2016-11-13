/**
 * Created by Lynn on 2016/10/4.
 */
window.onload = function(){
    var oBox = document.getElementById('box');
    var oImg = document.getElementById('img');
    var oText = document.getElementById('text');
    var oSend = document.getElementById('send');

    var onOff = true;

    oImg.onclick = function(){
        if(onOff){
            oImg.src = 'images/3.jpg';
            onOff = false;
        }else{
            oImg.src = 'images/1.jpg';
            onOff = true;
        }
    };
    oSend.onclick = function(){
        oBox.innerHTML = oBox.innerHTML + '<br/>' + oText.value;
    };
};