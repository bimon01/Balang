import z from "zod";
import { format } from "date-fns";

// model Suspension {
//   id                   String  @id @default(auto()) @map("_id") @db.ObjectId
//   memberId             String  @unique @db.ObjectId
//   balangId             String  @db.ObjectId
//   krteng               String
//   tarikPyntip          String
//   tarikSdangSuspension String
//   tarikKutSuspension   String
//   reason               String? @default("Prefers not to say")
//   member               Member? @relation(fields: [memberId], references: [id])
//   balang               Balang? @relation(fields: [balangId], references: [id])
// }

export const SuspensionModel = z.object({
  id: z.string().optional(),
  memberId: z.string().optional(),
  balangId: z.string().optional(),
  krteng: z.string(),
  tarikPyntip: z.string(),
  tarikSdangSuspension: z.string(),
  tarikKutSuspension: z.string(),
  reason: z.string().optional().default("Prefers not to say"),
  dateCreated: z.string().optional().default(format(new Date(), "yyyy-MM-dd")),
})