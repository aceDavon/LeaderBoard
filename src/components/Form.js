const Form = () => {
  const form = document.createElement('form');

  form.innerHTML = `
  <input type="text" name="name" placeholder="Your name" />
  <input type="text" name="score" placeholder="Your score" />
  <button type="button">Submit</button>
  `;

  return form;
};

export default Form;
