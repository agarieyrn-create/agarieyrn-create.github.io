/* コース料金の目安 */
(function () {
  var box = document.querySelector('.calc'); if (!box) return;
  var n = 4, MIN = 2, MAX = 30, out = box.querySelector('#people'), total = box.querySelector('#total'), btns = box.querySelectorAll('[data-d]');
  function draw() {
    var price = +box.querySelector('[name=course]:checked').value;
    out.textContent = n; total.textContent = '¥' + (price * n).toLocaleString('ja-JP');
    btns[0].disabled = n <= MIN; btns[1].disabled = n >= MAX;
  }
  [].forEach.call(btns, function (b) { b.addEventListener('click', function () { n = Math.min(MAX, Math.max(MIN, n + +b.getAttribute('data-d'))); draw(); }); });
  box.addEventListener('change', draw); draw();
})();
