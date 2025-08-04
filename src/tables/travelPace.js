export const travelPace = () => {
  const travelPace = document.createElement('article');
  travelPace.classList.add('card');
  travelPace.innerHTML = `
    <h2>Travel Pace</h2>
    <table>
      <thead>
        <tr>
          <th>Pace</th>
          <th>Per minute</th>
          <th>Per hour</th>
          <th> Per day</th>
          <th class="text">Effect</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>slow</td>
          <td>200 ft.</td>
          <td>2 mi.</td>
          <td>18 mi.</td>
          <td class="text">able to use stealth</td>
        </tr>
        <tr>
          <td>normal</td>
          <td>300 ft.</td>
          <td>3 mi.</td>
          <td>24 mi</td>
          <td class="text">no effect</td>
        </tr>
        <tr>
          <td>fast</td>
          <td>400 ft.</td>
          <td>4 mi.</td>
          <td>30 mi.</td>
          <td class="text">-5 to passive perception</td>
        </tr>
      </tbody>
    </table>
  `;
  return travelPace;
}
