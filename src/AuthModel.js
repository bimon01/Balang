import z from "zod";
import { format } from "date-fns";

// model Auth {
//   id            String  @id @default(auto()) @map("_id") @db.ObjectId
//   balang_email  String  @unique
//   password_hash String
//   balang        Balang?
//   role          Role?   @default(USER)
//   dateCreated   String
// }

export const AuthModel = z.object({
  id: z.string().optional(),
  balang_email: z.string(),
  password_hash: z.string(),
 
  
  dateCreated: z.string().default(format(new Date(), "yyyy-MM-dd")),
})
