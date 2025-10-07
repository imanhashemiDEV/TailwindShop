
let categories = document.getElementById('categories')
let categories_list = document.getElementById('categories_list')
let dark_menu_background = document.getElementById('dark_menu_background')

categories.addEventListener('mouseover',openMenu)
categories.addEventListener('mouseleave',closeMenu)
dark_menu_background.addEventListener('mousemove',closeMenu)


function openMenu(){
    categories_list.classList.remove('hidden')
    categories_list.classList.add('flex')
    document.body.style.overflow='hidden'
}

function closeMenu(){
    categories_list.classList.remove('flex')
    categories_list.classList.add('hidden')
    document.body.style.overflow='auto'
}

  
////////////////////////


let main_categories = document.querySelectorAll('#main_categories li')
let sub_categories = document.querySelectorAll('#sub_categories > div')

main_categories.forEach((item)=>{
   item.addEventListener('mouseover',()=>{
       sub_categories.forEach((sub_item)=>{
           if(item.getAttribute('data-item')=== sub_item.getAttribute('data-item')){
                sub_item.classList.add('flex-col')
                sub_item.classList.remove('hidden')
           }else{
             sub_item.classList.add('hidden')
           }
       })
    
   })
})

