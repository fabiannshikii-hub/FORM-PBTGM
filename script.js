// ================= VALIDASI FORM PENDAFTARAN =================

const registrationForm = document.getElementById("registrationForm");

const namaInput = document.getElementById("nama");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const ekskulInput = document.getElementById("ekskul");
const successMessage = document.getElementById("successMessage");

const namaError = document.getElementById("namaError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmError = document.getElementById("confirmError");
const ekskulError = document.getElementById("ekskulError");

registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // reset pesan error & pesan sukses dulu
  namaError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  confirmError.textContent = "";
  ekskulError.textContent = "";
  successMessage.textContent = "";

  let valid = true;

  // NAMA wajib diisi
  if (namaInput.value.trim() === "") {
    namaError.textContent = "Nama lengkap wajib diisi.";
    valid = false;
  }

  // EMAIL wajib diisi & format benar
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailInput.value.trim() === "") {
    emailError.textContent = "Email wajib diisi.";
    valid = false;
  } else if (!emailRegex.test(emailInput.value.trim())) {
    emailError.textContent = "Format email tidak valid.";
    valid = false;
  }

  // PASSWORD wajib diisi & minimal 8 karakter
  if (passwordInput.value === "") {
    passwordError.textContent = "Password wajib diisi.";
    valid = false;
  } else if (passwordInput.value.length < 8) {
    passwordError.textContent = "Password minimal 8 karakter.";
    valid = false;
  }

  // KONFIRMASI PASSWORD wajib diisi & harus sama
  if (confirmPasswordInput.value === "") {
    confirmError.textContent = "Konfirmasi password wajib diisi.";
    valid = false;
  } else if (confirmPasswordInput.value !== passwordInput.value) {
    confirmError.textContent = "Password tidak cocok.";
    valid = false;
  }

  // EKSKUL wajib dipilih
  if (ekskulInput.value === "") {
    ekskulError.textContent = "Pilih salah satu ekstrakurikuler.";
    valid = false;
  }

  // KALAU ADA YANG BELUM VALID, BATALKAN SUBMIT
  if (!valid) {
    return;
  }

  // SEMUA VALID -> tampilkan pesan sukses
  successMessage.textContent =
    "✅ Pendaftaran berhasil! Sampai jumpa di ekstrakurikuler " +
    ekskulInput.value +
    ".";
  registrationForm.reset();
});

// ================= CHATBOT =================

const chatButton = document.getElementById("chatButton");
const chatbot = document.getElementById("chatbot");
const closeChat = document.getElementById("closeChat");

const chatInput = document.getElementById("chatInput");
const sendButton = document.getElementById("sendButton");
const chatBody = document.getElementById("chatBody");

// BUKA CHATBOT
chatButton.addEventListener("click", function () {
  chatbot.style.display = "block";
});

// TUTUP CHATBOT
closeChat.addEventListener("click", function () {
  chatbot.style.display = "none";
});

// ================= JAWABAN CHATBOT =================

function jawabanBot(pesan) {
  pesan = pesan.toLowerCase();

  if (
    pesan.includes("hai") ||
    pesan.includes("halo") ||
    pesan.includes("hello")
  ) {
    return "🤖 Halo! 👋 Ada yang bisa aku bantu tentang pendaftaran ekstrakurikuler?";
  }

  if (
    pesan.includes("optimus") ||
    pesan.includes("prime") ||
    pesan.includes("optimus prime")
  ) {
    return "I am Optimus Prime, and I send this message to any surviving Autobots taking refuge among the stars: We are here. We are waiting.";
  }

  if (
    pesan.includes("jawir") ||
    pesan.includes("sunda") ||
    pesan.includes("jawa")
  ) {
    return "Gausah rasis mas😹😹";
  }

  if (
    pesan.includes("autobot") ||
    pesan.includes("autobots") ||
    pesan.includes("AutoBot")
  ) {
    return "Autobots, roll out!";
  }

  if (
    pesan.includes("daftar") ||
    pesan.includes("cara daftar") ||
    pesan.includes("cara mendaftar") ||
    pesan.includes("pendaftaran")
  ) {
    return "🤖 Cara daftar: isi nama lengkap, email, password, konfirmasi password, pilih ekstrakurikuler, lalu klik tombol Daftar Sekarang.";
  }

  if (
    pesan.includes("ekskul") ||
    pesan.includes("pilihan ekskul") ||
    pesan.includes("pilihan ekstrakurikuler") ||
    pesan.includes("ekskul apa")
  ) {
    return "🤖 Pilihan ekskul yang tersedia adalah 🏕️ Pramuka, ⚽ Futsal, 🩺 PMR, 🇮🇩 Paskibra, dan lainnya.";
  }
  if (pesan.includes("syarat")) {
    return "🤖 Syaratnya adalah mengisi data pendaftaran dengan lengkap dan memilih ekstrakurikuler yang diinginkan.";
  }

  if (pesan.includes("password") || pesan.includes("kata sandi")) {
    return "🤖 Password digunakan untuk keamanan akun. Gunakan password minimal 8 karakter.";
  }

  if (pesan.includes("pramuka")) {
    return "🤖 🏕️ Pramuka melatih kedisiplinan, kemandirian, kerja sama, dan kepemimpinan.";
  }

  if (pesan.includes("osis")) {
    return "🤖 🏛️ OSIS melatih jiwa kepemimpinan, organisasi, manajemen kegiatan, dan tanggung jawab.";
  }

  if (pesan.includes("rohis")) {
    return "🤖 🕌 Rohis fokus pada pembinaan keagamaan, kajian Islam, dan pengembangan akhlak.";
  }

  if (pesan.includes("silat")) {
    return "🤖 🥋 Silat melatih bela diri, kedisiplinan, ketangkasan, dan mental yang kuat.";
  }

  if (pesan.includes("paduan suara") || pesan.includes("paduan")) {
    return "🤖 🎤 Paduan Suara melatih olah vokal, harmoni bermusik, dan kekompakan tim.";
  }

  if (pesan.includes("volly") || pesan.includes("voli")) {
    return "🤖 🏐 Volly melatih kerja sama tim, refleks, dan kekuatan fisik.";
  }

  if (pesan.includes("futsal")) {
    return "🤖 ⚽ Futsal melatih kerja sama tim, kecepatan, dan keterampilan bermain bola.";
  }

  if (pesan.includes("pmr")) {
    return "🤖 🩺 PMR mempelajari pertolongan pertama, kesehatan, kepedulian sosial, dan kegiatan kemanusiaan.";
  }

  if (pesan.includes("paskibra")) {
    return "🤖 🇮🇩 Paskibra melatih kedisiplinan, kekompakan, tanggung jawab, dan baris-berbaris.";
  }

  if (pesan.includes("multimedia")) {
    return "🤖 🎨 Multimedia berkaitan dengan desain, foto, video, editing, dan pembuatan konten digital.";
  }

  if (pesan.includes("terima kasih") || pesan.includes("makasih")) {
    return "🤖 Sama-sama! 😊 Semoga pendaftarannya lancar.";
  }

  return "🤖 Maaf, aku belum memahami pertanyaan itu 😅 Coba tanyakan tentang cara daftar, pilihan ekskul, syarat, password, Pramuka, OSIS, Rohis, Silat, Paduan Suara, Volly, Futsal, PMR, Paskibra, atau Multimedia.";
}

// ================= KIRIM PESAN =================

function kirimPesan() {
  const pesan = chatInput.value.trim();
  if (pesan === "") {
    return;
  }

  // PESAN DARI USER
  const userMessage = document.createElement("div");
  userMessage.className = "user-message";
  userMessage.textContent = pesan;
  chatBody.appendChild(userMessage);

  // JAWABAN BOT
  const botMessage = document.createElement("div");
  botMessage.className = "bot-message";
  botMessage.textContent = jawabanBot(pesan);
  chatBody.appendChild(botMessage);

  // KOSONGKAN INPUT
  chatInput.value = "";

  // SCROLL KE PESAN TERAKHIR
  chatBody.scrollTop = chatBody.scrollHeight;
}

// TOMBOL KIRIM
sendButton.addEventListener("click", kirimPesan);

// KIRIM DENGAN ENTER
chatInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    kirimPesan();
  }
});
