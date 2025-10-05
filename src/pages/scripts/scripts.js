
document.getElementById('main').addEventListener('mouseover',function(){  
document.getElementById("menu").firstElementChild.lastElementChild.classList.remove('opacity-0')
document.getElementById("menu").firstElementChild.lastElementChild.classList.remove('invisible')
document.getElementById("menu").firstElementChild.lastElementChild.classList.add('visible')
document.getElementById("menu").firstElementChild.lastElementChild.classList.add('opacity-100')
})

document.getElementById('main').addEventListener('mouseleave',function(){  
document.getElementById("menu").firstElementChild.lastElementChild.classList.add('opacity-0')
document.getElementById("menu").firstElementChild.lastElementChild.classList.add('invisible')
document.getElementById("menu").firstElementChild.lastElementChild.classList.remove('visible')
document.getElementById("menu").firstElementChild.lastElementChild.classList.remove('opacity-100')
})



