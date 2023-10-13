import z from "zod";
import { format } from "date-fns";

// model MihBalang {
//   id            String  @id @default(auto()) @map("_id") @db.ObjectId
//   memberId      String  @unique @db.ObjectId
//   balangId      String  @db.ObjectId
//   kyrteng       String
//   tarikMih      String
//   kyrtengBalang String? @default("Prefers not to say")
//   reason        String? @default("Prefers not to say")
//   balang        Balang? @relation(fields: [balangId], references: [id])
//   member        Member? @relation(fields: [memberId], references: [id])
// }

export const MihBalangModel = z.object({
  id: z.string().optional(),
  memberId: z.string().optional(),
  balangId: z.string().optional(),
  kyrteng: z.string(),
  tarikMih: z.string(),
  kyrtengBalang: z.string().optional().default("Prefers not to say"),
  reason: z.string().optional().default("Prefers not to say"),
  dateCreated: z.string().optional().default(format(new Date(), "yyyy-MM-dd")),
})