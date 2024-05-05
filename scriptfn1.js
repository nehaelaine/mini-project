const foodDonationsTable = document.getElementById('food-donations');

// Replace with your actual logic to fetch donation data from a database or API
const donationData = [
  {
    donorLocation: 'Kochi, India',
    foodType: 'Mineral Water',
    quantity: 20,
    expiryDate: '2025-07-15',
  },
  {
    donorLocation: 'Bangalore, India',
    foodType: 'Noodles',
    quantity: 50,
    expiryDate: '2025-08-31',
  },
  // Add more donation data objects here
];

function createDonationTableRow(donation) {
  const tableRow = document.createElement('tr');

  const locationCell = document.createElement('td');
  locationCell.textContent = donation.donorLocation;
  tableRow.appendChild(locationCell);

  const foodTypeCell = document.createElement('td');
  foodTypeCell.textContent = donation.foodType;
  tableRow.appendChild(foodTypeCell);

  const quantityCell = document.createElement('td');
  quantityCell.textContent = donation.quantity;
  tableRow.appendChild(quantityCell);

  const expiryDateCell = document.createElement('td');
  expiryDateCell.textContent = donation.expiryDate;
  tableRow.appendChild(expiryDateCell);

  return tableRow;
}

donationData.forEach(donation => {
  const tableRow = createDonationTableRow(donation);
  foodDonationsTable.getElementsByTagName('tbody')[0].appendChild(tableRow);
});
