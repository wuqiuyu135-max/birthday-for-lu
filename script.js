/* =========================================================================
   致暖暖 · 生日祝福网站 —— 脚本
   使用前请完成以下准备：
   1. 修改下方 startDate 为你们相识的真实日期（格式：YYYY-MM-DD）
   2. 在 memories 里增删回忆条目、对应替换 images/ 里的照片
   3. 在 cutePhotos 里增删「萌萌的照片」、对应替换 images/ 里的照片
   4. 「写给暖暖的话」在 index.html 第 4 页的 letter-body 里直接改
   ========================================================================= */

/* ===================== 配置区 ===================== */

// ★ 修改为你们相识的真实日期
const startDate = '2022-09-01'; // 格式：YYYY-MM-DD

// 我们的故事（回忆 + 时间轴合并）—— 可自由增删条目、替换图片
// 想加一条回忆，就复制一行 { img: 'images/memoryX.jpg', date: '...', title: '...', text: '...' }
// 图片放入 images/ 文件夹，文件名对应 img
const memories = [
  { img: 'images/memory1.jpg', date: '2022-09-17', title: '第一次相遇', text: 'ok呀命运就这样让我们在刚开学的时候就当上了同桌，当时小小的我们又怎么能想到一做闺蜜就做到了现在呢！' },
  { img: 'images/memory2.jpg', date: '2022-11-18', title: '高二运动会', text: '这个小蓝相机我还记得！我们当时拿它拍了好多好多照片。' },
  { img: 'images/memory3.jpg', date: '2023-11-18', title: '高三运动会', text: '不知道中间的这一年为什么一张照片我都没找到！很快速的我们就一起走向了高三，这张照片好像是我们去偷看学弟学妹的回来路上sw给我们拍的。' },
  { img: 'images/memory4.jpg', date: '2024-02-24', title: '成人礼', text: '再然后就一下到了百日誓师！真好呀高二高三的每个重要日子我们都在一起！' },
  { img: 'images/memory5.jpg', date: '2024-07-04', title: '方特的一天', text: '啦啦啦啦啦就这样一起肩并肩地度过了高考，在方特度过了幸福的一天，虽然很热但是我们三个依旧玩得很开心！' },
  { img: 'images/memory6.jpg', date: '2025-10-04', title: '在威海', text: '于是我来到了你上学的城市！走过了你走过的路！' },
  { img: 'images/memory7.jpg', date: '2025-10-05', title: '在烟台', text: '我还记得那几天天气不是很好，但是两个人在一起就很幸福了呀。' },
  { img: 'images/memory8.jpg', date: '2025-10-06', title: '呜呜呜离别时刻', text: '伤感中。去年十月我们还在一起今年这个时候居然就异国了》...' },
  { img: 'images/memory9.jpg', date: '2026-01-24', title: '在泉州', text: '我们一起走过的第四座城市呀。这天晚上在这个湖边拍了一万张忧郁照片（我合理怀疑我对忧郁照片的追求就是从这一天开始的' },
  { img: 'images/memory10.jpg', date: '2026-01-24', title: '胡闹厨房', text: '这张照片太美好了我想回到那天晚上...两个人手忙脚乱的做了一顿特别温馨的火锅。现在我已经会做更多美味的饭了我们什么时候再胡闹厨房！' },
  { img: 'images/memory11.jpg', date: '2026-07-25', title: '我临走前最后一面...', text: '居然暑假只见了一面！好遗憾，等我回来你一定要来苏州找我玩呜呜呜.' },
];


   

// 封面照片（入场封面拼贴）—— 照片放在项目根目录即可
const coverPhotos = [
  { src: '微信图片_20260913155528_41_15.jpg', caption: '我们的合照' },
  { src: '微信图片_20260913155530_42_15.jpg', caption: '最可爱的你' },
  { src: '微信图片_20260913155531_43_15.jpg', caption: '一起走过的日子' },
  { src: '微信图片_20260913155533_44_15.jpg', caption: '闪闪发光的瞬间' },
  { src: '微信图片_20260913155535_45_15.jpg', caption: '永远爱你' },
];

// 附上一些萌萌的照片嘿嘿（照片墙）—— 照片放入 images/ 文件夹，文件名对应 src
// 想加一张就复制一行 { src: 'images/cuteX.jpg', caption: '...' }
const cutePhotos = [
  { src: 'images/cute1.jpg', caption: '' },
  { src: 'images/cute2.jpg', caption: '' },
  { src: 'images/cute3.jpg', caption: '' },
  { src: 'images/cute4.jpg', caption: '' },
  { src: 'images/cute5.jpg', caption: '' },
  { src: 'images/cute6.jpg', caption: '' },
  { src: 'images/cute7.jpg', caption: '' },
  { src: 'images/cute8.jpg', caption: '' },
  { src: 'images/cute9.jpg', caption: '' },
  { src: 'images/cute10.jpg', caption: '' },
  { src: 'images/cute11.jpg', caption: '' },
  { src: 'images/cute12.jpg', caption: '' },
  { src: 'images/cute13.jpg', caption: '' },
  { src: 'images/cute14.jpg', caption: '' },
  { src: 'images/cute15.jpg', caption: '' },
  { src: 'images/cute16.jpg', caption: '' },
  { src: 'images/cute17.jpg', caption: '' },
  { src: 'images/cute18.jpg', caption: '' },
  { src: 'images/cute19.jpg', caption: '' },
];

/* ===================== 工具函数 ===================== */

function calcDays(start) {
  const startTime = new Date(start + 'T00:00:00');
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diff = Math.floor((today - startTime) / (1000 * 60 * 60 * 24));
  return Math.max(diff, 0);
}

function placeholderSVG(label) {
  const svg =
    '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="450">' +
    '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
    '<stop offset="0" stop-color="#d6f3ec"/><stop offset="1" stop-color="#e8f6f1"/>' +
    '</linearGradient></defs>' +
    '<rect width="600" height="450" fill="url(#g)"/>' +
    '<text x="50%" y="45%" text-anchor="middle" font-size="80">📷</text>' +
    '<text x="50%" y="58%" text-anchor="middle" font-family="sans-serif" font-size="26" fill="#8a7566">' + label + '</text>' +
    '</svg>';
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

function imgFallback(img) {
  img.onerror = null;
  const name = img.getAttribute('src').split('/').pop();
  img.src = placeholderSVG(name);
}

function toast(msg) {
  let t = document.querySelector('.toast');
  if (!t) {
    t = document.createElement('div');
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 3200);
}

/* ===================== DOM 引用 ===================== */
const bgLayer = document.getElementById('bgLayer');
const entrance = document.getElementById('entrance');
const enterBtn = document.getElementById('enterBtn');
const slider = document.getElementById('slider');
const navPrev = document.getElementById('navPrev');
const navNext = document.getElementById('navNext');
const dots = document.getElementById('dots');
const daysNumber = document.getElementById('daysNumber');
const daysDate = document.getElementById('daysDate');
const memoriesEl = document.getElementById('memories');
const cuteGalleryEl = document.getElementById('cuteGallery');
const birthdayBtn = document.getElementById('birthdayBtn');
const lightbox = document.getElementById('lightbox');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const birthdayModal = document.getElementById('birthdayModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalThank = document.getElementById('modalThank');

/* ===================== 背景：参考图同款兔子 + 星光 ===================== */
// 兔子直接使用参考图抠出的透明 PNG（rabbit1.png / rabbit2.png），做到一模一样
const rabbits = ['rabbit1.png', 'rabbit2.png'];

// 背景漂浮照片（我拍过的她）—— 4 张，像兔子一样在背景里轻轻漂浮
const bgPhotos = [
  '微信图片_20260913222526_50_15.jpg',
  '微信图片_20260913222528_51_15.jpg',
  '微信图片_20260913222530_52_15.jpg',
  '微信图片_20260913222532_53_15.jpg',
];

function buildBackground() {
  const sparks = ['✦', '✧', '✨'];

  // 闪烁星光
  for (let i = 0; i < 36; i++) {
    const s = document.createElement('span');
    s.className = 'sparkle';
    s.textContent = sparks[i % sparks.length];
    s.style.left = Math.random() * 100 + '%';
    s.style.top = Math.random() * 100 + '%';
    s.style.setProperty('--sz', (10 + Math.random() * 16) + 'px');
    s.style.setProperty('--dur', (2 + Math.random() * 4) + 's');
    s.style.setProperty('--delay', (Math.random() * 4) + 's');
    bgLayer.appendChild(s);
  }

  // 参考图同款小兔
  rabbits.forEach((src, i) => {
    const r = document.createElement('img');
    r.className = 'rabbit rabbit-' + (i + 1);
    r.src = src;
    r.alt = '小兔子';
    r.onerror = function () { this.style.display = 'none'; };
    bgLayer.appendChild(r);
  });

  // 背景漂浮照片（我拍过的她）
  bgPhotos.forEach((src, i) => {
    const p = document.createElement('img');
    p.className = 'bg-photo bg-photo-' + (i + 1);
    p.src = src;
    p.alt = '';
    p.onerror = function () { this.style.display = 'none'; };
    bgLayer.appendChild(p);
  });
}

/* ===================== 相识天数 ===================== */
function renderDays() {
  const days = calcDays(startDate);
  daysNumber.textContent = days.toLocaleString('zh-CN');
  daysDate.textContent = '从 ' + startDate + ' 走到今天';
}

/* ===================== 我们的故事（回忆 + 时间轴合并） ===================== */
function renderMemories() {
  memories.forEach((m) => {
    const item = document.createElement('article');
    item.className = 'memory';
    item.innerHTML =
      '<div class="memory-photo" data-src="' + m.img + '" data-caption="' + m.title + '">' +
      '<img src="' + m.img + '" alt="' + m.title + '" loading="lazy" onerror="imgFallback(this)">' +
      '</div>' +
      '<div class="memory-content">' +
      '<span class="memory-date">' + m.date + '</span>' +
      '<h3 class="memory-title">' + m.title + '</h3>' +
      '<p class="memory-text">' + m.text + '</p>' +
      '</div>';
    memoriesEl.appendChild(item);
  });
}

/* ===================== 照片墙（通用渲染） ===================== */
function renderGalleryTo(items, container) {
  items.forEach((p) => {
    const fig = document.createElement('figure');
    fig.className = 'gallery-item';
    fig.setAttribute('data-src', p.src);
    fig.setAttribute('data-caption', p.caption);
    fig.innerHTML =
      '<div class="gallery-img">' +
      '<img src="' + p.src + '" alt="' + p.caption + '" loading="lazy" onerror="imgFallback(this)">' +
      '</div>' +
      '<figcaption class="gallery-caption">' + p.caption + '</figcaption>';
    container.appendChild(fig);
  });
}

/* ===================== 附上一些萌萌的照片嘿嘿 ===================== */
function renderCuteGallery() {
  renderGalleryTo(cutePhotos, cuteGalleryEl);
}

/* ===================== 封面照片拼贴 ===================== */
function renderCover() {
  const wrap = document.getElementById('coverPhotos');
  if (!wrap) return;
  coverPhotos.forEach((p, i) => {
    const fig = document.createElement('figure');
    fig.className = 'cover-photo cover-photo-' + (i + 1);
    fig.innerHTML = '<img src="' + p.src + '" alt="' + p.caption + '" onerror="imgFallback(this)">';
    wrap.appendChild(fig);
  });
}

/* ===================== 左右翻页 ===================== */
function initSlider() {
  const slides = document.querySelectorAll('.slide');
  let current = 0;

  slides.forEach((s, i) => {
    const d = document.createElement('button');
    d.className = 'dot';
    d.title = s.dataset.title || ('第 ' + (i + 1) + ' 页');
    d.addEventListener('click', () => goTo(i));
    dots.appendChild(d);
  });
  const dotEls = dots.querySelectorAll('.dot');

  function goTo(i) {
    current = Math.max(0, Math.min(slides.length - 1, i));
    slider.style.transform = 'translateX(-' + (current * 100) + '%)';
    dotEls.forEach((d, idx) => d.classList.toggle('active', idx === current));
    navPrev.classList.toggle('disabled', current === 0);
    navNext.classList.toggle('disabled', current === slides.length - 1);
  }

  navPrev.addEventListener('click', () => goTo(current - 1));
  navNext.addEventListener('click', () => goTo(current + 1));

  // 键盘左右键翻页
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') goTo(current + 1);
    else if (e.key === 'ArrowLeft') goTo(current - 1);
  });

  // 触屏滑动翻页
  let startX = 0, startY = 0;
  slider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }, { passive: true });
  slider.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - startX;
    const dy = e.changedTouches[0].clientY - startY;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) {
      goTo(dx < 0 ? current + 1 : current - 1);
    }
  }, { passive: true });

  goTo(0);
}

/* ===================== 图片灯箱 ===================== */
function openLightbox(src, caption) {
  lightboxImg.src = src;
  lightboxImg.onerror = () => imgFallback(lightboxImg);
  lightboxCaption.textContent = caption;
  lightbox.classList.add('show');
}
function closeLightbox() {
  lightbox.classList.remove('show');
}

function initLightbox() {
  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
      closeModal();
    }
  });

  // 委托：点击带 data-src 的图片放大查看
  document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-src]');
    if (target) {
      openLightbox(target.getAttribute('data-src'), target.getAttribute('data-caption'));
    }
  });
}

/* ===================== 生日弹窗 ===================== */
function openModal() {
  birthdayModal.classList.add('show');
  birthdayModal.setAttribute('aria-hidden', 'false');
}
function closeModal() {
  birthdayModal.classList.remove('show');
  birthdayModal.setAttribute('aria-hidden', 'true');
}

function initModal() {
  birthdayBtn.addEventListener('click', openModal);
  modalClose.addEventListener('click', closeModal);
  modalThank.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', closeModal);
}

/* ===================== 入场 ===================== */
function initEntrance() {
  enterBtn.addEventListener('click', () => {
    entrance.classList.add('hidden');
  });
}

/* ===================== 启动 ===================== */
buildBackground();
renderCover();
renderDays();
renderMemories();
renderCuteGallery();
initSlider();
initLightbox();
initModal();
initEntrance();
