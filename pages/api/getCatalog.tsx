import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

const query = groq`*[ _type == "catalog"] {
    _id,
    ...
}`;

type Data = {
    catalogs: Catalog[];
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const catalogs = await sanityClient.fetch(query);
    console.log(catalogs);
    res.status(200).json({ catalogs });
}