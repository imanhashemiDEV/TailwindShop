
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

///////////////////////////

let res_search = document.getElementById('res_search')
let res_search_box = document.getElementById('res_search_box')
let close_res_search_box = document.getElementById('close_res_search_box')

res_search.addEventListener('click',openResSearchBox);
close_res_search_box.addEventListener('click',closeResSearchBox);

function openResSearchBox(){
    res_search_box.classList.remove('hidden')
    res_search_box.classList.add('flex-col')
    document.body.style.overflow='hidden'
}

function closeResSearchBox(){
    res_search_box.classList.remove('flex-col')
    res_search_box.classList.add('hidden')
    document.body.style.overflow='auto';
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
    closeSearchBox()
}

function closeCityModel(){
    city_modal.classList.remove('flex-col')
    city_modal.classList.add('hidden')
    document.body.style.overflow='auto';
}


///////////////////////////////////////////

let footer_show_more_text = document.getElementById('footer_show_more_text')
let footer_text_hover = document.getElementById('footer_text_hover')
let footer_text_box = document.getElementById('footer_text_box')

footer_show_more_text.addEventListener('click',toggleFooterText);

function toggleFooterText(){
    footer_text_hover.classList.toggle('hidden');
    footer_text_box.classList.toggle('h-32');
    footer_show_more_text.firstElementChild.innerText= footer_text_box.classList.contains('h-32') ? 'مشاهده بیشتر':'بستن'
}

///////////////////////////// Status swiper slider 


 var swiper = new Swiper(".status_slider", {
      slidesPerView: 8,
      spaceBetween:2,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next-status",
        prevEl: ".swiper-button-prev-status",
      },
      breakpoints:{
        1280:{
          slidesPerView: 9,
        },1536:{
          slidesPerView: 10,
        }
      }
    });



    ///////////////////////////// Main swiper slider 


 var swiper = new Swiper(".main_slider", {
      slidesPerView: 1,
      pagination: {
        el: ".swiper-pagination",
        clickable:true
      },
      navigation: {
        nextEl: ".swiper-button-next-main",
        prevEl: ".swiper-button-prev-main",
      },
    });


  ///////////////////////////// Amazing swiper slider 


 var swiper = new Swiper(".amazing_slider", {
      slidesPerView: 5,
      spaceBetween:2,
      pagination: {
        el: ".swiper-pagination",
        clickable:true
      },
      navigation: {
        nextEl: ".swiper-button-next-amazing",
        prevEl: ".swiper-button-prev-amazing",
      },
    });

      ///////////////////////////// Category swiper slider 


 var swiper = new Swiper(".category_slider", {
      slidesPerView: 6,
      spaceBetween:2,
      pagination: {
        el: ".swiper-pagination",
        clickable:true
      },
      navigation: {
        nextEl: ".swiper-button-next-category",
        prevEl: ".swiper-button-prev-category",
      },
      // mousewheel: true,
      // keyboard: true,
    });

  ///////////////////////////// Favoraite swiper slider 


 var swiper = new Swiper(".favoraite_slider", {
      slidesPerView: 6,
      spaceBetween:6,
      pagination: {
        el: ".swiper-pagination",
        clickable:true
      },
      navigation: {
        nextEl: ".swiper-button-next-favoraite",
        prevEl: ".swiper-button-prev-favoraite",
      },
      // mousewheel: true,
      // keyboard: true,
    });


      ///////////////////////////// Most Seles swiper slider 


 var swiper = new Swiper(".most_seles_slider", {
      slidesPerView: 3,
      spaceBetween:2,
      pagination: {
        el: ".swiper-pagination",
        clickable:true
      },
      navigation: {
        nextEl: ".swiper-button-next-most_seles",
        prevEl: ".swiper-button-prev-most_seles",
      },
      // mousewheel: true,
      // keyboard: true,
    });