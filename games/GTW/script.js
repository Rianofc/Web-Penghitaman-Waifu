// Data gambar dan jawaban
const dataGambar = [
    { gambar: 'ayakanig.jpg', jawaban: 'ayaka' },
    { gambar: 'zetanig.jpg', jawaban: 'zeta' },
    { gambar: 'elainanig.jpg', jawaban: 'elaina' },
    { gambar: 'hutaonig.jpg', jawaban: 'hutao' },
    { gambar: 'marchnig.jpg', jawaban: 'march' },
    { gambar: 'griseonig.jpg', jawaban: 'griseo' },
    // Tambahkan lebih banyak data gambar sesuai kebutuhan
];

let currentGambarIndex;

// Fungsi untuk memuat gambar baru
function loadGambar() {
    currentGambarIndex = Math.floor(Math.random() * dataGambar.length);
    const gambarTebekeun = document.getElementById('gambar-tebak');
    gambarTebekeun.src = '/images/' + dataGambar[currentGambarIndex].gambar;
}

// Fungsi untuk memeriksa jawaban
function cekJawaban() {
    const jawabanInput = document.getElementById('jawaban-input').value.toLowerCase();
    const jawabanBenar = dataGambar[currentGambarIndex].jawaban.toLowerCase();
    const hasilPesan = document.getElementById('hasil');

    if (jawabanInput === jawabanBenar) {
        hasilPesan.innerHTML = 'Correct!';
        setTimeout(() => {
            nextGambar();
        }, 1000); // Delay 1 detik sebelum pindah ke gambar berikutnya
    } else {
        hasilPesan.innerHTML = 'Incorrect answer, please try again!';
    }
}

// Fungsi untuk pindah ke gambar berikutnya
function nextGambar() {
    loadGambar();
    document.getElementById('jawaban-input').value = '';
    document.getElementById('hasil').innerHTML = '';
}

// Memuat gambar pertama saat halaman dimuat
window.onload = function () {
    loadGambar();

    // Menambahkan event listener untuk mendeteksi tombol "Enter"
    const jawabanInput = document.getElementById('jawaban-input');
    jawabanInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            cekJawaban();
        }
    });
};