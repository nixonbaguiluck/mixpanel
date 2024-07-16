export type User = {
  id: number;
  firstName: string;
  lastName: string;
  address: {
    city: string;
    country: string;
  };
  age: number;
  birthDate: string;
  email: string;
  gender: string;
  phone: string;
};
