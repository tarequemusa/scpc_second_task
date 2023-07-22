// Function that takes a callback as an argument
function doSomethingAsync (callback) {
    // Simulate an asynchronous operation (e.g., API call, file read)
    setTimeout(function() {
        console.log("Task is done!");
        // After the task is done, call the callback function
        callback();
    }, 2000); // Simulating a 2-second delay
}

// Callback function to be executed after the asynchronous task
function callbackFunction () {
    console.log("Callback function is executed!");
}

// Call the doSomethingAsync function and pass the callback function
doSomethingAsync(callbackFunction);
