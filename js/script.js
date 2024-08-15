// FORM VALIDATION
const forms = document.querySelectorAll(".needs-validation");
forms.forEach((form) =>
	form.addEventListener("submit", (event) => {
		if (!form.checkValidity()) {
			event.preventDefault();
			event.stopPropagation();
		}
		form.classList.add("was-validated");
	})
);

// NAVBAR STICKY
const navbarEl = document.querySelector(".navbar");
window.addEventListener("scroll", () =>
	window.scrollY >= 50 ? navbarEl.classList.add("navbar-sticky", "bg-dark") : navbarEl.classList.remove("navbar-sticky", "bg-dark")
);

// NAVBAR OFFCANVAS
const offcanvas = new bootstrap.Offcanvas("#navbarOffcanvas");
const offcanvasEl = document.getElementById("navbarOffcanvas");

["show.bs.offcanvas", "hide.bs.offcanvas"].forEach((eventType) =>
	offcanvasEl.addEventListener(eventType, () => navbarEl.classList.toggle("navbar-open"))
);

window.addEventListener("hashchange", () => offcanvas.hide());
window.addEventListener("keyup", (event) => event.key === "Escape" && offcanvas.hide());

// CLIENTS SHOWCASE
let currentClientIndex = 0;
const clients = ["Startups", "Enterprizes", "Small Business"];
const clientEl = document.getElementById("client");
const clientChangeInterval = setInterval(() => {
	clientEl.textContent = clients[currentClientIndex];
	if (!clients[++currentClientIndex]) currentClientIndex = 0;
}, 1500);
