interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLTextAreaElement;
}

const $contactForm = document.querySelector('#contact-form') as HTMLFormElement;

if (!$contactForm) throw new Error('$contactForm does not exist');
$contactForm.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  const $contactFormElements = $contactForm.elements as FormElements;
  console.log({
    name: $contactFormElements.name.value,
    email: $contactFormElements.email.value,
    message: $contactFormElements.message.value,
  });
  $contactForm.reset();
});
