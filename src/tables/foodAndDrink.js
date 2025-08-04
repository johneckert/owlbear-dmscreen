export const foodAndDrink = () => {
  const foodAndDrink = document.createElement('article');
  foodAndDrink.classList.add('card');
  foodAndDrink.innerHTML = `
    <h2>Food & Drink</h2>
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Cost</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Bread (loaf)</td>
          <td>2 cp</td>
        </tr>
        <tr>
          <td>Cheese (wheel)</td>
          <td>1 sp</td>
        </tr>
        <tr>
          <td>Meat (ration)</td>
          <td>5 sp</td>
        </tr>
        <tr>
          <td>Water (flask)</td>
          <td>1 cp</td>
        </tr>
      </tbody>
    </table>
  `;
  return foodAndDrink;
};
