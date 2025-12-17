import { keepPreviousData, QueryFunctionContext, useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}
interface PostQuery{

    pageSize: number,
    //userId: number
}
const usePosts = (query:PostQuery) =>{
  const fetchPosts = (context: QueryFunctionContext) => {
    const { pageParam = 1 } = context;
    return  axios
      .get('https://jsonplaceholder.typicode.com/posts', {
        params: {
        _start: (pageParam  as number -1) * query.pageSize,       
        _limit: query.pageSize,
        }      
      })
      .then((res) => (res.data));
    }
 
    return useInfiniteQuery<Post[], Error>({
    queryKey: ['posts', query] as const,
    queryFn: fetchPosts,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) =>{
    return lastPage.length > 0
        ? allPages.length + 1
        : undefined;
  },
  getPreviousPageParam: (firstPage, allPages, firstPageParam, allPageParams) =>{
    return firstPage.length >0?
    allPages.length -1: undefined
  },

    maxPages:  5,
    enabled: true,
    staleTime: 60000,// 1m
    gcTime: 10 * 60 * 1000,

  })
}

export default usePosts;