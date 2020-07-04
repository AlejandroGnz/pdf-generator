const { nanoid } = require('nanoid');
const path = require('path');
const { renderOrderCreate } = require('../templates-fns');
const { browserManager } = require('../browser-manager');

async function buildPdf(data) {
  const htmlOutput = renderOrderCreate({ ...data, items: [] });

  const fileName = `${nanoid(16)}.pdf`;
  const filePath = path.join(process.cwd(), 'output', fileName);

  await browserManager.renderPDF(htmlOutput, {
    path: filePath,
    format: 'A4',
    printBackground: true,
  });
}

module.exports = {
  buildPdf,
};
