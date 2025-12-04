import type { AuthResponse, LoginCredentials, IUSER ,Register} from "../type";

export const AuthSerivce = {

  // User hiện tại
  getCurrentUser: async () : Promise<AuthResponse> => {
    // fake api =))
    await new Promise((resolve) => setTimeout(resolve, 500))
    
    const user : IUSER  = {
        id: 1,
        email: 'test@gmail.com',
        full_name: "le van khoa",
        role: "user"
      }

      const mockRepose : AuthResponse = {
        success: true,
        message: "get user successfully",
        user
      }
      return mockRepose

  },

  // Đăng nhập
  login: async( data: LoginCredentials) : Promise<AuthResponse> => {

    // fake api =))
    await new Promise((resolve) => setTimeout(resolve, 500))

    if(data.email == 'test@gmail.com' &&  data.password == '12345678') {
      const user : IUSER  = {
        id: 1,
        email: data.email,
        full_name: "le van khoa",
        role: "user"
      }

      const mockRepose : AuthResponse = {
        success: true,
        message: "login successfully",
        user
      }
      return mockRepose
    }else {
      // throw lỗi giống axios
      throw {
        response: {
          data: { message: 'Email hoặc mật khẩu không đúng' },
        },
      };
    }
  },

  // Đăng Kí
  register: async (data: Register) : Promise<AuthResponse> => {

      await new Promise((resolve) => setTimeout(resolve, 500));

      if (data.email === "test@example.com") {
       throw {
         response: {
           data: { message: "Email đã tồn tại" },
         },
       };
     }

    const mockReponse : AuthResponse = {
      success: true,
      message: "Register success , please login now"
    }

    return mockReponse
  }
  
}