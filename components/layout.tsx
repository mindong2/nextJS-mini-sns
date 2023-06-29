import useMutation from "@/lib/client/useMutation";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface ILayout {
  title?: string;
  children: React.ReactNode;
  useLogout?: boolean;
}

interface dataType {
  success: boolean;
}

const Layout = ({ title, children, useLogout }: ILayout) => {
  const router = useRouter();
  const random = (x: number, y: number) => {
    return x + Math.random() * (y - x);
  };
  const [logout, { data, loading }] = useMutation<dataType>("/api/logout");
  useEffect(() => {
    if (loading) return;
    if (data?.success) {
      router.replace("/log-in");
    }
  }, [data, router]);
  return (
    <div className="page max-w-[90%] md:max-w-[600px] mx-auto">
      <div>
        {new Array(500).fill("").map((star, i) => {
          return <span key={i} className={`star ${star}`} style={{ animationDuration: `${random(5, 10)}s`, top: `${random(0, 98)}%`, left: `${random(0, 98)}%` }}></span>;
        })}
      </div>
      {useLogout ? (
        <header className="flex justify-between px-6 py-5 bg-[#333030]">
          <Link href={"/"}>
            <a className=" text-center">
              <svg viewBox="0 0 20 20" aria-hidden="true" className="w-8 h-8 fill-white">
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 20 3.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 .8 7.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.095 4.095 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 0 16.407a11.615 11.615 0 0 0 6.29 1.84"></path>
              </svg>
            </a>
          </Link>
          <span className="font-semibold text-[20px] flex-1 text-right">{title}</span>
          <div className="font-semibold text-[20px] flex-1 text-right">
            <span
              className="cursor-pointer"
              onClick={() => {
                if (window.confirm("정말 로그아웃 하시겠습니까?")) {
                  logout("");
                }
              }}
            >
              Logout
            </span>
          </div>
        </header>
      ) : null}
      {children}
    </div>
  );
};

export default Layout;
