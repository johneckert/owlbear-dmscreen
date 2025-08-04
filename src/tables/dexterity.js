export const dexterity = () => {
  const dexterity = document.createElement('article');
  dexterity.classList.add('card', 'half-screen');
  dexterity.innerHTML = `
    <h2>Dexterity</h2>
    <h3>Acrobatics</h3>
    <p>Walk across difficult surface; Hold balance; Land safely; Otherwise fall / take damage.</p>
    <table class="text">
      <thead>
        <tr>
          <th>Difficulty</th>
          <th>Examples</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Easy</td>
          <td>'Icy surface; Turbulent situation; Land on dificult terrain.</td>
        </tr>
        <tr>
          <td>Moderate</td>
          <td>Narrow edge; swing from chandelier and land.</td>
        </tr>
        <tr>
          <td>Hard</td>
          <td>Cross a wildly swaying rope bridge.</td>
        </tr>
        <tr>
          <td>Very Hard</td>
          <td>Walk across a tightrope; Vault over/under an enemy.</td>
        </tr>
      </tbody>
    </table>
    <h3>Sleight of Hand</h3>
    <table class="text">
      <thead>
        <tr>
          <th>Description</th>
          <th>Purpose</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Contest vs. Perception</td>
          <td>Hide an object on your person; Palm an object; Lift a purse; Plant an object on another person.</td>
        </tr>
      </tbody>
    </table>
     <h3>Stealth</h3>
    <table class="text">
      <thead>
        <tr>
          <th>Description</th>
          <th>Purpose</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Contest vs. Perception</td>
          <td>Conceal from enemies; Sneak past targets; Slip away while others are distracted.</td>
        </tr>
      </tbody>
    </table>
     <h3>Pick Locks / Disarm Traps</h3>
    <table class="text">
      <thead>
        <tr>
          <th>Difficulty</th>
          <th>Examples</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Easy</td>
          <td>Simple lock; Simple trap.</td>
        </tr>
        <tr>
          <td>Moderate</td>
          <td>Typical lock; Average trap.</td>
        </tr>
        <tr>
          <td>Hard</td>
          <td>Elaborate lock; Complex trap.</td>
        </tr>
        <tr>
          <td>Very Hard</td>
          <td>Masterwork lock; Magical trap.</td>
        </tr>
      </tbody>
    </table>
  `;
  return dexterity;
};
