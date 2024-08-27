import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ProtectWriteButton } from '../../utils/Protection';

const BlogHeader = () => {
  const navigate = useNavigate();
  return (
    <header className="  bg-[rgb(3,3,3)] shadowarevei sticky top-0 ">
      <div className="relative flex  items-center py-4  h-min">
    
        <div className="flex justify-center w-full self-center  ">
          <img className=' h-6 ' src="/img/Group.png" alt="" />
        </div>
        <div className="absolute right-6 top-4 space-x-3">
        
      <ProtectWriteButton onClick={()=>navigate('/blog/addPost')}   className="bg-[rgba(155,225,63)] text-black px-4 py-2 rounded whitespace-nowrap self-end w-max ">Write</ProtectWriteButton>
      </div>
      </div>
    </header>
  );
};

export default BlogHeader;
