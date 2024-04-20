<script>
    
</script>
<div class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 backdrop-blur-xl">
<div class="w-full flex flex-col sm:flex-row flex-wrap sm:flex-nowrap py-4 flex-grow">
    <!-- fixed-width -->
    <div class="w-fixed w-full flex-shrink-1 flex-grow-0 px-4">
        <div class="sticky top-0 p-4 w-full h-full">
            <!-- nav goes here -->
            
        </div>
    </div>
    <main class="w-full flex-grow-1 pt-1 px-3">
        <!-- fluid-width: main content goes here -->
        <div class="navbar border-4 shadow-md text-gray-50 flex-row">
        
        </div>
        <div class = "main flex-col gap-3 ">
        <h1 class="text-gray-50	font-black text-8xl"><center>Design</center></h1>
        <h2 class="text-gray-50  text-3xl py-5 font-mono">Where creativity meets purpose</h2>
        <h2 class="text-gray-50  text-xl font-mono">Creating user centric Graphic Solutions</h2>
        <button class="items-center gap-9 bg-purple-950 text-2xl
        hover:shadow-lg transform transition hover:-translate-y-1 focus:ring-2
        focus:ring-green-600 ring-offset-2 outline-none
        focus:shadow-lg font-mono" >Explore ></button>
        </div>

        <div class = "color_palette border-4 flex-col gap-6 p-40 shadow-xl bg-cover bg-center bg-hero-pattern1">
        <h2 class=" text-gray-50	font-black text-4xl "><center>Colorize Greyscale Image</center></h2>
        <a href = "/graysc"><button class="items-center text-sm bg-purple-950 text-md
        hover:shadow-lg transform transition hover:-translate-y-1 focus:ring-2
        focus:ring-green-600 ring-offset-2 outline-none
        focus:shadow-lg font-mono">Check Now</button></a>
    </div>

    <div class = "font border-4 flex-col gap-6 p-40 shadow-xl bg-cover bg-center bg-hero-pattern2">
        <h2 class="text-gray-50	font-black text-4xl "><center>Content Generator</center></h2>
        <a href = "/content"><button class="items-center text-sm bg-gray-950 text-md
        hover:shadow-lg transform transition hover:-translate-y-1 focus:ring-2
        focus:ring-green-600 ring-offset-2 outline-none
        focus:shadow-lg font-mono" >Check Now</button></a>
    </div>

    <div class = "greyscale border-4 flex-col gap-6 p-40 shadow-xl bg-cover bg-center bg-hero-pattern3">
        <h2 class="text-gray-50	font-black text-4xl "><center>Image Caption Generator</center></h2>
        <a href = "/imgcap"><button class="items-center text-sm bg-purple-950 text-md
        hover:shadow-lg transform transition hover:-translate-y-1 focus:ring-2
        focus:ring-green-600 ring-offset-2 outline-none
        focus:shadow-lg font-mono">Check Now</button></a>
    </div>

    <!-- <div class = "img_caption border-4 flex-col gap-4 p-40">
        <h2 class="text-gray-50	font-black text-4xl"><center>Image Caption Generator</center></h2>
        <button class="items-center text-sm bg-purple-950 text-md
        hover:shadow-lg transform transition hover:-translate-y-1 focus:ring-2
        focus:ring-green-600 ring-offset-2 outline-none
        focus:shadow-lg" on:click={img_caption_button}>TRY NOW</button>
    </div> -->

    </main>
    <div class="w-fixed w-full flex-shrink flex-grow-0 px-2">
        <!-- fixed-width -->
        <div class="flex sm:flex-col px-2">
            <!-- sidebar goes here -->
        </div>
    </div>
</div>
</div>



<style>
    .main {
        display: flex;
        justify-content: center; 
        align-items: center; 
        /* background-color: grey; */
        height: 80vh;
        
    }
    .navbar{
        display: flex;
        justify-content: center; 
        align-items: center; 
        /* background-color: grey; */
        height: 10vh; 
        margin-bottom: 10px; 
    }
    @media (min-width: 640px) {
    .w-fixed {
        flex: 0 1 230px;
        min-width: 230px;
    }
    }
    .main h1 {
        margin-right: 10px;
    }

    .main button {
        /* background-color: darkgrey;  */
        color: white; 
        padding: 10px 20px; 
        border: none; 
        border-radius: 5px; 
        cursor: pointer; 
    }

    .main button:hover {
        background-color: black; 
    }

    .color_palette {
        display: flex;
        justify-content: center; 
        align-items: center; 
        /* background-color: grey; */
        height: 20vh; 
        margin-top: 20px;
    }

    .color_palette h2 {
        margin-right: 10px;
    }

    .color_palette button {
        /* background-color: darkgrey;  */
        color: white; 
        padding: 10px 20px; 
        border: none; 
        border-radius: 5px; 
        cursor: pointer; 
    }

    .color_palette button:hover {
        background-color: black; 
    }

    .font {
        display: flex;
        justify-content: center; 
        align-items: center; 
        /* background-color: grey; */
        height: 20vh; 
        margin-top: 20px;
    }

    .font h2 {
        margin-right: 10px;
    }


    .font button {
        /* background-color: darkgrey;  */
        color: white; 
        padding: 10px 20px; 
        border: none; 
        border-radius: 5px; 
        cursor: pointer; 
    }

    .font button:hover {
        background-color: purple; 
    }

    .greyscale {
        display: flex;
        justify-content: center; 
        align-items: center; 
        /* background-color: grey; */
        height: 20vh; 
        margin-top: 20px;
    }

    .greyscale h2 {
        margin-right: 10px;
    }


    .greyscale button {
        /* background-color: darkgrey;  */
        color: white; 
        padding: 10px 20px; 
        border: none; 
        border-radius: 5px; 
        cursor: pointer; 
    }

    .greyscale button:hover {
        background-color: black; 
    }


</style>