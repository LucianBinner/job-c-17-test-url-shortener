import { User } from "@prisma/client";

export type AddURL = {
  origin: string;
  urlToken: string;
  user?: User
}
