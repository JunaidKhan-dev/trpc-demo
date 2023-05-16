-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Todo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME,
    "name" TEXT NOT NULL,
    "priority" TEXT NOT NULL,
    "done" BOOLEAN DEFAULT false
);
INSERT INTO "new_Todo" ("createdAt", "done", "id", "name", "priority", "updatedAt") SELECT "createdAt", "done", "id", "name", "priority", "updatedAt" FROM "Todo";
DROP TABLE "Todo";
ALTER TABLE "new_Todo" RENAME TO "Todo";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
