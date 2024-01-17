-- AlterTable
ALTER TABLE `scenes` MODIFY `successSceneId` INTEGER UNSIGNED NULL,
    MODIFY `failureSceneId` INTEGER UNSIGNED NULL;

-- AlterTable
ALTER TABLE `segments` MODIFY `data` JSON NULL;
