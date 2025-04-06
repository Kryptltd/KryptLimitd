document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form fields
    const firstName = document.getElementById('ijowk-6').value.trim();
    const lastName = document.getElementById('indfi-4').value.trim();
    const email = document.getElementById('ipmgh-6').value.trim();
    const phoneNumber = document.getElementById('imgis-5').value.trim();
    const message = document.getElementById('i5vyy-6').value.trim();
    const formMessage = document.getElementById('formMessage');

    // Check if all fields are filled
    if (!firstName || !lastName || !email || !phoneNumber || !message) {
      formMessage.textContent = 'Please fill out all fields.';
      formMessage.style.color = 'red';
      return;
    }

    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      formMessage.textContent = 'Please enter a valid email address.';
      formMessage.style.color = 'red';
      return;
    }

    // Prepare form data
    const formData = {
      FirstName: firstName,
      LastName: lastName,
      Email: email,
      PhoneNumber: phoneNumber,
      Message: message
    };

    // Send data to server using Fetch API
    fetch('/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        formMessage.textContent = 'Message sent successfully!';
        formMessage.style.color = 'green';
        document.getElementById('contactForm').reset(); // Reset form
      } else {
        formMessage.textContent = 'Failed to send message. Please try again.';
        formMessage.style.color = 'red';
      }
    })
    .catch(error => {
        formMessage.textContent = 'An error occurred. Please try again later.';
        formMessage.style.color = 'red'; // Fixed: Correct element and complete assignment
        console.error('Error:', error);
      });
  });