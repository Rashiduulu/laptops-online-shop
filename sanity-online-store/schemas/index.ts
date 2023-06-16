import category from './category'
import product from './product'
import catalog from "./catalog";
import {user, account, verificationToken} from "next-auth-sanity/schemas";


export const schemaTypes = [category, product, catalog, user]
