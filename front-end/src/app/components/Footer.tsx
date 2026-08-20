import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#000000] py-4 w-full mt-20">

      {/* Desktop */}
      <div className="hidden md:flex justify-between items-center h-[130px] w-[80%] mx-auto mt-3">
        {/* Logo PET */}
        <div className="flex justify-start">
          <Link href="/">
            <img src="/logopet.png" alt="Logo do PET Engenharia de Computação" className="w-[128px]" />
          </Link>
        </div>

        {/* Ícones */}
        <div className="flex items-center gap-4">
          <a href="mailto:topcomufes@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src="/Email.png" alt="Email" className="w-[70px]" />
          </a>
          <a href="https://www.instagram.com/petengcomp/" target="_blank" rel="noopener noreferrer">
            <img src="/Instagram.png" alt="Instagram" className="w-[70px]" />
          </a>
          <a href="https://www.youtube.com/@PETEngCompUFES" target="_blank" rel="noopener noreferrer">
            <img src="/youtube.png" alt="Youtube" className="w-[70px]" />
          </a>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex justify-between items-center h-[130px] w-[80%] mx-auto mb-4 mt-3">
        <div className="flex justify-start">
          <Link href="/">
            <img src="/logopet.png" alt="Logo do PET Engenharia de Computação" className="w-[100px]" />
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <a href="mailto:topcomufes@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src="/Email.png" alt="Email" className="w-[50px]" />
          </a>
          <a href="https://www.instagram.com/petengcomp/" target="_blank" rel="noopener noreferrer">
            <img src="/Instagram.png" alt="Instagram" className="w-[50px]" />
          </a>
          <a href="https://www.youtube.com/@PETEngCompUFES" target="_blank" rel="noopener noreferrer">
            <img src="/youtube.png" alt="Youtube" className="w-[50px]" />
          </a>
        </div>
      </div>

      {/* Texto */}
      <div className="mx-2">
        <p className="text-center text-[10px] sm:text-xs md:text-sm text-[#FFFFFF] font-bold">
          Created by PET Engenharia da Computação UFES ・ 2025 ・ All rights reserved
        </p>
      </div>

    </footer>
  );
}
