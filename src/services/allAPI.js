import { commonAPI } from "./commonAPI"
import { BASE_URL } from "./baseurl"
// register user

export const registerAPI= async(user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/register`,user,"")
}

export const loginAPI= async(user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/login`,user,"")
}

// add review

export const addReviewAPI= async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${BASE_URL}/review/add`,reqBody,reqHeader)
}

//4)get home projects
export const homeReviewAPI=async()=>{
    return await commonAPI("GET",`${BASE_URL}/review/home-reviews`,"","")
}

// //5)get all projects
// //here we are sending search key as query parameter
// //syntax path?key=value
export const allReviewAPI=async(searchKey,reqHeader)=>{  //logined user need  to see all projects so we use reqheader
    return await commonAPI("GET", `${BASE_URL}/review/all-reviews?search=${searchKey}`,"",reqHeader)
}

//6)get user project
export const userReviewAPI=async(reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/review/user-reviews`,"",reqHeader)
}


export const editUserReviewAPI = async (reviewId, reqBody, reqHeader)=>{
    return await commonAPI('PUT', `${BASE_URL}/review/edit/${reviewId}`, reqBody, reqHeader)
}


// delete project
export const deleteReviewAPI = async (reviewId, reqHeader)=>{
    return await commonAPI("DELETE", `${BASE_URL}/review/remove/${reviewId}`,{},reqHeader)
}


//4)get home projects
export const ReadReviewAPI = async (reviewId) => {
    return await commonAPI("GET", `${BASE_URL}/review/read/${reviewId}`);
  }
  


//read review


