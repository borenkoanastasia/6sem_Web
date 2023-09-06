export class MyError {
  // code = 0;
  // name = '';

  constructor(public code: number | null, public name: string | null) {}
}

export interface User {
  username: string;
  password: string;
}

export interface Dictionary<T> {
  [Key: string]: T;
}

export interface Property {
  name: string;
  value: string;
}

// export interface Answer {
//   success: boolean;
//   error: {
//     name: '';
//     code: '';
//   };
//   answer: any;
// }
