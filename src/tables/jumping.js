export const jumping = () => {
  const jumping = document.createElement('article');
  jumping.classList.add('card');
  jumping.innerHTML = `
    <h2>Jumping</h2>
    <div class="block">
      <h4>Long Jump</h4>
      <p>Move 10+ feet, and then jump a number of feet up to your Strength score. When you make a standing long jump, you can leap only half that distance.</p>
    </div>
    <div class="block">
      <h4>High Jump</h4>
      <p>Move 10+ feet, and then jump a number of feet equal to 3 + your Strength modifier. When you make a standing high jump, you can jump only half that distance.</p>
    </div>  
   
  `;
  return jumping;
};
