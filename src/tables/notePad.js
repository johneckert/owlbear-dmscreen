const EMAIL = "johnteckert@gmail.com";

export const notePad = () => {
  const notePad = document.createElement('article');
  notePad.classList.add('card', 'notepad');
  notePad.innerHTML = `
    <h2>Notes</h2>
    <textarea id="notes" rows="10" cols="30" placeholder="Write your notes here..."></textarea>
    <button id="send-notes">Send Notes</button>
  `;

  const sendButton = notePad.querySelector('#send-notes');
  sendButton.addEventListener('click', () => {
    const notes = notePad.querySelector('textarea').value;
    if (notes) {
      window.open(`mailto:${EMAIL}?subject=DM Screen Notes&body=${encodeURIComponent(notes)}`);
    }
  });

  return notePad;
}
