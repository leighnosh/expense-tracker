document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('loginForm');

  form.addEventListener('submit', async function (event) {
    event.preventDefault();

    const email = document.getElementById('inputEmail').value;
    const password = document.getElementById('inputPassword').value;

    if (email.trim() === '' || password.trim() === '') {
      alert('Please fill in all fields');
      return;
    }

    try {
      const response = await axios.post('/users/login', { email, password });

      if (response.data.userExists && response.data.passwordMatch) {
        alert('Login successful!');
        // Redirect
        window.location.href = '/';
      }
    } catch (error) {
      console.error(error.response.data.message);
      alert(error.response.data.message);
    }
  });
});
