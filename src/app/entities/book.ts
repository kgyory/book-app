export interface Book {
    id: number;
    title: string;
    cover_link: string;
    author: string;
    isbn: number;
    isbn13: number;
    isBookDeleted: boolean;
}

export const initialBook: Book = {
    id: 0,
    title: '',
    cover_link: '',
    author: '',
    isbn: 0,
    isbn13: 0,
    isBookDeleted: false,
};