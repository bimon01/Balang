import z from "zod";
import { format } from "date-fns";




// model Member {
//   id                    String      @id @default(auto()) @map("_id") @db.ObjectId
//   balangId              String      @db.ObjectId
//   jakaSah               String
//   kyrtengKmie           String
//   kyrtengKpa            String
//   kyrteng               String
//   gender                String
//   tarikSngiKha          String
//   jingiadeiBadKhliehIng String
//   riewDkhot             String      @default("No")
//   tarikRungRiewDkhot    String?
//   mobileNo              String
//   lahBaptised           String?     @default("No")
//   tarikLahBaptised      String?
//   niam                  String
//   lahIathoh             String?     @default("No")
//   tarikIathoh           String?
//   suspens               String?     @default("No")
//   kyrtengILok           String?
//   laMihBalang           String?     @default("No")
//   statusILok            String?
//   memberStatus          String?     @default("Active")
//   deceased              String?     @default("No")
//   balang                Balang      @relation(fields: [balangId], references: [id])
//   married               Married?
//   baptised              Baptised?
//   suspension            Suspension?
//   death                 Death?
//   mihBalang             MihBalang?
//   riew_Dkhot            RiewDkhot?
//   sengSamla             SengSamla[]
// }

export const MemberModel = z.object({
  id: z.string().optional(),
  balangId: z.string().optional(),
  jakaSah: z.string(),
  kyrtengKmie: z.string(),
  kyrtengKpa: z.string(),
  kyrteng: z.string(),
  gender: z.string(),
  tarikSngiKha: z.string(),
  jingiadeiBadKhliehIng: z.string(),
  riewDkhot: z.string().optional().default("No"),
  tarikRungRiewDkhot: z.string().optional(),
  mobileNo: z.string(),
  lahBaptised: z.string().optional().default("No"),
  tarikLahBaptised: z.string().optional(),
  niam: z.string(),
  lahIathoh: z.string().optional().default("No"),
  tarikIathoh: z.string().optional(),
  suspens: z.string().optional().default("No"),
  kyrtengILok: z.string().optional(),
  laMihBalang: z.string().optional().default("No"),
  statusILok: z.string().optional(),
  dateCreated: z.string().optional().default(format(new Date(), "yyyy-MM-dd")),
})