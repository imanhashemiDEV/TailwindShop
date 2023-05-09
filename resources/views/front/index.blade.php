<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="rtl">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>TailwindShop</title>
    <!-- Fonts -->
    <link rel="shortcut icon" href="../../images/fav-icon.png" type="image/x-icon">
    <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet"/>
    @vite('resources/css/app.css')
</head>
<body class="font-Dana bg-gray-100 dark:bg-zinc-800">

<svg class="hidden">
    <symbol id="shopping-cart" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
    </symbol>

    <symbol id="moon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
    </symbol>
    <symbol id="sun" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </symbol>
    <symbol id="arrow-right-to-rectangle" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
    </symbol>
    <symbol id="arrow-left" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </symbol>
</svg>

<header class="bg-black/50 container h-24 rounded-3xl fixed top-9 right-0 left-0 backdrop-blur">
   <div class="relative flex items-center justify-between w-full px-10 py-5 ">
       {{--Logo and Menu--}}
       <nav class="flex items-center gap-x-9 h-14">
           <div>
               <img src="../../images/app-logo.png" alt="Golden coffee">
           </div>
           <ul class="flex gap-x-9 text-xl text-gray-300 tracking-tightest h-full child:leading-[56px]">
               <li class="text-orange-200">
                   <a href="#">صفحه اصلی</a>
               </li>
               <li class="relative group">
                   <a href="#" class="group-hover:text-orange-300 transition-all">فروشگاه</a>
                   <ul class="absolute opacity-0 invisible  group-hover:opacity-100 group-hover:visible top-full text-zinc-700 dark:text-white text-base child:block  bg-white dark:bg-zinc-700 rounded-2xl border-t-[3px] border-t-orange-300 flex-col items-center justify-center overflow-hidden tracking-normal shadow-normal text-md w-52 child:p-4 child:transition-colors child-hover:text-orange-300 transition-all child-hover:bg-orange-50 ">
                       <li class=""><a href="#">محصول 1</a></li>
                       <li><a href="#">محصول 2</a></li>
                       <li><a href="#">محصول 3</a></li>
                   </ul>
               </li>
               <li class="text">
                   <a href="#">بلاگ</a>
               </li>
               <li class="text">
                   <a href="#">تماس با ما</a>
               </li>
               <li class="text">
                   <a href="#">درباره ما</a>
               </li>
           </ul>
       </nav>

       <div class="flex gap-x-10 text-orange-200 text-xl">
         <div class="flex items-center gap-4">
             <div>
                 <svg class="h-8 w-8">
                     <use xlink:href="#shopping-cart"></use>
                 </svg>
             </div>
             <div>
                 <svg class="h-8 w-8">
                     <use xlink:href="#sun"></use>
                 </svg>
             </div>
         </div>
           <span class="w-px h-14 block bg-white/20"></span>
           <a href="#" class="flex items-center gap-4 tracking-tightest">
               <svg class="h-8 w-8">
                   <use xlink:href="#arrow-right-to-rectangle"></use>
               </svg>
               ثبت نام | ورود
           </a>
       </div>
   </div>
</header>

@vite('resources/js/app.js')
</body>
</html>
