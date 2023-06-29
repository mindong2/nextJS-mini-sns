import Layout from "@/components/layout";
import PostWriteBtn from "@/components/postWriteBtn";
import Spinner from "@/components/spinner";
import TextArea from "@/components/textArea";
import useMutation from "@/lib/client/useMutation";
import useUser from "@/lib/client/useUser";
import { Comment, Post, User } from "@prisma/client";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";

interface CommentWithUser extends Comment {
  user: User;
}

interface postWithComment extends Post {
  comments: CommentWithUser[];
  user: User;
  _count: {
    comments: number;
    Favorites: number;
  };
}

interface IPost {
  success: boolean;
  post: postWithComment;
  isFavorite: boolean;
}

interface IComment {
  comment: string;
}

interface CommentDataResult {
  success: boolean;
  Comment: CommentWithUser;
}

const App = () => {
  const router = useRouter();
  const { data: postDetailData, mutate: detailMutate } = useSWR<IPost>(router.query.id ? `/api/post/${router.query.id}` : null);
  const { register, handleSubmit, reset } = useForm<IComment>();
  const [comment, { data: writeCommentData, loading }] = useMutation<CommentDataResult>(router.query.id ? `/api/post/${router.query.id}/comment` : "");
  const { mutate } = useSWR<CommentDataResult>(router.query.id ? `/api/post/${router.query.id}` : null);
  const [favorite] = useMutation(router.query.id ? `/api/post/${router.query.id}/favorite` : "");
  const onValid = (data: IComment) => {
    if (loading) return;
    if (window.confirm("정말로 댓글을 작성하시겠습니까?")) {
      comment(data);
    }
  };
  const { isLoading } = useUser();
  console.log(isLoading);
  const favoriteClick = () => {
    if (!postDetailData) return;
    favorite({});
    detailMutate(
      {
        ...postDetailData,
        post: {
          ...postDetailData.post,
          _count: {
            ...postDetailData?.post._count,
            Favorites: postDetailData?.isFavorite ? postDetailData?.post?._count?.Favorites - 1 : postDetailData?.post._count.Favorites + 1,
          },
        },
        isFavorite: !postDetailData?.isFavorite,
      },
      false
    );
  };
  console.log(postDetailData);
  useEffect(() => {
    reset();
    mutate();
  }, [writeCommentData, router]);
  return (
    <>
      {postDetailData ? (
        <Layout title="Post" useLogout>
          <Link href="/">
            <a className="text-[32px] mb-3">&larr;</a>
          </Link>
          <div className="space-y-8">
            <div className="bg-[#302d2d] rounded-md p-5 shadow-lg shadow-zinc-300 drop-shadow-2xl">
              <h2 className="question font-semibold text-[24px] line-clamp-2" style={{ wordBreak: "keep-all" }}>
                {postDetailData?.post?.title}
              </h2>
              <div className="writer mt-3 font-bold text-">작성자:{postDetailData?.post?.user?.name}</div>
              <p className="mt-3 max-h-[290px] overflow-auto" style={{ wordBreak: "keep-all" }}>
                {postDetailData?.post?.post}
              </p>

              <div className="flex mt-3">
                <button className="mr-4" type="button" onClick={favoriteClick}>
                  <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={postDetailData.isFavorite ? "mr-1 w-6 h-6 text-red-600" : "mr-1 w-6 h-6"}>
                      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                    </svg>
                    {postDetailData?.post?._count?.Favorites}
                  </div>
                </button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-1 w-6 h-6">
                  <path
                    fillRule="evenodd"
                    d="M5.337 21.718a6.707 6.707 0 01-.533-.074.75.75 0 01-.44-1.223 3.73 3.73 0 00.814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 01-4.246.997z"
                    clipRule="evenodd"
                  />
                </svg>
                {postDetailData?.post?._count?.comments}
              </div>

              {/* 댓글 */}
              <div className="mt-3">
                <form onSubmit={handleSubmit(onValid)}>
                  <TextArea name="comment" label="COMMENT" register={register("comment", { required: "최소 1글자 이상은 입력해주세요" })}></TextArea>
                  <button className="my-4 w-full px-4 py-2 bg-blue-600 hover:bg-blue-500 transition-all rounded-[4px] font-semibold ">{loading ? "Writing..." : "Write a Comment"}</button>
                </form>
              </div>

              <div className="mt-1 space-y-4">
                {postDetailData?.post?.comments.map((comment) => {
                  return (
                    <div key={comment.id} className="p-3 border-2 border-gray-500 rounded-md">
                      <h3 className="font-semibold">{comment?.user?.name}</h3>
                      <p>{comment?.comment}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* fix 버튼 */}
          <PostWriteBtn />
        </Layout>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default App;
