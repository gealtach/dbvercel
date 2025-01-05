import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "text", placeholder: "jsmith@cleiva.com" },
                password: { label: "Password", type: "password", placeholder: 'Senha' }
            },
            async authorize(credentials, req) {
                try {
                    console.log(credentials);
                    
                    // Aquí deberías validar las credenciales contra tu base de datos
                    // Este es solo un ejemplo
                    if (credentials?.email === "usuario@ejemplo.com" && credentials?.password === "contraseña123") {
                        // Retorna un objeto usuario si la autenticación es exitosa
                        return {
                            id: "1",
                            email: credentials?.email,
                            name: "Usuario Ejemplo"
                        }
                    } else {
                        // Retorna null si las credenciales son inválidas
                        return null;
                    }
                } catch (error) {
                    console.error("Error en authorize:", error);
                    return null;
                }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    cookies: {
        sessionToken: {
            name: `next-auth.session-token`,
            options: {
                httpOnly: true,
                sameSite: 'lax',
                path: '/',
                secure: process.env.NODE_ENV === "production" // False en desarrollo
            }
        }
    },
    // Puedes agregar más configuraciones de NextAuth aquí
    pages: {
        signIn: '/auth/signin', // Página personalizada de login (opcional)
        error: '/auth/error'    // Página de error personalizada (opcional)
    }
});

export { handler as GET, handler as POST }