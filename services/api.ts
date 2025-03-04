import { GraphQLClient } from "graphql-request";

const api_url = process.env.NEXT_PUBLIC_API_URL || "";
const api_client = new GraphQLClient(api_url, {
  headers: {
    Authorization: `Bearer ${process.env.API_TOKEN}`,
  },
});

export { api_client };
