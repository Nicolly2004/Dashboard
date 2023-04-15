import { useForm } from "react-hook-form"
import styles from "./style.module.css";
import { Input } from "../../components/input";
import { FormGroup } from "../../components/FormGroup";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup"
import { Link } from "react-router-dom";

interface LoginData {
    email: string;
    senha: string;
}

const schema = yup.object().shape({
    email: yup
    .string().typeError("Os dados enviados são inválidos")
    .email("O email informado não é válido")
    .required("Informe seu email"),

    senha:yup  
    .string().typeError("Os dados enviados são inválidos")
    .min(8,"Sua senha deve conter ao menos 8 caracteres")
    .required("Informe sua senha")
});


const Login = () =>  {
    const { register,
         handleSubmit, 
         formState: {errors}
         } = useForm<LoginData>({resolver: yupResolver(schema)});


    const onSubmit = (dados: LoginData) =>{
        console.log(dados)
    }

    return(
        <div className={styles.container}>
        <form onSubmit={handleSubmit(onSubmit)}>
        <main className={styles.main}>
        <h1 className={styles.title}>Faça Login</h1>
        <Input label="Email" id="email" type="email" {...register("email")} error={errors?.email?.message} />
        <Input label="Senha" id="senha" type="password" {...register("senha")} error={errors?.senha?.message} />
    
        <FormGroup>
            <button className={styles.login}>Logar</button>
        </FormGroup>
        <div className={styles.mainFooter}>
            <p>Ainda não possui uma conta? <Link to="/registro">Cadastre-se</Link></p>
        </div>
    </main>
    </form>
    </div> 
    
    );
};

export default Login;