import request from "./request";

export async function getProjects() {
  const resp = await request.get("/api/project");
  return resp;
}
