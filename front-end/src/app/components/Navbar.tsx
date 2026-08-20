import Link from "next/link"

interface NavbarProps {
  tema?: string
}

const paginas = [
  { label: 'Início', url: '/', value: 'inicio' },
  { label: 'Regras', url: '/regras', value: 'regras' },
  { label: 'Materiais', url: '/materiais', value: 'materiais' },
  { label: 'Jogos', url: '/jogos', value: 'jogos' },
  { label: 'Apoio', url: '/apoio', value: 'apoio' },
]

export default function Navbar({ tema }: NavbarProps) {
  return (
    <nav className={`w-full py-4 ${tema === 'dark' ? 'bg-[#0B0B0B]' : 'bg-[#3D1461]'}`}>
      {/* container geral: coluna no mobile, linha em telas maiores */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center px-6 gap-4">
        
        {/* Menu */}
        <div className="flex flex-wrap justify-center md:justify-start">
          {paginas.map((pagina) => (
            <Link 
              key={pagina.label} 
              href={pagina.url}
              className="list-none px-4 text-sm lg:text-lg"
            >
              <div className="px-2 py-2 duration-300 ease-in">
                <span className="cursor-pointer dark:text-white hover:text-[#B76CF9]">
                  {pagina.label}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Botões */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-6 w-full md:w-auto">
          <Link href="/inscricao" className="w-full md:w-auto">
            <button className="bg-[#B76CF9] text-black font-semibold px-4 py-2 rounded-full hover:opacity-90 transition w-full md:w-auto">
              Inscreva-se
            </button>
          </Link>
          <Link href="/admin" className="w-full md:w-auto">
            <button className="bg-[#ADF86C] text-black font-semibold px-4 py-2 rounded-full hover:opacity-90 transition w-full md:w-auto">
              Login
            </button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
