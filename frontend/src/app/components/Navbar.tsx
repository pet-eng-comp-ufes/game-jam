import Link from "next/link"

const paginas = [

    {
        label: 'Início',
        url: '/',
        value: 'inicio'
    },
    {
        label: 'Jogos',
        url: '/',
        value: 'jogos'
    },
    {
        label: 'Regras',
        url: '/',
        value: 'regras'
    },
    {
        label: 'Materiais',
        url: '/',
        value: 'materiais'
    },
    {
        label: 'Apoio',
        url: '/',
        value: 'apoio'
    },
]

export default function Navbar() {

    return (

        <nav className="w-full dark:bg-[#0B0B0B] py-2">
            

            <div className="w-full flex">

                {
                    paginas.map(pagina => {
                        return(
            
                            <Link 
                                key={pagina.label} 
                                className={`
                                    list-none
                                    px-4 text-sm lg:text-lg
                                `}
                                href={pagina.url}
                                >
                                <div className="px-3 py-2 h-full w-full duration-300 ease-in">

                                    <span className="cursor-pointer dark:text-white hover:text-[#B76CF9]">
                                        {pagina.label}
                                    </span>
                                </div>
                            </Link>
                    )})
                }
            </div>

        </nav>
    )
}