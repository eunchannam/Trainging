var use = document.querySelectorAll('.use');
var add = document.querySelectorAll('.add');
var money = 0;
var show = document.querySelector('#money');
show.innerHTML = money;

for (var i=0; i < use.length; i++){
  use[i].addEventListener('click', use_money);
  add[i].addEventListener('click', add_money);
  if (Number(use[i].id) < money){
    use[i].style.color = "blue";
  }
  else use[i].style.color = "red";
}

function use_money(){
  if(Number(this.id) < money){
    money -= Number(this.id);
}
  for(var i=0; i < use.length; i++){
    if (Number(use[i].id) < money){
      use[i].style.color = "blue";
    }
    else use[i].style.color = "red";
  }
  show.innerHTML = money;
}

function add_money(){
  money += Number(this.id);
  for(var i=0; i < use.length; i++){
    if (Number(use[i].id) < money){
      use[i].style.color = "blue";
    }
    else use[i].style.color = "red";
  }
  show.innerHTML = money;
}
