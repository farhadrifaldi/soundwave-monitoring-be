import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.anomaly.createMany({
    data: [
      {
        machine: "CNC Machine",
        anomaly: "Mild",
        sensor: "1234567890",
        soundClipUrl: "https://purfirhhszyvaxklrniq.supabase.co/storage/v1/object/public/wavs//1.wav",
        suspectedReason: null,
        actionRequired: null,
        comment: null,
      },
      {
        machine: "CNC Machine",
        anomaly: "Moderate",
        sensor: "0123456789",
        soundClipUrl: "https://purfirhhszyvaxklrniq.supabase.co/storage/v1/object/public/wavs//2.wav",
        suspectedReason: null,
        actionRequired: null,
        comment: null,
      },
      {
        machine: "CNC Machine",
        anomaly: "Severe",
        sensor: "1234567890",
        soundClipUrl: "https://purfirhhszyvaxklrniq.supabase.co/storage/v1/object/public/wavs//3.wav",
        suspectedReason: null,
        actionRequired: null,
        comment: null,
      },
      {
        machine: "Milling Machine",
        anomaly: "Mild",
        sensor: "1122334455",
        soundClipUrl: "https://purfirhhszyvaxklrniq.supabase.co/storage/v1/object/public/wavs//4.wav",
        suspectedReason: null,
        actionRequired: null,
        comment: null,
      },
      {
        machine: "Milling Machine",
        anomaly: "Moderate",
        sensor: "2345678900",
        soundClipUrl: "https://purfirhhszyvaxklrniq.supabase.co/storage/v1/object/public/wavs//5.wav",
        suspectedReason: null,
        actionRequired: null,
        comment: null,
      },
      {
        machine: "Milling Machine",
        anomaly: "Severe",
        sensor: "2345678900",
        soundClipUrl: "https://purfirhhszyvaxklrniq.supabase.co/storage/v1/object/public/wavs//6.wav",
        suspectedReason: null,
        actionRequired: null,
        comment: null,
      },
    ],
    skipDuplicates: true,
  });
  console.log("Seed data inserted for Anomaly table.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
