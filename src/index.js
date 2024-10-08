import DemoParser from 'demoparser2';

// Example of handling a demo file in the browser
document.getElementById('uploadBtn').addEventListener('click', () => {
    const input = document.getElementById('demoFile');
    const file = input.files[0];

    if (!file) {
        alert("Please select a demo file!");
        return;
    }

    const reader = new FileReader();
    reader.onload = function(event) {
        const demoData = event.target.result;

        // Parse the demo file using demoparser2
        const parser = new DemoParser();
        parser.parse(demoData);  // Assuming synchronous parsing

        // Display or use the parsed data (assuming `getParsedData` exists)
        const parsedData = parser.getParsedData();
        document.getElementById('output').textContent = JSON.stringify(parsedData, null, 2);
    };

    reader.readAsArrayBuffer(file);  // Use ArrayBuffer to handle binary file
});
