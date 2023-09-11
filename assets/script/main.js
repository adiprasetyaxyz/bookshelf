
// const completeBookshelfList = getElementById('completeBookshelfList')
// const incompleteBookshelfList = getElementById('incompleteBookshelfList')
document.addEventListener('DOMContentLoaded', function () {
    const submitForm = document.getElementById('bookShelfForm');
    submitForm.addEventListener('submit',(e) => {
        addBook();
        e.preventDefault();
    });
  });

  function addBook(){
        const inputTitle = document.getElementById('judul').value
        const inputWriter = document.getElementById('penulis').value
        const inputYear = document.getElementById('tahun').value
        const generatedID = generateId();
        const bookListObject = generateBooksListObject(generatedID, inputTitle, inputWriter,inputYear, false);
        booksList.push(bookListObject);
        console.log(inputTitle);
       
        document.dispatchEvent(new Event(RENDER_EVENT));
  }

  function generateId() {
    return +new Date();
  }
  function generateBooksListObject(id, title, writer,year, isCompleted) {
    return {
        id, 
        title, 
        writer,
        year, 
        isCompleted
    }
  }

const booksList = [];
const RENDER_EVENT = 'render-booksList';

document.addEventListener(RENDER_EVENT, function () {
    console.log(booksList);
  });


  // add book to shelf
  function addBooks(booksList) {
    const textTitle = document.createElement('h2');
    textTitle.innerText = booksList.title;
    
    const textWriter = document.createElement('p');
    textWriter.innerText = 'Penulis : '+booksList.writer;
    
    const textYear = document.createElement('p');
    textYear.innerText ='Tahun : ' + booksList.year;

    const textContainer = document.createElement('div');
    textContainer.classList.add('book_list');
    textContainer.append(textTitle, textWriter, textYear);

    const container = document.createElement('article');
    container.classList.add('book_item');
    container.append(textContainer);
    container.setAttribute('id', `book-${booksList.id}`);
 
  return container;
  }
  
  document.addEventListener(RENDER_EVENT, function () {
    const uncompleteBookshelfList = document.getElementById('incompleteBookshelfList');
    uncompleteBookshelfList.innerHTML = '';
   
    for (const booksListItem of booksList) {
        console.log(booksListItem);
        const booksListElement = addBooks(booksListItem);
        console.log(booksListElement)
        uncompleteBookshelfList.append(booksListElement);
      }
  });


