b=document.querySelector('.burger');
c=document.querySelector('.navbar');
d=document.querySelector('.nav-list');
e=document.querySelector('.rightNav');

b.addEventListener('click',()=>{
	e.classList.toggle('v-class');
	d.classList.toggle('v-class');
	c.classList.toggle('h-nav');
})