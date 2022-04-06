var btn_0 = document.getElementById('btn_0');
var isBlue = true;
btn_0.addEventListener('click',function(){
     isBlue = !isBlue;
     var hue = document.getElementsByClassName('main')[0];
     var pop_bgc = document.getElementsByClassName('pop_1')[0];
     var pop_bgc2 = document.getElementsByClassName('pop_2')[0];
     console.log(hue);
     console.log(pop_bgc);
     console.log(pop_bgc2);
     hue.style.color = isBlue? '#578cad':'#b55b71';
     pop_bgc.style.background = isBlue? '#c1d1db':'#dbc1ce';
     pop_bgc2.style.background = isBlue? '#c1d1db':'#dbc1ce';
     btn_0.innerHTML = isBlue? '換甜美風':'換簡約感';
})

// btn_1---------------------------------------------
var btn_1 = document.getElementById('btn_1');
var isVisible = true;
btn_1.addEventListener('click',function(){
  isVisible = !isVisible;
  var pop_1 = document.getElementsByClassName('pop_1')[0];
  console.log(pop_1);
  pop_1.style.display = isVisible? 'block':'none';
  btn_1.innerHTML = isVisible? 'close <<<':'>>> hobby';
})

// btn_2---------------------------------------
var btn_2 = document.getElementById('btn_2');
var isVisible = true;
btn_2.addEventListener('click',function(){
  isVisible = !isVisible;
  var pop_2 = document.getElementsByClassName('pop_2')[0];
  console.log(pop_2);
  pop_2.style.display = isVisible? 'block':'none';
  btn_2.innerHTML = isVisible? 'close <<<':'>>> game';
})