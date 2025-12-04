
// service type
export interface IUSER {
  id: number,
  email: string,
  full_name: string,
  role: "admin" | "user"
}

export interface LoginCredentials {
  email: string ,
  password: string
}

export interface Register {
  email: string,
  password: string
}

export interface AuthResponse {
  success: boolean,
  message?: string,
  user?: IUSER
}

// context type
export interface AuthContextType {
  user: IUSER | undefined,
  isLoading: boolean,
  isAuthencated: boolean,
  login: (data: any) => Promise<AuthResponse>
  register: (data: any) => Promise<AuthResponse>

}