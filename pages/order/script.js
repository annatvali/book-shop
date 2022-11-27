// Make delivey date not to be earlier than the next day

const date = document.getElementById('deliveryDate');
const today = new Date();
deliveryDate = date.value =
  today.getFullYear() +
  '-' +
  (today.getMonth() + 1) +
  '-' +
  (today.getDate() + 1);
date.setAttribute('min', deliveryDate);

// Limit selected checkboxes
const checkboxItems = document.querySelectorAll('.gift');
const limit = 2;

checkboxItems.forEach((i) => {
  i.addEventListener('click', limitSelect);
});
function limitSelect(e) {
  const checkedInputs = document.querySelectorAll('.gift:checked');
  if (checkedInputs.length > limit) {
    e.preventDefault();
  }
}
// toggle sumbit button state

let submitBtn = document.getElementById('btn-complete');
// submitBtn.disabled = true;

// create popup modal content
const body = document.getElementById('body');
const street = document.getElementById('street');
const houseNumber = document.getElementById('houseNumber');
const flatNumber = document.getElementById('flatNumber');
const userName = document.getElementById('userName');
const surname = document.getElementById('surname');

const popupModal = document.createElement('div');
popupModal.className = 'popup';
const overlay = document.createElement('div');
overlay.className = 'overlay';
const content = document.createElement('div');
content.className = 'content';
const closeBtn = document.createElement('div');
closeBtn.className = 'closeBtn';
closeBtn.innerHTML = '&times';

const modalTitle = document.createElement('h4');
modalTitle.className = 'modalTitle';
modalTitle.innerText = 'Order success';
const orderDesctioption = document.createElement('p');
orderDesctioption.className = 'orderDescription';
// orderDesctioption.innerHTML = `The delivery address is: ${street.value} ${houseNumber.value} ${flatNumber.value} `;
const customerName = document.createElement('p');
customerName.className = 'customerName';
// customerName.innerHTML = `Customer: ${userName.value} ${surname.value}`;

body.appendChild(popupModal);
popupModal.appendChild(overlay);
popupModal.appendChild(content);
content.appendChild(closeBtn);
content.appendChild(modalTitle);
content.appendChild(orderDesctioption);
content.appendChild(customerName);

function openModal(event) {
  event.preventDefault();
  // popupModal.classList.add('active');
  if (
    userName.value != '' &&
    surname.value != '' &&
    street.value != '' &&
    houseNumber.value != '' &&
    flatNumber.value != ''
  ) {
    submitBtn.disabled = false;
    popupModal.classList.add('active');
    orderDesctioption.innerHTML = `The delivery address is: ${street.value} Street, House ${houseNumber.value}, Flat ${flatNumber.value} `;
    customerName.innerHTML = `Customer: ${userName.value} ${surname.value}`;
  } else {
    popupModal.classList.remove('active');
    return alert('please, fill in the required fields');
  }

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}
function closeModal() {
  popupModal.classList.remove('active');
}
submitBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
