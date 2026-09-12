export class Developer {
  readonly #id: string | null;
  readonly #firstName: string;
  readonly #lastName: string;
  private static readonly MIN_NAME_LENGTH = 2;
  private static readonly ANONYMOUS_NAME = 'Anonymous';

  constructor(firstName: string= '', lastName: string) {
    this.#firstName = firstName.trim();
    this.#lastName = lastName.trim();
    this.#id = null;
  }
get id():string | null {
    return this.#id;
  }
  static isRegistered(developer: Developer): boolean {
    return developer.#id !== null;
  }

  isRegistered(): boolean {
    return Developer.isRegistered(this);
  }

  static isValidName(name: string): boolean {
    return name.trim().length >= Developer.MIN_NAME_LENGTH;
  }

  static isValidForRegistration(firstName: string, lastName: string): boolean {
    return Developer.isValidName(firstName) && Developer.isValidName(lastName);
  }

  isValidForRegistration(): boolean {
    return !this.isRegistered();
  }
 }
