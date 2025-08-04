export const thingsYouCanDo = () => {
  const thingsYouCanDo = document.createElement('article');
  thingsYouCanDo.classList.add('card');
  thingsYouCanDo.innerHTML = `
    <h2>Things You Can Do On Your Turn</h2>
    <div class="block">
      <ul>
        <li>Move up to your speed.</li>
        <li>Take one action.</li>
        <li>Communicate with speech, gestures, or both.</li>
        <li>Interact with one object or feature of the environment as you move or take your action. To interact with a second object, take the Use an Object action.</li>
      </ul>
    </div>
  `;
  return thingsYouCanDo;
}