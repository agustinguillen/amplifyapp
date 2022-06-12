import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type SaleMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Sale {
  readonly id: string;
  readonly time?: string | null;
  readonly amount?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Sale, SaleMetaData>);
  static copyOf(source: Sale, mutator: (draft: MutableModel<Sale, SaleMetaData>) => MutableModel<Sale, SaleMetaData> | void): Sale;
}

export declare class Order {
  readonly id: string;
  readonly name?: string | null;
  readonly date?: string | null;
  readonly shipTo?: string | null;
  readonly paymentMethod?: string | null;
  readonly amount?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Order, OrderMetaData>);
  static copyOf(source: Order, mutator: (draft: MutableModel<Order, OrderMetaData>) => MutableModel<Order, OrderMetaData> | void): Order;
}