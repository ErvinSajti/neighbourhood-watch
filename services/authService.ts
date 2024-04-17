import {supabase} from "@/lib/supabase";

class AuthService {
    static async login(email: string, password: string) {
        try {
            await supabase.auth.signInWithPassword({
                email,
                password
            })
        } catch (error) {
            console.error(error)
        }
    }
}