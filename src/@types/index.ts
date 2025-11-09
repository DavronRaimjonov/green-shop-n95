import type { ReactNode } from "react";

export interface PropTypes {
  children: ReactNode;
}

export interface LoginType {
  email: string;
  password: string;
}

export interface RegisterType {
  email: string;
  name: string;
  password: string;
  second_password: string;
  surname: string;
}
