import request from "./request";

/**
 * 获取博客页面数据
 * @param {*} page
 * @param {*} limit
 * @param {*} categoryid
 * @param {*} keyword
 */
export async function getBlogs(
  page = 1,
  limit = 10,
  categoryid = -1
  // keyword = ""
) {
  return await request.get("/api/blog", {
    params: {
      page,
      limit,
      categoryid,
      // keyword,
    },
  });
}

/**
 * 获取博客分类
 */
export async function getBlogCategoris() {
  return await request.get("/api/blogtype");
}

/**
 * 获取单个博客
 * @param {*} id
 */
export async function getBlog(id) {
  return await request.get(`/api/blog/${id}`);
}

/**
 *
 * @param {object} commentInfo{
	nickname: "昵称",
	content: "评论内容，纯文本",
	blogId: <id>	#评论的博客id
}
 */
export async function postComment(commentInfo) {
  return await request.post("/api/comment", commentInfo);
}

/**
 * 分页获取评论
 * @param {*} page     当前页码
 * @param {*} limit    页容量
 * @param {*} blogid   所属文章，-1表示不限
 * @param {*} keyword  模糊查询的关键字
 * @returns
 */
export async function getComments(
  page = 1,
  limit = 10,
  blogid = -1
  // keyword = ""
) {
  return await request.get("/api/comment", {
    params: {
      page,
      limit,
      blogid,
      // keyword,
    },
  });
}
