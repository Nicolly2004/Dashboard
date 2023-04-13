import { useForm } from "react-hook-form"
import styles from "./style.module.css";

interface LoginData {
    email: string;
    senha: string;
}
const Login = () =>  {
    const { register, handleSubmit, formState: {errors} } = useForm<LoginData>();


    const onSubmit = (dados: LoginData) =>{
        console.log(dados)
    }

    return( <div className={styles.container}>
        <form onSubmit={handleSubmit(onSubmit)}>
        <main className={styles.main}>
        <h1 className={styles.title}>Faça Login</h1>
        <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="email" >Email</label>
            <input className={styles.input} id="email" type="email" {...register("email", {required:true})}/>
            {errors?.email && errors.email.message}
        </div>

        <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="senha" >Senha</label>
            <input className={styles.input} id="senha" type="password"{...register("senha",{minLength:8, required:true})}/>
            {errors?.email && errors.email.message}

        </div>
        <div className={styles.formGroup}>
            <button className={styles.login}>Logar</button>
        </div>
    </main>
    </form>
    </div> 
    );
};

export default Login;