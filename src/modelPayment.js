import z from "zod";
import { format } from "date-fns";

// model Payment {
//   id          String  @id @default(auto()) @map("_id") @db.ObjectId
//   balangId    String  @unique @db.ObjectId
//   balangEmail String? @unique @default("No")
//   amount      String
//   paymentDate String
//   expiredDate String
//   dateCreated String?
//   balang      Balang? @relation(fields: [balangId], references: [id])
// }

export const PaymentModel = z.object({
  id: z.string().optional(),
  balangId: z.string().optional(),
  balangEmail: z.string().optional().default("No"),
  amount: z.string(),
  paymentDate: z.string(),
  expiredDate: z.string(),
  dateCreated: z.string().optional().default(format(new Date(), "yyyy-MM-dd")),
})
