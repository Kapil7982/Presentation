-- CreateTable
CREATE TABLE `lectures` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `category` VARCHAR(255) NOT NULL,
    `type` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `scenes` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `lecture_id` INTEGER UNSIGNED NOT NULL,
    `order` INTEGER NOT NULL,
    `archived` BOOLEAN NOT NULL DEFAULT false,
    `successSceneId` INTEGER UNSIGNED NOT NULL,
    `failureSceneId` INTEGER UNSIGNED NOT NULL,
    `created_at` TIMESTAMP(0) NOT NULL,
    `updated_at` TIMESTAMP(0) NOT NULL,

    INDEX `scenes_lecture_id_foreign`(`lecture_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `segments` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `scene_id` INTEGER UNSIGNED NOT NULL,
    `video` VARCHAR(191) NULL,
    `slide` JSON NOT NULL,
    `order` INTEGER NOT NULL,
    `archived` BOOLEAN NOT NULL DEFAULT false,
    `type` VARCHAR(191) NOT NULL,
    `data` JSON NOT NULL,
    `created_at` TIMESTAMP(0) NOT NULL,
    `updated_at` TIMESTAMP(0) NOT NULL,

    INDEX `segments_scene_id_foreign`(`scene_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `scenes` ADD CONSTRAINT `scenes_lecture_id_foreign` FOREIGN KEY (`lecture_id`) REFERENCES `lectures`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `segments` ADD CONSTRAINT `segments_scene_id_foreign` FOREIGN KEY (`scene_id`) REFERENCES `scenes`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
