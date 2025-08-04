import { downloadFile } from '../utils.js';

const EMAIL = "johnteckert@gmail.com";

export const notePad = () => {
  const notePad = document.createElement('article');
  notePad.classList.add('card', 'notepad');
  notePad.innerHTML = `
    <h2>Notes</h2>
    <textarea id="notes" rows="10" cols="30" placeholder="Write your notes here..."></textarea>
    <div class="button-container">
      <button id="clear-button">Clear</button>
      <button id="download-button">Download</button>
    </div>
  `;

  const downloadButton = notePad.querySelector('#download-button');
  const clearButton = notePad.querySelector('#clear-button');

  downloadButton.addEventListener('click', () => {
    const fileData = [
      new Date().toLocaleDateString(),
      ' ',
      new Date().toLocaleTimeString(),
      '\n\n',
      notePad.querySelector('textarea').value
    ];
    const file = new File(fileData, 'note.txt', {
      type: 'text/plain',
    });
    downloadFile(file);
  });

  clearButton.addEventListener('click', () => {
    const notes = notePad.querySelector('textarea');
    notes.value = '';
    notes.focus();
  });

  return notePad;
}

