import styles from "./styles.module.css";
import { Card } from "../../components/Card";
import {Chart as ChartJS, 
    CategoryScale, 
    LinearScale,
     PointElement,
     LineElement, 
     Title,
     Tooltip, 
     Filler,
     Legend
    } from "chart.js";


import { faker } from "@faker-js/faker";
import { useRef } from "react";
import { Chart } from "react-chartjs-2"

ChartJS.register(
    CategoryScale, 
    LinearScale,
     PointElement,
     LineElement, 
     Title,
     Tooltip, 
     Filler,
     Legend
)

export default function Dashboard()  {
    const chartRef = useRef<ChartJS>(null)
    const options = {
        responsive: true,
        Plugins:{
            legend:{
                position: "top" as const,
            },
                title:{
                    display: true,
                    text:"Gráfico de vendas semanais"
                },
            },
        };

        const labels = [
        "Domingo",
        "Segunda-Feira",
        "Terça-Feira",
        "Quarta-Feira",
        "Quinta-Feira",
        "Sexta-Feira",
        "Sábado"
    ];
    const database =  labels.map(() => faker.datatype.number({max: 999, min:0}))

    const maxSell = Math.max(...database) ;
    const minSell = Math.min(...database);

const maxIndex = database.indexOf(maxSell);
const minIndex = database.indexOf(minSell);

    const data ={
        labels,
        datasets:[
            {
                fill: false,
                label: "Vendas Diárias",
                borderColor:"rgba(255,99,132)",
                data: database,
            }
        ]
    }
    
    return (
        <main className={`${styles.main} ${styles.grid}`} >
            <header className={styles.header}>
            <Card title="Suporte Atendidos" 
            goal="100%" 
            reached="70%"
             percentage={30 }
             />

            <Card title="Vendas Efetuadas" 
            goal="500%" 
            reached="350%" 
            percentage={75}
            />

            <Card title="Satisfação Geral"
             goal="100%"
            reached="80%"
            percentage={80}
               />
            </header>
            <section className={styles.sectionCard}>
                 <h3>Vendas por dia da Semana</h3>
                 <div className={styles.cardContainer}>

                    <aside>
                        <div className={styles.mostSell}>
                            <span>Dia com mais venda</span>
                            {labels[maxIndex]}
                            </div>

                   <div className={styles.lessSell}>
                    <span>Dia com menos venda</span>
                    {labels[minSell]}
                   </div>

                    </aside>
                    <Chart 
                    type="line" 
                    options={options} 
                    data={data as any}  
                    id="chart" 
                    className={styles.chart}
                    ref={chartRef}
                    />
                    </div>
            </section>
        </main>
    )
}