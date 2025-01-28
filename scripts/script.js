
let title = document.getElementById("title");
let author = document.getElementById("author");
let genre = document.getElementById("genre");
let bookList = document.getElementById("bookList");

// my books  array

const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, genre: "Fiction" },
    { title: "The y", author: "Scott Fitzgerald", year: 1925, genre: "Fiction" },
  
  ];

  const map  = new Map(books.map(item => [item.author,item.title]));
  console.log(map.has("Scott Fitzgerald"));
  
  console.log("yesz ",map);
 
function addbooks() {

    let th  = document.createElement("th")

    function createbook(){
        books.push({ title: title.value, author: author.value, year: 1932, genre: genre.value });
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${title.value}</td>
          <td>${author.value}</td>
          <td>${genre.value}</td>
          <td>active</td>
          <td><button>Delete</button><button>Book</button></td>
         
        `;
        bookList.appendChild(row);
        
    };
    
    createbook()
    console.log(books); 
    
};
