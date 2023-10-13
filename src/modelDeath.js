import z from "zod";
import { format } from "date-fns";

// model Death {
//   id           String  @id @default(auto()) @map("_id") @db.ObjectId
//   memberId     String  @unique @db.ObjectId
//   kyrteng      String
//   balangId     String  @db.ObjectId
//   tarikSngiIap String
//   tarikUnTep   String
//   balang       Balang? @relation(fields: [balangId], references: [id])
//   member       Member? @relation(fields: [memberId], references: [id])
// }

export const DeathModel = z.object({
  id: z.string().optional(),
  memberId: z.string().optional(),
  kyrteng: z.string(),
  balangId: z.string().optional(),
  tarikSngiIap: z.string(),
  tarikUnTep: z.string(),
  dateCreated: z.string().optional().default(format(new Date(), "yyyy-MM-dd")),
})