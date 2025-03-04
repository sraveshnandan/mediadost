import { api_client } from "@/services/api";
import { UserType } from "@/types";
import { gql } from "graphql-request";

export const createUser = async (data: UserType) => {
  try {
    const query = gql`
      mutation MyMutation($UserData: CustomerCreateInput!) {
        createCustomer(data: $UserData) {
          clerkId
          id
          email
          fullName
          avatar
        }
      }
    `;

    const variable = {
      UserData: { ...data },
    };

    const res: Record<string, unknown> = await api_client.request(
      query,
      variable
    );

    return res.createCustomer;
  } catch (error: any) {
    return error.response.errors[0].message;
  }
};

export const DeleteUser = async (clerkId: string) => {
  try {
    const query = gql`
      mutation MyMutation($clerkId: String) {
        deleteCustomer(where: { clerkId: $clerkId }) {
          id
        }
      }
    `;

    const variable = {
      clerkId,
    };

    const res: Record<string, unknown> = await api_client.request(
      query,
      variable
    );

    return res.deleteCustomer;
  } catch (error: any) {
    return error.response.errors[0].message;
  }
};

export const updateUser = async (id: string, user: UserType) => {
  try {
    const query = gql`
      mutation MyMutation($UserData: CustomerCreateInput!, $id: String) {
        createCustomer(data: $UserData, where: { clerkId: id }) {
          clerkId
          id
          email
          fullName
          avatar
        }
      }
    `;

    const variable = {
      UserData: { ...user },
      id,
    };

    const res: Record<string, unknown> = await api_client.request(
      query,
      variable
    );

    return res.updateCustomer;
  } catch (error: any) {
    return error.response.errors[0].message;
  }
};
