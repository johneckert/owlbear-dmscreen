export const concentration = () => {
  const concentration = document.createElement('article');
  concentration.classList.add('card');
  concentration.innerHTML = `
    <h2>Concentration</h2>
    <div class="block">
      <p>If a spell must be maintained with concentration, its description specifies how long you can concentrate on it. You can end concentration at any time (no action required). The following factors can break your concentration:<p>
      <ul>
        <li>You start casting another spell that requires concentration.</li>
        <li>You take damage. To maintain concentration, <span class="highlight">succeed on a Constitution saving throw with a DC equal to 10 or half the damage you take, whichever number is higher.</span></li>
        <li>You're incapacitated or killed.</li>
        <li>You're overwhelmed by an enormous distraction, such as a wave crashing into you. <span class="highlight">Succeed on a DC 10 Constitution saving throw to maintain your concentration.</span></li>
      </ul>
    </div>   
  `;
  return concentration;
};
