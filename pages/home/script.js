const body = document.getElementById('body');

const wrapper = document.querySelector('div');
wrapper.classList.add('wrapper', 'mainBackground');
body.appendChild(wrapper);

// Create header doc fragment
const header = document.createElement('header');
header.classList.add('header');
const headerFragment = document.createDocumentFragment();

const pageHeading = document.createElement('h1');
pageHeading.textContent = "Welcome to Anna's Book Shop";
pageHeading.classList.add('header-title');

header.appendChild(pageHeading);
headerFragment.appendChild(header);
wrapper.appendChild(header);

//Create catalog from books.js data start

const booksJSON = fetch('./books.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    books = data;
    // create shopping bag seciton -- start

    // selectedBooksList = document.querySelectorAll('.totalPrice');

    const sectionShopping = document.createElement('section');
    wrapper.appendChild(sectionShopping);

    const shoppingModal = document.createElement('div');
    shoppingModal.className = 'shoppingModal';
    body.appendChild(shoppingModal);

    const shoppingModalOverlay = document.createElement('div');
    shoppingModalOverlay.className = 'overlay';
    shoppingModal.appendChild(shoppingModalOverlay);

    const shoppingModalContent = document.createElement('div');
    shoppingModalContent.className = 'content';
    shoppingModal.appendChild(shoppingModalContent);

    const shoppingModalCloseBtn = document.createElement('div');
    shoppingModalCloseBtn.className = 'closeBtn';
    shoppingModalCloseBtn.innerHTML = '&times';
    shoppingModalContent.appendChild(shoppingModalCloseBtn);

    const confirmBtn = document.createElement('button');
    confirmBtn.className = 'confirmBtn';
    confirmBtn.textContent = 'confirm order';
    shoppingModalContent.appendChild(confirmBtn);

    function confirmHendler() {
      location.href = '../order/index.html';
    }
    confirmBtn.addEventListener('click', confirmHendler);

    shoppingBtn = document.createElement('button');
    shoppingBtn.textContent = `Shopping Bag `;
    shoppingBtn.className = 'shoppingBtn';
    sectionShopping.appendChild(shoppingBtn);

    function openModal() {
      shoppingModal.classList.add('active');
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
    function closeModal() {
      shoppingModal.classList.remove('active');
    }
    shoppingBtn.addEventListener('click', openModal);
    shoppingModalCloseBtn.addEventListener('click', closeModal);

    shoppingBtn.addEventListener('click', openModal);

    // create shopping bag seciton -- end
    const catalogueFragment = document.createDocumentFragment();
    const booksCatalogue = document.createElement('section');
    booksCatalogue.classList.add('books-catalogue');
    books.forEach((book) => {
      const bookCard = document.createElement('div');
      bookCard.classList.add('book-card');
      booksCatalogue.appendChild(bookCard);

      const bookImgWrapper = document.createElement('div');
      bookImgWrapper.className = 'book-card__img-wrapper';
      bookCard.appendChild(bookImgWrapper);

      const bookImg = document.createElement('img');
      bookImg.className = 'book-card__img';
      bookImg.src = `${book.imageLink}`;
      // bookImg.src = book.imageLink;
      bookImgWrapper.appendChild(bookImg);

      const bookInfo = document.createElement('div');
      bookInfo.className = 'book-card__info';
      bookCard.appendChild(bookInfo);

      const bookTitle = document.createElement('h2');
      bookTitle.className = 'book-card__title';
      bookTitle.innerText = book.title;
      bookInfo.appendChild(bookTitle);

      const bookAuthor = document.createElement('p');
      bookAuthor.className = 'book-card__author';
      bookAuthor.innerText = book.author;
      bookInfo.appendChild(bookAuthor);

      const showMore = document.createElement('button');
      showMore.className = 'btn-showmore';
      showMore.textContent = 'show more';
      bookInfo.appendChild(showMore);

      const orderDetails = document.createElement('div');
      orderDetails.className = 'order-details';
      bookInfo.appendChild(orderDetails);

      const inputLabel = document.createElement('label');
      inputLabel.setAttribute('for', 'quantity');
      orderDetails.appendChild(inputLabel);

      const inputQuantity = document.createElement('input');
      inputQuantity.id = 'quantity';
      inputQuantity.name = 'quantity';
      inputQuantity.type = 'number';
      inputQuantity.min = '1';
      inputQuantity.placeholder = 'choose quantity';
      inputLabel.appendChild(inputQuantity);

      const bookPrice = document.createElement('div');
      bookPrice.className = 'order-details__book-price';
      bookPrice.innerHTML = `${book.price} $`;
      orderDetails.appendChild(bookPrice);

      const btnAdd = document.createElement('button');
      btnAdd.innerText = 'add to bag';
      btnAdd.className = 'btn-add';
      bookInfo.appendChild(btnAdd);

      function addHendler() {
        const addedBookInfo = document.createElement('div');
        addedBookInfo.className = 'addedBookInfo';
        shoppingModalContent.appendChild(addedBookInfo);

        const addedBookImg = document.createElement('img');
        addedBookImg.className = 'addedBookImg';
        addedBookImg.src = book.imageLink;
        addedBookInfo.appendChild(addedBookImg);

        const addedBookWrapper = document.createElement('div');
        addedBookWrapper.className = 'addedBookWrapper';
        addedBookInfo.appendChild(addedBookWrapper);

        const deleteBookBtn = document.createElement('div');
        deleteBookBtn.innerHTML = '&times';
        deleteBookBtn.className = 'deleteBookBtn';
        addedBookInfo.appendChild(deleteBookBtn);

        addedBookTitle = document.createElement('div');
        addedBookTitle.className = 'addedBookTitle';
        addedBookTitle.textContent = book.title;
        addedBookWrapper.appendChild(addedBookTitle);

        const addedBookAuthor = document.createElement('div');
        addedBookAuthor.className = 'addedBookAuthor';
        addedBookAuthor.textContent = book.author;
        addedBookWrapper.appendChild(addedBookAuthor);

        const addedBookPrice = document.createElement('div');
        addedBookPrice.className = 'addedBookPrice';
        addedBookPrice.textContent = `${book.price} $`;
        addedBookInfo.appendChild(addedBookPrice);

        function deleteBookHendler() {
          addedBookInfo.style.display = 'none';
        }
        deleteBookBtn.addEventListener('click', deleteBookHendler);
      }

      btnAdd.addEventListener('click', addHendler);
      wrapper.appendChild(booksCatalogue);
      // create popup modal content
      const popupModal = document.createElement('div');
      popupModal.className = 'popup';
      const overlay = document.createElement('div');
      overlay.className = 'overlay';
      const content = document.createElement('div');
      content.className = 'content';
      const closeBtn = document.createElement('div');
      closeBtn.className = 'closeBtn';
      closeBtn.innerHTML = '&times';
      const modalImg = document.createElement('img');
      modalImg.className = 'modal-img';
      modalImg.src = book.imageLink;
      const modalTitle = document.createElement('h4');
      modalTitle.className = 'modalTitle';
      modalTitle.innerText = book.title;
      const bookDesctioption = document.createElement('p');
      bookDesctioption.className = 'bookDescription';
      bookDesctioption.textContent = book.description;

      body.appendChild(popupModal);
      popupModal.appendChild(overlay);
      popupModal.appendChild(content);
      content.appendChild(closeBtn);
      content.appendChild(modalImg);
      content.appendChild(modalTitle);
      content.appendChild(bookDesctioption);

      function openModal() {
        popupModal.classList.add('active');
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      }
      function closeModal() {
        popupModal.classList.remove('active');
      }
      showMore.addEventListener('click', openModal);
      closeBtn.addEventListener('click', closeModal);
    });
    // create footer
    const footer = document.createElement('footer');
    footer.className = 'footer';
    wrapper.appendChild(footer);

    const copyRight = document.createElement('p');
    copyRight.className = 'copyRight';
    copyRight.textContent = `Made by Ana ©`;
    footer.appendChild(copyRight);
  });
