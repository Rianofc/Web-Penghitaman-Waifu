function toggleImage() {
    const waifu = document.getElementById('waifu');
    const status = document.getElementById('status');

    if (waifu.src.endsWith('images/ely.png')) {
        waifu.src = 'images/elynig.png';
        status.textContent = 'Elysia Hitam';
    } else {
        waifu.src = 'images/ely.png';
        status.textContent = 'Elysia Putih';
    }
}

function searchFunction() {
    const query = document.getElementById('searchBar').value.toLowerCase();

    if (query.includes("elysia")) {
        window.location.href = 'index.html';
    } else if (query.includes("ryo")) {
        window.location.href = 'page2.html';
    } else if (query.includes("mahiru")) {
        window.location.href = 'page3.html';
    } else if (query.includes("zeta")) {
        window.location.href = 'page4.html';
    } else {
        alert('Waifu tidak ditemukan');
    }
}

let clickCounter = 0;

function toggleImage() {
    const waifu = document.getElementById('waifu');
    const status = document.getElementById('status');

    if (waifu.src.endsWith('ely.png')) {
        waifu.src = 'images/elynig.png';
        status.textContent = 'Elysia Hitam';
    } else {
        waifu.src = 'images/ely.png';
        status.textContent = 'Elysia Putih';
    }

    clickCounter++; 

    if (clickCounter === 50) {
        window.location.href = 'C2qXvulx4s.html'; 
    }
}
