export const cover = () => {
  const cover = document.createElement('article');
  cover.classList.add('card');
  cover.innerHTML = `
    <h2>Cover</h2>
    <table>
      <thead>
        <tr>
          <th>Cover</th>
          <th>Effect</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Half cover</td>
          <td>+2 to AC and Dexterity saving throws</td>
        </tr>
        <tr>
          <td>Three-quarters cover</td>
          <td>+5 to AC and Dexterity saving throws</td>
        </tr>
        <tr>
          <td>Full cover</td>
          <td>Cannot be targeted directly by an attack or spell</td>
        </tr>
      </tbody>
    </table>
  `;
  return cover;
};
