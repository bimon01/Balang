import z from 'zod'

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
  memberId: z.string(),
  kyrteng: z.string(),
  balangId: z.string(),
  tarikSngiIap: z.string(),
  tarikUnTep: z.string(), 
})