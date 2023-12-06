
//text-animation start---------------------------
document.addEventListener("DOMContentLoaded", function() {
    const statements = document.querySelectorAll('.statement');
    let index = 0;
  
    function toggleStatements() {
      statements.forEach((statement, i) => {
        if (i === index) {
          statement.style.display = 'block';
        } else {
          statement.style.display = 'none';
        }
      });
  
      index = (index + 1) % statements.length;
    }
  
    setInterval(toggleStatements, 1000); 
  });

 //text-animation end------------------------------------- 

 //validation-------------------------

 
 function validateForm(event) {
      // Prevent the form from submitting by default
      event.preventDefault();

      // Get form input values
      var nameInput = document.getElementById('name');
      var contactInput = document.getElementById('contact');

      // Get error spans
      var nameError = document.getElementById('nameSpan');
      var contactError = document.getElementById('contactSpan');

      // Reset previous error messages
      nameError.textContent = '';
      contactError.textContent = '';

      // Validate Name
      if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required.';
        nameInput.focus();
        return false;
      }

      // Validate Contact Number
      if (!/^\d{10}$/.test(contactInput.value)) {
        contactError.textContent = 'Invalid contact number. Please enter a 10-digit number.';
        contactInput.focus();
        return false;
      }

      // If all validations pass, you can submit the form or perform additional actions
      alert('Form submitted successfully!');
    }