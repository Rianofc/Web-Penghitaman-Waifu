function toggleImage() {
    const waifu = document.getElementById('waifu');
    const status = document.getElementById('status');

    if (waifu.src.endsWith('images/topekstm.jpg')) {
        waifu.src = 'images/topekemyu.jpg';
        status.textContent = 'Topek Emyu';
    } else {
        waifu.src = 'images/topekstm.jpg';
        status.textContent = 'Topek Stembayo';
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