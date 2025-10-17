
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

///////////////////////////////



let search = document.getElementById('search')
let search_box = document.getElementById('search_box')
let dark_menu_search = document.getElementById('dark_menu_search')

search.addEventListener('click',openSearchBox);
dark_menu_search.addEventListener('click',closeSearchBox);

function openSearchBox(){
    search_box.classList.remove('hidden')
    search_box.classList.add('flex-col')
    document.body.style.overflow='hidden'
    dark_menu_search.classList.remove('hidden')
    dark_menu_search.classList.add('flex')
}

function closeSearchBox(){
    search_box.classList.remove('flex-col')
    search_box.classList.add('hidden')
    document.body.style.overflow='auto';
     dark_menu_search.classList.remove('flex')
    dark_menu_search.classList.add('hidden')
}

/////////////////////////

let choose_city = document.getElementById('choose_city')
let city_modal = document.getElementById('city_modal')
let closeCityModlaIcon = document.getElementById('closeCityModlaIcon')

choose_city.addEventListener('click',openCityModel);
closeCityModlaIcon.addEventListener('click',closeCityModel);

function openCityModel(){
    city_modal.classList.remove('hidden')
    city_modal.classList.add('flex')
    document.body.style.overflow='hidden'
}

function closeCityModel(){
    city_modal.classList.remove('flex-col')
    city_modal.classList.add('hidden')
    document.body.style.overflow='auto';
}