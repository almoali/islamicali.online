document.addEventListener("DOMContentLoaded", function () {
    // Define the webpage URLs and associated keywords
    var pages = {
        // Your page URLs and keywords here...
        "/About Islam/aboutislam": ["islam", "muslim", "faith", "religion", "belief", "Allah", "prophet", "Quran", "worship", "prayer"],
        "/The Pillars/thepillars": ["pillar", "fasting", "charity", "pilgrimage", "belief", "divine", "faithful", "worshiper", "pious", "devout", "pillars"],
        "/The Kaaba/theka3ba": ["Kaaba", "kaaba", "Mecca", "pilgrimage", "hajj", "worship", "sacred", "spiritual", "devotion", "Muslims", "sacred site"],
        "/About Quran/aboutquran": ["quran", "revelation", "scripture", "recitation", "guidance", "inspiration", "divine", "truth", "spiritual"],
        "/Seerah/seerah": ["Prophet", "seerah", "Muhammad", "biography", "history", "revelation", "messenger", "Islamic leader", "example", "role model", "guidance"],
        "/Fiqh/feqh": ["fiqh", "jurisprudence", "scholar", "rulings", "Islamic law", "law", "Islamic rulings", "legal", "laws", "application"],
        "/Quiz/quiz": ["test", "exam", "knowledge", "questions", "challenge", "understanding", "assessment", "evaluation", "assessment", "checkup"],
        "/Contact/contact": ["contact", "reach out", "message", "email", "phone", "support", "connect", "communication", "inquiry", "get in touch"],
        "/About Quran/1.html": ["Al-Fatihah", "Surat Al-Fatihah", "Surah Al-Fatihah"],
        "/About Quran/2.html": ["Al-Baqarah", "Surat Al-Baqarah", "Surah Al-Baqarah"],
        "/About Quran/3.html": ["Al-Imran", "Surat Al-Imran", "Surah Al-Imran"],
        "/About Quran/4.html": ["An-Nisa", "Surat An-Nisa", "Surah An-Nisa"],
        "/About Quran/5.html": ["Al-Maidah", "Surat Al-Maidah", "Surah Al-Maidah"],
        "/About Quran/6.html": ["Al-An'am", "Surat Al-An'am", "Surah Al-An'am"],
        "/About Quran/7.html": ["Al-A'raf", "Surat Al-A'raf", "Surah Al-A'raf"],
        "/About Quran/8.html": ["Al-Anfal", "Surat Al-Anfal", "Surah Al-Anfal"],
        "/About Quran/9.html": ["At-Tawbah", "Surat At-Tawbah", "Surah At-Tawbah"],
        "/About Quran/10.html": ["Yunus", "Surat Yunus", "Surah Yunus"],
        "/About Quran/11.html": ["Hud", "Surat Hud", "Surah Hud"],
        "/About Quran/12.html": ["Yusuf", "Surat Yusuf", "Surah Yusuf"],
        "/About Quran/13.html": ["Ar-Ra'd", "Surat Ar-Ra'd", "Surah Ar-Ra'd"],
        "/About Quran/14.html": ["Ibrahim", "Surat Ibrahim", "Surah Ibrahim"],
        "/About Quran/15.html": ["Al-Hijr", "Surat Al-Hijr", "Surah Al-Hijr"],
        "/About Quran/16.html": ["An-Nahl", "Surat An-Nahl", "Surah An-Nahl"],
        "/About Quran/17.html": ["Al-Isra", "Surat Al-Isra", "Surah Al-Isra"],
        "/About Quran/18.html": ["Al-Kahf", "Surat Al-Kahf", "Surah Al-Kahf"],
        "/About Quran/19.html": ["Maryam", "Surat Maryam", "Surah Maryam"],
        "/About Quran/20.html": ["Ta-Ha", "Surat Ta-Ha", "Surah Ta-Ha"],
        "/About Quran/21.html": ["Al-Anbiya", "Surat Al-Anbiya", "Surah Al-Anbiya"],
        "/About Quran/22.html": ["Al-Hajj", "Surat Al-Hajj", "Surah Al-Hajj"],
        "/About Quran/23.html": ["Al-Mu'minun", "Surat Al-Mu'minun", "Surah Al-Mu'minun"],
        "/About Quran/24.html": ["An-Nur", "Surat An-Nur", "Surah An-Nur"],
        "/About Quran/25.html": ["Al-Furqan", "Surat Al-Furqan", "Surah Al-Furqan"],
        "/About Quran/26.html": ["Ash-Shu'ara", "Surat Ash-Shu'ara", "Surah Ash-Shu'ara"],
        "/About Quran/27.html": ["An-Naml", "Surat An-Naml", "Surah An-Naml"],
        "/About Quran/28.html": ["Al-Qasas", "Surat Al-Qasas", "Surah Al-Qasas"],
        "/About Quran/29.html": ["Al-Ankabut", "Surat Al-Ankabut", "Surah Al-Ankabut"],
        "/About Quran/30.html": ["Ar-Rum", "Surat Ar-Rum", "Surah Ar-Rum"],
        "/About Quran/31.html": ["Luqman", "Surat Luqman", "Surah Luqman"],
        "/About Quran/32.html": ["As-Sajda", "Surat As-Sajda", "Surah As-Sajda"],
        "/About Quran/33.html": ["Al-Ahzab", "Surat Al-Ahzab", "Surah Al-Ahzab"],
        "/About Quran/34.html": ["Saba", "Surat Saba", "Surah Saba"],
        "/About Quran/35.html": ["Fatir", "Surat Fatir", "Surah Fatir"],
        "/About Quran/36.html": ["Ya-Sin", "Surat Ya-Sin", "Surah Ya-Sin"],
        "/About Quran/37.html": ["As-Saffat", "Surat As-Saffat", "Surah As-Saffat"],
        "/About Quran/38.html": ["Sad", "Surat Sad", "Surah Sad"],
        "/About Quran/39.html": ["Az-Zumar", "Surat Az-Zumar", "Surah Az-Zumar"],
        "/About Quran/40.html": ["Ghafir", "Surat Ghafir", "Surah Ghafir"],
        "/About Quran/41.html": ["Fussilat", "Surat Fussilat", "Surah Fussilat"],
        "/About Quran/42.html": ["Ash-Shura", "Surat Ash-Shura", "Surah Ash-Shura"],
        "/About Quran/43.html": ["Az-Zukhruf", "Surat Az-Zukhruf", "Surah Az-Zukhruf"],
        "/About Quran/44.html": ["Ad-Dukhan", "Surat Ad-Dukhan", "Surah Ad-Dukhan"],
        "/About Quran/45.html": ["Al-Jathiyah", "Surat Al-Jathiyah", "Surah Al-Jathiyah"],
        "/About Quran/46.html": ["Al-Ahqaf", "Surat Al-Ahqaf", "Surah Al-Ahqaf"],
        "/About Quran/47.html": ["Muhammad", "Surat Muhammad", "Surah Muhammad"],
        "/About Quran/48.html": ["Al-Fath", "Surat Al-Fath", "Surah Al-Fath"],
        "/About Quran/49.html": ["Al-Hujurat", "Surat Al-Hujurat", "Surah Al-Hujurat"],
        "/About Quran/50.html": ["Qaf", "Surat Qaf", "Surah Qaf"],
        "/About Quran/51.html": ["Adh-Dhariyat", "Surat Adh-Dhariyat", "Surah Adh-Dhariyat"],
        "/About Quran/52.html": ["At-Tur", "Surat At-Tur", "Surah At-Tur"],
        "/About Quran/53.html": ["An-Najm", "Surat An-Najm", "Surah An-Najm"],
        "/About Quran/54.html": ["Al-Qamar", "Surat Al-Qamar", "Surah Al-Qamar"],
        "/About Quran/55.html": ["Ar-Rahman", "Surat Ar-Rahman", "Surah Ar-Rahman"],
        "/About Quran/56.html": ["Al-Waqi'ah", "Surat Al-Waqi'ah", "Surah Al-Waqi'ah"],
        "/About Quran/57.html": ["Al-Hadid", "Surat Al-Hadid", "Surah Al-Hadid"],
        "/About Quran/58.html": ["Al-Mujadila", "Surat Al-Mujadila", "Surah Al-Mujadila"],
        "/About Quran/59.html": ["Al-Hashr", "Surat Al-Hashr", "Surah Al-Hashr"],
        "/About Quran/60.html": ["Al-Mumtahina", "Surat Al-Mumtahina", "Surah Al-Mumtahina"],
        "/About Quran/61.html": ["As-Saff", "Surat As-Saff", "Surah As-Saff"],
        "/About Quran/62.html": ["Al-Jumu'ah", "Surat Al-Jumu'ah", "Surah Al-Jumu'ah"],
        "/About Quran/63.html": ["Al-Munafiqun", "Surat Al-Munafiqun", "Surah Al-Munafiqun"],
        "/About Quran/64.html": ["At-Taghabun", "Surat At-Taghabun", "Surah At-Taghabun"],
        "/About Quran/65.html": ["At-Talaq", "Surat At-Talaq", "Surah At-Talaq"],
        "/About Quran/66.html": ["At-Tahrim", "Surat At-Tahrim", "Surah At-Tahrim"],
        "/About Quran/67.html": ["Al-Mulk", "Surat Al-Mulk", "Surah Al-Mulk"],
        "/About Quran/68.html": ["Al-Qalam", "Surat Al-Qalam", "Surah Al-Qalam"],
        "/About Quran/69.html": ["Al-Haqqah", "Surat Al-Haqqah", "Surah Al-Haqqah"],
        "/About Quran/70.html": ["Al-Ma'arij", "Surat Al-Ma'arij", "Surah Al-Ma'arij"],
        "/About Quran/71.html": ["Nuh", "Surat Nuh", "Surah Nuh"],
        "/About Quran/72.html": ["Al-Jinn", "Surat Al-Jinn", "Surah Al-Jinn"],
        "/About Quran/73.html": ["Al-Muzzammil", "Surat Al-Muzzammil", "Surah Al-Muzzammil"],
        "/About Quran/74.html": ["Al-Muddathir", "Surat Al-Muddathir", "Surah Al-Muddathir"],
        "/About Quran/75.html": ["Al-Qiyamah", "Surat Al-Qiyamah", "Surah Al-Qiyamah"],
        "/About Quran/76.html": ["Al-Insan", "Surat Al-Insan", "Surah Al-Insan"],
        "/About Quran/77.html": ["Al-Mursalat", "Surat Al-Mursalat", "Surah Al-Mursalat"],
        "/About Quran/78.html": ["An-Naba", "Surat An-Naba", "Surah An-Naba"],
        "/About Quran/79.html": ["An-Nazi'at", "Surat An-Nazi'at", "Surah An-Nazi'at"],
        "/About Quran/80.html": ["Abasa", "Surat Abasa", "Surah Abasa"],
        "/About Quran/81.html": ["At-Takwir", "Surat At-Takwir", "Surah At-Takwir"],
        "/About Quran/82.html": ["Al-Infitar", "Surat Al-Infitar", "Surah Al-Infitar"],
        "/About Quran/83.html": ["Al-Mutaffifin", "Surat Al-Mutaffifin", "Surah Al-Mutaffifin"],
        "/About Quran/84.html": ["Al-Inshiqaq", "Surat Al-Inshiqaq", "Surah Al-Inshiqaq"],
        "/About Quran/85.html": ["Al-Buruj", "Surat Al-Buruj", "Surah Al-Buruj"],
        "/About Quran/86.html": ["At-Tariq", "Surat At-Tariq", "Surah At-Tariq"],
        "/About Quran/87.html": ["Al-A'la", "Surat Al-A'la", "Surah Al-A'la"],
        "/About Quran/88.html": ["Al-Ghashiyah", "Surat Al-Ghashiyah", "Surah Al-Ghashiyah"],
        "/About Quran/89.html": ["Al-Fajr", "Surat Al-Fajr", "Surah Al-Fajr"],
        "/About Quran/90.html": ["Al-Balad", "Surat Al-Balad", "Surah Al-Balad"],
        "/About Quran/91.html": ["Ash-Shams", "Surat Ash-Shams", "Surah Ash-Shams"],
        "/About Quran/92.html": ["Al-Lail", "Surat Al-Lail", "Surah Al-Lail"],
        "/About Quran/93.html": ["Ad-Duha", "Surat Ad-Duha", "Surah Ad-Duha"],
        "/About Quran/94.html": ["Ash-Sharh", "Surat Ash-Sharh", "Surah Ash-Sharh"],
        "/About Quran/95.html": ["At-Tin", "Surat At-Tin", "Surah At-Tin"],
        "/About Quran/96.html": ["Al-'Alaq", "Surat Al-'Alaq", "Surah Al-'Alaq"],
        "/About Quran/97.html": ["Al-Qadr", "Surat Al-Qadr", "Surah Al-Qadr"],
        "/About Quran/98.html": ["Al-Bayyinah", "Surat Al-Bayyinah", "Surah Al-Bayyinah"],
        "/About Quran/99.html": ["Az-Zalzalah", "Surat Az-Zalzalah", "Surah Az-Zalzalah"],
        "/About Quran/100.html": ["Al-'Adiyat", "Surat Al-'Adiyat", "Surah Al-'Adiyat"],
        "/About Quran/101.html": ["Al-Qari'ah", "Surat Al-Qari'ah", "Surah Al-Qari'ah"],
        "/About Quran/102.html": ["At-Takathur", "Surat At-Takathur", "Surah At-Takathur"],
        "/About Quran/103.html": ["Al-Asr", "Surat Al-Asr", "Surah Al-Asr"],
        "/About Quran/104.html": ["Al-Humazah", "Surat Al-Humazah", "Surah Al-Humazah"],
        "/About Quran/105.html": ["Al-Fil", "Surat Al-Fil", "Surah Al-Fil"],
        "/About Quran/106.html": ["Quraish", "Surat Quraish", "Surah Quraish"],
        "/About Quran/107.html": ["Al-Ma'un", "Surat Al-Ma'un", "Surah Al-Ma'un"],
        "/About Quran/108.html": ["Al-Kawthar", "Surat Al-Kawthar", "Surah Al-Kawthar"],
        "/About Quran/109.html": ["Al-Kafirun", "Surat Al-Kafirun", "Surah Al-Kafirun"],
        "/About Quran/110.html": ["An-Nasr", "Surat An-Nasr", "Surah An-Nasr"],
        "/About Quran/111.html": ["Al-Masad", "Surat Al-Masad", "Surah Al-Masad"],
        "/About Quran/112.html": ["Al-Ikhlas", "Surat Al-Ikhlas", "Surah Al-Ikhlas"],
        "/About Quran/113.html": ["Al-Falaq", "Surat Al-Falaq", "Surah Al-Falaq"],
        "/About Quran/114.html": ["An-Nas", "Surat An-Nas", "Surah An-Nas"]
    };

    // Accessing the data
    console.log(pages["/About Quran/1.html"]); // Output: ["Al-Fatihah", "Surat Al-Fatihah", "Surah Al-Fatihah"]

    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('search-results');

    function performSearch(query) {
        var suggestions = [];

        // Check if the keyword matches any page
        for (var page in pages) {
            if (pages[page].includes(query)) {
                suggestions.push(page);
            }
        }
        return suggestions;
    }

    function updateSearchResults(results) {
        searchResults.innerHTML = '';
        if (results.length > 0) {
            results.forEach(result => {
                const li = document.createElement('li');
                li.textContent = result;
                searchResults.appendChild(li);
            });
            searchResults.style.display = 'block';
        } else {
            searchResults.style.display = 'none';
        }
    }

    searchInput.addEventListener('input', function () {
        const query = this.value.toLowerCase().trim();
        const results = performSearch(query);
        updateSearchResults(results);
    });

    searchInput.addEventListener('focus', function () {
        if (searchResults.innerHTML.trim() !== '') {
            searchResults.style.display = 'block';
        }
    });

    searchInput.addEventListener('blur', function () {
        setTimeout(() => {
            searchResults.style.display = 'none';
        }, 200);
    });

    // Event listener for form submission
    document.getElementById("searchForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get the value of the input field
        var keyword = searchInput.value.toLowerCase().trim();

        var suggestions = performSearch(keyword);

        if (suggestions.length > 0) {
            // Redirect to the first matching page
            window.location.href = suggestions[0];
        } else {
            // Redirect to a page saying the content is not found
            window.location.href = "/Not found/notfound.html";
        }
    });
});

// Function to open the side navigation menu
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

// Function to close the side navigation menu
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

// Function to toggle the side navigation menu
function toggleNav() {
    var sidenav = document.getElementById("mySidenav");
    if (sidenav.style.height === "100%" || sidenav.style.height === "") {
        sidenav.style.height = "0";
    } else {
        sidenav.style.height = "100%";
    }
}

// Function to highlight the current page in the side navigation menu
function highlightCurrentPage() {
    var currentPath = window.location.pathname;
    var links = document.querySelectorAll('.sidenav a');
    links.forEach(function (link) {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('current-page');
        } else {
            link.classList.remove('current-page');
        }
    });
}

// Function to close the side navigation menu when clicking outside of it
function closeNavOutside(event) {
    var sidenav = document.getElementById("mySidenav");
    // Check if the clicked element is not inside the side navigation
    if (!event.target.closest('.sidenav')) {
        sidenav.style.height = "0";
        document.body.removeEventListener('click', closeNavOutside);
    }
}

// Call the function to highlight the current page when the page loads
window.addEventListener('DOMContentLoaded', function () {
    highlightCurrentPage();
});

// hijri_date.js
document.addEventListener("DOMContentLoaded", function () {
    var currentDateElement = document.getElementById("currentDate");
    var hijriDateElement = document.getElementById("hijriDate");

    // Get today's Gregorian date
    var today = new Date();

    // Convert Gregorian date to Hijri date
    var hijriDate = gregorianToHijri(today);
    var hijriDateComponents = hijriDate.split(' ');

    // Display Gregorian date
    var gregorianDate = today.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
    currentDateElement.textContent = "" + gregorianDate;

    // Display Hijri date
    hijriDateElement.textContent = "Today Islamic date: " + hijriDate;
});

// Function to convert Gregorian date to Hijri date
function gregorianToHijri(gregorianDate) {
    var utcDate = Date.UTC(gregorianDate.getFullYear(), gregorianDate.getMonth(), gregorianDate.getDate());
    var julianDay = Math.floor(utcDate / (1000 * 60 * 60 * 24) - 0.5) + 2440588;
    var hijriDay = Math.floor((julianDay - 1948440) / 29.530588853);
    var hijriDate = hijriDay + 1;
    var hijriMonth = (Math.floor((julianDay - 1948440 - Math.floor(hijriDay * 29.530588853)) / 29.530588853) + 1) % 12;
    var hijriYear = Math.floor((julianDay - 1948440 - Math.floor(hijriDay * 29.530588853)) / 354.36667) + 1;
    if (hijriYear <= 0) {
        hijriYear--;
    }

    var hijriMonths = [
        "Muharram", "Safar", "Rabi' al-awwal", "Rabi' al-thani", "Jumada al-awwal",
        "Jumada al-thani", "Rajab", "Sha'ban", "Ramadan", "Shawwal", "Dhu al-Qi'dah", "Dhu al-Hijjah"
    ];

    var hijriMonthName = hijriMonths[hijriMonth];
    return hijriDate + ' ' + hijriMonthName + ' ' + hijriYear;
}
