const foodDonationForm = document.getElementById('food-donation-form');
const donationMessage = document.getElementById('donation-message');

foodDonationForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Basic form validation (replace with more robust validation)
  const donorLocation = document.getElementById('donor-location').value;
  const pickupDate = document.getElementById('pickup-date').value;
  const expiryDate = document.getElementById('expiry-date').value;
  const foodType = document.getElementById('food-type').value;
  const foodQuantity = document.getElementById('food-quantity').value;

  if (!donorLocation || !pickupDate || !expiryDate || !foodType || !foodQuantity) {
    donationMessage.textContent = 'Please fill out all required fields.';
    return;
  }

  // Simulate form submission (replace with your actual submission logic)
  donationMessage.textContent = 'Thank you for your donation!';
  console.log('Food donation details:', {
    donorLocation,
    pickupDate,
    expiryDate,
    foodType,
    foodQuantity,
  }); // Log donation details to console
});



  