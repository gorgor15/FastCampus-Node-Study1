// @ts-check

// 없더라도 문제는없다.(써두면 타입을 잘못쓰거나 안썻을때 빠른확인가능)
/**
 * @typedef Post
 * @property {string} id
 * @property {string} title
 * @property {string} content
 */

const fs = require("fs")

/** @returns {Promise<Post[]>} */
async function getPosts() {
  const json = fs.promises.readFile("../database.json", "utf-8")
  return JSON.parse(await json).posts
}

/**
 * @param {Post[]} posts
 */
async function savePosts(posts) {
  const content = {
    posts,
  }
  return fs.promises.writeFile("../database.json", JSON.stringify(content))
}
/**
 * @typedef APIResponse
 * @property {number} statusCode
 * @property {String|Object} body
 */

/**
 * @typedef Route
 * @property {RegExp} url
 * @property {'GET'|'POST'} method
 * @property {(matches: string[], body: Object | undefined)=> Promise<APIResponse>} callback
 */

/** @type {Route[]} */
const routes = [
  {
    url: /^\/posts$/,
    method: "GET",
    callback: async () => ({
      // TODO implement
      statusCode: 200,
      body: await getPosts(),
    }),
  },

  {
    url: /^\/posts\/([a-zA-Z0-9-_]+)$/, // TODO ReqExp로 고쳐야 함.
    method: "GET",
    callback: async (matches) => {
      const postId = matches[1]
      if (!postId) {
        return {
          statusCode: 404,
          body: "Not found",
        }
      }
      const posts = await getPosts()
      const post = posts.find((_post) => _post.id === postId)

      if (!post) {
        return {
          statusCode: 404,
          body: "Not found",
        }
      }
      return {
        statusCode: 200,
        body: post,
      }
    },
  },
  {
    url: /^\/posts$/,
    method: "POST",
    callback: async (_, body) => {
      if (!body) {
        return {
          statusCode: 400,
          body: "Ill-formed request",
        }
      }

      /** @type {string} */
      /* eslint-disable-next-line prefer-destructuring */
      const title = body.title
      const newPost = {
        id: title.replace(/\s/g, "_"),
        title,
        content: body.content,
      }

      const posts = await getPosts()
      posts.push(newPost)
      savePosts(posts)
      return {
        statusCode: 200,
        body: newPost,
      }
    },
  },
]

module.exports = {
  routes,
}
