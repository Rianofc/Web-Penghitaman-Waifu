function toggleImage() {
    const waifu = document.getElementById('waifu');
    const status = document.getElementById('status');

    if (waifu.src.endsWith('/images/ely.png')) {
        waifu.src = '/images/elynig.png';
        status.textContent = 'Elysia Hitam';
    } else {
        waifu.src = '/images/ely.png';
        status.textContent = 'Elysia Putih';
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
    } else {
        modal.style.display = "block";
    }
}


let clickCounter = 0;

function toggleImage() {
    const waifu = document.getElementById('waifu');
    const status = document.getElementById('status');

    if (waifu.src.endsWith('/images/ely.png')) {
        waifu.src = '/images/elynig.png';
        status.textContent = 'Elysia Hitam';
    } else {
        waifu.src = '/images/ely.png';
        status.textContent = 'Elysia Putih';
    }

    clickCounter++; 

    if (clickCounter === 50) {
        window.location.href = 'C2qXvulx4s.html'; 
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