
document.getElementById('downloadButton').addEventListener('click', function() {
    downloadPDF('./assets/Plaquette Contrôle & Expertise 4.0.pdf', 'file.pdf');
});

async function downloadPDF(url, filename) {
    try {
        const response = await fetch(url);
        const blob = await response.blob();
        const element = document.createElement('a');
        const urlBlob = URL.createObjectURL(blob);
        element.href = urlBlob;
        element.download = filename;
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
        URL.revokeObjectURL(urlBlob); // Clean up the URL.createObjectURL blob
    } catch (error) {
        console.error('Download failed:', error);
    }
}
