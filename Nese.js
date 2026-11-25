/* ==========================================================
   Certificate zoom (lightbox)
   Click a certificate card that has an image and the image
   opens big on the screen. Close it with the X button, by
   clicking outside the image, or by pressing the Esc key.
   ========================================================== */

(function () {
  'use strict';

  // 1. Build the pop-up once and add it to the page
  var lightbox = document.createElement('div');
  lightbox.className = 'cert-lightbox';
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-modal', 'true');
  lightbox.setAttribute('aria-label', 'Certificate preview');

  var bigImage = document.createElement('img');
  bigImage.alt = '';

  var closeBtn = document.createElement('button');
  closeBtn.className = 'cert-close';
  closeBtn.type = 'button';
  closeBtn.setAttribute('aria-label', 'Close certificate');
  closeBtn.innerHTML = '&times;';

  lightbox.appendChild(bigImage);
  lightbox.appendChild(closeBtn);
  document.body.appendChild(lightbox);

  var lastFocused = null;

  // 2. Open and close functions
  function openLightbox(img) {
    lastFocused = document.activeElement;
    bigImage.src = img.currentSrc || img.src;
    bigImage.alt = img.alt || 'Certificate';
    lightbox.classList.add('open');
    document.body.classList.add('lightbox-open');
    closeBtn.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.classList.remove('lightbox-open');
    if (lastFocused) {
      lastFocused.focus();
    }
  }

  // 3. Make every certificate card that has an image clickable
  var cards = document.querySelectorAll('.certificate-card');

  cards.forEach(function (card) {
    var img = card.querySelector('.certificate-image');
    if (!img) return; // cards without an image (e.g. the diploma) are skipped

    card.classList.add('zoomable');
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', 'Zoom ' + (img.alt || 'certificate'));

    card.addEventListener('click', function () {
      openLightbox(img);
    });

    // Keyboard support: Enter or Space opens the certificate
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(img);
      }
    });
  });

  // 4. Ways to close it
  closeBtn.addEventListener('click', closeLightbox);

  lightbox.addEventListener('click', function (e) {
    // clicking the dark background (not the image) closes it
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lightbox.classList.contains('open')) {
      closeLightbox();
    }
  });
})();