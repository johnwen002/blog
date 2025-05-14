import { account, session, user, verification } from "./auth-schema";
import { articleTags, articles, comments, tags } from "./blog-schema";
export const schema = {
  user,
  session,
  account,
  verification,
  articles,
  tags,
  articleTags,
  comments,
};

export {
  account,
  articleTags,
  articles,
  comments,
  session,
  tags,
  user,
  verification,
};
