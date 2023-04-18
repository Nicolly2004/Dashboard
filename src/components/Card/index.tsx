import styles from "./style.module.css";
import grafico from "../../assets/grafico.svg";
interface CardProps{
    title:string;
     goal:string;
    reached:string;
    percentage:number,
    className?:string;
}

export const Card: React.FC<CardProps>= ({
    title,
    goal,
    reached,
    percentage,
    className}) => {
    return(
        <div className = {`${styles.box} ${styles.grid} ${className}`} >
<div className={styles.title}>{title}</div>
<div className={styles.body}>

<svg viewBox="0 0 232 232" className={styles.grafico} style={{"--percentage" : percentage} as React.CSSProperties}>
<circle cx="50%" cy="50%" r="98.5" opacity="0.1" stroke="#D9D9D9" />
<circle
cx="50%"
cy="50%"
r="98.5"
stroke="url(#paint0_linear_201_85)"
/>
<defs>
<linearGradient
id="paint0_linear_201_85"
x1="-9"
y1="82"
x2="145"
y2="178"
gradientUnits="userSpaceOnUse"
>
<stop stopColor="#CE9FFC" />
<stop offset="1" stopColor="#7367F0" />
</linearGradient>
</defs>
</svg>

<div className={styles.content}>
<h3 className={styles.percent}>{reached}</h3>
<p className={styles.percentGoal}>alcançada</p>
</div>
<div className={styles.bottom}>
<div className={styles.item}>
<span>Esperado</span>
<span>{goal}</span>
</div>
<div className={styles.item}>
<span>Alcançado</span>
<span>{reached}</span>
</div>
</div>
</div>
</div >
    );       
};