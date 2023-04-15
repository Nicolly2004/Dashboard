import React from "react";
import styles from "./styles.module.css";
import {Input} from "../../components/input";
import { useForm } from "react-hook-form";
import { FormGroup } from "../../components/FormGroup";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
nome: yup
    .string()
    .required("Informe seu Nome"),
email: yup
    .string()
    .email("Informe um em-mail válido")
    .required("Informe seu email")
    .trim()
    .test({
        name: "isSobrenome",
        test: (valorAtual) =>{
            const nomeArray = valorAtual.split("");

            return nomeArray.length >= 2
        },
        message: "Informe ao menos um sobrenome sua anta"
    })
    .transform((valorAtual) => {
        const arrayNome = valorAtual.split("");
        return arrayNome.map((nomeMinusculo: string) => {

        return nomeMinusculo[0]
        .toLocaleUpperCase() 
        + nomeMinusculo.substring(1);
        }).join("");
    }),
nascimento:yup
     .date()
     .min("2023-04-14" , ({min}) => {
        const formataData = new Intl.DateTimeFormat("pt-br", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        });
         return `Seu nascimento precisa ser maior que:
         ${formataData.format(new Date(min+"T03:00:00.000")
         )}`;
     })
     .typeError("A data informada é inválida")
     .required("Informe sua data de nascimento"),
senha: yup
    .string()
    .required("Informe uma senha")
    .min(8,"Sua senha precisa ter no mínimo 8 caracteres"),
confirmaSenha:yup 
    .string()
    .required("Confirme sua senha").test({
    name:"confirmacao",
    test: (valor, contexto) =>{
        return valor === contexto.parent.senha
    },
    message: "As senhas não coicidem"
    }),

});

type CadastroFormData = {
    nome: string;
    email: string;
    senha: string;
    confirmaSenha: string;
    nascimento: Date;
};

const Registro: React.FC = () => {
    const{register,handleSubmit,formState: {errors} } = useForm<CadastroFormData>({resolver:yupResolver(schema) });

    const onSubmit = (data:CadastroFormData) => {
     console.log(data);
    }
    return (
        <div className={styles.container}>
        <form onSubmit={handleSubmit(onSubmit)}>
        <main className={styles.main}>
        <h1 className={styles.title}>Cadastre-se</h1>

        <Input label="Nome"
         type="text" 
         id="nome"
        {...register("nome")}
        error={errors?.nome?.message}
          />

        <Input label="Email" 
        type="email"
         id="email"
         {...register("email")}
         error={errors?.email?.message}
         />

        <Input label="Data de nascimento"
         type="date"
        id="nascimento"
        {...register("nascimento")}
        error={errors?.nascimento?.message}
         /> 

        <Input label="Senha"
         type="password" 
         id="senha" 
         {...register("senha")}
         error={errors?.senha?.message}
         />

        <Input label="Confirme a senha" 
        type="password" 
        id="confirme-senha"
         {...register("confirmaSenha")}
         error={errors?.confirmaSenha?.message}
         />

<FormGroup>
    <button className={styles.login}>Salvar</button>
</FormGroup>
<div className={styles.mainFooter}>
    <p>Ainda não possui uma conta? <Link  to="/login">Faça Login</Link></p>
 </div>

    </main>
    </form>
    </div> 
    )
};

export default Registro;