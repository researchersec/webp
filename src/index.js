import DemoParser from 'demoparser2';  // Importing demoparser2

// Select the DOM elements
const fileInput = document.getElementById('fileInput');
const progressBar = document.getElementById('progress-bar');
const logDiv = document.getElementById('log');
const outputDiv = document.getElementById('output');  // To display parsed data

// Log function to append messages to the log div
function logMessage(message) {
  logDiv.innerHTML += `<p>${message}</p>`;
  logDiv.scrollTop = logDiv.scrollHeight; // Auto-scroll to the latest log message
}

// Update the progress bar
function updateProgressBar(percent) {
  progressBar.style.width = `${percent}%`;
  progressBar.innerText = `${percent}%`;
}

// Function to handle file upload and parsing
fileInput.addEventListener('change', async (event) => {
  const file = event.target.files[0];

  if (!file) {
    logMessage("No file selected.");
    return;
  }

  logMessage("File selected: " + file.name);
  logMessage("Uploading and parsing the file...");

  // Simulate file upload progress (if uploading to a server, implement real upload logic here)
  for (let i = 0; i <= 100; i += 10) {
    await new Promise(resolve => setTimeout(resolve, 200));  // Simulate delay
    updateProgressBar(i);
    logMessage(`Upload progress: ${i}%`);
  }

  logMessage("File uploaded. Starting parsing...");

  // Simulate parsing progress
  try {
    const reader = new FileReader();
    reader.onload = function (e) {
      const arrayBuffer = e.target.result;
      const parser = new DemoParser();  // Initialize the demoparser2 instance

      logMessage("Parsing the .dem file...");
      
      // Parse the file (assuming synchronous parsing, adjust if demoparser2 is async)
      parser.parse(arrayBuffer).then(() => {
        logMessage("Parsing complete!");
        updateProgressBar(100);  // Set progress to 100% when parsing is done

        // Get the parsed data and display it in the output div
        const parsedData = parser.getParsedData();  // Assuming `getParsedData` exists
        outputDiv.textContent = JSON.stringify(parsedData, null, 2);  // Display parsed data as JSON
      }).catch(err => {
        logMessage(`Error during parsing: ${err.message}`);
      });
    };

    reader.readAsArrayBuffer(file); // Read the file as ArrayBuffer
  } catch (err) {
    logMessage(`An error occurred: ${err.message}`);
  }
});
