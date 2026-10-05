export function downloadTextFile(filename: string, content: string, mimeType = 'text/plain;charset=utf-8') {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function printSection(title: string, htmlContent: string) {
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    window.print();
    return;
  }

  printWindow.document.write(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="utf-8" />
      <title>${title} - Instituto Rosa Cerda Amador</title>
      <style>
        body {
          font-family: system-ui, -apple-system, sans-serif;
          color: #1e293b;
          line-height: 1.5;
          padding: 24px;
          margin: 0;
        }
        h1, h2, h3 { color: #0f172a; margin-top: 0; }
        .header {
          border-bottom: 2px solid #059669;
          padding-bottom: 12px;
          margin-bottom: 20px;
        }
        .badge {
          display: inline-block;
          background: #ecfdf5;
          color: #065f46;
          padding: 4px 10px;
          border-radius: 9999px;
          font-size: 12px;
          font-weight: bold;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin: 16px 0;
        }
        th, td {
          border: 1px solid #cbd5e1;
          padding: 8px 12px;
          text-align: left;
          font-size: 13px;
        }
        th {
          background-color: #f1f5f9;
        }
        pre {
          background: #f8fafc;
          padding: 16px;
          border-radius: 8px;
          white-space: pre-wrap;
          font-family: inherit;
        }
        @media print {
          button { display: none; }
        }
      </style>
    </head>
    <body>
      <div class="header">
        <span class="badge">Instituto Rosa Cerda Amador • 8vo Grado "A" • II Semestre 2026</span>
        <h2>${title}</h2>
      </div>
      <div>${htmlContent}</div>
      <script>
        window.onload = function() {
          window.print();
        }
      </script>
    </body>
    </html>
  `);
  printWindow.document.close();
}
