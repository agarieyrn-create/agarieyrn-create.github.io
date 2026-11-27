document.querySelectorAll(".menu-toggle").forEach(function(button){
  var nav=document.getElementById(button.getAttribute("aria-controls"));
  if(!nav)return;
  button.addEventListener("click",function(){
    var open=button.getAttribute("aria-expanded")==="true";
    button.setAttribute("aria-expanded",String(!open));
    nav.classList.toggle("is-open",!open);
  });
  nav.querySelectorAll("a").forEach(function(link){
    link.addEventListener("click",function(){
      button.setAttribute("aria-expanded","false");
      nav.classList.remove("is-open");
    });
  });
  document.addEventListener("keydown",function(event){
    if(event.key==="Escape"){
      button.setAttribute("aria-expanded","false");
      nav.classList.remove("is-open");
      button.focus();
    }
  });
});
document.querySelectorAll("[data-demo-form]").forEach(function(form){
  form.addEventListener("submit",function(event){
    event.preventDefault();
    var message=form.querySelector(".form-message");
    if(message){
      message.textContent="制作サンプルのため、入力内容は送信されていません。実際のサイトでは予約・相談先につなぐ設計にできます。";
      message.focus();
    }
  });
});
