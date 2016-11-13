/**
 * Created by Lynn on 2016/10/4.
 */
window.onload = function(){
    var oImg = document.getElementById('img');
    var oPrev = document.getElementById('prev');
    var oNext = document.getElementById('next');
    var oBtn1 = document.getElementById('btn1');
    var oBtn2 = document.getElementById('btn2');
    var oP = document.getElementById('p');
    var arrUrl = ['images/1.jpg','images/2.jpeg','images/3.jpg','images/4.jpeg'];
    var arrText = ['第一张图','第二张图','第三张图','第四张图'];
    var num = 0;
    var onOff = true;

    //初始化
    function fnTab(){
        oImg.src = arrUrl[num];
        oP.innerHTML = arrText[num];
    }

    oBtn1.onclick = function(){
      onOff = true;
    };
    oBtn2.onclick = function(){
        onOff = false;
    };


    oNext.onclick = function(){
        num++;
        if(num==arrUrl.length){
            if(onOff = true){
                num = 0;
            }else{
                alert('这是最后一张');
                num = arrUrl.length - 1;

            }
        }
        fnTab();

    };

    oPrev.onclick = function(){
        num--;
        if(num==-1){
            if(onOff = true){
                num = arrUrl.length-1;
            }else{
                alert('这是第一张');
                num = 0;
            }
        }
        fnTab();

    }



};