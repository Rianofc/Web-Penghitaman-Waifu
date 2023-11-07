let clickCount = 0;

function updateClickCount() {
    const clickCountElement = document.getElementById('clickCount');
    clickCountElement.textContent = clickCount;
}

function toggleImage() {
    const waifu = document.getElementById('waifu');
    const status = document.getElementById('status');

    if (waifu.src.endsWith('/images/miyako.jpg')) {
        waifu.src = '/images/miyakonig.jpg';
        status.textContent = 'Miyako Saitou Hitam';
    } else {
        waifu.src = '/images/miyako.jpg';
        status.textContent = 'Miyako Saitou Putih';
    }

    clickCount++;

    updateClickCount();
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
