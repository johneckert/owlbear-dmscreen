export const travelPace = () => {
  const travelPace = document.createElement('article');
  travelPace.classList.add('card');
  travelPace.innerHTML = `
    <h2>Travel Pace</h2>
    <table>
      <thead>
        <tr>
          <th>Pace</th>
          <th colspan="3">Distance per</th>
          <th class="text">Effect</th>

        </tr>
        <tr>
          <th></th>
          <th>minute</th>
          <th>hour</th>
          <th>day</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>slow</td>
          <td>200 ft.</td>
          <td>2 mi</td>
          <td>18 mi</td>
          <td class="text">able ot use stealth</td>
        </tr>
        <tr>
          <td>normal</td>
          <td>300 ft.</td>
          <td>3 mi</td>
          <td>24 mi</td>
          <td class="text">no effect</td>
        </tr>
        <tr>
          <td>fast</td>
          <td>400 ft.</td>
          <td>4 mi</td>
          <td>30 mi</td>
          <td class="text">-5 penalty to passive Wisdom (Perception) scores</td>
        </tr>
      </tbody>
    </table>
  `;
  return travelPace;
}
