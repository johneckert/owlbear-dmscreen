export const objectAC = () => {
  const objectAC = document.createElement('article');
  objectAC.classList.add('card');
  objectAC.innerHTML = `
    <h2>Object AC</h2>
    <table>
      <thead>
        <tr>
          <th>Substance</th>
          <th>AC</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cloth, paper, rope</td>
          <td>11</td>
        </tr>
        <tr>
          <td>Crystal, glass, ice</td>
          <td>13</td>
        </tr>
        <tr>
          <td>Wood, bone</td>
          <td>15</td>
        </tr>
        <tr>
          <td>Stone</td>
          <td>17</td>
        </tr>
        <tr>
          <td>Iron, steel</td>
          <td>19</td>
        </tr>
        <tr>
          <td>Mithral</td>
          <td>21</td>
        </tr>
        <tr>
          <td>Adamantine</td>
          <td>23</td>
        </tr>
      </tbody>
    </table>
  `;
  return objectAC;
};
