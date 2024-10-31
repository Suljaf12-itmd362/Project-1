document.querySelector('form').addEventListener('submit', function (e) {
  const email = document.getElementById('email').value;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    e.preventDefault();
  }
});