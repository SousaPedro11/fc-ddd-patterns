import Address from '../value-object/address';

class Customer {
  private _id: string;
  private _name: string;
  private _address!: Address;
  private _active: boolean = true;
  private _rewardPoints: number = 0;

  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;
    this.validate();
  }

  private validate() {
    this.validateId();
    this.validateName();
  }

  private validateId() {
    if (this._id.trim().length === 0) {
      throw new Error('ID is required');
    }
  }

  private validateName() {
    if (this._name.trim().length < 2) {
      throw new Error('An valid name is required');
    }
  }

  private validateAlreadyActive() {
    if (this._active) {
      throw new Error('Customer is already active');
    }
  }

  private validateAlreadyInactive() {
    if (!this._active) {
      throw new Error('Customer is already inactive');
    }
  }

  private validateAddressToActivate() {
    if (!this._address) {
      throw new Error('Address is required to activate customer');
    }
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get address(): Address {
    return this._address;
  }

  get isActive(): boolean {
    return this._active;
  }

  changeName(newName: string) {
    this._name = newName;
    this.validateName();
  }

  activate() {
    this.validateAddressToActivate();
    this.validateAlreadyActive();
    this._active = true;
  }

  deactivate() {
    this.validateAlreadyInactive();
    this._active = false;
  }

  addRewardPoints(points: number) {
    this._rewardPoints += points;
    if (this._rewardPoints < 0) {
      throw new Error('Reward points cannot be negative');
    }
  }

  get rewardPoints(): number {
    return this._rewardPoints;
  }

  changeAddress(address: Address) {
    this._address = address;
  }
}

export default Customer;
