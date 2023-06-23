const openBtns = [...document.querySelectorAll('button[data-type="open-modal"]')];
const closebtn = document.querySelector('button[data-type="close-modal"]');
const modal = document.querySelector('.modal');

// Hero
const heroTl = gsap.timeline({
	defaults: {
		duration: 1,
	},
});

heroTl
	.fromTo('.hero__left > *', { autoAlpha: 0, y: '20%' }, { autoAlpha: 1, y: '0%', stagger: 0.3 })
	.fromTo('.person-svg', { autoAlpha: 0, y: '20%' }, { autoAlpha: 1, y: '0%' }, '-=.8')
	.fromTo('.hero__bottom__contents-container > *', { autoAlpha: 0, y: '20%' }, { autoAlpha: 1, y: '0%', stagger: 0.3 })
	.fromTo('.nav > *', { autoAlpha: 0, y: '20%' }, { autoAlpha: 1, y: '0%', stagger: 0.3 }, '-=.8')
	.fromTo('.header__bottom', { autoAlpha: 0, y: '20%' }, { autoAlpha: 1, y: '0%' }, '-=.8');

// section-two
const sectionTwoTl = gsap.timeline({
	defaults: {
		duration: 1,
	},
	scrollTrigger: {
		trigger: '.section-two',
		start: 'top 80%',
		toggleActions: 'play pause resume reverse',
	},
});
sectionTwoTl.fromTo('.section-two__contents-container > *', { autoAlpha: 0, y: '20%' }, { autoAlpha: 1, y: '0%', stagger: 0.3 });

// section-three
const sectionThreeTl = gsap.timeline({
	defaults: {
		duration: 1,
		ease: 'power4.out',
	},
	scrollTrigger: {
		trigger: '.section-three',
		start: 'top 80%',
		toggleActions: 'play pause resume reverse',
	},
});
sectionThreeTl
	.fromTo('.section-three .section__title', { autoAlpha: 0, y: '20%' }, { autoAlpha: 1, y: '0%' })
	.fromTo('.section-three__list li', { autoAlpha: 0, y: '20%' }, { autoAlpha: 1, y: '0%', stagger: 0.3 }, '-=.8')
	.fromTo('.section-three .btn', { autoAlpha: 0, y: '20%' }, { autoAlpha: 1, y: '0%' }, '-=.8');

// section-four
const sectionFourTl = gsap.timeline({
	defaults: {
		duration: 1,
		ease: 'power4.out',
	},
	scrollTrigger: {
		trigger: '.section-four',
		start: 'top 80%',
		toggleActions: 'play pause resume reverse',
	},
});
sectionFourTl
	.fromTo('.section-four .section__title', { autoAlpha: 0, y: '20%' }, { autoAlpha: 1, y: '0%' })
	.fromTo('.section-four .left', { autoAlpha: 0, y: '20%' }, { autoAlpha: 1, y: '0%' }, '-=.8')
	.fromTo('.section-four .right div > *', { autoAlpha: 0, y: '20%' }, { autoAlpha: 1, y: '0%', stagger: 0.3 }, '-=.8')
	.fromTo('.section-four .btn', { autoAlpha: 0, y: '20%' }, { autoAlpha: 1, y: '0%' }, '-=.4');

// footer
const footerTl = gsap.timeline({
	defaults: {
		duration: 1,
		ease: 'power4.out',
	},
	scrollTrigger: {
		trigger: '.section-four .btn',
		start: 'top 80%',
		endTrigger: '.footer',
		toggleActions: 'play pause resume reverse',
	},
});
footerTl
	.fromTo('.footer .company-name', { autoAlpha: 0, y: '20%' }, { autoAlpha: 1, y: '0%' })
	.fromTo('.footer .socials > *', { autoAlpha: 0, y: '20%' }, { autoAlpha: 1, y: '0%', stagger: 0.3 }, '-=.8');
// For Modal
const modalTl = gsap.timeline();

openBtns.forEach((el) => {
	el.addEventListener('click', () => {
		if (modalTl.reversed()) {
			modalTl.play();
		} else {
			modalTl.fromTo(modal, { autoAlpha: 0, y: '-100%' }, { autoAlpha: 1, y: '0%', duration: 1 });
		}
	});
});

closebtn.addEventListener('click', () => {
	modalTl.reverse();
});

// SVG Character
gsap.set('#RIGHT', { x: '-10%' });
gsap.to('#RIGHT', { transformOrigin: 'bottom', rotation: 10, repeat: -1, yoyo: true, yoyoEase: 'power2', duration: 0.8 });
gsap.to('#HEAD', { transformOrigin: 'bottom center', rotation: 5, repeat: -1, yoyo: true, yoyoEase: 'power2', duration: 1 });
gsap.to('#HOOD', { transformOrigin: 'bottom center', rotation: 5, repeat: -1, yoyo: true, yoyoEase: 'power2', duration: 1 });
