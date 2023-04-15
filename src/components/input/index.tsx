import { InputHTMLAttributes, ReactNode, forwardRef } from "react"
import styles from "./styles.module.css"
import { FormGroup } from "../FormGroup"

interface InputProps  extends InputHTMLAttributes<HTMLInputElement> {
label: string,
error?: string,
}


 export const Input: React.FC<InputProps> = forwardRef<HTMLInputElement,InputProps>(({
label, 
error,
 ...inputProps
},ref) =>{
  return (
    <FormGroup>
    <label className={styles.label} htmlFor={inputProps.id}>
    {label}
    
</label>
 <input className={styles.input}  {...inputProps} ref={ref} />
 {error && (<span className={styles.messageError}>{error}</span>)}

</FormGroup> 
);
});