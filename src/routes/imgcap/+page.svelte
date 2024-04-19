<div class = "container">
    <h1><center>Automatic Image Caption Generator</center></h1>
    <h2>Welcome to our image caption generator powered by artificial intelligence. Upload your images below and let our AI describe them for you!</h2>
    <h1>How It Works</h1>
    <h2>Our AI uses machine learning algorithms to analyze uploaded images and generate descriptive captions automatically.</h2>
    <h1><b>STEP 1</b></h1>
    <h2>You upload an image using the button above.</h2>
    <h1><b>STEP 2</b></h1>
    <h2>Our AI processes the image and generates a caption.</h2>
    <h1><b>STEP 3</b></h1>
    <h2>The generated caption will appear below the image upload area.</h2>

    <h1>Upload Image</h1>
    <input type="file" id="fileInput" accept=".jpg, .jpeg, .png">
    <label for="fileInput" class="upload-button">Choose File</label>
</div>

<style>
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            text-align: center;
        }
        h1, h2 {
            color: #333;
        }
        input[type="file"] {
            display: none;
        }
        .upload-button {
            background-color: darkgrey;
            color:white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
        }
        .upload-button:hover {
            background-color: black;
        }
</style>