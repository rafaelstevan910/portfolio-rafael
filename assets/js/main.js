// Rafael Stevan Witjaksono Portfolio - Interactive Script

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mobileMenu.classList.add('hidden');
      }
    });
  }

  // 2. Active Navigation Highlight
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active-nav');
    }
  });

  // 3. Glass Carousel / Slider (On Home Page)
  const sliderTrack = document.getElementById('sliderTrack');
  const slides = document.querySelectorAll('.slide-item');
  const prevBtn = document.getElementById('prevSlide');
  const nextBtn = document.getElementById('nextSlide');
  const dotsContainer = document.getElementById('sliderDots');

  if (sliderTrack && slides.length > 0) {
    let currentSlide = 0;
    const totalSlides = slides.length;
    let autoSlideTimer;

    // Create dots
    if (dotsContainer) {
      dotsContainer.innerHTML = '';
      slides.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.className = `slider-dot ${idx === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Slide ${idx + 1}`);
        dot.addEventListener('click', () => goToSlide(idx));
        dotsContainer.appendChild(dot);
      });
    }

    const updateSlider = () => {
      sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
      const dots = document.querySelectorAll('.slider-dot');
      dots.forEach((dot, idx) => {
        if (idx === currentSlide) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    };

    const nextSlide = () => {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateSlider();
    };

    const prevSlide = () => {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      updateSlider();
    };

    const goToSlide = (idx) => {
      currentSlide = idx;
      updateSlider();
      resetAutoSlide();
    };

    if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetAutoSlide(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetAutoSlide(); });

    // Auto advance slider every 5 seconds
    const startAutoSlide = () => {
      autoSlideTimer = setInterval(nextSlide, 5000);
    };

    const resetAutoSlide = () => {
      clearInterval(autoSlideTimer);
      startAutoSlide();
    };

    startAutoSlide();

    // Pause on hover
    const sliderContainer = document.querySelector('.slider-container');
    if (sliderContainer) {
      sliderContainer.addEventListener('mouseenter', () => clearInterval(autoSlideTimer));
      sliderContainer.addEventListener('mouseleave', startAutoSlide);
    }
  }

  // 4. Contact Form Handler (On Contact Page)
  const contactForm = document.getElementById('contactForm');
  const successModal = document.getElementById('successModal');
  const closeModalBtn = document.getElementById('closeModalBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Mengirim Pesan...
      `;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        contactForm.reset();
        
        if (successModal) {
          successModal.classList.remove('hidden');
          successModal.classList.add('flex');
        } else {
          showToast('Pesan berhasil dikirim! Terima kasih atas kontak Anda.');
        }
      }, 1200);
    });
  }

  if (closeModalBtn && successModal) {
    closeModalBtn.addEventListener('click', () => {
      successModal.classList.add('hidden');
      successModal.classList.remove('flex');
    });

    // Close on background click
    successModal.addEventListener('click', (e) => {
      if (e.target === successModal) {
        successModal.classList.add('hidden');
        successModal.classList.remove('flex');
      }
    });
  }
});

// 5. Toast Notification Function
function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <div class="glass-card !bg-white/95 px-5 py-3.5 rounded-2xl shadow-xl flex items-center gap-3 border border-sky-200">
      <div class="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-lg flex-shrink-0">
        ✓
      </div>
      <div>
        <p class="text-sm font-semibold text-slate-800">${message}</p>
      </div>
    </div>
  `;

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

// 6. Copy Instagram Username Function
function copyInstagramHandle(handle = 'rayzzfzxt_ft_morales_12') {
  navigator.clipboard.writeText(handle).then(() => {
    showToast(`Username Instagram @${handle} berhasil disalin!`);
  }).catch(() => {
    // Fallback if clipboard api fails
    const dummy = document.createElement('input');
    document.body.appendChild(dummy);
    dummy.value = handle;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    showToast(`Username Instagram @${handle} berhasil disalin!`);
  });
}
