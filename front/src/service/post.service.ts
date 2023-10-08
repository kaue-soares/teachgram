import { Post } from "../interface/home/Post"
import { PostResponse } from "../interface/home/response/PostResponse"
import useApi from "./api/api"
import { URL } from "./api/url"

const usePosts = () => {
  const api = useApi()

  const getPostsFromApi = async (page: number) => {
    const postsResponse = await api.get(URL.POSTS, {
      params: {
        page: page,
        size: 4,
      },
    })
      .catch((error) => {
        throw error
      })
    
    return postsResponse.data as PostResponse
  }

  
  const getPosts = async (page: number) => {
    const postsData = await getPostsFromApi(page)

    return postsData.content.map((post) => {
      return {
        id: post.id,
        title: post.title,
        description: post.description,
        photoLink: post.photoLink,
        videoLink: post.videoLink,
        likes: post.likes,
        privatePost: post.privatePost,
        userId: post.userId,
        username: post.username,
        userPhotoLink: post.userPhotoLink,
        createdAt: post.createdAt,
      }
    }) as Post[]
  }

  const savePost = async (image: string, description?: string) => {
    return await api.post(URL.POSTS, {
      description: description,
      photoLink: image,
    })
      .catch((error) => {
        throw error
      })
  }

  return {
    getPosts: getPosts,   
    savePost: savePost, 
  }
}

export default usePosts
