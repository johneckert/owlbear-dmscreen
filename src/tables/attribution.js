export const attribution = () => {
  const attribution = document.createElement('article');
  attribution.classList.add('card', 'three-column', 'fine-print');
  attribution.innerHTML = `<p>This work includes material taken from the System Reference Document 5.1 (“SRD 5.1”) by Wizards of the Coast LLC and available at <a href="https://dnd.wizards.com/resources/systems-reference-document" target="_blank">https://dnd.wizards.com/resources/systems-reference-document</a>. The SRD 5.1 is licensed under the Creative Commons Attribution 4.0 International License available at <a href="https://creativecommons.org/licenses/by/4.0/legalcode" target="_blank">https://creativecommons.org/licenses/by/4.0/legalcode</a>.</p>`;
  return attribution;
};