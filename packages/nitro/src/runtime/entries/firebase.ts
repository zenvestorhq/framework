import "#polyfill";

// @ts-ignore
import functions from "firebase-functions";
import { handle } from "../server";

let firebaseFunction = functions;
if (process.env.FB_REGION) {
  firebaseFunction = firebaseFunction.region(process.env.FIREBASE_REGION);
}

if (process.env.FB_MEMORY) {
  firebaseFunction = firebaseFunction.runWith({
    memory: process.env.FB_MEMORY,
  });
}
export const server = firebaseFunction.https.onRequest(handle);
