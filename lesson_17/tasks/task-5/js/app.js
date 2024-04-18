// Особиста бібліотека. Картотека домашньої бібліотеки: дані книги (автори (піб, рік народження, короткий опис),
//  назва книги, жанр, видавництво (назва, реєстраційний номер, рік засування)).
//  Реалізувати розділи бібліотеки (спеціальна література, хобі, домашнє господарство і т.д.),
//   походження книги і наявність на даний час.
//   Організувати додавання/вилучення книг та  вибір книг за назвою, за ПІБ автора, за видавництвом.
class AuthorBook {
	static nowYear = 2024;
	constructor(nameAuthor, surnameAuthor, yearAuthor, description) {
		this.name = nameAuthor;
		this.surname = surnameAuthor;
		this.Year = yearAuthor;
		this.description = description;
	}
	set Year(yearAuthor) {
		if (yearAuthor > AuthorBook.nowYear || isNaN(yearAuthor)) throw new Error(`Wrong year`);
		this.year = yearAuthor;
	}
}
class BookPublishing {
	constructor(namePublishing, registrNumber, yearFaundation) {
		this.name = namePublishing;
		this.RegistrNumber = registrNumber;
		this.YearFaundation = yearFaundation;
	}
	set RegistrNumber(registrNumber) {
		if (isNaN(registrNumber)) throw new Error(`Wrong registr number`);
		this.registrNumber = registrNumber;
	}
	set YearFaundation(yearFaundation) {
		if (yearFaundation > AuthorBook.nowYear || isNaN(yearFaundation)) throw new Error(`Wrong year`);
		this.yearFaundation = yearFaundation;
	}
}
class Book {
	constructor(authors = [], name, genre, namePublishing, registrNumber, yearFaundation, available, history) {
		this.Authors = authors;
		this.name = name;
		this.Genre = genre;
		this.publishing = new BookPublishing(namePublishing, registrNumber, yearFaundation);
		this.Available = available;
		this.history = history;
	}
	set Available(available) {
		if (typeof available === "boolean") this.available = available;
		else throw new Error(`Wrong available`);
	}
	set Genre(genre) {
		this.genre = genre.toLowerCase();
	}
	set Authors(authors) {
		if (Array.isArray(authors)) this.authors = authors;
		else throw new Error(`Authors are able to in array`);
	}
	addAuthors(author) {
		if (typeof author !== "object") throw new Error(`Wrong author`);
		this.authors.push(author);
	}
}
class GenreBooks {
	constructor(genre) {
		this.genre = genre;
		this.books = [];
	}
}
class Library {
	constructor() {
		this.stock = [];
	}
	changeAvailableBook(nameBook, value) {
		let result = false;
		this.stock.forEach((genre) => {
			genre.books.forEach((book) => {
				if (book.name.toLowerCase() === nameBook.toLowerCase()) {
					book.Available = value;
					result = true;
				}
			});
		});
		return result;
	}
	addBook(book) {
		let pushBook = () => {
			let result = false;
			this.stock.forEach((item) => {
				if (book.genre === item.genre) {
					item.books.push(book);
					result = true;
				}
			});
			return result;
		};
		if (this.stock.length === 0) {
			this.stock.push(new GenreBooks(book.genre));
		}
		let result = pushBook();
		if (!result) {
			this.stock.push(new GenreBooks(book.genre));
			pushBook();
		}
	}
	deleteBook(nameBook) {
		let result = false;
		this.stock.forEach((genre) => {
			genre.books.forEach((book, index) => {
				if (book.name.toLowerCase() === nameBook.toLowerCase()) {
					genre.books.splice(index, 1);
					result = true;
				}
			});
		});
		return result;
	}
	searchBookToNamePublisher(namePublisher) {
		let result = [];
		this.stock.forEach((genre) => {
			genre.books.forEach((book) => {
				if (book.publishing.name.toLowerCase() === namePublisher.toLowerCase()) {
					result.push(book);
				}
			});
		});
		if (result.length === 0) result = false;
		 return result;
	}
	searchBookToNameAuthor(nameAuthor, surnameAuthor) {
		let result = [];
		this.stock.forEach((genre) => {
			genre.books.forEach((book) => {
				book.authors.forEach((author) => {
					if (
						author.name.toLowerCase() === nameAuthor.toLowerCase() &&
						author.surname.toLowerCase() === surnameAuthor.toLowerCase()
					) {
						result.push(book);
					}
				});
			});
		});
		if (result.length !== 0) return result;
		return false;
	}
	searchBookToName(nameBook) {
		let result = false;
		this.stock.forEach((genre) => {
			genre.books.forEach((book) => {
				if (book.name.toLowerCase() === nameBook.toLowerCase()) {
					result = book;
				}
			});
		});
		return result;
	}
}
try {
	let author = new AuthorBook("Yogan", "Sebastiyan", "1987", "Good writer");
	let author1 = new AuthorBook("Ivan", "White", "1965", "Winter");

	let bookColobok = new Book([author], "Colobok", "Fantastick", "BBS", "555555", "2002", true, "kkkkkkk");
	let bookSea = new Book([author1], "Sea", "dramA", "LLP", "555000", "2001", false, "lklklklk");
	let bookWinter = new Book([author1], "Winter", "draMA", "LLP", "555000", "2001", true, "llllllll");

	let library = new Library();

	library.addBook(bookColobok);
	library.addBook(bookWinter);
	library.addBook(bookSea);
	console.log(library.changeAvailableBook("sea", true));
	console.log(library.searchBookToNameAuthor("yogan", "sebastiyan"));
	console.log(library.deleteBook("sea"));
	console.log(library.searchBookToName("winter"));
	console.log(library);
	console.log(library.searchBookToNamePublisher("bbs"));
} catch (error) {
	console.log(error.message);
}
