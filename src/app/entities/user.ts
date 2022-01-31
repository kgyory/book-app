import { Guid } from 'guid-typescript';

export interface User {
  id: Guid; 
  username: string;
  password: string;
  mail: string;
}

export function initialUser():User {
  return { 
    id: Guid.create(),
    username: '',
    password: '',
    mail: ''
  };
};
