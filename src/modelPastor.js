import z from "zod";
import { format } from "date-fns";


// model Pastor {
//   id            String  @id @default(auto()) @map("_id") @db.ObjectId
//   balangId      String  @unique @db.ObjectId
//   name          String
//   contactNo     String? @default("0000000000")
//   isInCharge    String? @default("Yes")
//   dateOfJoining String
//   dateOfEnding  String? @default("2021-01-01T00:00:00.000Z")
//   balang        Balang? @relation(fields: [balangId], references: [id])
// }

export const PastorModel = z.object({
  id: z.string().optional(),
  balangId: z.string().optional(),
  name: z.string(),
  contactNo: z.string().optional().default("0000000000"),
  isInCharge: z.string().optional().default("Yes"),
  dateOfJoining: z.string(),
  dateOfEnding: z.string().optional().default(format(new Date(), "yyyy-MM-dd")),
  dateCreated: z.string().optional().default(format(new Date(), "yyyy-MM-dd")),
})