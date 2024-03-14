import { useEffect } from 'react';

const useFetchAndDownloadPdf = (pdfUrl) => {
  useEffect(() => {
    const downloadPdf = async () => {
      try {
        const response = await fetch(pdfUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch PDF');
        }
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'file.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error) {
        console.error('Error downloading PDF:', error);
      }
    };

    downloadPdf();

  }, [pdfUrl]);
};

export default useFetchAndDownloadPdf;
