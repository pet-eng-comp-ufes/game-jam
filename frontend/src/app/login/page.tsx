import { api } from "@/services/api";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default function Login() {

  async function handleLogin(formData: FormData) {
    "use server"

    const username = formData.get('username')
    const senha = formData.get('senha')
    if(username == '' || senha == '') return

    try {

      const response = await api.post('/sessao', {
        username,
        senha
      })

      if(!response.data.token) return

      const cookieStore = await cookies()
      const expressTime = 60 * 60 * 24 * 30
      cookieStore.set("sessao", response.data.token, {
        maxAge: expressTime,
        path: "/",
        httpOnly: false,
        secure: process.env.NODE_ENV === "production"
      })

      console.log(response.data)
    } 
    catch(err) {

      console.log(err)
      return
    }

    redirect("/admin")
  }

  return(
    
    <div className="h-screen flex flex-col justify-center items-center bg-blue-950">
        
        <img src='logo.png' alt="Logo da Pizzaria" className="md:h-52 h-36"/>

        <section className="mt-6 flex flex-col justify-center items-center gap-4 md:w-[600px] w-[90%]">

          <form action={handleLogin} className="text-white pb-4 text-lg flex flex-col w-[90%] gap-4">

            <input 
              type="text"
              name="username"
              placeholder="username"
              required
              className="h-10 px-4 rounded-lg border border-gray-100 bg-dark-900"
            />

            <input 
              type="password"
              name="senha"
              placeholder="senha"
              required
              className="h-10 px-4 rounded-lg border border-gray-100 bg-dark-900"
            />

            <button type="submit" className="h-10 bg-red-900 rounded-lg hover:scale-105 duration-500">
              Acessar
            </button>
          </form>

        </section>

    </div>
  )
}