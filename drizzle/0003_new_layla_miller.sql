CREATE TABLE IF NOT EXISTS `cheatsheet` (
	`id` text PRIMARY KEY NOT NULL,
	`content` text NOT NULL,
	`author_id` text NOT NULL,
	`published` integer NOT NULL,
	`created_at` integer,
	`updated_at` integer,
	FOREIGN KEY (`author_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
