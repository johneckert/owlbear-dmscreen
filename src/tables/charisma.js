export const charisma = () => {
  const charisma = document.createElement('article');
  charisma.classList.add('card', 'half-screen');
  charisma.innerHTML = `
    <h2>Charisma</h2>
    <h3>Deception</h3>
    <p>Deception checks measure a character's ability to deceive others through lies, misdirection, or disguise. The DM might call for a Deception check when a character attempts to con someone, adopt a disguise, or otherwise mislead others.</p>
    <table class="text">
      <thead>
        <tr>
          <th>Description</th>
          <th>Examples</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Contest vs. Insight</td>
          <td>Fast-talk or con someone, adopt a disguise or impersonate another creature, tell a convincing lie or otherwise hide your true intentions.</td>
        </tr>
      </tbody>
    </table>
    <h3>Intimidation</h3>
    <p>Intimidation checks measure a character's ability to influence others through threats, coercion, or displays of strength. The DM might call for an Intimidation check when a character attempts to scare someone, assert dominance, or otherwise force their will upon others.</p>
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
          <td>Scare a spineless noble in to handing over their coin purse.</td>
        </tr>
        <tr>
          <td>Moderate</td>
          <td>Pry information out of an uncooperative prisoner, convince street thugs to back down from a confrontation.</td>
        </tr>
        <tr>
          <td>Hard</td>
          <td>Advise a guard that it might be best to look the other wav this time around, coerce an official in to signing a document.</td>
        </tr>
        <tr>
          <td>Very Hard</td>
          <td>Frighten a creature larger than you, causing it to flee; Stop an agitated mob in their tracks.</td>
        </tr>
      </tbody>
    </table>
    <h3>Performance</h3>
    <p>Performance checks measure a character's ability to entertain or impress others through artistic expression, such as music, dance, or storytelling. The DM might call for a Performance check when a character attempts to captivate an audience, convey emotion, or create a memorable experience.</p>
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
          <td>Routine performance such as telling a story in a tavern or around a campfire.</td>
        </tr>
        <tr>
          <td>Moderate</td>
          <td>Professional performance such as an inspiring speech or an impressive musical display which may attract the attention of a local troupe and lead to regional fame.</td>
        </tr>
        <tr>
          <td>Hard</td>
          <td>Memorable performance which may attract the attention of a local patron and lead to national fame.</td>
        </tr>
        <tr>
          <td>Very Hard</td>
          <td>Extraordinary performance which may attract the attention of distant patrons and even extra-planar beings.</td>
        </tr>
      </tbody>
    </table>
     <h3>Persuasion</h3>
    <p>Persuasion checks measure a character's ability to convince others through argument, charm, or social graces. The DM might call for a Persuasion check when a character attempts to sway someone's opinion, negotiate a deal, or influence a group.</p>
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
          <td>Convince the mayor to allow your party to help calm a distraught person.</td>
        </tr>
        <tr>
          <td>Moderate</td>
          <td>Persuade a group of highway thieves to leave in peace. Convince a friendly acquaintance that you know best.</td>
        </tr>
        <tr>
          <td>Hard</td>
          <td>Convince a chamberlain to let your party see the king, inspire or rally a crown of townsfolk negotiate a peace between warring tribes.</td>
        </tr>
        <tr>
          <td>Very Hard</td>
          <td>Convince a chamberlain to let your party see the king, inspire or rally a crown of townsfolk negotiate a peace between warring tribes.</td>
        </tr>
      </tbody>
    </table>
  `;
  return charisma;
};
