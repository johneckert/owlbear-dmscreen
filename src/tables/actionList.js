export const actionList = () => {
  const actionList = document.createElement('article');
  actionList.classList.add('card', 'half-screen');
  actionList.innerHTML = `
    <h2>Actions</h2>
    <table class="text">
      <thead>
        <tr>
          <th>Action</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Attack</td>
          <td>Make a melee or ranged attack. See the attacks section for more details.</td>
        </tr>
        <tr>
          <td>Cast</td>
          <td>You cast a cantrip or leveled spell. See the spells casting time. You can only cast one leveled spell per turn, but you can cast another leveled spell as a reaction.</td>
        </tr>
        <tr>
          <td>Dash</td>
          <td>Gain extra movement equal to your speed for the turn. This movement happens after your normal movement.</td>
        </tr>
        <tr>
          <td>Disengage</td>
          <td>Your movement does not provoke opportunity attacks for the turn.</td>
        </tr>
        <tr>
          <td>Dodge</td>
          <td>Until the start of your next turn, any attack roll made against you has disadvantage if you can see the attacker, and you make Dexterity saving throws with advantage. You lose this benefit if you are incapacitated or if your speed drops to 0.</td>
        </tr>
        <tr>
          <td>Grapple</td>
          <td>(1 melee attack) You make a Strength (Athletics) check contested by the target's Strength (Athletics) or Dexterity (Acrobatics) check. If you win the contest, you grapple the target.</td>
        </tr>
         <tr>
          <td>Help</td>
          <td>You aid another creature in making a skill check or attack roll. The target gains advantage on the next ability check or attack roll it makes before the start of your next turn.</td>
        </tr>
        <tr>
          <td>Hide</td>
          <td>You make a Dexterity (Stealth) check in an attempt to become hidden. While hidden you have advantage on attacks and attacks against you have disadvantage.</td>
        </tr>
        <tr>
          <td>Ready</td>
          <td>You wait for a particular circumstance before you act, which let's you use your reaction before the start of your next turn. You must decide in advance what circumstance will trigger your reaction and what action you will take in response ot the trigger. If you ready a spell it must have a casting time of 1 action and you must concentrate on it until you release it.</td>
        </tr>
        <tr>
          <td>Search</td>
          <td>You make a Wisdom (Perception) check or Intelligence (Investigation) check to find something.</td>
        </tr>
        <tr>
          <td>Shove</td>
          <td>(1 melee attack) You make a Strength (Athletics) check contested by the target's Strength (Athletics) or Dexterity (Acrobatics) check. If you win the contest, you either knock the target prone or push it 5 feet away from you.</td>
        </tr>
        <tr>
          <td>Use a magic Item</td>
          <td>You use a magic item that requires an action to use.</td>
        </tr>
        <tr>
          <td>Use an object</td>
          <td>You use an object that requires an action to use.</td>
        </tr>
        <tr>
          <td>Use a special ability</td>
          <td>You use a special ability that requires an action to use.</td>
        </tr>
      </tbody>
    </table>
  `;
  return actionList;
};
