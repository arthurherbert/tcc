import api from "src/config/api";
import { ArrayResponse } from "src/utils/util.types";
import { CreateDiscussionDto } from "./store/discussions.actions";
import { IDiscussion } from "./types/discussion.model";

async function fetchDiscussionsById(id: string) {
  const response = await api.get<IDiscussion>(`discussions/${id}`);
  return response.data;
}
async function fetchDiscussionsByLabel(label: string) {
  if (label.length === 0) return Promise.resolve([]);
  const response = await api.get<IDiscussion[]>(`discussions?label=${label}`);
  return response.data;
}
async function fetchDiscussions(offset: number, limit: number) {
  const response = await api.get<ArrayResponse<IDiscussion>>(
    `discussions?offset=${offset}&limit=${limit}`
  );
  return response.data;
}
async function createDiscussion(createDiscussionDto: CreateDiscussionDto) {
  const response = await api.post<IDiscussion>(
    "discussions",
    createDiscussionDto
  );
  return response.data;
}
async function updateDiscussion(
  id: string,
  updateDiscussionDto: Partial<CreateDiscussionDto>
) {
  const response = await api.patch<ArrayResponse<IDiscussion>>(
    `discussions/${id}`,
    updateDiscussionDto
  );
  return response.data;
}
function deleteDiscussion(id: string) {
  return api.delete(`discussions/${id}`);
}
const endpoints = {
  fetchDiscussions,
  fetchDiscussionsByLabel,
  fetchDiscussionsById,
  createDiscussion,
  updateDiscussion,
  deleteDiscussion,
};
const discussionsApi = endpoints;

export { discussionsApi };
