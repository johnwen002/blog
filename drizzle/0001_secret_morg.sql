CREATE TABLE IF NOT EXISTS `article_tags` (
	`id` text PRIMARY KEY NOT NULL,
	`article_id` text NOT NULL,
	`tag_id` text NOT NULL,
	FOREIGN KEY (`article_id`) REFERENCES `articles`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`tag_id`) REFERENCES `tags`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `articles` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`content` text NOT NULL,
	`author_id` text NOT NULL,
	`published` integer NOT NULL,
	`created_at` integer,
	`updated_at` integer,
	FOREIGN KEY (`author_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `comments` (
	`id` text PRIMARY KEY NOT NULL,
	`article_id` text NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`content` text NOT NULL,
	`created_at` integer NOT NULL,
	FOREIGN KEY (`article_id`) REFERENCES `articles`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `tags` (
	`id` text PRIMARY KEY NOT NULL,
	`slug` text NOT NULL,
	`description` text,
	`created_at` integer NOT NULL
);
