"use server";
import { ContactFormPayloadType } from "@/types";
import { gql } from "graphql-request";
import { api_client } from "./api";

const api_token = process.env.API_TOKEN! || "";
export const SubmitContactForm = async (payload: ContactFormPayloadType) => {
  try {
    const query = gql`
      mutation MyMutation($data: ContactFormCreateInput!) {
        createContactForm(data: $data) {
          id
        }
      }
    `;

    const variables = {
      data: {
        name: payload.name,
        email: payload.email,
        phone: payload.phone,
        message: payload.message,
        inquiryType: payload.inquiryType,
      },
    };

    const res: Record<string, any> = await api_client.request(query, variables);
    return res.createContactForm;
  } catch (error: any) {
    console.log(JSON.stringify(error, null, 2));
    return error?.message ?? "Something went wrong.";
  }
};

export const SubmitNewLetterForm = async (email: string) => {
  try {
    const query = gql`
      mutation MyMutatio($email: String!) {
        createNewsLetter(data: { email: $email, isActive: true }) {
          id
        }
      }
    `;

    const variables = {
      email,
    };

    const res: Record<string, any> = await api_client.request(query, variables);

    console.log(res);
    return res.createNewsLetter;
  } catch (error: any) {
    console.log(JSON.stringify(error, null, 2));
    return error?.message ?? "Something went wrong.";
  }
};
