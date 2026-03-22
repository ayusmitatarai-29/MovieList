const loginBtn = document.getElementById("loginBtn");
const loginModal = document.getElementById("loginModal");
const registerModal = document.getElementById("registerModal");
const avatar = document.getElementById("userAvatar");

// LOGIN BUTTON CLICK
loginBtn.addEventListener("click", () => {
  if (loginBtn.innerText === "Sign Out") {
    logout();
  } else {
    loginModal.style.display = "flex";
  }
});

// SHOW REGISTER
function showRegister() {
  loginModal.style.display = "none";
  registerModal.style.display = "flex";
}

// REGISTER
function register() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (name && email && password) {
    localStorage.setItem("user", JSON.stringify({ name, email, password }));
    registerModal.style.display = "none";
    showUser(name);
  } else {
    alert("Please fill all fields");
  }
}

// LOGIN
function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.email === email && user.password === password) {
    loginModal.style.display = "none";
    showUser(user.name);
  } else {
    alert("Invalid credentials");
  }
}

// SHOW USER
function showUser(name) {
  avatar.style.display = "flex";
  avatar.innerText = name.charAt(0).toUpperCase();
  loginBtn.innerText = "Sign Out";
}

// LOGOUT
function logout() {
  avatar.style.display = "none";
  avatar.innerText = "";
  loginBtn.innerText = "Sign In";
}

// CLOSE MODALS
window.onclick = function (event) {
  if (event.target === loginModal) loginModal.style.display = "none";
  if (event.target === registerModal) registerModal.style.display = "none";
  if (event.target.id === "trailerModal") closeTrailer();
};

// ======================= TRAILER =======================

function openTrailer(id) {
  document.getElementById("trailerModal").style.display = "flex";
  document.getElementById("trailerFrame").src =
    `https://www.youtube.com/embed/${id}`;
}

function closeTrailer() {
  document.getElementById("trailerModal").style.display = "none";
  document.getElementById("trailerFrame").src = "";
}

// ======================= MOVIE DATA =======================

// HERO MOVIES
const movies = [
  {
    title: "Spiderman 3",
    genre: "Action",
    year: "2007",
    rating: 5,
    img: "https://img.youtube.com/vi/e5wUilOeOmg/0.jpg",
    trailer: "e5wUilOeOmg",
  },
  {
    title: "Avatar",
    genre: "Sci-Fi",
    year: "2009",
    rating: 5,
    img: "https://img.youtube.com/vi/5PSNL1qE6VY/0.jpg",
    trailer: "5PSNL1qE6VY",
  },
  {
    title: "Joker",
    genre: "Drama",
    year: "2019",
    rating: 5,
    img: "https://img.youtube.com/vi/zAGVQLHvwOY/0.jpg",
    trailer: "zAGVQLHvwOY",
  },
  {
    title: "Inception",
    genre: "Sci-Fi",
    year: "2010",
    rating: 5,
    img: "https://img.youtube.com/vi/YoHD9XEInc0/0.jpg",
    trailer: "YoHD9XEInc0",
  },
];

// ALL MOVIES (ADD YOUR 50+ HERE)
const allMovies = [
  ...movies,

  { title: "Conjuring", year: "2013", genre: "Horror", rating: 4, img: "https://img.youtube.com/vi/k10ETZ41q5o/0.jpg", trailer: "k10ETZ41q5o" },
  { title: "Conjuring 2", year: "2016", genre: "Horror", rating: 4, img: "https://img.youtube.com/vi/VFsmuRPClr4/0.jpg", trailer: "VFsmuRPClr4" },
  { title: "Annabelle", year: "2014", genre: "Horror", rating: 3, img: "https://img.youtube.com/vi/paFgQNPGlsg/0.jpg", trailer: "paFgQNPGlsg" },
  { title: "Shiddat", year: "2021", genre: "Romance", rating: 4, img: "https://img.youtube.com/vi/6zSrM8CwQvA/0.jpg", trailer: "6zSrM8CwQvA" },
  { title: "Venom", year: "2018", genre: "Action", rating: 4, img: "https://img.youtube.com/vi/u9Mv98Gr5pY/0.jpg", trailer: "u9Mv98Gr5pY" },
  { title: "Deadpool", year: "2016", genre: "Action", rating: 4, img: "https://img.youtube.com/vi/ONHBaC-pfsk/0.jpg", trailer: "ONHBaC-pfsk" },
  { title: "Avengers", year: "2012", genre: "Action", rating: 5, img: "https://img.youtube.com/vi/eOrNdBpGMv8/0.jpg", trailer: "eOrNdBpGMv8" },
  { title: "Dangal", year: "2016", genre: "Drama", rating: 5, img: "https://img.youtube.com/vi/x_7YlGv9u1g/0.jpg", trailer: "x_7YlGv9u1g" },
  { title: "Raazi", year: "2018", genre: "Drama", rating: 4, img: "https://img.youtube.com/vi/YjMSttRJrhA/0.jpg", trailer: "YjMSttRJrhA" },
  { title: "Titanic", year: "1997", genre: "Romance", rating: 5, img: "https://img.youtube.com/vi/kVrqfYjkTdQ/0.jpg", trailer: "kVrqfYjkTdQ" },
  { title: "Badhaai Ho",  year: "2018", genre: "Comedy", rating: 4, img: "https://img.youtube.com/vi/unAljCZMQYw/0.jpg", trailer: "unAljCZMQYw"},
  { title: "Jolly LLB 2",  year: "2017", genre: "Drama", rating: 4, img: "https://img.youtube.com/vi/0EYxq3xg2Yg/0.jpg", trailer: "0EYxq3xg2Yg"},
  {title: "De De Pyaar De", year: "2019", genre: "Romance",  rating: 4, img: "https://img.youtube.com/vi/3jZy9r0JxVg/0.jpg", trailer: "3jZy9r0JxVg" },
  {title: "De De Pyaar De 2",  year: "2025", genre: "Romance",  rating: 4,  img: "https://img.youtube.com/vi/3jZy9r0JxVg/0.jpg", trailer: "3jZy9r0JxVg"},
  {title: "The Devil's Bride (2025)", year: "2025", genre: "Horror", rating: 4, img: "https://img.youtube.com/vi/ZzK8C3xJ3zA/0.jpg",trailer: "ZzK8C3xJ3zA"},
  {title: "Laxmii",year: "2020",genre: "Horror",rating: 3,img: "https://img.youtube.com/vi/xw1vQgVaYNQ/0.jpg",trailer: "xw1vQgVaYNQ"},
  {title: "Sita Ramam",year: "2022",genre: "Romance",rating: 5,img: "https://img.youtube.com/vi/Ljk6tGZ1l3A/0.jpg",trailer: "Ljk6tGZ1l3A"},
  {title: "Chhorii",year: "2021",genre: "Horror",rating: 4,img: "https://img.youtube.com/vi/0uTqv5p9YtQ/0.jpg",trailer: "0uTqv5p9YtQ"},
  {title: "Dear Comrade", year: "2019", genre: "Romance", rating: 5, img: "https://img.youtube.com/vi/0i3Gg0M5mGk/0.jpg", trailer: "0i3Gg0M5mGk"},
  {title: "The Nun",  year: "2018", genre: "Horror", rating: 4, img: "https://img.youtube.com/vi/pzD9zGcUNrw/0.jpg", trailer: "pzD9zGcUNrw"},
  {title: "The Nun II",year: "2023",genre: "Horror",rating: 4,img: "https://img.youtube.com/vi/QF-oyCwaArU/0.jpg",trailer: "QF-oyCwaArU"},
  {title: "Dhurandhar",year: "2025",genre: "Action",rating: 4,img: "https://img.youtube.com/vi/3H8Jz7g0zF4/0.jpg",trailer: "3H8Jz7g0zF4"},
  { title:"Badhai Ho",year:"2018",genre:"Comedy",rating:4,img:"https://img.youtube.com/vi/UnAljCZMQYw/0.jpg",trailer:"UnAljCZMQYw" },
  { title:"Jolly LLB",year:"2013",genre:"Drama",rating:4,img:"https://img.youtube.com/vi/vuD2l6J3Kc8/0.jpg",trailer:"vuD2l6J3Kc8" },
  { title:"De De Pyaar De",year:"2019",genre:"Romance",rating:4,img:"https://img.youtube.com/vi/FjC4P0C1F6g/0.jpg",trailer:"FjC4P0C1F6g" },
  { title:"Kabir Singh",year:"2019",genre:"Romance",rating:4,img:"https://img.youtube.com/vi/RiANSSgCuJk/0.jpg",trailer:"RiANSSgCuJk" },
  { title:"War",year:"2019",genre:"Action",rating:5,img:"https://img.youtube.com/vi/tQ0mzXRk-oM/0.jpg",trailer:"tQ0mzXRk-oM" },
  { title:"Pathaan",year:"2023",genre:"Action",rating:4,img:"https://img.youtube.com/vi/vqu4z34wENw/0.jpg",trailer:"vqu4z34wENw" },
  { title:"KGF Chapter 1",year:"2018",genre:"Action",rating:5,img:"https://img.youtube.com/vi/-KfsY-qwBS0/0.jpg",trailer:"-KfsY-qwBS0" },
  { title:"KGF Chapter 2",year:"2022",genre:"Action",rating:5,img:"https://img.youtube.com/vi/JKa05nyUmuQ/0.jpg",trailer:"JKa05nyUmuQ" },
  { title:"Pushpa",year:"2021",genre:"Action",rating:5,img:"https://img.youtube.com/vi/Q1NKMPhP8PY/0.jpg",trailer:"Q1NKMPhP8PY" },
  { title:"RRR",year:"2022",genre:"Action",rating:5,img:"https://img.youtube.com/vi/f_vbAtFSEc0/0.jpg",trailer:"f_vbAtFSEc0" },
  { title:"Drishyam",year:"2015",genre:"Thriller",rating:5,img:"https://img.youtube.com/vi/AuuX2j14NBg/0.jpg",trailer:"AuuX2j14NBg" },
  { title:"Drishyam 2",year:"2022",genre:"Thriller",rating:5,img:"https://img.youtube.com/vi/cxA2y9Tgl7M/0.jpg",trailer:"cxA2y9Tgl7M" },
  { title:"Bhool Bhulaiyaa",year:"2007",genre:"Horror",rating:4,img:"https://img.youtube.com/vi/ss-7iGf1xE8/0.jpg",trailer:"ss-7iGf1xE8" },
  { title:"Bhool Bhulaiyaa 2",year:"2022",genre:"Horror",rating:4,img:"https://img.youtube.com/vi/ss-7iGf1xE8/0.jpg",trailer:"ss-7iGf1xE8" },
  { title:"Stree",year:"2018",genre:"Horror",rating:4,img:"https://img.youtube.com/vi/gzeaGcLLl_A/0.jpg",trailer:"gzeaGcLLl_A" },
  { title:"Roohi",year:"2021",genre:"Horror",rating:3,img:"https://img.youtube.com/vi/mTTXl7zJ8wI/0.jpg",trailer:"mTTXl7zJ8wI" },
  { title:"Shershaah",year:"2021",genre:"Drama",rating:5,img:"https://img.youtube.com/vi/Q0FTXnefVBA/0.jpg",trailer:"Q0FTXnefVBA" },
  { title:"Uri",year:"2019",genre:"Action",rating:5,img:"https://img.youtube.com/vi/Cg8sbRFS3zU/0.jpg",trailer:"Cg8sbRFS3zU" },
  { title:"3 Idiots",year:"2009",genre:"Comedy",rating:5,img:"https://img.youtube.com/vi/K0eDlFX9GMc/0.jpg",trailer:"K0eDlFX9GMc" },
  { title:"PK",year:"2014",genre:"Comedy",rating:5,img:"https://img.youtube.com/vi/SOXWc32k4zA/0.jpg",trailer:"SOXWc32k4zA" },
  { title:"Zindagi Na Milegi Dobara",year:"2011",genre:"Drama",rating:5,img:"https://img.youtube.com/vi/FJrpcDgC3zU/0.jpg",trailer:"FJrpcDgC3zU" },
  { title:"Yeh Jawaani Hai Deewani",year:"2013",genre:"Romance",rating:5,img:"https://img.youtube.com/vi/Rbp2XUSeUNE/0.jpg",trailer:"Rbp2XUSeUNE" },
  { title:"Tamasha",year:"2015",genre:"Drama",rating:4,img:"https://img.youtube.com/vi/2C2tZ5n2R2g/0.jpg",trailer:"2C2tZ5n2R2g" },
  { title:"Brahmastra",year:"2022",genre:"Fantasy",rating:4,img:"https://img.youtube.com/vi/BUjXzrgntcY/0.jpg",trailer:"BUjXzrgntcY" },
  { title:"Kantara",year:"2022",genre:"Action",rating:5,img:"https://img.youtube.com/vi/8mrVmf239GU/0.jpg",trailer:"8mrVmf239GU" },
  { title:"Jawan",year:"2023",genre:"Action",rating:4,img:"https://img.youtube.com/vi/MWOlnZSnXJo/0.jpg",trailer:"MWOlnZSnXJo" },
  { title:"Animal",year:"2023",genre:"Action",rating:4,img:"https://img.youtube.com/vi/Dydmpfo68DA/0.jpg",trailer:"Dydmpfo68DA" }
];

// ======================= DISPLAY =======================

const container = document.getElementById("movieContainer");

function displayMovies(data) {
  container.innerHTML = "";

  if (data.length === 0) {
    container.innerHTML = "<h2 style='text-align:center'>No Movies Found 😢</h2>";
    return;
  }

  data.forEach(movie => {
    container.innerHTML += `
      <div class="movie-card" onclick="openTrailer('${movie.trailer}')">
        <img src="${movie.img}">
        <h3>${movie.title}</h3>
        <p>${movie.genre} | ${movie.year}</p>
        <p class="rating">${"⭐".repeat(movie.rating)}</p>
      </div>
    `;
  });
}

// INITIAL
displayMovies(movies);

// ======================= DYNAMIC FILTERS =======================

function populateFilters() {
  const genres = [...new Set(allMovies.map(m => m.genre))];
  const years = [...new Set(allMovies.map(m => m.year))].sort((a, b) => b - a);

  const genreFilter = document.getElementById("genreFilter");
  const yearFilter = document.getElementById("yearFilter");

  genres.forEach(g => {
    genreFilter.innerHTML += `<option value="${g}">${g}</option>`;
  });

  years.forEach(y => {
    yearFilter.innerHTML += `<option value="${y}">${y}</option>`;
  });
}

populateFilters();

// ======================= SEARCH + FILTER =======================

const searchBar = document.getElementById("searchBar");
const genreFilter = document.getElementById("genreFilter");
const yearFilter = document.getElementById("yearFilter");
const ratingFilter = document.getElementById("ratingFilter");

function filterMovies() {
  const search = searchBar.value.toLowerCase();

  const filtered = allMovies.filter(movie => {
    return (
      movie.title.toLowerCase().includes(search) &&
      (genreFilter.value === "" || movie.genre === genreFilter.value) &&
      (yearFilter.value === "" || movie.year === yearFilter.value) &&
      (ratingFilter.value === "" || movie.rating == ratingFilter.value)
    );
  });

  displayMovies(filtered);
}

// LIVE SEARCH FIX
searchBar.addEventListener("input", () => {
  if (searchBar.value.trim() === "") {
    displayMovies(movies);
  } else {
    filterMovies();
  }
});

genreFilter.addEventListener("change", filterMovies);
yearFilter.addEventListener("change", filterMovies);
ratingFilter.addEventListener("change", filterMovies);

// ======================= PAGINATION =======================

let currentPage = 1;
const moviesPerPage = 10;

function displayPaginatedMovies() {
  const start = (currentPage - 1) * moviesPerPage;
  const end = start + moviesPerPage;

  const pageMovies = allMovies.slice(start, end);
  const container = document.getElementById("paginatedMovies");

  container.innerHTML = "";

  pageMovies.forEach(movie => {
    container.innerHTML += `
      <div class="movie-card" onclick="openTrailer('${movie.trailer}')">
        <img src="${movie.img}">
        <h3>${movie.title}</h3>
        <p>${movie.genre} | ${movie.year}</p>
        <p class="rating">${"⭐".repeat(movie.rating)}</p>
      </div>
    `;
  });

  document.getElementById("pageNumber").innerText = currentPage;
}

// INIT
displayPaginatedMovies();

function nextPage() {
  if (currentPage < Math.ceil(allMovies.length / moviesPerPage)) {
    currentPage++;
    displayPaginatedMovies();
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    displayPaginatedMovies();
  }
}
