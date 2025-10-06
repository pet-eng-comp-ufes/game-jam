"use client"

import { useState, useEffect } from "react"
import Layout from "../components/Layout"
import { Material } from "@/models/Materiais"
import MaterialComponente from "../components/MaterialComponente"
import FormCadastrarMaterial from "../components/FormCadastrarMaterial"
import Botao from "../components/Botao"

export default function Materiais() {

    const [materiais, setMateriais] = useState<Material[]>()
    const [exibeFormCadastro, setExibeFormCadastro] = useState(false)

    async function cadastrarMaterial(nome: string, descricao: string, link: string) {

        await Material.cadastrar({ nome, descricao, link })
        setExibeFormCadastro(false)
        carregaMateriais()
    }

    async function carregaMateriais() {
        
        const response: Material[] = await Material.obtemTodosMateriais()
        setMateriais(response)
    }

    async function deletaMaterial(material: Material) {

        await material.deletar()
        carregaMateriais()
    }

    useEffect(() => {
        carregaMateriais()
    }, [])

    return (
        
        <Layout 
            titulo="Materiais"
            form={exibeFormCadastro 
                ? <FormCadastrarMaterial 
                    cadastrarMaterial={cadastrarMaterial} 
                    fechar={() => setExibeFormCadastro(false)} 
                  /> 
                : false}
        >
            <Botao nome="Cadastrar Material" onClick={() => setExibeFormCadastro(true)} className="mb-5"/>

            <ul className="flex flex-col gap-5">
                {
                    materiais?.length === 0 ? (
                        <span>Não há materiais cadastrados.</span>
                    ) : (
                        materiais?.map((material) => (
                            <MaterialComponente 
                                deletaMaterial={deletaMaterial} 
                                material={material} 
                                key={material.getId}
                            />
                        ))
                    )
                }
            </ul>
        </Layout>
    )
}
