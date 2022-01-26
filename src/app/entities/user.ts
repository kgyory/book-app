export interface User {
    id: string; 
    username: string;
    password: string;
    mail: string;
    //active: boolean;
    //token: string;
  }
  
  export const initialUser: User = {
    id: '',
    username: '',
    password: '',
    mail: '',
    //active: true
    //token: ''
  };
  