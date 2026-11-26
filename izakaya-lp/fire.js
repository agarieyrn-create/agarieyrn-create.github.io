/* 炭火の写真に火の粉を足す。画面内にある間だけ動き、ボタンで止められる */
(function () {
  var box = document.querySelector('.fire'); if (!box) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var layer = box.querySelector('.embers'), btn = box.querySelector('.stop');
  for (var i = 0; i < 16; i++) {
    var e = document.createElement('i');
    e.style.cssText = 'left:' + (42 + (i * 23) % 45) + '%;top:' + (66 + (i * 11) % 20) + '%;--t:' + (2.2 + (i % 5) * 0.5) + 's;--dl:-' + ((i * 0.61) % 4).toFixed(2) + 's;--dx:' + (((i * 29) % 70) - 35) + 'px';
    layer.appendChild(e);
  }
  var playing = true, seen = !('IntersectionObserver' in window);
  function sync() {
    box.classList.toggle('paused', !(playing && seen));
    btn.textContent = playing ? '動きを止める' : '再生する';
  }
  btn.hidden = false;
  btn.addEventListener('click', function () { playing = !playing; sync(); });
  box.classList.add('run'); sync();
  if (!seen) new IntersectionObserver(function (e) { seen = e[e.length - 1].isIntersecting; sync(); }, { threshold: 0.2 }).observe(box);
})();
