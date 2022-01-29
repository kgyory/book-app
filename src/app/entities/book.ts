import { Guid } from 'guid-typescript';

export interface Book {
    id: Guid;
    title: string;
    cover_link: string;
    author: string;
    isbn: number;
    isbn13: number;
    isBookDeleted: boolean;
}

export const initialBook: Book = {
    id: Guid.create(),
    title: '',
    cover_link: '',
    author: '',
    isbn: 0,
    isbn13: 0,
    isBookDeleted: false,
};