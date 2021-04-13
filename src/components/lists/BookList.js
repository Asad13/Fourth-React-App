import Book from '../reps/Book';

const BookList = props => {
    const bookList = props.books.map((book, index) => {
        return (
            <Book {...book}
                delete={() => props.delete(index)}
                change={event => props.change(index, event)}
            />
        );
    });
    return bookList;
};

export default BookList;