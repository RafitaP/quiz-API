const select = document.getElementById('select');
const url = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=%20H5AZuxGblBGuQjhSCRdAaxCIhGxmsEzE';
let books = [];

fetch(url)
  .then(response => response.json())
  .then(data => {
    books = data.results.books;
    books.forEach(book => {
      const option = document.createElement('option');
      option.value = book.title;
      option.textContent = book.title;
      select.appendChild(option);
    });
  });

const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  const tbody = document.getElementById('tbody');
  tbody.innerHTML = '';
  const selectedBook = books.find(book => book.title === select.value);
  const tr = document.createElement('tr');
  const tdPublisher = document.createElement('td');
  tdPublisher.textContent = selectedBook.publisher;
  const tdDescription = document.createElement('td');
  tdDescription.textContent = selectedBook.description;
  const tdPrice = document.createElement('td');
  tdPrice.textContent = selectedBook.price;
  const tdTitle = document.createElement('td');
  tdTitle.textContent = selectedBook.title;
  const tdAuthor = document.createElement('td');
  tdAuthor.textContent = selectedBook.author;
  const tdContributor = document.createElement('td');
  tdContributor.textContent = selectedBook.contributor;
  const tdContributorNote = document.createElement('td');
  tdContributorNote.textContent = selectedBook.contributor_note;
  const tdBookImage = document.createElement('td');
  const img = document.createElement('img');
  img.src = selectedBook.book_image;
  img.alt = selectedBook.title;
  img.width = 100;
  tdBookImage.appendChild(img);
  tr.appendChild(tdPublisher);
  tr.appendChild(tdDescription);
  tr.appendChild(tdPrice);
  tr.appendChild(tdTitle);
  tr.appendChild(tdAuthor);
  tr.appendChild(tdContributor);
  tr.appendChild(tdContributorNote);
  tr.appendChild(tdBookImage);
  tbody.appendChild(tr);
});

const btn2 = document.getElementById('btn2');
btn2.addEventListener('click', () => {
  const tbody = document.getElementById('tbody');
  tbody.innerHTML = '';
  books.forEach(book => {
    const tr = document.createElement('tr');
    const tdPublisher = document.createElement('td');
    tdPublisher.textContent = book.publisher;
    const tdDescription = document.createElement('td');
    tdDescription.textContent = book.description;
    const tdPrice = document.createElement('td');
    tdPrice.textContent = book.price;
    const tdTitle = document.createElement('td');
    tdTitle.textContent = book.title;
    const tdAuthor = document.createElement('td');
    tdAuthor.textContent = book.author;
    const tdContributor = document.createElement('td');
    tdContributor.textContent = book.contributor;
    const tdContributorNote = document.createElement('td');
    tdContributorNote.textContent = book.contributor_note;
    const tdBookImage = document.createElement('td');
    const img = document.createElement('img');
    img.src = book.book_image;
    img.alt = book.title;
    img.width = 100;
    tdBookImage.appendChild(img);
    tr.appendChild(tdPublisher);
    tr.appendChild(tdDescription);
    tr.appendChild(tdPrice);
    tr.appendChild(tdTitle);
    tr.appendChild(tdAuthor);
    tr.appendChild(tdContributor);
    tr.appendChild(tdContributorNote);
    tr.appendChild(tdBookImage);
    tbody.appendChild(tr);
  });
});