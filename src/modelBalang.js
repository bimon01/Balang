import z from "zod";
import { format } from "date-fns";

// model Balang {
//   id               String       @id @default(auto()) @map("_id") @db.ObjectId
//   balang_name      String
//   domination       String
//   address          String
//   founding_year    Int
//   total_member     Int?         @default(0)
//   total_riew_dkhot Int?         @default(0)
//   total_married    Int?         @default(0)
//   total_death      Int?         @default(0)
//   total_suspension Int?         @default(0)
//   total_mih_balang Int?         @default(0)
//   total_baptised   Int?         @default(0)
//   auth             Auth         @relation(fields: [id], references: [id])
//   payment          Payment[]
//   members          Member[]
//   marrieds         Married[]
//   baptiseds        Baptised[]
//   riewDkhots       RiewDkhot[]
//   suspensions      Suspension[]
//   deaths           Death[]
//   mihBalang        MihBalang[]
//   sengSamla        SengSamla[]
//   pastors          Pastor[]
// }

export const BalangModel = z.object({
  id: z.string().optional(),
  balang_name: z.string(),
  domination: z.string(),
  address: z.string(),
  processing_year: z.number(),
  total_member: z.number().optional().default(0),
  total_riew_dkhot: z.number().optional().default(0),
  total_married: z.number().optional().default(0),
  total_death: z.number().optional().default(0),
  total_suspension: z.number().optional().default(0),
  total_mih_balang: z.number().optional().default(0),
  total_baptised: z.number().optional().default(0),
  dateCreated: z.string().optional().default(format(new Date(), "yyyy-MM-dd")),
})