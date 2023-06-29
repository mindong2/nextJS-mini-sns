import useMutation from "@/lib/client/useMutation";
import { User } from "@prisma/client";
import Link from "next/link";
import { useRouter } from "next/router";
import Input from "@/components/input";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Layout from "@/components/layout";

interface ILoginForm {
  email: string;
  password: string;
}

interface ILoginData {
  success: boolean;
  findUser: User;
  msg?: string;
}

const App = () => {
  const [login, { data: loginData }] = useMutation<ILoginData>("/api/login");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>();

  const onValid = (data: ILoginForm) => {
    login(data);
  };

  useEffect(() => {
    if (loginData && loginData?.success) {
      router.push("/");
    } else if (loginData?.msg) {
      window.alert(loginData?.msg);
    }
  }, [loginData, router]);

  console.log(loginData);

  return (
    <Layout>
      <div className="transition-all hover:translate-y-[-51%] max-w-[500px] w-[90%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="bg-[#302d2d] rounded-md  shadow-lg shadow-zinc-300 drop-shadow-2xl">
          <h2 className="text-3xl font-bold px-6 py-5 border-b-[1px] border-[#413f3f] text-center whitespace-nowrap">Login</h2>
          <div className="px-6 py-5">
            <form onSubmit={handleSubmit(onValid)}>
              <Input type="email" name="email" label="EMAIL ADDRESS" errorMessage={errors?.email?.message} register={register("email", { required: "이메일을 입력해주세요", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "올바른 이메일형식이 아닙니다." } })}></Input>
              <Input type="password" name="password" label="PASSWORD" errorMessage={errors?.password?.message} register={register("password", { required: "비밀번호를 입력해주세요", minLength: { message: "비밀번호는 최소 8자 이상입니다.", value: 8 } })}></Input>

              <div className="flex justify-between items-center mt-5">
                <Link href={"/create-account"}>
                  <a className="text-lg text-blue-500 font-semibold">Create Account</a>
                </Link>
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 transition-all rounded-[4px] font-semibold ">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default App;
