"use server";
import { ContactFormPayloadType } from "@/types";
import { gql } from "graphql-request";
import { api_client } from "./api";

const api_token = process.env.API_TOKEN! || "";
export const SubmitContactForm = async (payload: ContactFormPayloadType) => {
  try {
    const query = gql`
      mutation MyMutation($data: ContactSubmissionCreateInput!) {
        createContactSubmission(data: $data) {
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

    const res: Record<string, any> = await api_client
      .setHeader("Authorization", `Bearer ${api_token}`)
      .request(query, variables);
    return res.createContactSubmission;
  } catch (error: any) {
    console.log(JSON.stringify(error, null, 2));
    return error?.message ?? "Something went wrong.";
  }
};

export const SubmitNewLetterForm = async (email: string) => {
  try {
    const query = gql`
      mutation MyMutation($email: String!) {
        createNewLetterSubscriber(data: { email: $email, isActive: true }) {
          email
          id
          isActive
        }
      }
    `;

    const variables = {
      email,
    };

    const res: Record<string, any> = await api_client
      .setHeader("Authorization", `Bearer ${api_token}`)
      .request(query, variables);
    return res.createNewLetterSubscriber;
  } catch (error: any) {
    console.log(JSON.stringify(error, null, 2));
    return error?.message ?? "Something went wrong.";
  }
};
