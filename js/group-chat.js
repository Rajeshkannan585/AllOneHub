import { createChat } from "./chat.js";

export async function createGroupChat(name, participants) {
  const chatId = crypto.randomUUID();
  await createChat(chatId, participants);
  return chatId;
}