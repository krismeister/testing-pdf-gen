import { readFileSync, writeFileSync } from "fs";
import { PDFDocument } from "pdf-lib";
 
(async () => {

    
// Create a new PDFDocument
const pdfDoc = await PDFDocument.create()

// These should be Uint8Arrays or ArrayBuffers
// This data can be obtained in a number of different ways
// If your running in a Node environment, you could use fs.readFile()
// In the browser, you could make a fetch() call and use res.arrayBuffer()
const firstDonorPdfBytes = readFileSync('./1.pdf');
const secondDonorPdfBytes = readFileSync('./2.pdf');


// Load a PDFDocument from each of the existing PDFs
const firstDonorPdfDoc = await PDFDocument.load(firstDonorPdfBytes)
const secondDonorPdfDoc = await PDFDocument.load(secondDonorPdfBytes)

// Copy the 1st page from the first donor document, and 
// the 743rd page from the second donor document
const [firstDonorPage] = await pdfDoc.copyPages(firstDonorPdfDoc, [0])
const [secondDonorPage] = await pdfDoc.copyPages(secondDonorPdfDoc, [1])

// Add the first copied page
pdfDoc.addPage(firstDonorPage)

// Insert the second copied page to index 0, so it will be the 
// first page in `pdfDoc`
pdfDoc.insertPage(0, secondDonorPage)

// Serialize the PDFDocument to bytes (a Uint8Array)
const pdfBytes = await pdfDoc.save()

writeFileSync('3-combined.pdf', pdfBytes);

// For example, `pdfBytes` can be:
//   • Written to a file in Node
//   • Downloaded from the browser
//   • Rendered in an <iframe>

})();
