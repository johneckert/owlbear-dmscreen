export const downloadFile = (file) => {
  const link = document.createElement('a');
  link.href = URL.createObjectURL(file);
  link.download = 'note.txt';
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
