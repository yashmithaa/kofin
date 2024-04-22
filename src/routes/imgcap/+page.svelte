<script>
    function generate() {
        //add code
    }
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
                <div class = "main flex-col gap-5">
                    
                        <h1 class="text-gray-50	font-black text-5xl">Automatic Image Caption Generator</h1>
                        <h2 class="text-gray-50">Welcome to our image caption generator powered by AI. Upload your images below and let our AI describe them for you!Our AI uses machine learning algorithms to analyze uploaded images and generate descriptive captions automatically.</h2>
                        
            
                <input type="file" id="fileInput" accept=".jpg, .jpeg, .png"><br>
                <!-- <label for="fileInput" class="upload-button">Choose File</label> -->

                <div class = "box"></div>

                <button on:click={generate}>GENERATE CAPTION</button><br>
                <h2>Captions</h2>
                <div class = "box"></div>

                <h2>Guidelines</h2>
                <h3>For accurate captions, upload clear and well-defined images.
                    Avoid blurry or heavily distorted images for better results.</h3>
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
            margin-right: 30px;
        }
    
        
        
    
    </style>