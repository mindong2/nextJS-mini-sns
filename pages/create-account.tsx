import useMutation from "@/lib/client/useMutation";
import { User } from "@prisma/client";
import Link from "next/link";
import { useRouter } from "next/router";
import Input from "@/components/input";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Layout from "@/components/layout";

interface IAccount {
  name: string;
  email: string;
  password1: number;
  password2: number;
  error?: string;
}

interface ICreate {
  success: boolean;
  msg?: string;
  user: User;
}

const App = () => {
  const router = useRouter();
  const [create, { data: createData, error, loading }] = useMutation<ICreate>("/api/user/create");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAccount>();
  const onValid = (data: IAccount) => {
    if (loading || error) return;
    if (data.password1 !== data.password2) {
      window.alert("비밀번호가 일치하지 않습니다!");
      return;
    }
    if (window.confirm("정말로 계정을 만드시겠습니까?")) {
      create(data);
    }
  };
  useEffect(() => {
    if (createData?.msg) {
      window.alert(createData?.msg);
      return;
    } else if (createData?.success) {
      window.alert("회원가입이 완료되었습니다 로그인 해주세요!");
      router.push("/log-in");
    }
  }, [createData, router]);

  return (
    <Layout>
      <div className="transition-all hover:translate-y-[-51%] max-w-[500px] w-[90%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="bg-[#302d2d] rounded-md  shadow-lg shadow-zinc-300 drop-shadow-2xl">
          <h2 className="text-3xl font-bold px-6 py-5 border-b-[1px] border-[#413f3f] text-center whitespace-nowrap">Create Account</h2>
          <div className="px-6 py-5">
            <form onSubmit={handleSubmit(onValid)}>
              <Input type="text" name="name" label="NAME" errorMessage={errors?.name?.message} register={register("name", { required: "이름은 필수입니다.", maxLength: { message: "이름은 최대 10글자까지 가능합니다.", value: 10 } })}></Input>
              <Input type="email" name="email" label="EMAIL ADDRESS" errorMessage={errors?.email?.message} register={register("email", { required: "이메일은 필수입니다.", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "올바른 이메일형식이 아닙니다." } })}></Input>
              <Input type="password" name="password1" label="PASSWORD" errorMessage={errors?.password1?.message} register={register("password1", { required: "비밀번호는 필수입니다.", minLength: { message: "비밀번호는 최소 8자 이상입니다.", value: 8 } })}></Input>
              <Input type="password" name="password2" label="PASSWORD CONFIRM" errorMessage={errors?.password2?.message} register={register("password2", { required: "비밀번호 확인은 필수입니다.", minLength: { message: "비밀번호는 최소 8자 이상입니다.", value: 8 } })}></Input>

              <div className="flex justify-between items-center mt-5">
                <Link href={"/log-in"}>
                  <a className="text-lg text-blue-500 font-semibold">Login</a>
                </Link>
                <button type="submit" className="px-4 py-2 bg-blue-600 hover:bg-blue-500 transition-all rounded-[4px] font-semibold ">
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default App;
