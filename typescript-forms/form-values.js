'use strict';
const $contactForm = document.querySelector('#contact-form');
if (!$contactForm) throw new Error('$contactForm does not exist');
$contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const $contactFormElements = $contactForm.elements;
  console.log({
    name: $contactFormElements.name.value,
    email: $contactFormElements.email.value,
    message: $contactFormElements.message.value,
  });
  $contactForm.reset();
});
