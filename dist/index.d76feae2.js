const o=[...document.querySelectorAll('button[data-type="open-modal"]')],t=document.querySelector('button[data-type="close-modal"]'),e=document.querySelector(".modal"),a=gsap.timeline({defaults:{duration:1}});a.fromTo(".hero__left > *",{autoAlpha:0,y:"20%"},{autoAlpha:1,y:"0%",stagger:.3}).fromTo(".person-svg",{autoAlpha:0,y:"20%"},{autoAlpha:1,y:"0%"},"-=.8").fromTo(".hero__bottom__contents-container > *",{autoAlpha:0,y:"20%"},{autoAlpha:1,y:"0%",stagger:.3}).fromTo(".nav > *",{autoAlpha:0,y:"20%"},{autoAlpha:1,y:"0%",stagger:.3},"-=.8").fromTo(".header__bottom",{autoAlpha:0,y:"20%"},{autoAlpha:1,y:"0%"},"-=.8");const r=gsap.timeline({defaults:{duration:1},scrollTrigger:{trigger:".section-two",start:"top 80%",toggleActions:"play pause resume reverse"}});r.fromTo(".section-two__contents-container > *",{autoAlpha:0,y:"20%"},{autoAlpha:1,y:"0%",stagger:.3});const l=gsap.timeline({defaults:{duration:1,ease:"power4.out"},scrollTrigger:{trigger:".section-three",start:"top 80%",toggleActions:"play pause resume reverse"}});l.fromTo(".section-three .section__title",{autoAlpha:0,y:"20%"},{autoAlpha:1,y:"0%"}).fromTo(".section-three__list li",{autoAlpha:0,y:"20%"},{autoAlpha:1,y:"0%",stagger:.3},"-=.8").fromTo(".section-three .btn",{autoAlpha:0,y:"20%"},{autoAlpha:1,y:"0%"},"-=.8");const s=gsap.timeline({defaults:{duration:1,ease:"power4.out"},scrollTrigger:{trigger:".section-four",start:"top 80%",toggleActions:"play pause resume reverse"}});s.fromTo(".section-four .section__title",{autoAlpha:0,y:"20%"},{autoAlpha:1,y:"0%"}).fromTo(".section-four .left",{autoAlpha:0,y:"20%"},{autoAlpha:1,y:"0%"},"-=.8").fromTo(".section-four .right div > *",{autoAlpha:0,y:"20%"},{autoAlpha:1,y:"0%",stagger:.3},"-=.8").fromTo(".section-four .btn",{autoAlpha:0,y:"20%"},{autoAlpha:1,y:"0%"},"-=.4");const u=gsap.timeline({defaults:{duration:1,ease:"power4.out"},scrollTrigger:{trigger:".section-four .btn",start:"top 80%",endTrigger:".footer",toggleActions:"play pause resume reverse"}});u.fromTo(".footer .company-name",{autoAlpha:0,y:"20%"},{autoAlpha:1,y:"0%"}).fromTo(".footer .socials > *",{autoAlpha:0,y:"20%"},{autoAlpha:1,y:"0%",stagger:.3},"-=.8");const n=gsap.timeline();o.forEach(o=>{o.addEventListener("click",()=>{n.reversed()?n.play():n.fromTo(e,{autoAlpha:0,y:"-100%"},{autoAlpha:1,y:"0%",duration:1})})}),t.addEventListener("click",()=>{n.reverse()});
//# sourceMappingURL=index.d76feae2.js.map