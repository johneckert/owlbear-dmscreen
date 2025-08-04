export const encounterDistance = () => {
  const encounterDistance = document.createElement('article');
  encounterDistance.classList.add('card');
  encounterDistance.innerHTML = `
    <h2>Encounter Distance</h2>
    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>Distance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Arctic, desert, farmland, or grassland</td>
          <td>6d6 x 10 ft.</td>
        </tr>
        <tr>
          <td>Forest, swamp, or woodland</td>
          <td>2d8 x 10 ft.</td>
        </tr>
        <tr>
          <td>Hills or wastelands</td>
          <td>2d10 x 10 ft.</td>
        </tr>
        <tr>
          <td>Jungle</td>
          <td>2d6 x 10 ft.</td>
        </tr>
        <tr>
          <td>Mountains</td>
          <td>4d10 x 10 ft.</td>
        </tr>
        <tr>
          <td>Underground or urban</td>
          <td>2d4 x 10 ft.</td>
        </tr>
      </tbody>
    </table>
  `;
  return encounterDistance;
};
