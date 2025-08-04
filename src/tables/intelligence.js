export const intelligence = () => {
  const intelligence = document.createElement('article');
  intelligence.classList.add('card', 'half-screen');
  intelligence.innerHTML = `
    <h2>Intelligence</h2>
     <table class="text">
      <thead>
        <tr>
          <th>Skill</th>
          <th>Description</th>
        </tr>
          <tr>
          <th>History</th>
          <th>historical events, old kingdoms, legendary people.</th>
        </tr>
          <tr>
          <th>Nature</th>
          <th>Terrain, plants and animals.</th>
        </tr>
          <tr>
          <th>Religion</th>
          <th>Deities, rites and prayers, holy symbols.</th>
        </tr>
        <tr>
          <th>Difficulty</th>
          <th>Examples</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Easy</td>
          <td>Recall widely known information. (common)</td>
        </tr>
        <tr>
          <td>Moderate</td>
          <td>Recall more obscure or specific information. (uncommon)</td>
        </tr>
        <tr>
          <td>Hard</td>
          <td>Recall truly esoteric or precise information. (rare)</td>
        </tr>
        <tr>
          <td>Very Hard</td>
          <td>Recall information that is known only by a privileged few. (very rare)</td>
        </tr>
      </tbody>
    </table>
    <h3>Investigation</h3>
    <p>Identity a trap or a secret or coded message; Communicate a idea with an creature you don't share a language with; Discover the true nature of an illusion.</p>
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
          <td>Obvious trap or a secret; Simple idea with an intelligent creature; Low-level illusion.</td>
        </tr>
        <tr>
          <td>Moderate</td>
          <td>Typical trap; Determine time or cause of death of a recently deceased creature; Estimate the material worth of an item; Mid-level illusion.</td>
        </tr>
        <tr>
          <td>Hard</td>
          <td>Well-hidden trap, object, or area; Forge a document or identity such a document; High-level illusion.</td>
        </tr>
        <tr>
          <td>Very Hard</td>
          <td>Magically-hidden trap, object, or area; Discern the purpose and process of a complicated device or system; Determine the integrity of a structure, construct, or formation and identity any exploitable weak points.</td>
        </tr>
      </tbody>
    </table>
  `;
  return intelligence;
};
