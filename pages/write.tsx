import Link from "next/link";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import useMutation from "@/lib/client/useMutation";
import { useRouter } from "next/router";
import Input from "@/components/input";
import TextArea from "@/components/textArea";
import Layout from "@/components/layout";
import useUser from "@/lib/client/useUser";
import Spinner from "@/components/spinner";

interface IPost {
  title: string;
  post: string;
}

const App = () => {
  const { register, handleSubmit } = useForm<IPost>();
  const [post, { data: postData }] = useMutation("/api/post/write");
  const router = useRouter();
  const onValid = (data: IPost) => {
    if (window.confirm("정말로 작성하시겠습니까?")) {
      post(data);
    }
  };
  const { isLoading } = useUser();
  useEffect(() => {
    if (postData && postData.success) {
      router.push("/");
    }
  }, [postData, router]);

  return (
    <>
      {!isLoading ? (
        <Layout title="Write" useLogout>
          <div className="transition-all hover:translate-y-[-51%] max-w-[500px] w-[90%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <Link href="/">
              <a className="text-[32px] mb-3">&larr;</a>
            </Link>
            <div className="bg-[#302d2d] rounded-md  shadow-lg shadow-zinc-300 drop-shadow-2xl">
              <h2 className="text-3xl font-bold px-6 py-5 border-b-[1px] border-[#413f3f] text-center whitespace-nowrap">New Post</h2>
              <div className="px-6 py-5">
                <form onSubmit={handleSubmit(onValid)}>
                  <Input type="text" name="title" label="TITLE" register={register("title", { required: "제목 작성은 필수입니다." })}></Input>
                  <TextArea name="post" label="POST" register={register("post", { required: "글 작성은 필수입니다." })}></TextArea>

                  <div className="flex justify-between items-center mt-5">
                    <button type="submit" className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-500 transition-all rounded-[4px] font-semibold ">
                      Post
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Layout>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default App;
