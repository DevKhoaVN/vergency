import { useForm, type SubmitHandler } from "react-hook-form";
import { useAuth } from "../hook/useAuth";
import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { email } from "zod";

interface FormValues {
  email: string;
  password: string;
}
const LoginForm = () => {
  const { loginAsync, isLoginLoading } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit: SubmitHandler<FormValues> = async ({ email, password }) => {
    try {
      const result = await loginAsync({ email, password });

      console.log("Đăng nhập thành công:", result);
      reset();
    } catch (err) {
      console.log("Lỗi đăng nhập:", err);
    }
  };
  return (
    <>
      <nav className="max-w-7xl mx-auto mt-3 px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center space-x-1 text-sm text-gray-500">
          <Link to="/" className="hover:text-gray-900 font-medium">
            Trang chủ
          </Link>
          <ChevronRight size={16} />
          <span className="font-medium text-gray-900">Đăng nhập</span>
        </div>
      </nav>
      <div className=" max-w-xs md:max-w-md mx-auto mt-8  p-6  bg-white rounded-lg shadow-md">
        <h2 className=" text-xl md:text-2xl font-bold mb-4 text-center">
          Đăng Nhập
        </h2>
        <p className=" text-xs md:text-[16px] text-center mb-6">
          Chào mừng bạn đến với{" "}
          <span className=" text-[16px] md:text-xl font-medium text-[#5EC9FF]">
            Vergency
          </span>
        </p>

        {/* form */}
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* email */}
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="test@gmail.com..."
              {...register("email", {
                required: "Vui lòng nhập email.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Email không hợp lệ.",
                },
              })}
              className={`mt-1 block w-full px-3 py-2   broder-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-300 focus:border-e-indigo-300 ${errors.email ? "border-red-500" : ""}`}
            />
            {errors.email && (
              <span className="text-red-500 mt-1 text-xs">
                {errors.email?.message}
              </span>
            )}
          </div>

          {/* password */}
          <div>
            <label htmlFor="password">Mật khẩu</label>
            <input
              type="text"
              name="password"
              id="password"
              placeholder="123456..."
              {...register("password", {
                required: "Vui lòng nhập mật khẩu.",
                minLength: { value: 8, message: "Mật khẩu tối thiếu 8 kí tự." },
              })}
              className={`mt-1 block w-full px-3 py-2   broder-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-300 focus:border-e-indigo-300 ${errors.password ? "border-red-500" : ""}`}
            />
            {errors.password && (
              <span className="text-red-500 mt-1 text-xs">
                {errors.password?.message}
              </span>
            )}
          </div>

          {/* submit */}
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4  border-transparent rounded-md shadow-sm text-[16px] md:text-sm font-medium text-white bg-[#5EC9FF] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoginLoading ? "Đăng nhập..." : "Đăng nhập"}
          </button>
          <div className="flex justify-between text-[13px] md:text-[16px] ">
            <a
              href="/account/register"
              className=" text-xs block font-medium text-gray-500 hover:text-blue-500"
            >
              Quên mật khẩu
            </a>
            <a
              href="/account/register"
              className=" text-xs block font-medium text-gray-500 hover:text-blue-500"
            >
              Đăng kí ngay
            </a>
          </div>
        </form>
      </div>
    </>
  );
};
export default LoginForm;
