import Link from "next/link";

const PostWriteBtn = () => {
  return (
    <div className="fixed bottom-12 right-4">
      <Link href="/write" className="w-full">
        <a className="flex justify-center items-center w-16 h-16 bg-blue-600 transition-all hover:bg-blue-400 rounded-full">
          <svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </a>
      </Link>
    </div>
  );
};

export default PostWriteBtn;
