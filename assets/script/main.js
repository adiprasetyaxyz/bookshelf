
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
        const inputJudul = document.getElementById('judul').value
        const inputPenulis = document.getElementById('penulis').value
        const inputTahun = document.getElementById('tahun').value
        const generatedID = generateId();
        const addBookObject = generateaddBookObject(generatedID, inputJudul, inputPenulis,inputTahun, false);
        addBooks.push(addBookObject);
        console.log(inputJudul);
       
        document.dispatchEvent(new Event(RENDER_EVENT));
  }

  function generateId() {
    return +new Date();
  }
  function generateaddBookObject(id, judul, penulis,tahun, isCompleted) {
    return {
        id, 
        judul,
        penulis,
        tahun,
        isCompleted
    }
  }

const addBooks = [];
const RENDER_EVENT = 'render-addBooks';

document.addEventListener(RENDER_EVENT, function () {
    console.log(addBooks);
  });


