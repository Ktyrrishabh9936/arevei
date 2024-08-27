import React, { useEffect } from 'react'
import BlogNavigation from '../BlogViewPage/Navigation'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import blogService from '../../Redux/RequestServices/blogService';
import InfiniteScroll from 'react-infinite-scroll-component'
import { Vortex } from 'react-loader-spinner'
export default function Blogs() {
        const {blogReducer} = useSelector(store=>store);
        const blogsData = blogReducer.blogs;
        const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(()=>{
    dispatch(blogService.fetchBlogs(blogReducer?.blogpage))
  },[])
  return (
    <div className="bg-black min-h-screen">
      <BlogNavigation/>
      <InfiniteScroll
        dataLength={blogsData?.length||0}
        next = {()=>dispatch(blogService.fetchBlogs())}
        hasMore={blogsData?.length>0 && blogsData?.length<blogReducer.total}
        loader={<Vortex visible height='80' width='80' ariaLabel='vortex-loading' wrapperStyle={{}} wrapperClass='vortex-wrapper mx-auto' colors={['rgb(155,225,63)',`#fffffff`,'rgb(155,225,63)','#fffffff']}/>}
        >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-12 w-[94%] md:w-[88%] lg:w-[84%] xl:w-[80%] mx-auto">
      {blogsData?.map((blog, index) => <div className="w-full" onClick={()=>navigate(`/blog/${blog._id}`)} key={index} >
                <div className="bg-[#424242] p-4 h-[16rem] rounded-xl">
                        <p className=' bg-white h-full rounded-md'>
                        <img src={blog?.coverImage} className='h-full mx-auto ' alt="" />
                       </p>
                </div>
                <div className="flex h-fit p-3 gap-3 items-center">
                        <div className="rounded-full w-10">
                                <img src="/img/profile.png" className='h-10 w-10 rounded-full' alt="" />
                        </div>
                        <div className='w-[80%] '>
                                <p className=' font-semibold line-clamp-1 text-white'>{blog?.headline}</p>
                                <p className=' font-semibold line-clamp-1 text-sm text-[rgb(72,72,72)]'>{blog?.subHeadline}</p>
                        </div>
                </div>
        </div>
      )}
      </div>
      </InfiniteScroll>
    </div>
  )
}
