import z from "zod";
import { format } from "date-fns";

// model SengSamla {
//   id       String  @id @default(auto()) @map("_id") @db.ObjectId
//   balangId String  @db.ObjectId
//   kyrteng  String
//   memberId String  @unique @db.ObjectId
//   member   Member? @relation(fields: [memberId], references: [id])
//   balang   Balang? @relation(fields: [balangId], references: [id])
// }

export const SengSamlaModel = z.object({
  id: z.string().optional(),
  balangId: z.string().optional(),
  kyrteng: z.string(),
  memberId: z.string().optional(),
  dateCreated: z.string().optional().default(format(new Date(), "yyyy-MM-dd")),
})