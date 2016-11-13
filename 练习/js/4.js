/**
 * Created by Lynn on 2016/10/8.
 */
window.onload = function(){
    var oUl = document.getElementById('list');
    var aUl = oUl.getElementsByTagName('ul');
    var aH2 = oUl.getElementsByTagName('h2');
    var aLi = null;
    var arrLi = [];

    for(var i=0; i<aH2.length; i++) {
        aH2[i].index = i;
        aH2[i].onclick = function () {
            for(var i=0;i<aUl.length;i++){
                if(this.className == ''){
                    aUl[this.index].style.display = 'block';
                    this.className = 'active';
                }else{
                    aUl[this.index].style.display = 'none';
                    this.className = '';
                }
            }
        }
    }

    for(var i=0; i<aH2.length; i++){
        aLi = aUl[i].getElementsByTagName('li');
        for(var j=0; j<aLi.length; j++){
            arrLi.push(aLi[j]);
        }
    }

    for(var i=0; i<aLi.length; i++){
       arrLi[i].onclick = function(){

           for( var i=0; i<arrLi.length; i++ ){
               if( arrLi[i] !=this ){
                   arrLi[i].className = '';
               }
           }
           if( this.className == '' ){
               this.className = 'active';
           }else{
               this.className = '';
           }
       };
    }

};
