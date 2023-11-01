function toggleImage() {
    const waifu = document.getElementById('waifu');
    const status = document.getElementById('status');

    if (waifu.src.endsWith('/images/mahiru.jpg')) {
        waifu.src = '/images/mahirunig.jpg';
        status.textContent = 'Mahiru Shiina Hitam';
    } else {
        waifu.src = '/images/mahiru.jpg';
        status.textContent = 'Mahiru Shiina Putih';
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
    } else if (query.includes("kobo kanaeru")) {
        window.location.href = '/pages/kobo.html';
    } else if (query.includes("elaina")) {
        window.location.href = '/pages/elaina.html';
    } else if (query.includes("shizuka")) {
        window.location.href = '/pages/shizuka.html';
    } else if (query.includes("shizuka mikazuki")) {
        window.location.href = '/pages/shizuka.html';
    } else if (query.includes("yae miko")) {
        window.location.href = '/pages/yae-miko.html';
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
