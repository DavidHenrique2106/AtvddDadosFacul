import { useState } from "react";

const JogoDeDados: React.FC = () => {
  const [dado1, setDado1] = useState<number | null>(null);
  const [dado2, setDado2] = useState<number | null>(null);
  const [resultado, setResultado] = useState<string | null>(null);
  const [soma, setSoma] = useState<number | null>(null);
  const [vitorias, setVitorias] = useState<number>(0);
  const [totalJogadas, setTotalJogadas] = useState<number>(0);

  const gerarESomar = () => {
    const numero1 = Math.floor(Math.random() * 6) + 1; 
    const numero2 = Math.floor(Math.random() * 6) + 1;
    const total = numero1 + numero2;

    setDado1(numero1);
    setDado2(numero2);
    setSoma(total);

    setTotalJogadas(totalJogadas + 1);

    if (total === 7 || total === 11) {
      setVitorias(vitorias + 1);
      setResultado("Ganhou!");
    } else {
      setResultado("Perdeu!");
    }
  };

  const calcularPercentual = (): number => {
    return totalJogadas > 0 ? (vitorias / totalJogadas) * 100 : 0;
  };

  return (
    <div>
      <button onClick={gerarESomar}>Lançar Dados</button>
      {dado1 !== null && dado2 !== null && (
        <p>
          Dado 1: {dado1} <p>Dado 2: {dado2}</p>
        </p>
      )}
      {soma !== null && <p>Soma: {soma}</p>}
      {resultado && <p>Resultado: {resultado}</p> } <br /> <br />
      <i>
      <p>Vitórias: {vitorias}</p>
      <p>Total de Jogadas: {totalJogadas}</p>
      <p>Percentual de Vitórias: {calcularPercentual().toFixed(2)}%</p>
      </i>
    </div>
  );
};

export default JogoDeDados;
