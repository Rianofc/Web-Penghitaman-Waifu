function toggleImage() {
    const waifu = document.getElementById('waifu');
    const status = document.getElementById('status');

    if (waifu.src.endsWith('images/ryo.jpg')) {
        waifu.src = 'images/ryonig.jpg';
        status.textContent = 'Ryo Hitam';
    } else {
        waifu.src = 'images/ryo.jpg';
        status.textContent = 'Ryo Putih';
    }
}

function searchFunction() {
    const query = document.getElementById('searchBar').value.toLowerCase();

    if (query.includes("elysia")) {
        window.location.href = 'index.html';
    } else if (query.includes("ryo")) {
    } else if (query.includes("mahiru shiina")) {
        window.location.href = 'page3.html';
    } else {
        alert('Waifu tidak ditemukan');
    }
}

