import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
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
  const fetchPosts = ({pageParam=0 }) => 
    axios
      .get('https://jsonplaceholder.typicode.com/posts',{
        //_start: (pageParam -1) * query.pageSize,       
        //_limit: query.pageSize,
      })
      .then((res) => (res.data));

 
    return useInfiniteQuery<Post[], Error>({
    queryKey: ['posts', query],
    queryFn: fetchPosts,
  initialPageParam: 1,

  getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) =>
    lastPage.nextCursor,
  getPreviousPageParam: (firstPage, allPages, firstPageParam, allPageParams) =>
    firstPage.prevCursor,



    staleTime: 60000,// 1m
    placeholderData: keepPreviousData,
 /*   getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0
        ? allPages.length + 1
        : undefined;
    },*/
  })
}

export default usePosts;