// listen submit
document.getElementById('loan-form').addEventListener('submit',calculateResults);

// call the function
function calculateResults(e){

  // UI variables
  const amount=document.getElementById('amount');
  const interest=document.getElementById('interest');
  const years=document.getElementById('years');
  const monthlyPayment=document.getElementById('monthly-payment');
  const totalPayment=document.getElementById('total-payment');
  const totalInterest=document.getElementById('total-interest');

  const principal=parseFloat(amount.value);
  const calculatedInterest=parseFloat(interest.value) /100/12;
  const calculatedPayments=parseFloat(years.value) * 12;

  // compute monthly payments
  const x= Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly=(principal*x*calculatedInterest)/(x-1);

  if (isFinite(monthly)) {
    monthlyPayment.value= monthly.toFixed(2);
    totalPayment.value= (monthly * calculatedPayments).toFixed(2);
    totalInterest.value=((monthly *calculatedPayments)-principal).toFixed(2);
  }else {
    showError('PLEASE CHECK YOUR NUMBER!!!');
  }

  e.preventDefault();
}
// show error
function showError(error){
  // create a div element
  const errorDiv= document.createElement('div');

// Get elements
  const card= document.querySelector('.container');
  const heading=document.querySelector('.heading')

  // add a class
  errorDiv.className='alert';
  // add a text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // insert error above heading
  card.insertBefore(errorDiv, heading);

  // clear error after 3 seconds
  setTimeout(clearError, 3000);
}
// clear error
function clearError(){
  document.querySelector('.alert').remove();
}
