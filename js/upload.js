import { uploadPostFile } from './storage.js';
import { createPost } from './posts.js';
import { handleError } from './error-handler.js';

export async function publishPost(file, caption){
  try{
    const url = await uploadPostFile(file);
    await createPost({ caption, mediaUrl: url });
    return true;
  }catch(error){
    handleError(error);
    return false;
  }
}