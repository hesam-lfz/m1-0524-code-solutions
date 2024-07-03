interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLTextAreaElement;
}

const handleFocus = (event: Event): void => {
  const $eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log('focus', 'name', $eventTarget.name);
};

const handleBlur = (event: Event): void => {
  const $eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log('blur', 'name', $eventTarget.name);
};

const handleInput = (event: Event): void => {
  const $eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log('blur', 'name', $eventTarget.name, 'value', $eventTarget.value);
};

const events: { [key: string]: EventListenerOrEventListenerObject } = {
  focus: handleFocus,
  blur: handleBlur,
  input: handleInput,
};

const $form = document.querySelector('#contact-form') as HTMLFormElement;

if (!$form) throw new Error('$form does not exist');

const $formElements = $form.elements as FormElements;

const $userNameElement = $formElements.name as HTMLInputElement;
if (!$userNameElement) throw new Error('$userNameElement does not exist');
const $userEmailElement = $formElements.email as HTMLInputElement;
if (!$userEmailElement) throw new Error('$userEmailElement does not exist');
const $userMessageElement = $formElements.message as HTMLTextAreaElement;
if (!$userMessageElement) throw new Error('$userMessageElement does not exist');
[$userNameElement, $userEmailElement, $userMessageElement].forEach((e) => {
  for (const userEvent in events)
    e.addEventListener(userEvent, events[userEvent]);
});

console.log($formElements);
