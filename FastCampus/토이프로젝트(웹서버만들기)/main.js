// @ts-check

// 프레임워크 없이 간단한 토이 프로젝트 웹 서버 만들어보기

/**
 * 블로그 포스팅 서비스
 * - 로컬 파일을 데이터베이스로 활용할 예정 (JSON)
 * - 인증 로직은 넣지 않습니다.(ex 내아디는뭐야 ? 이런건 무시)
 * - RESTful API를 사용한다.
 */

const http = require("http")
// 없더라도 문제는없다.(써두면 타입을 잘못쓰거나 안썻을때 빠른확인가능)
/**
 * @typedef Post
 * @property {string} id
 * @property {string} title
 * @property {string} content
 */
/**
 * @type {Post[]}
 */

const posts = [
  {
    id: "my_first_post",
    title: "My first post",
    content: "Hello!",
  },
  {
    id: "my_second_post",
    title: "나의 두번째 포스트",
    content: "Second post",
  },
]
/**
 * POST
 *
 * 전체보기
 * GET /posts
 *
 * 상세보기
 * GET /posts/:id
 *
 * //생성하기
 * POST /posts
 */
const server = http.createServer((req, res) => {
  // ^시작 $끝부분 , 정규식은 문자열패턴을 정의한다.
  const POSTS_ID_REGEX = /^\/posts\/([a-zA-Z0-9-_]+)$/
  const postIdRegexResult =
    (req.url && POSTS_ID_REGEX.exec(req.url)) || undefined

  // 전체보기
  if (req.url === "/posts" && req.method === "GET") {
    const result = {
      posts: posts.map((post) => ({
        id: post.id,
        title: post.title,
      })),
      totalCount: posts.length,
    }
    res.statusCode = 200
    res.setHeader("content-Type", "application/json; charset=utf-8")
    // 한글 사용할경우
    // res.setHeader("content-Type", "application/json; encoding=utf-8")
    res.end(JSON.stringify(result))
  }
  // 상세보기
  else if (postIdRegexResult && req.method === "GET") {
    // GET /posts/:id
    const postId = postIdRegexResult[1]
    const post = posts.find((_post) => _post.id === postId)

    if (post) {
      res.statusCode = 200
      res.setHeader("content-Type", "application/json; charset=utf-8")
      res.end(JSON.stringify(post))
    } else {
      res.statusCode = 404
      res.end("POST NOT FOUND")
    }
  }
  // 생성하기
  else if (req.url === "/posts" && req.method === "POST") {
    req.setEncoding("utf-8")
    req.on("data", (data) => {
      /**
       * @typedef CreatePostBody
       * @property {string} title
       * @property {string} content
       */

      /** @type {CreatePostBody} */
      const body = JSON.parse(data)
      posts.push({
        id: body.title,
        title: body.title,
        content: body.content,
      })
    })

    res.statusCode = 200
    res.end("Create post")
  } else {
    res.statusCode = 404
    res.end("NOT found")
  }
})

const PORT = 3000

server.listen(PORT, () => {
  console.log(`THE server is listening at port : ${PORT}`)
})
