export const lightSources = () => {
  const lightSources = document.createElement('article');
  lightSources.classList.add('card');
  lightSources.innerHTML = `
    <h2>Light</h2>
    <table>
      <thead>
        <tr>
          <th>Source</th>
          <th>Bright Light</th>
          <th>Dim Light</th>
          <th>Duration</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Candle</td>
          <td>5 ft.</td>
          <td>+ 5 ft.</td>
          <td>1 hour</td> 
        </tr>
        <tr>
          <td>Lamp</td>
          <td>15 ft.</td>
          <td>+30 ft.</td>
          <td>6 hours</td>
        </tr>
        <tr>
          <td>Lantern, bullseye</td>
          <td>60 ft., cone</td>
          <td>+ 60 ft.</td>
          <td>6 hours</td>
        </tr>
        <tr>
          <td>Lantern, hooded</td>
          <td>30 ft., cone</td>
          <td>+ 30 ft.</td>
          <td>6 hours</td>
        </tr>
        <tr>
          <td>Lowered hood</td>
          <td> - </td>
          <td>+ 5 ft.</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Torch</td>
          <td>20 ft.</td>
          <td>+ 20 ft.</td>
          <td>1 hour</td>
        </tr>
      </tbody>
    </table>
  `;
  return lightSources;
};
