import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { DeleteUser, updateUser } from "@/actions/user.actions";
import { UserType } from "@/types";
import { AddUser } from "@/services/user.services";

export async function POST(req: Request) {
  const SIGNING_SECRET = process.env.SIGNING_SECRET!;

  if (!SIGNING_SECRET) {
    throw new Error(
      "Error: Please add SIGNING_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  // Create new Svix instance with secret
  const wh = new Webhook(SIGNING_SECRET);

  // Get headers
  const headerPayload = await headers();

  const svix_id = await headerPayload.get("svix-id");
  const svix_timestamp = await headerPayload.get("svix-timestamp");
  const svix_signature = await headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error: Missing Svix headers", { status: 400 });
  }

  // Get body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  let evt: WebhookEvent;

  // Verify payload with headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error: Could not verify webhook:", err);
    return new Response("Error: Verification error", { status: 400 });
  }

  // Get the ID and type
  const { id } = evt.data;
  const eventType = evt.type;

  try {
    // CREATE USER
    if (eventType === "user.created") {
      const { email_addresses, image_url, first_name, last_name } = evt.data;

      const user: UserType = {
        clerkId: id,
        email: email_addresses[0]?.email_address || "",
        fullName: `${first_name} ${last_name}`.trim(),
        avatar: image_url || "",
      };

      const newUser = await AddUser(user);
      return NextResponse.json({ message: "User Created", user: newUser });
    }

    // UPDATE USER
    if (eventType === "user.updated") {
      const { image_url, first_name, last_name, email_addresses } = evt.data;

      const user: UserType = {
        fullName: `${first_name} ${last_name}`.trim(),
        email: email_addresses[0]?.email_address || "",
        avatar: image_url || "",
        clerkId: id,
      };

      const updatedUser = await updateUser(user);
      return NextResponse.json({ message: "User Updated", user: updatedUser });
    }

    // DELETE USER
    if (eventType === "user.deleted") {
      const deletedUser = await DeleteUser(id);
      return NextResponse.json({ message: "User Deleted", user: deletedUser });
    }

    console.log(`Webhook with ID: ${id} and type: ${eventType}`);
    console.log("Webhook body:", body);

    return new Response("Webhook received", { status: 200 });
  } catch (error: any) {
    console.error("Error processing webhook:", error);
    return new Response("Error processing webhook", { status: 500 });
  }
}
