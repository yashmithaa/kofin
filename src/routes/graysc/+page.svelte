<script>
    import { onMount } from 'svelte';
  
    let fileInput;
    let colorizedImage = null;
  
    async function generate() {
      const file = fileInput.files[0];
      const formData = new FormData();
      formData.append('image', file);
  
      try {
        const response = await fetch('http://localhost:8000/colorize_inference', {
          method: 'POST',
          body: formData
        });
  
        if (response.ok) {
          const blob = await response.blob();
          colorizedImage = URL.createObjectURL(blob);
        } else {
          console.error('Error:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  
    onMount(() => {
      fileInput = document.getElementById('fileInput');
    });
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
        <div class="navbar border-4 shadow-md"></div>
        <div class="main flex-col gap-5">
          <h1 class="text-gray-50 font-black text-7xl gap">Colorize Greyscale Image</h1>
          <h2 class="text-gray-50">
            Welcome to our AI-powered colorization tool! Upload a grayscale image, and our AI model will attempt to add color to it, creating a vibrant and realistic colorized version.
            <br>Supported Image Formats: JPEG, PNG
            <br>Best Results: Upload high-quality grayscale images with clear details for optimal colorization.
          </h2>
          <input type="file" id="fileInput" accept=".jpg, .jpeg, .png" on:change="{generate}">
          {#if colorizedImage}
            <div class="colorized-image-container">
              <img src="{colorizedImage}" alt="Colorized Image" class="colorized-image">
            </div>
          {/if}
        </div>
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
      height: 100vh;
    }
  
    .navbar {
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
      margin-right: 30px;
    }
  
    .colorized-image-container {
      display: flex;
      justify-content: center;
      margin-top: 20px;
    }
  
    .colorized-image {
      max-width: 100%;
      max-height: 400px;
    }
  </style>