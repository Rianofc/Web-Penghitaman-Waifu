function toggleImage() {
    const waifu = document.getElementById('waifu');
    const status = document.getElementById('status');

    if (waifu.src.endsWith('/images/kobo.jpg')) {
        waifu.src = '/images/kobonig.jpg';
        status.textContent = 'Kobo Kanaeru Hitam';
    } else {
        waifu.src = '/images/kobo.jpg';
        status.textContent = 'Kobo Kanaeru Putih';
    }
}

document.getElementById('searchBar').addEventListener('keyup', function(event) {
    if (event.key === "Enter") {
        searchFunction();
    }
});

function searchFunction() {
    const query = document.getElementById('searchBar').value.toLowerCase();

    if (query.includes("elysia")) {
        window.location.href = '/pages/elysia.html';
    } else if (query.includes("ryo")) {
        window.location.href = '/pages/ryo-yamada.html';
    } else if (query.includes("mahiru")) {
        window.location.href = '/pages/mahiru-shiina.html';
    } else if (query.includes("zeta")) {
        window.location.href = '/pages/vestia-zeta.html';
    } else if (query.includes("bocchi")) {
        window.location.href = '/pages/bocchi.html';
    } else if (query.includes("kafka")) {
        window.location.href = '/pages/kafka.html';
    } else if (query.includes("hutao")) {
        window.location.href = '/pages/hu-tao.html';
    } else if (query.includes("hu tao")) {
        window.location.href = '/pages/hu-tao.html';
    } else if (query.includes("nijika")) {
        window.location.href = '/pages/nijika.html';
    } else if (query.includes("kita")) {
        window.location.href = '/pages/kita.html';
    } else if (query.includes("ikuyo kita")) {
        window.location.href = '/pages/kita.html';
    } else if (query.includes("kobo")) {
        window.location.href = '/pages/kobo.html';
    }else if (query.includes("kobo kanaeru")) {
        window.location.href = '/pages/kobo.html';
    } else {
        modal.style.display = "block";
    }
}

function showDropdown() {
    const dropdown = document.getElementById('waifuDropdown');
    const query = document.getElementById('searchBar').value.toLowerCase();

    if (query === "") {
        dropdown.classList.remove('show');
        return;
    }

    if ([""].some(waifu => query.includes(waifu))) {
        dropdown.classList.add('show');
    } else {
        dropdown.classList.remove('show');
    }
}

document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('waifuDropdown');
    const searchContainer = document.querySelector('.search-container');

    if (!searchContainer.contains(event.target)) {
        dropdown.classList.remove('show');
    }
});

const modal = document.getElementById('notFoundModal');
const closeModal = document.querySelector('.close');

closeModal.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

let clickCount = 0;

function toggleImage() {
    const container = document.querySelector('.container');

    clickCount++;

    if (clickCount >= 50) {
        // Hapus tombol "Ubah"
        const ubahButton = document.getElementById('tombolubah');
        ubahButton.style.display = 'none';

        // Buat elemen iframe untuk video YouTube
        const iframe = document.createElement('iframe');
        iframe.setAttribute('width', '400');
        iframe.setAttribute('height', '400');
        iframe.setAttribute('src', 'https://www.youtube.com/embed/3tBjB8fG36I'); // Gantilah VIDEO_ID dengan ID video YouTube yang ingin Anda tampilkan
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allowfullscreen', 'true');

        // Hapus gambar dan teks
        container.innerHTML = '';

        // Tambahkan iframe ke dalam kontainer
        container.appendChild(iframe);
    } else {
        const waifu = document.getElementById('waifu');
        const status = document.getElementById('status');

        if (waifu.src.endsWith('/images/kobo.jpg')) {
            waifu.src = '/images/kobonig.jpg';
            status.textContent = 'Kobo Kanaeru Hitam';
        } else {
            waifu.src = '/images/kobo.jpg';
            status.textContent = 'Kobo Kanaeru Putih';
        }
    }
}
