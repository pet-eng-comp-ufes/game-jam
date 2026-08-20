import { Material } from "@/models/Materiais"
import { IconeLixeira } from "./Icones"

interface MaterialProps {

    material: Material
    deletaMaterial: (material: Material) => void
}

export default function MaterialComponente({ material, deletaMaterial }: MaterialProps) {

    return (
        
        <div className="bg-white border border-gray-300 rounded-lg p-5 w-full max-w-sm">

            <div className="flex justify-between items-start">
                
                <div className="flex flex-col">

                    <span className="text-xl font-semibold text-gray-800 mb-2">
                        {material.getNome}
                    </span>
                    
                    <p className="text-base text-gray-600 mb-3">
                        {material.getDescricao}
                    </p>

                    {material.getLink && (
                        <a 
                            href={material.getLink} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="text-blue-600 hover:text-blue-800 text-base font-medium"
                        >
                            Abrir Link
                        </a>
                    )}
                </div>

                <button 
                
                    onClick={() => deletaMaterial(material)}
                    className="text-red-500 hover:bg-red-500 hover:text-white p-2 rounded-full transition ml-4"
                >
                    {IconeLixeira}
                </button>
            </div>
        </div>
    )
}
