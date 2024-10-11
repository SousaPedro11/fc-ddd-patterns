import Customer from '../entity/customer';
import { v7 as uuid } from 'uuid';
import Address from '../value-object/address';

export default class CustomerFactory {
  static create(name: string): Customer {
    return new Customer(uuid(), name);
  }

  static createWithAddress(name: string, address: Address): Customer {
    const customer = new Customer(uuid(), name);
    customer.changeAddress(address);
    return customer;
  }
}
