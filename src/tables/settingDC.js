export const settingDC = () => {
  const settingDC = document.createElement('article');
  settingDC.classList.add('card');
  settingDC.innerHTML = `
    <h2>Setting a DC</h2>
    <table>
      <thead>
        <tr>
          <th class="text">Difficulty</th>
          <th>DC</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Very easy</td>
          <td>5</td>
        </tr>
        <tr>
          <td>Easy</td>
          <td>10</td>
        </tr>
        <tr>
          <td>Moderate</td>
          <td>15</td>
        </tr>
        <tr>
          <td>Hard</td>
          <td>20</td>
        </tr>
        <tr>
          <td>Very hard</td>
          <td>25</td>
        </tr>
        <tr>
          <td>Nearly impossible</td>
          <td>30</td>
        </tr>
      </tbody>
    </table>
  `;
  return settingDC;
};
