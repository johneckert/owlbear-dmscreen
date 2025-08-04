export const outdoorVisibility = () => {
  const outdoorVisibility = document.createElement('article');
  outdoorVisibility.classList.add('card');
  outdoorVisibility.innerHTML = `
    <h2>Visibility (Outdoors)</h2>
    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>Distance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Clear day, no obstructions</td>
          <td>2 mi</td>
        </tr>
        <tr>
          <td>Rain</td>
          <td>1 mi</td>
        </tr>
        <tr>
          <td>Fog</td>
          <td>100-300 ft.</td>
        </tr>
        <tr>
          <td>From height</td>
          <td>x20</td>
        </tr>
      </tbody>
    </table>
  `;
  return outdoorVisibility;
};
