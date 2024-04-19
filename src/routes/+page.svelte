<script>
    function main_button() {
        // link to page
    }
    
    function color_palette_button() {
        // link to page
    }

    function font_button() {
        // link to page
    }

    function greyscale_button() {
        // link to page
    }

    function img_caption_button() {
        // link to page
    }

</script>

<div class = "main">
    <h1><center>Kofin</center></h1>
    <button on:click={main_button}>EXPLORE</button>
</div>

<div class = "color_palette">
    <h2><center>Color Palette Generator</center></h2>
    <button on:click={color_palette_button}>TRY NOW</button>
</div>

<div class = "font">
    <h2><center>Font Generator</center></h2>
    <button on:click={font_button}>TRY NOW</button>
</div>

<div class = "greyscale">
    <h2><center>Colorize Greyscale Image</center></h2>
    <button on:click={greyscale_button}>TRY NOW</button>
</div>

<div class = "img_caption">
    <h2><center>Image Caption Generator</center></h2>
    <button on:click={img_caption_button}>TRY NOW</button>
</div>

<style>
    .main {
        display: flex;
        justify-content: center; 
        align-items: center; 
        background-color: grey;
        height: 100vh; 
    }

    .main h1 {
        margin-right: 10px;
    }

    .main button {
        background-color: darkgrey; 
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
        background-color: grey;
        height: 20vh; 
        margin-top: 20px;
    }

    .color_palette h2 {
        margin-right: 10px;
    }

    .color_palette button {
        background-color: darkgrey; 
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
        background-color: grey;
        height: 20vh; 
        margin-top: 20px;
    }

    .font h2 {
        margin-right: 10px;
    }


    .font button {
        background-color: darkgrey; 
        color: white; 
        padding: 10px 20px; 
        border: none; 
        border-radius: 5px; 
        cursor: pointer; 
    }

    .font button:hover {
        background-color: black; 
    }

    .greyscale {
        display: flex;
        justify-content: center; 
        align-items: center; 
        background-color: grey;
        height: 20vh; 
        margin-top: 20px;
    }

    .greyscale h2 {
        margin-right: 10px;
    }


    .greyscale button {
        background-color: darkgrey; 
        color: white; 
        padding: 10px 20px; 
        border: none; 
        border-radius: 5px; 
        cursor: pointer; 
    }

    .greyscale button:hover {
        background-color: black; 
    }

    .img_caption {
        display: flex;
        justify-content: center; 
        align-items: center; 
        background-color: grey;
        height: 20vh; 
        margin-top: 20px;
    }

    .img_caption h2 {
        margin-right: 10px;
    }


    .img_caption button {
        background-color: darkgrey; 
        color: white; 
        padding: 10px 20px; 
        border: none; 
        border-radius: 5px; 
        cursor: pointer; 
    }

    .img_caption button:hover {
        background-color: black; 
    }
    

</style>