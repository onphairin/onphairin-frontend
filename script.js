console.log("Portfolio loaded successfully ✨");

// ===== Project Slider =====
const sliders = document.querySelectorAll(".slider");

sliders.forEach(slider => {
  const images = slider.querySelectorAll("img");
  let index = 0;

  setInterval(() => {
    images[index].classList.remove("active");
    index = (index + 1) % images.length;
    images[index].classList.add("active");
  }, 3000);
});

// Resume Modal
const openBtn = document.getElementById('openResume');
const modal = document.getElementById('resumeModal');
const closeBtn = document.getElementById('closeResume');

openBtn.addEventListener('click', function(e) {
  e.preventDefault();
  modal.style.display = 'flex';
});

closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

window.addEventListener('click', function(e) {
  if(e.target == modal) {
    modal.style.display = 'none';
  }
});

openBtn.addEventListener('click', function(e) {
  e.preventDefault();
  modal.style.display = 'flex';
});

closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

window.addEventListener('click', function(e) {
  if(e.target == modal) {
    modal.style.display = 'none';
  }
});


openBtn.addEventListener('click', function(e) {
  e.preventDefault();
  modal.style.display = 'flex';
});

closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

window.addEventListener('click', function(e) {
  if(e.target == modal) {
    modal.style.display = 'none';
  }
});

// ===== Project Modal =====
function openProject(project) {
  const title = document.getElementById("projectTitle");
  const desc = document.getElementById("projectDesc");
  const tech = document.getElementById("projectTech");
  const link = document.getElementById("projectLink");

  if (project === "cafe") {
    title.textContent = "☕ Cafe Review Web";
    desc.textContent = "เว็บไซต์รีวิวร้านกาแฟ พร้อมระบบค้นหาและแผนที่";
    tech.innerHTML = `
      <li>HTML, CSS, JavaScript</li>
      <li>React</li>
      <li>Google Maps API</li>
    `;
    link.href = "https://github.com/yourname/cafe-review";
  }

  if (project === "flutter") {
    title.textContent = "📱 Flutter Post App";
    desc.textContent = "แอปจัดการโพสต์และโปรไฟล์ผู้ใช้";
    tech.innerHTML = `
      <li>Flutter</li>
      <li>Dart</li>
      <li>REST API</li>
    `;
    link.href = "https://github.com/yourname/flutter-post";
  }

  document.getElementById("projectModal").style.display = "flex";
}

function closeProject() {
  document.getElementById("projectModal").style.display = "none";
}

// ================== Skills Hover Preview ==================
const skills = document.querySelectorAll('.skill');
const preview = document.getElementById('skillPreview');

skills.forEach(skill => {
  skill.addEventListener('mouseenter', () => {
    const imgPath = skill.getAttribute('data-img');
    preview.style.backgroundImage = `url(${imgPath})`;
    preview.style.display = 'block';
  });

  skill.addEventListener('mouseleave', () => {
    preview.style.display = 'none';
  });

  skill.addEventListener('mousemove', (e) => {
    preview.style.top = (e.pageY - 50) + 'px';
    preview.style.left = (e.pageX + 20) + 'px';
  });
});

/* ==========================
   Resume Lightbox
========================== */
const resumeBtn = document.getElementById('resumeBtn');
const resumeLightbox = document.getElementById('resumeLightbox');
const resumeClose = document.getElementById('resumeClose');

// เปิด Lightbox เมื่อกดปุ่ม View Resume
resumeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  resumeLightbox.style.display = 'flex';
});

// ปิด Lightbox ด้วยปุ่ม ×
resumeClose.addEventListener('click', () => {
  resumeLightbox.style.display = 'none';
});

// ปิด Lightbox เมื่อคลิกนอกรูป
resumeLightbox.addEventListener('click', (e) => {
  if (e.target === resumeLightbox) {
    resumeLightbox.style.display = 'none';
  }
});


