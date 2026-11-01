/* 灯箱：点缩略图看大图。键盘 ← → 翻页，Esc 关，手机上左右滑动翻页。
   照片清单内联在页面里的 <script class="lb-data">，不额外请求。 */
(function () {
  'use strict';

  var grid = document.querySelector('.grid');
  var dataEl = document.querySelector('script.lb-data');
  if (!grid || !dataEl) return;

  var photos;
  try { photos = JSON.parse(dataEl.textContent); } catch (e) { return; }
  if (!photos || !photos.length) return;

  var idx = 0;
  var box = null;
  var imgEl = null;
  var barEl = null;
  var lastFocus = null;

  function base() {
    // 相册页在 /a/<slug>/ 下，照片路径相对页面本身
    return '';
  }

  function build() {
    box = document.createElement('div');
    box.className = 'lb';
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-modal', 'true');
    box.setAttribute('aria-label', '看大图');
    box.innerHTML =
      '<button type="button" class="lb__btn lb__close" aria-label="关闭">×</button>' +
      '<button type="button" class="lb__btn lb__prev" aria-label="上一张">‹</button>' +
      '<img class="lb__img" alt="">' +
      '<button type="button" class="lb__btn lb__next" aria-label="下一张">›</button>' +
      '<p class="lb__bar"><span class="lb__num"></span><span class="lb__cap"></span></p>';
    document.body.appendChild(box);

    imgEl = box.querySelector('.lb__img');
    barEl = box.querySelector('.lb__bar');

    box.querySelector('.lb__close').addEventListener('click', close);
    box.querySelector('.lb__prev').addEventListener('click', function () { step(-1); });
    box.querySelector('.lb__next').addEventListener('click', function () { step(1); });
    box.addEventListener('click', function (e) { if (e.target === box) close(); });

    var sx = 0, sy = 0, moved = false;
    imgEl.addEventListener('touchstart', function (e) {
      sx = e.touches[0].clientX; sy = e.touches[0].clientY; moved = false;
    }, { passive: true });
    imgEl.addEventListener('touchmove', function () { moved = true; }, { passive: true });
    imgEl.addEventListener('touchend', function (e) {
      if (!moved) return;
      var dx = e.changedTouches[0].clientX - sx;
      var dy = e.changedTouches[0].clientY - sy;
      if (Math.abs(dx) > 46 && Math.abs(dx) > Math.abs(dy)) step(dx < 0 ? 1 : -1);
    }, { passive: true });
  }

  function render() {
    var p = photos[idx];
    imgEl.src = base() + p.f;
    imgEl.alt = p.a || '';
    barEl.children[0].textContent = (idx + 1) + ' / ' + photos.length;
    // 图注只在配置里写了 captions 才有；没有就只留页码，不摆一句「第 N 张」凑数
    barEl.children[1].textContent = p.c || '';
    // 预取相邻一张，翻页时不用等
    [idx - 1, idx + 1].forEach(function (i) {
      if (i >= 0 && i < photos.length) { var im = new Image(); im.src = base() + photos[i].f; }
    });
  }

  function open(i) {
    if (!box) build();
    idx = i;
    lastFocus = document.activeElement;
    render();
    box.setAttribute('open', '');
    document.body.classList.add('lb-open');
    box.querySelector('.lb__close').focus();
  }

  function close() {
    if (!box) return;
    box.removeAttribute('open');
    document.body.classList.remove('lb-open');
    imgEl.removeAttribute('src');
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function step(d) {
    idx = (idx + d + photos.length) % photos.length;
    render();
  }

  grid.addEventListener('click', function (e) {
    var btn = e.target.closest('.ph__btn');
    if (!btn) return;
    e.preventDefault();
    open(parseInt(btn.getAttribute('data-i'), 10) || 0);
  });

  document.addEventListener('keydown', function (e) {
    if (!box || !box.hasAttribute('open')) return;
    if (e.key === 'Escape') { e.preventDefault(); close(); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); step(-1); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); step(1); }
  });
})();
