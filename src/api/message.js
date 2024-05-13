import request from "./request";

export async function getMessage(
  page = 1,
  limit = 10
  // keyword = ""
) {
  return await request.get("/api/message", {
    params: {
      page,
      limit,
      // keyword
    },
  });
}

export async function postMessage(inFo) {
  return await request.post("/api/message", inFo);
}
