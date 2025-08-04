export const conditions = () => {
  const conditions = document.createElement('article');
  conditions.classList.add('card', 'half-screen');
  conditions.innerHTML = `
    <h2>Conditions</h2>
    <table class="text">
      <thead>
        <tr>
          <th>Condition</th>
          <th>Effect</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Blinded</td>
          <td>Automatically fail any check requiring sight. Disadvantage on attack rolls. Attackers have advantage.</td>
        </tr>
        <tr>
          <td>Charmed</td>
          <td>Cannot attack the charmer or target them with harmful abilities or effects. The charmer has advantage on interacting socially with the charmed creature.</td>
        </tr>
        <tr>
          <td>Deafened</td>
          <td>Automatically fail any ability check that requires hearing.</td>
        </tr>
        <tr>
          <td>Exhaustion</td>
          <td>
            <ol>
              <li>Disadvantage on ability checks.</li>
              <li>Speed is halved.</li>
              <li>Disadvantage on attack rolls and saving throws.</li>
              <li>Max HP is halved.</li>
              <li>Speed is reduced to 0.</li>
              <li>Death.</li>
            </ol>
          </td>
        </tr>
        <tr>
          <td>Falling</td>
          <td>At the end of a fall a creature takes 1d6 bludgeoning damage for every 10 feet they fell (max 20d6). A creature who takes damage this way is knocked prone.</td>
        </tr>
        <tr>
          <td>Frightened</td>
          <td>A frightened creature has disadvantage on ability checks and attack rolls while the source of its fear is within line of sight. The creature can't willingly move closer to the source of its fear.</td>
        </tr>
        <tr>
          <td>Grappled</td>
          <td>A grappled creature's speed becomes 0, and it can't benefit from any bonus to its speed. The condition ends if the grappler is incapacitated (see the condition). The condition also ends if an effect removes the grappled creature from the reach of the grappler or grappling effect, such as when a creature is hurled away by the thunderwave spell.</td>
        </tr>
        <tr>
          <td>Hidden</td>
          <td>When you attack a target that you can't see, you have disadvantage on the attack roll. If the target isn't in the location you targeted, you automatically miss. When a creature can't see you, you have advantage on attack rolls against it. If you are hidden when you make an attack, you give away your location when the attack hits or misses.</td>
        </tr>
        <tr>
          <td>Incapacitated</td>
          <td>An incapacitated creature can't take actions or reactions.</td>
        </tr>
        <tr>
          <td>Invisible</td>
          <td>An invisible creature is impossible to see without the aid of magic or a special sense. For the purpose of hiding, the creature is heavily obscured. The creature's location can be detected by any noise it makes or any tracks it leaves. Attack rolls against the creature have disadvantage, and the creature's attack rolls have advantage.</td>
        </tr>
        <tr>
          <td>Paralyzed</td>
          <td>A paralyzed creature is incapacitated (see the condition) and can't move or speak. The creature automatically fails Strength and Dexterity saving throws. Attack rolls against the creature have advantage. Any attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.</td>
        </tr>
        <tr>
          <td>Petrified</td>
          <td>A petrified creature is transformed, along with any nonmagical object it is wearing or carrying, into a solid inanimate substance (usually stone). Its weight increases by a factor of ten, and it ceases aging. The creature is incapacitated (see the condition), can't move or speak, and is unaware of its surroundings. Attack rolls against the creature have advantage. The creature automatically fails Strength and Dexterity saving throws. The creature has resistance to all damage. The creature is immune to poison and disease, although a poison or disease already in its system is suspended, not neutralized.</td>
        </tr>
        <tr>
          <td>Poisoned</td>
          <td>A poisoned creature has disadvantage on attack rolls and ability checks.</td>
        </tr>
        <tr>
          <td>Prone</td>
          <td>A prone creature's only movement option is to crawl, unless it uses half its movement to stand, thereby ending the condition. The creature has disadvantage on attack rolls. An attack roll against the creature has advantage if the attacker is within 5 feet of the creature. Otherwise, the attack roll has disadvantage.</td>
        </tr>
         <tr>
          <td>Restrained</td>
          <td>A restrained creature's speed becomes 0, and it can't benefit from any bonus to its speed. Attack rolls against the creature have advantage, and the creature's attack rolls have disadvantage. The creature has disadvantage on Dexterity saving throws.</td>
        </tr>
         <tr>
          <td>Stunned</td>
          <td>A stunned creature is incapacitated (see the condition), can't move, and can speak only falteringly. The creature automatically fails Strength and Dexterity saving throws. Attack rolls against the creature have advantage.</td>
        </tr>
         <tr>
          <td>Unconscious</td>
          <td>An unconscious creature is incapacitated (see the condition), can't move or speak, and is unaware of its surroundings The creature drops whatever it's holding and falls prone. The creature automatically fails Strength and Dexterity saving throws. Attack rolls against the creature have advantage. Any attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.</td>
        </tr>
      </tbody>
    </table>
  `;
  return conditions;
};
