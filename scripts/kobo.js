let clickCounts = 0;

function updateClickCounts() {
    const clickCountsElement = document.getElementById('clickCounts');
    clickCountsElement.textContent = clickCounts;
}

document.getElementById('searchBar').addEventListener('keyup', function(event) {
    if (event.key === "Enter") {
        searchFunction();
    }
});

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

        clickCounts++;

        updateClickCounts();
    }
}
