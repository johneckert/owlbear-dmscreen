export const strength = () => {
  const strength = document.createElement('article');
  strength.classList.add('card', 'half-screen');
  strength.innerHTML = `
    <h2>Strength</h2>
    <h3>Athletics</h3>
    <p>Measures physical prowess in activities such as climbing,
    jumping, and swimming. The DM might also call for an Athletics check when a character attempts
    to grapple a creature or perform some other action.</p>
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
          <td>Normal wall; Tread in rough condition; Water; Clear obstacle while jumping.</td>
        </tr>
        <tr>
          <td>Moderate</td>
          <td>Rope from overhang; Swim in rough water.</td>
        </tr>
        <tr>
          <td>Hard</td>
          <td>Wall with rare handholds; Catch on a rope; Violent water.</td>
        </tr>
        <tr>
          <td>Very Hard</td>
          <td>Slippery wall; Stormy waters; Clear obstacle while jumping.</td>
        </tr>
      </tbody>
    </table>
    <h3>Feats of Stength</h3>
    <p>Any attempt to lift, push, pull, or break something, to force your body through a space, or to otherwise apply brute force to a situation.</p>
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
          <td>Stuck/broken door; Weak bindings; Pull stuck wedge object loose.</td>
        </tr>
        <tr>
          <td>Moderate</td>
          <td>Reinforced wooden door; Hang on a wagon.</td>
        </tr>
        <tr>
          <td>Hard</td>
          <tdHeavy locked/barred door; Topple stone statue; Pull stuck wagon.</td>
        </tr>
        <tr>
          <td>Very Hard</td>
          <td>Heavy reinforced door; Hold door against water.</td>
        </tr>
      </tbody>
    </table>
  `;
  return strength;
};
