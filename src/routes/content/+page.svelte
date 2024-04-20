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
                    
                        <h1 class="text-gray-50	font-black text-6xl">Automatic Content Generator</h1>
                        <h2 class="text-gray-50">Welcome to our Automatic Content Generator! Enter a sentence or phrase below, and our AI model will generate additional text based on your input. Whether you need help with creative writing, summaries, or generating ideas for your graphic design or social media, our AI is here to assist you.</h2>
                        
                        
                            <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter a prompt" required />
                            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Generate</button>
                    
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