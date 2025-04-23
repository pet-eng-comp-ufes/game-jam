"use client"

import { useEffect, useState } from "react"
import { Usuario } from "@/models/Usuario";
import Botao from "./components/Botao";
import FormAlterarSenha from "./components/FormAlterarSenha";
import { toast } from "sonner";
import Layout from "./components/Layout";

export default function Admin() {

    const [usuario, setUsuario] = useState<Usuario>()
    const [exibeFormAlterarSenha, setExibeFormAlterarSenha] = useState<boolean>(false)
    
    async function detalhesUsuario() {
        
        const res = await Usuario.detalhesUsuarioLogado()

        setUsuario(res)
    }

    async function alterarSenha(senha: string, senhaConfirmada: string) {

        if(senha != senhaConfirmada){
            toast.warning("As senhas não coincidem")
            return
        }

        await usuario?.alterarSenha(senha)
        setExibeFormAlterarSenha(false)
    }

    useEffect(() => {
        detalhesUsuario()
    }, [])

    return (

        <Layout titulo={`Olá, ${usuario ? usuario.getUsername : ''}!`}
        form={exibeFormAlterarSenha ? <FormAlterarSenha alterarSenha={alterarSenha} fechar={() => setExibeFormAlterarSenha(false)}/> : false}
        >

                <Botao nome="Alterar Senha" onClick={() => setExibeFormAlterarSenha(true)}/>

                <p>
                    Seja bem-vindo(a) à área administrativa do site do Game Jam! Fique atento nas orientações abaixo para garantir que tudo funcione corretamente.
                </p>
        </Layout>
    )
}