    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    // Error message elements
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const subjectError = document.getElementById('subject-error');
    const messageError = document.getElementById('message-error');

    // Function to display error
    function displayError(element, errorElement, message) {
        element.classList.add('invalid');
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }

    // Function to hide error
    function hideError(element, errorElement) {
        element.classList.remove('invalid');
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }

    // Email validation regex (a common, simple one)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    form.addEventListener('submit', function(event) {
        let isValid = true;

        // Name validation
        if (nameInput.value.trim() === '') {
            displayError(nameInput, nameError, 'Name is required.');
            isValid = false;
        } else {
            hideError(nameInput, nameError);
        }

        // Email validation
        if (emailInput.value.trim() === '') {
            displayError(emailInput, emailError, 'Email is required.');
            isValid = false;
        } else if (!emailRegex.test(emailInput.value.trim())) {
            displayError(emailInput, emailError, 'Please enter a valid email address.');
            isValid = false;
        } else {
            hideError(emailInput, emailError);
        }

        // Subject validation
        if (subjectInput.value.trim() === '') {
            displayError(subjectInput, subjectError, 'Subject is required.');
            isValid = false;
        } else {
            hideError(subjectInput, subjectError);
        }

        // Message validation
        if (messageInput.value.trim() === '') {
            displayError(messageInput, messageError, 'Message is required.');
            isValid = false;
        } else {
            hideError(messageInput, messageError);
        }

        // If not valid, prevent form submission
        if (!isValid) {
            event.preventDefault(); // Stop the form from submitting
        } else {
            // Optional: If valid, you can show a success message or proceed with submission
            // For now, we'll just log and let it *attempt* to submit (since action="#" doesn't do anything)
            console.log('Form is valid! Ready to submit.');
            // You might want to prevent default here too, if you're using AJAX for submission
            // event.preventDefault();
            alert('Form submitted successfully! (This is a demo. No actual email sent.)');
        }
    });

    // Add real-time validation feedback (optional but good UX)
    nameInput.addEventListener('input', () => {
        if (nameInput.value.trim() !== '') {
            hideError(nameInput, nameError);
        }
    });

    emailInput.addEventListener('input', () => {
        if (emailInput.value.trim() !== '' && emailRegex.test(emailInput.value.trim())) {
            hideError(emailInput, emailError);
        }
    });

    subjectInput.addEventListener('input', () => {
        if (subjectInput.value.trim() !== '') {
            hideError(subjectInput, subjectError);
        }
    });

    messageInput.addEventListener('input', () => {
        if (messageInput.value.trim() !== '') {
            hideError(messageInput, messageError);
        }
    });
