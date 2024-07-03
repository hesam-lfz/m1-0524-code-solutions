'use strict';
const handleFocus = (event) => {
  const $eventTarget = event.target;
  console.log('focus', 'name', $eventTarget.name);
};
const handleBlur = (event) => {
  const $eventTarget = event.target;
  console.log('blur', 'name', $eventTarget.name);
};
const handleInput = (event) => {
  const $eventTarget = event.target;
  console.log('blur', 'name', $eventTarget.name, 'value', $eventTarget.value);
};
const events = {
  focus: handleFocus,
  blur: handleBlur,
  input: handleInput,
};
const $form = document.querySelector('#contact-form');
if (!$form) throw new Error('$form does not exist');
const $formElements = $form.elements;
const $userNameElement = $formElements['name'];
if (!$userNameElement) throw new Error('$userNameElement does not exist');
const $userEmailElement = $formElements['email'];
if (!$userEmailElement) throw new Error('$userEmailElement does not exist');
const $userMessageElement = $formElements['message'];
if (!$userMessageElement) throw new Error('$userMessageElement does not exist');
[$userNameElement, $userEmailElement, $userMessageElement].forEach((e) => {
  for (let userEvent in events)
    e.addEventListener(userEvent, events[userEvent]);
});
console.log($formElements);
