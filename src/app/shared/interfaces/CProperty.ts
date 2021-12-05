import { Propertybase } from "./propertybase";



export class CProperty implements Propertybase {
  Id!: string;
  sellrent!: number;
  name!: string;
  ptype!: string;
  BHK!: number;
  ftype!: string;
  price!: string;
  builtArea!: string;
  carpetArea?: number;
  address!: string;
  Address2?: string;
  city!: string;
  floorNo?: string;
  totalFloor?: string;
  RTM!: string;
  AOP?: string;
  mainEntrance?: string;
  security?: number;
  gated?: number;
  maintenance?: number;
  possession?: string;
  Image?: string;
  Description?: string;
  PostedOn!: string;
  PostedBy!: number;
}
