export const servicesAndTransportation = () => {
  const servicesAndTransportation = document.createElement('article');
  servicesAndTransportation.classList.add('card');
  servicesAndTransportation.innerHTML = `
    <h2>Services & Transportation</h2>
    <table>
      <thead>
        <tr>
          <th class="text">Service</th>
          <th>Cost</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Coach cab (per mi)</td>
          <td>3 cp</td>
        </tr>
        <tr>
          <td>Coach hire (per day)</td>
          <td>1 gp</td>
        </tr>
        <tr>
          <td>Hireling, trained (per day)</td>
          <td>2 gp</td>
        </tr>
          <tr>
          <td>Hireling, untrained (per day)</td>
          <td>2 sp</td>
        </tr>
        <tr>
          <td>Messenger (per mile)</td>
          <td>2 cp</td>
        </tr>
        <tr>
          <td>Road or gate toll</td>
          <td>1 cp</td>
        </tr>
        <tr>
          <td>Ship passage (per mile)</td>
          <td>1 sp</td>
        </tr>
      </tbody>
    </table>
  `;
  return servicesAndTransportation;
}
