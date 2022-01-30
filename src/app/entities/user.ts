import { Guid } from 'guid-typescript';

export interface User {
  id: Guid; 
  username: string;
  password: string;
  mail: string;
}
  
export const initialUser: User = {
  id: Guid.create(),
  username: '',
  password: '',
  mail: ''
};
  