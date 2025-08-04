export const audibleDistance = () => {
  const audibleDistance = document.createElement('article');
  audibleDistance.classList.add('card');
  audibleDistance.innerHTML = `
    <h2>Audible Distance</h2>
    <table>
      <thead>
        <tr>
          <th class="text">Description</th>
          <th>Distance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Trying to be quiet</td>
          <td>2d6 x 5 ft.</td>
        </tr>
        <tr>
          <td>Normal noise level</td>
          <td>2d6 x 10 ft.</td>
        </tr>
        <tr>
          <td>Loud noise level</td>
          <td>2d6 x 50 ft.</td>
        </tr>
      </tbody>
    </table>
  `;
  return audibleDistance;
};
