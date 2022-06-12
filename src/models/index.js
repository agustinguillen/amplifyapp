// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Sale, Order } = initSchema(schema);

export {
  Sale,
  Order
};