// Menu Collapse
function menuCollapse() {
    var body = document.body;
    var bottomNav = document.getElementById("bottom-nav-bar");
    var topNav = document.getElementById("top-nav-bar");
    if (bottomNav.style.display === "block") {
      bottomNav.style.display = "none";
      topNav.style.backgroundColor = "transparent";
      body.style.overflow = "visible";
    } else {
      bottomNav.style.display = "block";
      topNav.style.backgroundColor = "white";
      body.style.overflow = "hidden";
    }
  }

  // Scroll to Anchor
// @ https://perishablepress.com/vanilla-javascript-scroll-anchor/
(function() {
	scrollTo();
})();

function scrollTo() {
	const links = document.querySelectorAll('.scroll');
	links.forEach(each => (each.onclick = scrollAnchors));
}

function scrollAnchors(e, respond = null) {
	const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
	e.preventDefault();
  var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
  const targetAnchor = document.querySelector(targetID);
	if (!targetAnchor) return;
	const originalTop = distanceToTop(targetAnchor);
	window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
	const checkIfDone = setInterval(function() {
		const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
		if (distanceToTop(targetAnchor) === 0 || atBottom) {
			targetAnchor.tabIndex = '-1';
			targetAnchor.focus();
			window.history.pushState('', '', targetID);
			clearInterval(checkIfDone);
		}
	}, 100);
}


// Close mobile nav when item selected
document.addEventListener('click', function (event) {
  var body = document.body;
  var bottomNav = document.getElementById("bottom-nav-bar");
  var topNav = document.getElementById("top-nav-bar");

	// If the clicked element doesn't have the right selector, bail
	if (!event.target.matches('.nav-item')) return;

	// Don't follow the link
	event.preventDefault();

  body.style.overflow = "visible";
  bottomNav.style.display = "none";
  topNav.style.backgroundColor = "transparent";

}, false);