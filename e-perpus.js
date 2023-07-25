const pdfjsLib = window['pdfjs-dist/build/pdf'];

function renderPdfInCanvas(url, canvasId) {
  const loadingDiv = document.getElementById(`${canvasId}-loading`);
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext('2d');

  pdfjsLib.getDocument(url).promise.then((pdfDoc) => {
    pdfDoc.getPage(1).then((page) => {
      const scale = 1.5;
      const viewport = page.getViewport({ scale });
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      const renderContext = {
        canvasContext: ctx,
        viewport: viewport,
      };

      page.render(renderContext).promise.then(() => {
        loadingDiv.style.display = 'none';
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const bookUrls = [
    'perpus/C_PenTest.pdf',
    'perpus/Bypassing_layers.pdf',
    'perpus/FRONT END/CSS Notes For Pros.pdf',
    'perpus/FRONT END/Getting to Know Vue js.pdf',
    'perpus/FRONT END/SQL Database.pdf',
    'perpus/PYTHON/Fundamentals Python .pdf',
    'perpus/PYTHON/Learning Python Design Patterns .pdf',
    'perpus/PYTHON/Python Programming .pdf',
    'perpus/FRONT END/Learning Bootstrap.pdf',
    'perpus/DATABASES/Microsoft SQL Server 2012.pdf',
    'perpus/DATABASES/Oracle Database book.pdf',
    'perpus/BACK END/PHP And MySQL.pdf',
    'perpus/BACK END/Laravel framework.pdf',
    'perpus/BACK END/Ajax Programming.pdf',
    'perpus/C#/Fundamentals  Csharp.pdf',
  ];

  bookUrls.forEach((url, index) => {
    const canvasId = `pdfCanvas${index + 1}`;
    renderPdfInCanvas(url, canvasId);
  });
});
