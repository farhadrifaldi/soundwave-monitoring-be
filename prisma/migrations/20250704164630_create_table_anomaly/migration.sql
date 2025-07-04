-- CreateTable
CREATE TABLE "Anomaly" (
    "id" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "machine" TEXT NOT NULL,
    "anomaly" TEXT NOT NULL,
    "sensor" TEXT NOT NULL,
    "soundClipUrl" TEXT NOT NULL,
    "suspectedReason" TEXT,
    "actionRequired" TEXT,
    "comment" TEXT,

    CONSTRAINT "Anomaly_pkey" PRIMARY KEY ("id")
);
