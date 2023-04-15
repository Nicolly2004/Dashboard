import { ReactNode } from "react";
import styles from "./style.module.css";

interface FormGroupProps{
    children: ReactNode[] | ReactNode
}

export const FormGroup: React.FC<FormGroupProps> = ({children}) => {

    return(
        <div className={styles.formGroup}>{children} </div>
    );
}