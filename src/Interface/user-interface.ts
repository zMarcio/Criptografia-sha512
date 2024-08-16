export interface userInterfaceCreate {
  id: number;
  document: string;
  cardToken: string;
  value: number;
}

export interface userInterfaceLogin {
  document: string;
  cardToken: string;
}

export interface userInterfacePatch {
  document: string;
  cardToken: string;
  value: number;
}
