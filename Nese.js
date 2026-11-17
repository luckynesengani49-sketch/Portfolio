// ====== NESE Network System | Portfolio ======
(function () {
  // WhatsApp number in international format. A leading + is fine, it is removed automatically.
  var WHATSAPP = '+27710888837'.replace(/\D/g, '');

  // ===== PASTE YOUR LINKS HERE (inside the quotes) =====
  var PLACEHOLDER = 'paste link here';
  var LINKS = {
    'Enterprise Network':          'https://github.com/luckynesengani49-sketch/Networking_Project',
    'ThreatLens: SOC Threat Intelligence & Log Analyzer':      'https://github.com/luckynesengani49-sketch/ThreatLens-SOC-Threat-Intelligence-Log-Analyzer',
    'Automated Malware Detection': 'paste link here',
    'Web Development':             'paste link here',
    'LinkedIn Profile':            'https://www.linkedin.com/in/nesengani-l-letswalo-577440385',
    'GitHub Profile':              'https://github.com/luckynesengani49-sketch'
  };

  var header = document.getElementById('header');
  var menuBtn = document.getElementById('menuBtn');
  var menu = document.getElementById('menu');

  // ---- 3-line menu: open / close ----
  function setMenu(open) {
    menu.classList.toggle('open', open);
    menuBtn.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  menuBtn.addEventListener('click', function () {
    setMenu(!menu.classList.contains('open'));
  });
  // close after choosing a link
  menu.addEventListener('click', function (e) {
    if (e.target.closest('a')) setMenu(false);
  });
  // close when clicking outside or pressing Escape
  document.addEventListener('click', function (e) {
    if (!header.contains(e.target)) setMenu(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setMenu(false);
  });

  // ---- Header shadow once the page is scrolled ----
  function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > 10);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---- Project boxes: click a box to open its link ----
  document.querySelectorAll('.service').forEach(function (box) {
    box.addEventListener('click', function () {
      var title = box.getAttribute('data-title');
      var url = LINKS[title];
      if (!url || url === PLACEHOLDER) {
        alert('Link not added yet for: ' + title);
        return;
      }
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  });

  // ---- WhatsApp button in the contact section ----
  document.getElementById('waBtn').href = 'https://wa.me/' + WHATSAPP +
    '?text=' + encodeURIComponent('Hello NESE, I would like to get in touch.');

  // ---- Footer year ----
  document.getElementById('year').textContent = new Date().getFullYear();


 // ===== CERTIFICATE POPUP =====

var certificateModal = document.getElementById("certificateModal");
var certificateImage = document.getElementById("certificateImage");
var closeBtn = document.getElementById("closeCertificate");

// Open certificate
function openCertificate(imageSrc) {

    if (!imageSrc) {
        alert("Certificate image path is missing!");
        return;
    }

    certificateImage.src = imageSrc;

    certificateModal.style.display = "flex";

    document.body.style.overflow = "hidden";
}

// Close certificate
function closeCertificate() {

    certificateModal.style.display = "none";

    certificateImage.src = "";

    document.body.style.overflow = "";
}

// Make certificate cards clickable
document.querySelectorAll(".certificate-card").forEach(function(card) {

    card.addEventListener("click", function() {

        var imageSrc = card.getAttribute("data-image");

        openCertificate(imageSrc);

    });

});

// Close using X button
closeBtn.addEventListener("click", function(event) {

    event.stopPropagation();

    closeCertificate();

});

// Close when clicking outside the certificate
certificateModal.addEventListener("click", function(event) {

    if (event.target === certificateModal) {
        closeCertificate();
    }

});

// Close using ESC key
document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeCertificate();
    }

});
 
})();