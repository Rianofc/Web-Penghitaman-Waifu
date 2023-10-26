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
}
