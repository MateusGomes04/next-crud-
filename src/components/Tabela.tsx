import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal } from "react";
import Cliente from "../core/Cliente";
import { IconeLixo } from "./Icones";
import { IconeEdicao } from "./Icones";

interface TabelaProps {
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}

export default function Tabela(props: any) {

    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado



    function renderizarCabecalho() {
        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
            </tr>
        )

    }

    function renderizarDados() {
        return props.clientes?.map((cliente: { id: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; nome: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; idade: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }, id: any) => {
            return (
                <tr key={cliente.id}
                className={`${id % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                <td className="text-left p-4">{cliente.id}</td>
                <td className="text-left p-4">{cliente.nome}</td>
                <td className="text-left p-4">{cliente.idade}</td>
            </tr>
                
            )
        })
    }

    function renderizarAcoes(cliente: Cliente) {
        return (
            <td className="flex justify-center">
                {props.clienteSelecionado ? (

                    <button onClick={() => props.clienteSelecionado?.(cliente)} className={`
                    flex justify-center items-center
                    text-green-600 rounded-full p-2 m-1
                    hover:bg-purple-50
                    `}>
                        {IconeEdicao}
                    </button>

                ) : false }

                {props.clienteExcluido ? (

                <button onClick={() => props.clienteExcluido?.(cliente)} className={`
                flex justify-center items-center
                text-red-500 rounded-full p-2 m-1
                hover:bg-purple-50
                `}>{IconeLixo}</button>

                ) : false }
            </td>
        )
    }

    return (

            <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
            text-gray-100
            bg-gradient-to-r from-purple-500 to-purple-800
            `}>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}