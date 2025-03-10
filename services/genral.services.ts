import { gql, GraphQLResponse } from "graphql-request";
import { api_client } from "./api";

export const FetchAllCategories = async () => {
  try {
    const query = gql`
      query MyQuery {
        categories {
          id
          icon
          name
          image {
            id
            url
          }
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
        blogs(orderBy: publishedAt_ASC) {
          author
          title
          context
          createdAt
          slug
          addImage {
            id
            url
          }
          id
          mainImage {
            id
            url
          }
        }
      }
    `;

    const res: GraphQLResponse = await api_client.request(query);
    return res.blogs;
  } catch (error: any) {
    return error?.message ?? "Something went wrong.";
  }
};

export const FetchBlogBySlug = async (slug: string) => {
  try {
    const query = gql`
      query MyQuery($slug: String!) {
        blog(where: { slug: $slug }) {
          id
          title
          author
          mainImage {
            id
            url
          }
          addImage {
            id
            url
          }
          context
          slug
          createdAt
        }
      }
    `;

    const variables = {
      slug,
    };

    const res: GraphQLResponse = await api_client.request(query, variables);
    return res.blog;
  } catch (error: any) {
    return error?.message ?? "Something went wrong.";
  }
};

export const FetchAllEvent = async () => {
  try {
    const query = gql`
      query MyQuery {
        events(orderBy: publishedAt_ASC) {
          createdAt
          endDate
          fullAddress
          id
          images {
            id
            url
          }
          location
          name
          price
          startDate
          slug
          extraDetails {
            type
            bronzeSponserShip {
              isFree
              price
            }
            sliverSponserShip {
              isFree
              price
            }
            goldSponserShip {
              isFree
              price
            }
            platinumSponserShip {
              isFree
              price
            }
            entrenceBanner {
              isFree
              price
            }
            mainStageBanner {
              isFree
              price
            }
            vipLoungeBanner {
              isFree
              price
            }
          }
        }
      }
    `;

    const res: GraphQLResponse = await api_client.request(query);
    return res.events;
  } catch (error: any) {
    return error?.message ?? "Something went wrong.";
  }
};

export const FetchEventBySlug = async (slug: string) => {
  try {
    const query = gql`
      query MyQuery($slug: String!) {
        event(where: { slug: $slug }) {
          createdAt
          endDate
          fullAddress
          id
          images {
            id
            url
          }
          description
          location
          name
          price
          startDate
          slug
          extraDetails {
            type
            bronzeSponserShip {
              isFree
              price
            }
            sliverSponserShip {
              isFree
              price
            }
            goldSponserShip {
              isFree
              price
            }
            platinumSponserShip {
              isFree
              price
            }
            entrenceBanner {
              isFree
              price
            }
            mainStageBanner {
              isFree
              price
            }
            vipLoungeBanner {
              isFree
              price
            }
          }
        }
      }
    `;

    const variables = {
      slug,
    };

    const res: GraphQLResponse = await api_client.request(query, variables);
    return res.event;
  } catch (error: any) {
    return error?.message ?? "Something went wrong.";
  }
};
