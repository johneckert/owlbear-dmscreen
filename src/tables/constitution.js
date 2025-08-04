export const constitution = () => {
  const constitution = document.createElement('article');
  constitution.classList.add('card', 'half-screen');
  constitution.innerHTML = `
    <h2>Constitution</h2>
    <h3>Concentration</h3>
    <table class="text">
      <thead>
        <tr>
          <th>Difficulty</th>
          <th>Examples</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>10 or half of the damage taken.</td>
          <td>After taking damage while maintaining concentration spell.</td>
        </tr>
      </tbody>
    </table>
  `;
  return constitution;
};
