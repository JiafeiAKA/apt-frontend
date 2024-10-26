import { apiClient } from "./ApiService";
import { tokenKey } from "./AuthenticationService";

export interface CommentResponse {
    commentId: number;
    userId: number;
    username: string;
    countryId: string;
    commentText: string;
    createdAt: string; //  ใช้ string แทน LocalDate
    updatedAt: string; //  ใช้ string แทน LocalDate
    profileUri: string;
  }
  

  
export const getCommentByCountryCode = async (
    countryCode: string
  ): Promise<CommentResponse[]> => {
    console.log(localStorage.getItem(tokenKey));
    console.log(apiClient.head);
    const response = await apiClient.get('/comments', {
      params: {
        country: countryCode,
      },
    });
    return response.data;
  };
  
  export const postComment = async (
    comment: string,
    countryCode: string,
    createdAt: string,
    userId: number,
    username: string
  ): Promise<CommentResponse[]> => {
    const response = await apiClient.post('/comments/newComment', {
      userId: userId,
      username: username,
      countryId: countryCode,
      commentText: comment,
      createdAt: createdAt,
      updatedAt: createdAt,
      profileUri: 'vvvvvvvv',
    });
    return response.data;
  };
  