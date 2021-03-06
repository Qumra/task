var btn =document.getElementsByClassName('btn');
var box =document.getElementsByClassName('dropdown');
console.log(btn);
console.log(box);
for(var i =0;i<btn.length;i++){
   (function(n){
    btn[i].addEventListener('click',function(){
        // console.log(n);
        if(hasClass(box[n], 'show')){
                removeClass(box[n],'show');
                addClass(box[n],'hide');
        }else{
            removeClass(box[n],'hide');
            addClass(box[n],'show');
        }
    })
   })(i)
}



function addClass(el, className) {
    if (hasClass(el, className)) {
        return
    }
    let newClass = el.className.split(' ')
    newClass.push(className)
    el.className = newClass.join(' ')
}

function hasClass(el, className) {
    // \s匹配任何空白字符，包括空格、制表符、换页符等等
    let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
    return reg.test(el.className)
}
function removeClass(el, className){
    if (!hasClass(el, className)) {
        return
    }
    let newClass = el.className.split(' ')
    newClass.forEach(function(val, index, newClass){
        if(val === className){
            newClass.splice(index,1);
        }
    }) 
    el.className = newClass.join(' ')
}