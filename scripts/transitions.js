document.addEventListener('DOMContentLoaded', function () {
    // Tangkap semua tautan dengan kelas 'transition-link'
    const transitionLinks = document.querySelectorAll('.transition-link');
  
    // Tambahkan event listener ke setiap tautan
    transitionLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault(); // Mencegah perilaku default dari tautan
  
        const targetUrl = this.getAttribute('href'); // Dapatkan URL target dari atribut href
  
        // Tambahkan animasi keluar sebelum pindah ke halaman berikutnya
        document.body.style.opacity = 0;
  
        // Tunggu beberapa milidetik sebelum pindah ke halaman berikutnya
        setTimeout(function () {
          window.location.href = targetUrl;
        }, 500); // Waktu animasi keluar (dalam milidetik)
      });
    });
  });
  