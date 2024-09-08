import { Client, Functions } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("669ff09d00205b5c5b81");

const functions = new Functions(client);

export { client, functions };
