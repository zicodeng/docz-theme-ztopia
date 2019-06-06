export interface PropType {
  name: string;
  required?: boolean;
  value?: any;
}

export interface PropValue {
  [key: string]: PropType;
}
