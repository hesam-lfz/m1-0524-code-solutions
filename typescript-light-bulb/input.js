let clicks = 0;
const $lightBulbButton = document.querySelector('.button');
const $containerBackground = document.querySelector('.container');
if (!$lightBulbButton || !$containerBackground)
  throw new Error('The $lightBulbButton and $containerBackground query failed');
function clicker(event) {
  clicks++;

  if (clicks % 2 === 0) {
    $lightBulbButton.className = 'button off';
    $containerBackground.className = 'container offBG';
  } else {
    $lightBulbButton.className = 'button on';
    $containerBackground.className = 'container onBG';
  }
}
$lightBulbButton.addEventListener('click', clicker);
