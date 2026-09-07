document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("startButton");
  const startHint = document.getElementById("startHint");
  const opening = document.getElementById("opening");
  const mainContent = document.getElementById("mainContent");
  const song = document.getElementById("song");

  const mainImage = document.getElementById("mainImage");
  const leftImage = document.getElementById("leftImage");
  const rightImage = document.getElementById("rightImage");

  const backgroundA = document.getElementById("backgroundA");
  const backgroundB = document.getElementById("backgroundB");
  const cinematic = document.getElementById("cinematic");

  const photoCounter = document.getElementById("photoCounter");
  const frameNumber = document.getElementById("frameNumber");

  const sceneLabel = document.getElementById("sceneLabel");
  const sceneTitle = document.getElementById("sceneTitle");
  const sceneDescription = document.getElementById("sceneDescription");
  const caption = document.getElementById("caption");

  const lyricCard = document.getElementById("lyricCard");
  const lyricLine = document.getElementById("lyricLine");
  const personalLine = document.getElementById("personalLine");

  const progressContainer = document.getElementById("progressContainer");
  const progressBar = document.getElementById("progressBar");
  const timeText = document.getElementById("timeText");

  const playButton = document.getElementById("playButton");
  const playIcon = document.getElementById("playIcon");

  const rewindButton = document.getElementById("rewindButton");

  const forwardButton = document.getElementById("forwardButton");

  const preciseTime = document.getElementById("preciseTime");

  const soundButton = document.getElementById("soundButton");
  const soundIcon = document.getElementById("soundIcon");

  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const lightboxClose = document.getElementById("lightboxClose");
  const lightboxPrev = document.getElementById("lightboxPrev");
  const lightboxNext = document.getElementById("lightboxNext");
  const lightboxCounter = document.getElementById("lightboxCounter");

  // Hening di awal file MP3
  const AUDIO_OFFSET = 4.13;

  // Untuk koreksi semua lirik sekaligus
  const LYRIC_ADJUST = 0;

  const photos = Array.from(
    { length: 10 },
    (_, index) => `assets/images/${index + 1}.jpg`,
  );

  // Scene foto
  // Data tampilan setiap foto
  const photoScenes = [
    {
      label: "THE BEGINNING",
      title: "Sebelum semuanya menjadi kenangan...",
      description: "aku ingin menyimpan versi kita yang paling sederhana.",
      personal:
        "Cerita ini dimulai dari foto-foto kecil yang punya arti besar.",
      effect: "effect-zoom-in",
      accent: "220, 160, 170",
    },

    {
      label: "LEMBARAN PERTAMA",
      title: "Ada foto yang tidak hanya menyimpan wajah.",
      description: "Ia juga menyimpan suasana, waktu, dan perasaan saat itu.",
      personal:
        "Dari semua hal yang pernah lewat, momen bersamamu ingin kuingat lebih lama.",
      effect: "effect-pan-right",
      accent: "210, 172, 147",
    },

    {
      label: "A FAMILIAR WARMTH",
      title: "Hal-hal kecil sering menjadi kenangan terbaik.",
      description: "Tempat, aroma, dan tawa yang dulu terasa biasa.",
      personal: "Lucunya, satu foto bisa membuat semuanya terasa dekat lagi.",
      effect: "effect-zoom-out",
      accent: "180, 139, 177",
    },

    {
      label: "COLORFUL MEMORIES",
      title: "Kamu membuat hari biasa punya lebih banyak warna.",
      description: "Bahkan momen paling sederhana jadi pantas untuk dirayakan.",
      personal:
        "Terima kasih sudah hadir di banyak bagian kecil dalam ceritaku.",
      effect: "effect-rise",
      accent: "215, 176, 123",
    },

    {
      label: "THANK YOU",
      title: "Untuk warna yang kamu bawa ke dalam hidupku.",
      description:
        "Dan untuk banyak kenangan indah yang kita buat tanpa sadar.",
      personal:
        "Aku tidak selalu pandai mengatakannya, jadi biarkan lagu ini mewakiliku.",
      effect: "effect-pan-left",
      accent: "217, 146, 160",
    },

    {
      label: "QUIET NIGHTS",
      title: "Ada malam yang terasa lebih tenang karena kamu.",
      description:
        "Saat dunia ramai, kehadiranmu tetap punya caranya sendiri untuk menenangkan.",
      personal: "Beberapa rasa aman memang tidak membutuhkan banyak kata.",
      effect: "effect-zoom-in",
      accent: "133, 128, 190",
    },

    {
      label: "YOUR VOICE",
      title: "Ada hal sederhana yang selalu membuatku merasa pulang.",
      description: "Mungkin sebuah suara, mungkin sebuah nama, mungkin kamu.",
      personal: "Sebab rasa nyaman kadang datang dari orang yang tepat.",
      effect: "effect-pan-right",
      accent: "145, 168, 197",
    },

    {
      label: "BEAUTIFUL COLORS",
      title: "Sekali lagi, terima kasih.",
      description:
        "Untuk semua warna, cerita, dan kenangan yang kamu tinggalkan.",
      personal:
        "Semoga kamu tahu bahwa kehadiranmu tidak pernah terasa kecil bagiku.",
      effect: "effect-zoom-out",
      accent: "221, 160, 169",
    },

    {
      label: "THE TIME WE HAVE",
      title: "Kita tidak pernah tahu berapa lama waktu diberikan.",
      description:
        "Karena itu, setiap momen yang ada ingin aku jaga sebaik mungkin.",
      personal:
        "Dan kalau suatu hari jarak datang, jangan biarkan kenangan ini hilang.",
      effect: "effect-rise",
      accent: "184, 151, 191",
    },

    {
      label: "NEVER FORGET",
      title: "Kalau semuanya nanti menjadi monokrom...",
      description:
        "aku tetap ingin mengingat warna demi warna yang pernah kamu berikan.",
      personal:
        "Terima kasih sudah mengajarkanku bahwa cinta bisa hadir lewat hati yang baik.",
      effect: "effect-pan-left",
      accent: "211, 183, 141",
    },
  ];

  // Lirik
  const lyricCues = [
    {
      time: 0,
      lyric: "Cerita ini akan dimulai bersama lagunya.",
    },

    {
      time: 22.45,
      lyric: "Lembaran foto hitam putih",
    },

    {
      time: 27.2,
      lyric: "Aku coba ingat lagi",
    },

    {
      time: 30.0,
      lyric: "Warna bajumu kala itu",
    },

    {
      time: 33.0,
      lyric: "Kali pertama di hidupku",
    },

    {
      time: 38.1,
      lyric: "Manusia lain memelukku",
    },

    {
      time: 44.2,
      lyric: "Lembaran foto hitam putih",
    },

    {
      time: 49.2,
      lyric: "Aku coba ingat lagi",
    },

    {
      time: 51.7,
      lyric: "Wangi rumah di sore itu",
    },

    {
      time: 55.0,
      lyric: "Kue cokelat, balon warna-warni",
    },

    {
      time: 60.18,
      lyric: "Pesta hari ulang tahunku",
    },

    {
      time: 65.6,
      lyric: "Di manapun kalian berada",
    },

    {
      time: 71.0,
      lyric: "Kukirimkan terima kasih",
    },

    {
      time: 75.5,
      lyric: "Untuk warna dalam hidupku",
    },

    {
      time: 78.7,
      lyric: "Dan banyak kenangan indah",
    },

    {
      time: 85.6,
      lyric: "Kau melukis aku",
    },

    {
      time: 93.4,
      lyric: "Lembaran foto hitam putih",
    },

    {
      time: 98.1,
      lyric: "Kembali teringat malam",
    },

    {
      time: 99.9,
      lyric: "Kuhitung-hitung bintang",
    },

    {
      time: 104,
      lyric: "Saat mataku sulit tidur",
    },

    {
      time: 108.8,
      lyric: "Suaramu buatku lelap",
    },

    {
      time: 117,
      lyric: "Di manapun kalian berada",
    },

    {
      time: 122.5,
      lyric: "Kukirimkan terima kasih",
    },

    {
      time: 127,
      lyric: "Untuk warna dalam hidupku",
    },

    {
      time: 130,
      lyric: "Dan banyak kenangan indah",
    },

    {
      time: 137,
      lyric: "Kau melukis aku",
    },

    {
      time: 143,
      lyric: "Kita tak pernah tahu",
    },

    {
      time: 147,
      lyric: "Berapa lama kita diberi waktu",
    },

    {
      time: 154,
      lyric: "Jika aku pergi lebih dulu",
    },

    {
      time: 158,
      lyric: "Jangan lupakan aku",
    },

    {
      time: 161.7,
      lyric: "Ini lagu untukmu",
    },

    {
      time: 166,
      lyric: "Ungkapan terima kasihku",
    },

    {
      time: 175,
      lyric: "Lembar monokrom hitam putih",
    },

    {
      time: 180,
      lyric: "Aku coba ingat warna demi warna di hidupku",
    },

    {
      time: 186,
      lyric: "Tak akan ku mengenal cinta",
    },

    {
      time: 189.6,
      lyric: "Bila bukan karena hati baikmu",
    },
  ];

  const effectClasses = [
    "effect-zoom-in",
    "effect-zoom-out",
    "effect-pan-left",
    "effect-pan-right",
    "effect-rise",
    "image-enter",
  ];

  let currentPhotoIndex = -1;
  let currentLyricIndex = -1;

  let activeBackground = backgroundA;
  let inactiveBackground = backgroundB;

  let lightboxIndex = 0;
  let started = false;
  let animationFrame = null;

  // Preload foto
  function preloadAssets() {
    photos.forEach((source) => {
      const image = new Image();
      image.src = source;
    });
  }

  // Waktu musik asli setelah hening
  function getMusicTime() {
    return Math.max(0, song.currentTime - AUDIO_OFFSET);
  }

  // Durasi musik tanpa hening
  function getMusicDuration() {
    if (!Number.isFinite(song.duration)) {
      return 214.5;
    }

    return Math.max(0, song.duration - AUDIO_OFFSET);
  }

  // Format waktu
  function formatTime(seconds) {
    if (!Number.isFinite(seconds)) {
      return "00:00";
    }

    const minute = Math.floor(seconds / 60);
    const second = Math.floor(seconds % 60);

    return `${String(minute).padStart(2, "0")}:${String(second).padStart(
      2,
      "0",
    )}`;
  }

  // Ambil lirik aktif
  function getActiveLyricIndex(currentTime) {
    let activeIndex = 0;

    for (let i = 0; i < lyricCues.length; i++) {
      if (currentTime >= lyricCues[i].time + LYRIC_ADJUST) {
        activeIndex = i;
        continue;
      }

      break;
    }

    return activeIndex;
  }

  // Restart animasi
  function restartAnimation(element, className) {
    element.classList.remove(className);

    void element.offsetWidth;

    element.classList.add(className);
  }

  // Background crossfade
  function crossfadeBackground(source) {
    inactiveBackground.style.backgroundImage = `url("${source}")`;

    inactiveBackground.classList.add("is-active");

    activeBackground.classList.remove("is-active");

    const temporary = activeBackground;

    activeBackground = inactiveBackground;
    inactiveBackground = temporary;
  }

  // Ganti foto mengikuti lirik
  function setPhotoByLyric(lyricIndex) {
    // Intro dan lirik pertama tetap memakai foto 1
    const actualLyricIndex = Math.max(0, lyricIndex - 1);

    // Setelah foto 10 kembali ke foto 1
    const photoIndex = actualLyricIndex % photos.length;

    if (photoIndex === currentPhotoIndex) {
      return;
    }

    currentPhotoIndex = photoIndex;

    const scene = photoScenes[photoIndex];

    const source = photos[photoIndex];

    const leftIndex = (photoIndex + 1) % photos.length;

    const rightIndex = (photoIndex + 2) % photos.length;

    mainImage.src = source;

    leftImage.src = photos[leftIndex];

    rightImage.src = photos[rightIndex];

    crossfadeBackground(source);

    cinematic.style.setProperty("--scene-accent", scene.accent);

    photoCounter.textContent = `${String(photoIndex + 1).padStart(
      2,
      "0",
    )} / ${String(photos.length).padStart(2, "0")}`;

    frameNumber.textContent = String(photoIndex + 1).padStart(2, "0");

    sceneLabel.textContent = scene.label;

    sceneTitle.textContent = scene.title;

    sceneDescription.textContent = scene.description;

    personalLine.textContent = scene.personal;

    mainImage.classList.remove(...effectClasses);

    void mainImage.offsetWidth;

    mainImage.classList.add(scene.effect);

    restartAnimation(caption, "caption-enter");
  }

  // Ganti lirik
  function setLyric(index) {
    if (index === currentLyricIndex || !lyricCues[index]) {
      return;
    }

    currentLyricIndex = index;

    lyricLine.textContent = lyricCues[index].lyric;

    restartAnimation(lyricCard, "lyric-enter");
  }

  // Update semua elemen
  function updateExperience() {
    const currentTime = getMusicTime();

    const duration = getMusicDuration();

    const progress = Math.min(100, Math.max(0, (currentTime / duration) * 100));

    progressBar.style.width = `${progress}%`;

    timeText.textContent = `${formatTime(currentTime)} / ${formatTime(duration)}`;

    preciseTime.textContent = `${currentTime.toFixed(2)}s`;

    const lyricIndex = getActiveLyricIndex(currentTime);

    setPhotoByLyric(lyricIndex);

    setLyric(lyricIndex);

    if (!song.paused && !song.ended) {
      animationFrame = requestAnimationFrame(updateExperience);
    }
  }

  // Mulai website
  async function startExperience() {
    if (started) {
      return;
    }

    startButton.disabled = true;

    startHint.textContent = "Membuka cerita...";

    try {
      if (song.readyState < 1) {
        await new Promise((resolve) => {
          song.addEventListener(
            "loadedmetadata",
            () => {
              resolve();
            },
            {
              once: true,
            },
          );
        });
      }

      // Lewati hening 4.13 detik
      song.currentTime = AUDIO_OFFSET;

      await song.play();
    } catch (error) {
      startButton.disabled = false;

      startHint.textContent =
        "Audio gagal dibuka. Pastikan file assets/audio/monokrom.mp3 tersedia.";

      console.error("Audio gagal dimainkan:", error);

      return;
    }

    started = true;

    currentPhotoIndex = -1;
    currentLyricIndex = -1;

    mainContent.classList.remove("hidden");

    opening.classList.add("is-closing");

    document.body.classList.remove("page-locked");

    setPhotoByLyric(0);

    setLyric(0);

    updateExperience();

    setTimeout(() => {
      opening.style.display = "none";

      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
    }, 1050);
  }

  // Play pause
  function togglePlay() {
    if (!started) {
      startExperience();

      return;
    }

    if (song.paused) {
      if (song.currentTime < AUDIO_OFFSET) {
        song.currentTime = AUDIO_OFFSET;
      }

      song.play().catch((error) => {
        console.error(error);
      });
    } else {
      song.pause();
    }
  }

  // Icon play
  function setPlayState() {
    playIcon.textContent = song.paused ? "▶" : "Ⅱ";
  }

  // Seek progress
  function seekFromPointer(event) {
    const duration = getMusicDuration();

    if (!Number.isFinite(duration)) {
      return;
    }

    const rect = progressContainer.getBoundingClientRect();

    const clientX = event.clientX ?? event.touches?.[0]?.clientX ?? rect.left;

    const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));

    const targetMusicTime = ratio * duration;

    song.currentTime = targetMusicTime + AUDIO_OFFSET;

    currentPhotoIndex = -1;
    currentLyricIndex = -1;

    updateExperience();
  }

  // Maju mundur lagu
  function seekRelative(seconds) {
    const duration = getMusicDuration();

    let targetTime = getMusicTime() + seconds;

    targetTime = Math.max(0, Math.min(duration, targetTime));

    song.currentTime = targetTime + AUDIO_OFFSET;

    currentPhotoIndex = -1;
    currentLyricIndex = -1;

    updateExperience();
  }

  // Event start
  startButton.addEventListener("click", startExperience);

  rewindButton.addEventListener("click", () => {
    seekRelative(-5);
  });

  forwardButton.addEventListener("click", () => {
    seekRelative(5);
  });

  // Event play
  playButton.addEventListener("click", togglePlay);

  // Event mute
  soundButton.addEventListener("click", () => {
    song.muted = !song.muted;

    soundIcon.textContent = song.muted ? "×" : "♫";
  });

  // Event progress
  progressContainer.addEventListener("click", seekFromPointer);

  // Event audio play
  song.addEventListener("play", () => {
    document.body.classList.remove("is-paused");

    setPlayState();

    cancelAnimationFrame(animationFrame);

    updateExperience();
  });

  // Event audio pause
  song.addEventListener("pause", () => {
    document.body.classList.add("is-paused");

    setPlayState();

    cancelAnimationFrame(animationFrame);
  });

  // Metadata audio
  song.addEventListener("loadedmetadata", () => {
    if (!started) {
      timeText.textContent = `00:00 / ${formatTime(getMusicDuration())}`;
    } else {
      updateExperience();
    }
  });

  // Setelah seek
  song.addEventListener("seeked", () => {
    if (!started) {
      return;
    }

    currentPhotoIndex = -1;
    currentLyricIndex = -1;

    updateExperience();
  });

  // Audio selesai
  song.addEventListener("ended", () => {
    setPlayState();

    document.querySelector(".ending").scrollIntoView({
      behavior: "smooth",
    });
  });

  // Error audio
  song.addEventListener("error", () => {
    startHint.textContent =
      "Audio tidak ditemukan. Pastikan nama file assets/audio/monokrom.mp3";
  });

  // Buka lightbox
  function showLightbox(index) {
    lightboxIndex = (index + photos.length) % photos.length;

    lightboxImage.src = photos[lightboxIndex];

    lightboxCounter.textContent = `${String(lightboxIndex + 1).padStart(
      2,
      "0",
    )} / ${String(photos.length).padStart(2, "0")}`;

    lightbox.classList.add("is-open");

    lightbox.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";
  }

  // Tutup lightbox
  function closeLightbox() {
    lightbox.classList.remove("is-open");

    lightbox.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";
  }

  // Klik gallery
  document.querySelectorAll(".gallery-item").forEach((item) => {
    item.addEventListener("click", () => {
      showLightbox(Number(item.dataset.index));
    });
  });

  lightboxClose.addEventListener("click", closeLightbox);

  lightboxPrev.addEventListener("click", () => {
    showLightbox(lightboxIndex - 1);
  });

  lightboxNext.addEventListener("click", () => {
    showLightbox(lightboxIndex + 1);
  });

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  // Keyboard lightbox
  document.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("is-open")) {
      return;
    }

    if (event.key === "Escape") {
      closeLightbox();
    }

    if (event.key === "ArrowLeft") {
      showLightbox(lightboxIndex - 1);
    }

    if (event.key === "ArrowRight") {
      showLightbox(lightboxIndex + 1);
    }
  });

  // Swipe HP
  let touchStartX = 0;

  lightbox.addEventListener(
    "touchstart",
    (event) => {
      touchStartX = event.changedTouches[0].clientX;
    },
    {
      passive: true,
    },
  );

  lightbox.addEventListener(
    "touchend",
    (event) => {
      const difference = event.changedTouches[0].clientX - touchStartX;

      if (Math.abs(difference) < 45) {
        return;
      }

      if (difference > 0) {
        showLightbox(lightboxIndex - 1);
      } else {
        showLightbox(lightboxIndex + 1);
      }
    },
    {
      passive: true,
    },
  );

  // Reveal scroll
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");

          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
    },
  );

  document.querySelectorAll(".reveal").forEach((element, index) => {
    element.style.transitionDelay = `${Math.min(index % 5, 4) * 70}ms`;

    revealObserver.observe(element);
  });

  // Canvas partikel
  const canvas = document.getElementById("particleCanvas");

  const context = canvas.getContext("2d");

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  let particles = [];

  // Resize canvas
  function resizeCanvas() {
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = Math.floor(window.innerWidth * pixelRatio);

    canvas.height = Math.floor(window.innerHeight * pixelRatio);

    canvas.style.width = `${window.innerWidth}px`;

    canvas.style.height = `${window.innerHeight}px`;

    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

    const count = reducedMotion
      ? 14
      : Math.min(55, Math.max(26, Math.floor(window.innerWidth / 24)));

    particles = Array.from(
      {
        length: count,
      },
      () => ({
        x: Math.random() * window.innerWidth,

        y: Math.random() * window.innerHeight,

        radius: Math.random() * 1.7 + 0.35,

        speed: Math.random() * 0.16 + 0.035,

        drift: (Math.random() - 0.5) * 0.08,

        alpha: Math.random() * 0.42 + 0.08,

        pulse: Math.random() * Math.PI * 2,
      }),
    );
  }

  // Gambar partikel
  function drawParticles() {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);

    particles.forEach((particle) => {
      particle.y -= particle.speed;

      particle.x += particle.drift;

      particle.pulse += 0.012;

      if (particle.y < -10) {
        particle.y = window.innerHeight + 10;

        particle.x = Math.random() * window.innerWidth;
      }

      if (particle.x < -10) {
        particle.x = window.innerWidth + 10;
      }

      if (particle.x > window.innerWidth + 10) {
        particle.x = -10;
      }

      const alpha = particle.alpha * (0.72 + Math.sin(particle.pulse) * 0.28);

      context.beginPath();

      context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);

      context.fillStyle = `rgba(245, 217, 221, ${alpha})`;

      context.shadowBlur = 10;

      context.shadowColor = "rgba(220, 160, 170, 0.35)";

      context.fill();
    });

    requestAnimationFrame(drawParticles);
  }

  resizeCanvas();

  drawParticles();

  window.addEventListener("resize", resizeCanvas);

  preloadAssets();
});
