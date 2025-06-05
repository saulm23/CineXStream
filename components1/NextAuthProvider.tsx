import { SessionProvider } from "next-auth/react";

export const NextAuthProvider = ({children}:{children:ReactNode})=>{
    return<SessionProvider>{children}</SessionProvider>;
}