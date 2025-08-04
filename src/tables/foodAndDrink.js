export const foodAndDrink = () => {
  const foodAndDrink = document.createElement('article');
  foodAndDrink.classList.add('card', 'two-column');
  foodAndDrink.innerHTML = `
    <h2>Food, Drink & Lodging</h2>
    <div class="tables-wide">
      <table>
        <thead>
          <tr>
            <th class="text">Item</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="2">Ale</td>
          </tr>
          <tr class="sub">
            <td>Gallon</td>
            <td>2 sp</td>
          </tr>
          <tr class="sub">
            <td>Mug</td>
            <td>2 cp</td>
          </tr>
          <tr>
            <td>Banquet (per person)</td>
            <td>10 gp</td>
          </tr>
          <tr>
            <td>Bread, loaf</td>
            <td>2 cp</td>
          </tr>
          <tr>
            <td>Cheese, hunk</td>
            <td>1 sp</td>
          </tr>
          <tr>
            <td>Meat, chunk</td>
            <td>3 sp</td>
          </tr>
          <tr>
            <td colspan="2">Wine</td>
          </tr>
          <tr class="sub">
            <td>Common (pitcher)</td>
            <td>2 sp</td>
          </tr>
          <tr class="sub">
            <td>Fine (bottle)</td>
            <td>10 gp</td>
          </tr>
          <tr>
            <td colspan="2">Spirits</td>
          </tr>
          <tr class="sub">
            <td>Shot</td>
            <td>1-5gp</td>
          </tr>
          <tr class="sub">
            <td>Cocktail</td>
            <td>5-10gp</td>
          </tr>
          <tr class="sub">
            <td>Bottle</td>
            <td>10-30gp</td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th class="text">Item</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="2">Lodging (per night)</td>
          </tr>
          <tr class="sub">
            <td>Squalid</td>
            <td>7 cp</td>
          </tr>
          <tr class="sub">
            <td>Poor</td>
            <td>1 sp</td>
          </tr>
          <tr class="sub">
            <td>Modest</td>
            <td>5 sp</td>
          </tr>
          <tr class="sub">
            <td>Comfortable</td>
            <td>8 sp</td>
          </tr>
          <tr class="sub">
            <td>Wealthy</td>
            <td>2 gp</td>
          </tr>
          <tr class="sub">
            <td>Aristocratic</td>
            <td>4 gp</td>
          </tr>
          <tr>
            <td colspan="2">Meals (per day)</td>
          </tr>
          <tr class="sub">
            <td>Squalid</td>
            <td>3 cp</td>
          </tr>
          <tr class="sub">
            <td>Poor</td>
            <td>6 cp</td>
          </tr>
          <tr class="sub">
            <td>Modest</td>
            <td>3 sp</td>
          </tr>
          <tr class="sub">
            <td>Comfortable</td>
            <td>5 sp</td>
          </tr>
          <tr class="sub">
            <td>Wealthy</td>
            <td>8 sp</td>
          </tr>
          <tr class="sub">
            <td>Aristocratic</td>
            <td>2 gp</td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
  return foodAndDrink;
};
