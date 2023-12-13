const dataGambar = [
    { gambar: 'ainig.jpg', jawaban: 'ai hoshino' },
    { gambar: 'akanenig.jpg', jawaban: 'akane' },
    { gambar: 'arunig.jpg', jawaban: 'aru' },
    { gambar: 'ayakanig.jpg', jawaban: 'ayaka' },
    { gambar: 'bocchinig.jpg', jawaban: 'bocchi' },
    { gambar: 'chisatonig.jpg', jawaban: 'chisato' },
    { gambar: 'elainanig.jpg', jawaban: 'elaina' },
    { gambar: 'elynig.jpg', jawaban: 'elysia' },
    { gambar: 'fernnig.jpg', jawaban: 'fern' },
    { gambar: 'frierennig.jpg', jawaban: 'frieren' },
    { gambar: 'furinanig.jpg', jawaban: 'furina' },
    { gambar: 'griseonig.jpg', jawaban: 'griseo' },
    { gambar: 'hertanig.jpg', jawaban: 'herta' },
    { gambar: 'hinanig.jpg', jawaban: 'hina' },
    { gambar: 'hinatanig.jpg', jawaban: 'hinata' },
    { gambar: 'hoshinonig.jpg', jawaban: 'hoshino' },
    { gambar: 'hutaonig.jpg', jawaban: 'hu tao' },
    { gambar: 'jingliunig.jpg', jawaban: 'jingliu' },
    { gambar: 'kafkanig.jpg', jawaban: 'kafka' },
    { gambar: 'kananig.jpg', jawaban: 'kana' },
    { gambar: 'kaorinig.jpg', jawaban: 'kaori' },
    { gambar: 'keqingnig.jpg', jawaban: 'keqing' },
    { gambar: 'kiananig.jpg', jawaban: 'kiana' },
    { gambar: 'kitanig.jpg', jawaban: 'kita' },
    { gambar: 'kobonig.jpg', jawaban: 'kobo' },
    { gambar: 'mahirunig.jpg', jawaban: 'mahiru' },
    { gambar: 'makimanig.jpg', jawaban: 'makima' },
    { gambar: 'marchnig.jpg', jawaban: 'march 7th' },
    { gambar: 'marinnig.jpg', jawaban: 'marin' },
    { gambar: 'mikasanig.jpg', jawaban: 'mikasa' },
    { gambar: 'miyakonig.jpg', jawaban: 'miyako' },
    { gambar: 'nakanoichikanig.jpg', jawaban: 'ichika' },
    { gambar: 'nakanoitsukinig.jpg', jawaban: 'itsuki' },
    { gambar: 'nakanomikunig.jpg', jawaban: 'miku' },
    { gambar: 'nakanoninonig.jpg', jawaban: 'nino' },
    { gambar: 'nakanoyotsubanig.jpg', jawaban: 'yotsuba' },
    { gambar: 'nijikanig.jpg', jawaban: 'nijika' },
    { gambar: 'nilounig.jpg', jawaban: 'nilou' },
    { gambar: 'ninymnig.jpg', jawaban: 'ninym' },
    { gambar: 'nobaranig.jpg', jawaban: 'nobara' },
    { gambar: 'raidenshogunnig.jpg', jawaban: 'raiden shogun' },
    { gambar: 'rionig.jpg', jawaban: 'rio' },
    { gambar: 'robinnig.jpg', jawaban: 'nico robin' },
    { gambar: 'rubynig.jpg', jawaban: 'ruby hoshino' },
    { gambar: 'ryonig.jpg', jawaban: 'ryo' },
    { gambar: 'shikimorinig.jpg', jawaban: 'shikimori' },
    { gambar: 'shirokonig.jpg', jawaban: 'shiroko' },
    { gambar: 'shizukanig.jpg', jawaban: 'shizuka' },
    { gambar: 'siestanig.jpg', jawaban: 'siesta' },
    { gambar: 'stellenig.jpg', jawaban: 'stelle' },
    { gambar: 'takinanig.jpg', jawaban: 'takina' },
    { gambar: 'theresanig.jpg', jawaban: 'theresa' },
    { gambar: 'topaznig.jpg', jawaban: 'topaz' },
    { gambar: 'tsunadenig.jpg', jawaban: 'tsunade' },
    { gambar: 'villhazenig.jpg', jawaban: 'villhaze' },
    { gambar: 'yaemikonig.jpg', jawaban: 'yae miko' },
    { gambar: 'yelannig.jpg', jawaban: 'yelan' },
    { gambar: 'ymirnig.png', jawaban: 'ymir' },
    { gambar: 'yornig.jpg', jawaban: 'yor forger' },
    { gambar: 'zerotwonig.jpg', jawaban: 'zero two' },
    { gambar: 'zetanig.jpg', jawaban: 'zeta' },
    { gambar: 'nahidanig.jpg', jawaban: 'nahida' },
    { gambar: 'komarinig.jpg', jawaban: 'terakomari' },
    { gambar: 'milicentnig.jpg', jawaban: 'millicent' },
    { gambar: 'remnig.jpg', jawaban: 'rem' },
    { gambar: 'velionanig.jpg', jawaban: 'veliona' },
    { gambar: 'seelenig.jpg', jawaban: 'seele' },
    { gambar: 'kominig.jpg', jawaban: 'komi' },
    { gambar: 'vermeilnig.jpg', jawaban: 'vermeil' },
    { gambar: 'sayunig.jpg', jawaban: 'sayu' },
    { gambar: 'chizurunig.jpg', jawaban: 'chizuru' },
];

let currentGambarIndex;

function loadGambar() {
    currentGambarIndex = Math.floor(Math.random() * dataGambar.length);
    const gambarTebekeun = document.getElementById('gambar-tebak');
    gambarTebekeun.src = '/images/' + dataGambar[currentGambarIndex].gambar;
}

let streakCount = 0;

function cekJawaban() {
    const jawabanInput = document.getElementById('jawaban-input').value.toLowerCase();
    const jawabanBenar = dataGambar[currentGambarIndex].jawaban.toLowerCase();
    const hasilPesan = document.getElementById('hasil');
    const streakDisplay = document.getElementById('streakCount');

    if (jawabanInput === jawabanBenar) {
        streakCount++; 
        hasilPesan.innerHTML = 'Jawabanmu Benar! 😍';
        streakDisplay.textContent = streakCount; 
        setTimeout(() => {
            nextGambar();
        }, 1000);
    } else {
        streakCount = 0; 
        hasilPesan.innerHTML = 'Jawabanmu Salah, Coba Lagi! 🤔';
        streakDisplay.textContent = streakCount; 
    }
}

function nextGambar() {
    loadGambar();
    document.getElementById('jawaban-input').value = '';
    document.getElementById('hasil').innerHTML = '';
}

window.onload = function () {
    loadGambar();

    const jawabanInput = document.getElementById('jawaban-input');
    jawabanInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            cekJawaban();
        }
    });
};

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

document.onkeydown = (e) => {
    if (e.key == 123) {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'I') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'C') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'J') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.key == 'U') {
        e.preventDefault();
    }
};