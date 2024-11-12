export const handleDownload = async (path: string, downloadName: string) => {
  try {
    // Fetch the file from the public directory
    const response = await fetch(path);
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const blob = await response.blob();

    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = downloadName;
    document.body.appendChild(a); // Append anchor to body
    a.click();
    document.body.removeChild(a); // Remove anchor after download
    window.URL.revokeObjectURL(url); // Release the blob URL
  } catch (error) {
    console.error('Error downloading the file:', error);
  }
};