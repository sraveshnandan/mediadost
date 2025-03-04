"use server";

import { gql } from "graphql-request";
import { api_client } from "./api";
import { UserType } from "@/types";

export const AddUser = async (payload: UserType) => {
  try {
    const query = gql`
      mutation MyMutation($payload: CustomerCreateInput!) {
        createCustomer(data: $payload) {
          avatar
          clerkId
          createdAt
          email
          fullName
          id
        }
      }
    `;

    const variables = {
      payload,
    };

    const res: Record<string, any> = await api_client.request(query, variables);

    return res.createCustomer;
  } catch (error: any) {
    console.log(JSON.stringify(error, null, 2));
    return error?.message ?? "Something went wrong.";
  }
};

export const updateUser = async (payload: UserType, clerkId: String) => {
  try {
    console.log(payload)
//     const query = gql`
//      updateCustomer($clerkId:string!, $data:)(
//     data: $data,
//     where: {clerkId: $clerkId}
//   ) {
//     avatar
//     clerkId
//     createdAt
//     email
//     fullName
//     id
//   }
//     `;

//     const variables = {
//       data: payload,
//       clerkId,
//     };

//     const res: Record<string, any> = await api_client.request(query, variables);

//     return res.UpdateCustomer;
  } catch (error: any) {
    console.log(JSON.stringify(error, null, 2));
    return error?.message ?? "Something went wrong.";
  }
};

export const DeleteUser = async () => {
  try {
  } catch (error) {}
};
