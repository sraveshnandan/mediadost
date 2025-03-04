import { gql, GraphQLResponse } from "graphql-request";
import { api_client } from "./api";

export const FetchAllCategories = async () => {
  try {
    const query = gql`
      query MyQuery {
        categories {
          id
          icon
          image {
            id
            url
          }
          name
        }
      }
    `;

    const res: GraphQLResponse = await api_client.request(query);
    return res.categories;
  } catch (error: any) {
    return error?.message ?? "Something went wrong.";
  }
};

export const fetchAllProducts = async () => {
  try {
    const query = gql`
      query MyQuery {
        products {
          category {
            icon
            id
            name
          }
          createdAt
          district
          facingFrom
          id
          images {
            id
            url
          }
          lighting
          location
          mapUrl
          price
          printingCharge {
            isFree
            value
          }
          state
          totalArea
          towards
          type {
            id
            name
          }
        }
      }
    `;

    const res: GraphQLResponse = await api_client.request(query);
    return res.products;
  } catch (error: any) {
    return error?.message ?? "Something went wrong.";
  }
};

export const FetchAllBlogs = async () => {
  try {
    const query = gql`
      query MyQuery {
        blogs {
          id
          author
          title
          mainImage {
            id
            url
          }
          adImage {
            id
            url
          }
          context
          createdAt
        }
      }
    `;

    const res: GraphQLResponse = await api_client.request(query);
    return res.blogs;
  } catch (error: any) {
    return error?.message ?? "Something went wrong.";
  }
};

export const FetchBlogById = async (blogId: string) => {
  try {
    const query = gql`
      query MyQuery($blogId: ID!) {
        blog(where: { id: $blogId }) {
          id
          author
          title
          mainImage {
            id
            url
          }
          adImage {
            id
            url
          }
          context
          createdAt
        }
      }
    `;

    const variables = {
      blogId,
    };

    const res: GraphQLResponse = await api_client.request(query, variables);
    return res.blog;
  } catch (error: any) {
    return error?.message ?? "Something went wrong.";
  }
};
