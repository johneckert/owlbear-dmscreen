export const objectHP = () => {
  const objectHP = document.createElement('article');
  objectHP.classList.add('card');
  objectHP.innerHTML = `
    <h2>Object HP</h2>
    <table>
      <thead>
        <tr>
          <th class="text">Size</th>
          <th>Fragile</th>
          <th>Resilient</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Tiny (bottle, lock)</td>
          <td>2 (1d4)</td>
          <td>5 (2d4)</td>
        </tr>
        <tr>
          <td>Small (chest, lute)</td>
          <td>3 (1d6)</td>
          <td>10 (3d6)</td>
        </tr>
        <tr>
          <td>Medium (barrel, chandelier)</td>
          <td>4 (1d8)</td>
          <td>18 (4d8)</td>
        </tr>
        <tr>
          <td>Large (cart, 10x10 ft. window)</td>
          <td>5 (1d10)</td>
          <td>27 (5d10)</td>
        </tr>
        <tr>
          <td>Huge (rowboat, statue)</td>
          <td>6 (1d12)</td>
          <td>40 (6d12)</td>
        </tr>
        <tr>
          <td>Gargantuan (sailing ship, castle wall)</td>
          <td>7 (2d6)</td>
          <td>50 (7d10)</td>
        </tr>
      </tbody>
    </table>
  `;
  return objectHP;
};
