import { Guid } from 'guid-typescript';

export interface Book {
    id: Guid;
    title: string;
    cover_link: string;
    author: string;
    isbn: number;
    isBookDeleted: boolean;
}

export function initialBook():Book {
    return {
        id: Guid.create(),
        title: '',
        cover_link: '',
        author: '',
        isbn: 0,
        isBookDeleted: false
    };
};