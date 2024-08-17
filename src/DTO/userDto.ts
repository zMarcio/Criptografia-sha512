export class UserDTO {
  id?: number;
  document: string;
  cardToken: string;
  value?: number;
  constructor(document: string, cardToken: string, value?: number) {
    this.document = document;
    this.cardToken = cardToken;
    if (value) this.value = value;
  }
}
