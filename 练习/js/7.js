/**
 * Created by Lynn on 2016/10/27.
 */
window.onload = function(){
    var oBtn = document.getElementById('btn');
    oBtn.onclick = function(){
        var string = document.getElementById('demo').innerHTML;//获取包含目标文本的内容
        var txt = string.replace(/Microsoft/i,"W3cschool");//要替换的内容
        document.getElementById('demo').innerHTML = txt;//替换
    }};
