export class Address {
  suite: string;
  street: string;
  zipcode: string;
  city: string;
}
export default class User {
  id: number;
  email: string;
  name: string;
  phone: string;
  address = new Address();
}
