document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('signupForm');

  function clearForm() {
    document.getElementById('inputName').value = '';
    document.getElementById('inputEmail').value = '';
    document.getElementById('inputPassword').value = '';
  }

  clearForm();

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('inputName').value;
    const email = document.getElementById('inputEmail').value;
    const password = document.getElementById('inputPassword').value;

    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
      alert('Please fill in all fields');
      return;
    }

    if (!validateEmail(email)) {
      alert('Please enter a valid email address');
      return;
    }

    const signupData = {
      name: name,
      email: email,
      password: password,
    };

    axios
      .post('users/signup', signupData)
      .then(function (response) {
        console.log(response.data);
        alert('Signed up successfully!');
        clearForm();
      })
      .catch(function (error) {
        console.error(error);
        alert(error.response.data.message);
      });
  });

  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
});
