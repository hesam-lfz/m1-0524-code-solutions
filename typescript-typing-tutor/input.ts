const sentence = 'grumpy wizards make toxic brew';

const $spans = document.querySelectorAll('span');
if (!$spans) throw new Error('$span query failed');

console.log($spans);
let currPos = 0;
$spans[currPos].classList.add('current-letter');

function typingTest(event: Event): void {
  const typedChar = (event as KeyboardEvent).key;
  const targetChar = sentence[currPos];
  console.log('event', event);
  console.log('typed char', typedChar);
  console.log('target char', targetChar);

  if (typedChar === targetChar) {
    $spans[currPos].className = 'correct';
    $spans[currPos].classList.remove('current-letter');
    currPos += 1;
    $spans[currPos].classList.add('current-letter');
  } else {
    $spans[currPos].className = 'wrong current-letter';
  }
}

document.body.addEventListener('keydown', typingTest);
