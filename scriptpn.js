// Replace with your actual logic to fetch donation data from a database or API
const donationCounts = {
    food: 100,
    clothing: 50,
    // Add more donation categories with counts here
    toys: 25,
  };
  
  document.getElementById('food-donation-count').textContent = donationCounts.food;
  document.getElementById('clothing-donation-count').textContent = donationCounts.clothing;
  // Update other donation category counts based on your data source
  
  // Add logic to handle clicks on category links (replace with actual navigation)
  const donationCategoryLinks = document.querySelectorAll('.donation-categories a');
  
  donationCategoryLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent default link behavior (may not be necessary if using a framework for routing)
      console.log('Clicked on category:', link.textContent);
      // Replace with your actual navigation logic (e.g., redirect to specific category page)
    });
  });
  