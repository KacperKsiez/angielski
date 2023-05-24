const heroDiv = document.querySelector('.hero');
const navbarDiv = document.querySelector('.header');

const obs = new IntersectionObserver(
	(entries) => {
		const heroDivObs = entries[0];

		if (!heroDivObs.isIntersecting) {
			navbarDiv.classList.add('header-scrolled');
		} else {
			navbarDiv.classList.remove('header-scrolled');
		}
	},
	{
		rootMargin: '-250px',
	}
);

const obs1 = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('fadeIn');
		}
	});
}, {});

obs.observe(heroDiv);

document.querySelectorAll('.menu__category').forEach((div) => {
	obs1.observe(div);
});
