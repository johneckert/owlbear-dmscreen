export const trackingDC = () => {
  const trackingDC = document.createElement('article');
  trackingDC.classList.add('card');
  trackingDC.innerHTML = `
    <h2>Tracking DC</h2>
    <table>
      <thead>
        <tr>
          <th class="text">Ground Conditions</th>
          <th>DC</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Soft surfaces such as snow</td>
          <td>10</td>
        </tr>
        <tr>
          <td>Dirt or grass</td>
          <td>15</td>
        </tr>
        <tr>
          <td>Bare stone</td>
          <td>20</td>
        </tr>
        <tr>
          <td>Stone</td>
          <td>17</td>
        </tr>
        <tr>
          <td>Each day since the creature passed</td>
          <td>+5</td>
        </tr>
        <tr>
          <td>Creature left a trail such as blood</td>
          <td>-5</td>
        </tr>
      </tbody>
    </table>
  `;
  return trackingDC;
};
