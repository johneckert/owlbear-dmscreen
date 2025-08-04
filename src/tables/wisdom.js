export const wisdom = () => {
  const wisdom = document.createElement('article');
  wisdom.classList.add('card', 'half-screen');
  wisdom.innerHTML = `
    <h2>Wisdom</h2>
    <h3>Insight / Perception</h3>
    <p>Insight measures a character's ability to read body language, understand motives, and discern hidden truths. The DM might also call for an Insight check when a character attempts to determine if someone is lying.</p>
    <p>Perception checks measure a character's ability to notice things in their environment, such as hidden objects, creatures, or traps. The DM might call for a Perception check when a character is actively looking for something or when they are surprised by an event.</p>
    <table class="text">
      <thead>
        <tr>
          <th>Difficulty</th>
          <th>Examples</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Easy</td>
          <td>Read a child, prominent landmark, or structure; Hear the far-off sound of thunder signaling a coming storm.</td>
        </tr>
        <tr>
          <td>Moderate</td>
          <td>Discern the leader of a group; the intended message of a non-verbal talk shot a natural-obscured object or feature: a conversation in the next room.</td>
        </tr>
        <tr>
          <td>Hard</td>
          <td>Guess at the enemy's next action; Well-hidden object or feature; A hushed conversation through a heavy door.</td>
        </tr>
        <tr>
          <td>Very Hard</td>
          <td>Near invisible object or feature; Read the lips of a creature you can see but not hear.</td>
        </tr>
      </tbody>
    </table>
    <h3>Survival</h3>
    <p>Survival checks measure a character's ability to navigate and thrive in the wilderness. This includes finding food and water, identifying safe shelter, and tracking creatures.</p>
    <table class="text">
      <thead>
        <tr>
          <th>Difficulty</th>
          <th>Examples</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Easy</td>
          <td>Well-worn trail in a forest; Tracks of a creature through snow or mud; Forage in a plentiful area; Navigate on a clear night.</td>
        </tr>
        <tr>
          <td>Moderate</td>
          <td>Abandoned or forgotten trail; Track a creature through a forest; Forage in a sparse area; Navigate on a cloudy night; Predict an oncoming storm; Identify the signs of nearby creatures.</td>
        </tr>
        <tr>
          <td>Hard</td>
          <td>Track over barren terrain; Forage in a harsh area; Navigate through an alien area on a cloudy night; Predict tomorrow's weather.</td>
        </tr>
        <tr>
          <td>Very Hard</td>
          <td>Track after rainfall; Navigate an alien area on a stormy night.</td>
        </tr>
      </tbody>
    </table>
    <h3>Animal Handling / Medicine / Other</h3>
    <p>Animal Handling checks measure a character's ability to interact with and train animals.
    <p>Medicine checks measure a character's ability to diagnose and treat ailments, stabilize dying creatures, and perform first aid.</p>
    <table class="text">
      <thead>
        <tr>
          <th>Difficulty</th>
          <th>Examples</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Easy</td>
          <td>Domesticated animal; Stabilize a dying creature outside of combat; Common ailment.</td>
        </tr>
        <tr>
          <td>Moderate</td>
          <td>Wild but otherwise peaceful animal; Diagnose a minor injury or illness; Stabilize a creature in combat.</td>
        </tr>
        <tr>
          <td>Hard</td>
          <td>Intuit a hostile animal's next action; Control an untrained mount; Rare ailment.</td>
        </tr>
        <tr>
          <td>Very Hard</td>
          <td>Calm a dangerous wild animal; Diagnose magical and divine ailments.</td>
        </tr>
      </tbody>
    </table>
  `;
  return wisdom;
};
