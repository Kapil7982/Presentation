/*
  Warnings:

  - You are about to alter the column `user_id` on the `user_scenes` table. The data in that column could be lost. The data in that column will be cast from `UnsignedBigInt` to `UnsignedInt`.
  - You are about to alter the column `user_id` on the `user_segments` table. The data in that column could be lost. The data in that column will be cast from `UnsignedBigInt` to `UnsignedInt`.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `users` table. The data in that column could be lost. The data in that column will be cast from `UnsignedBigInt` to `UnsignedInt`.

*/
-- DropForeignKey
ALTER TABLE `user_scenes` DROP FOREIGN KEY `user_scenes_user_id_foreign`;

-- DropForeignKey
ALTER TABLE `user_segments` DROP FOREIGN KEY `user_segments_user_id_foreign`;

-- AlterTable
ALTER TABLE `user_scenes` MODIFY `user_id` INTEGER UNSIGNED NOT NULL;

-- AlterTable
ALTER TABLE `user_segments` MODIFY `user_id` INTEGER UNSIGNED NOT NULL;

-- AlterTable
ALTER TABLE `users` DROP PRIMARY KEY,
    MODIFY `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `user_scenes` ADD CONSTRAINT `user_scenes_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user_segments` ADD CONSTRAINT `user_segments_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
