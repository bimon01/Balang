import z from "zod";
import { format } from "date-fns";

// model Baptised {
//   id                        String  @id @default(auto()) @map("_id") @db.ObjectId
//   balangId                  String  @db.ObjectId
//   memberId                  String  @unique @db.ObjectId
//   kyrteng                   String
//   tarikBaptised             String
//   pastor                    String
//   kyrtengKmie               String
//   kyrtengKpa                String
//   deiRangbah                String
//   pastorContactNo           String  @default("0000000000")
//   assistancePastor          String? @default("Not Present")
//   assistancePastorContactNo String? @default("Not Present")
//   balang                    Balang? @relation(fields: [balangId], references: [id])
//   member                    Member? @relation(fields: [memberId], references: [id])
// }

export const BaptisedModel = z.object({
  id: z.string().optional(),
  balangId: z.string().optional(),
  memberId: z.string().optional(),
  kyrteng: z.string(),
  tarikBaptised: z.string(),
  pastor: z.string(),
  kyrtengKmie: z.string(),
  kyrtengKpa: z.string(),
  deiRangbah: z.string(),
  pastorContactNo: z.string().optional().default("0000000000"),
  assistancePastor: z.string().optional().default("Not Present"),
  assistancePastorContactNo: z.string().optional().default("Not Present"),
  dateCreated: z.string().optional().default(format(new Date(), "yyyy-MM-dd")),
})