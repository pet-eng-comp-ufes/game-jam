import Menu from "./Menu"
import Titulo from "./Título"

interface LayoutProps {

    titulo: string
    form?: any
    children?: any
}

export default function Layout({ titulo, form, children }: LayoutProps) {

    return (

        <div className="flex">
            <Menu />

            {form}

            <div className="flex flex-col border p-10 w-full bg-gray-200">

                <Titulo valor={titulo}/>

                {children}
            </div>
        </div>
    )
}