import { Guid } from 'guid-typescript';

export interface User {
  id: Guid; 
  username: string;
  password: string;
  mail: string;
}

export function initialUser():User {
  return { 
    id: Guid.parse("14a186b0-d5ae-9d91-67b4-4d4eeb7a47cf"),
    username: 'TH',
    password: '123',
    mail: '123@test.test'
  };
};
