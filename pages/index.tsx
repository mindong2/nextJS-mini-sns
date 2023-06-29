import Link from "next/link";
import useSWR from "swr";
import { Post, User } from "@prisma/client";
import Spinner from "@/components/spinner";
import PostWriteBtn from "@/components/postWriteBtn";
import Layout from "@/components/layout";
import useUser from "@/lib/client/useUser";

interface PostWithUser extends Post {
  user: User;
  _count: {
    comments: boolean;
    Favorites: boolean;
  };
}

interface IPost {
  success: boolean;
  post: PostWithUser[];
  noSession?: boolean;
}

const App = () => {
  const { data: postData } = useSWR<IPost>("/api/post");
  const { isLoading } = useUser();
  console.log(isLoading);
  return (
    <>
      {postData ? (
        <Layout title="Home" useLogout>
          <ul className="space-y-8 mt-[46px]">
            {postData?.post?.map((post) => (
              <li key={post?.id} className="bg-[#302d2d] rounded-md p-5 shadow-lg shadow-zinc-300 drop-shadow-2xl">
                <Link href={`/tweet/${post?.id}`}>
                  <a>
                    <h2 className="question font-semibold text-[24px] line-clamp-2" style={{ wordBreak: "keep-all" }}>
                      {post?.title}
                    </h2>
                    <div className="writer mt-3 font-bold text-">작성자: {post?.user?.name}</div>
                    <p className="mt-3 line-clamp-6" style={{ wordBreak: "keep-all" }}>
                      {post?.post}
                    </p>
                  </a>
                </Link>

                <div className="flex justify-between mt-3">
                  <div className="flex">
                    <div className="mr-4 flex">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-1 w-6 h-6">
                        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                      </svg>
                      {post?._count?.Favorites}
                    </div>
                    <div className="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-1 w-6 h-6">
                        <path
                          fillRule="evenodd"
                          d="M5.337 21.718a6.707 6.707 0 01-.533-.074.75.75 0 01-.44-1.223 3.73 3.73 0 00.814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 01-4.246.997z"
                          clipRule="evenodd"
                        />
                      </svg>

                      {post?._count?.comments}
                    </div>
                  </div>
                  <p>{new Date(post.createdAt).toLocaleDateString()}</p>
                </div>
              </li>
            ))}
          </ul>
          <PostWriteBtn />
        </Layout>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default App;
