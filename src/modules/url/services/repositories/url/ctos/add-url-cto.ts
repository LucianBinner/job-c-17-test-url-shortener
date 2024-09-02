import { User } from "@prisma/client";

export type AddURLCto = {
  origin: string;
  urlToken: string;
  user?: User
}
