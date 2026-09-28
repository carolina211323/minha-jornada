const estudantes = [
    {
        id: 1,
        nome: "Estudante 01",
        idade: 16,
        frequencia: 92,
        media: 8.4,
        atividades: 18
    },
    {
        id: 2,
        nome: "Estudante 02",
        idade: 17,
        frequencia: 78,
        media: 6.7,
        atividades: 14
    },
    {
        id: 3,
        nome: "Estudante 03",
        idade: 16,
        frequencia: 95,
        media: 9.1,
        atividades: 20
    },
    {
        id: 4,
        nome: "Estudante 04",
        idade: 18,
        frequencia: 69,
        media: 5.8,
        atividades: 10
    },
    {
        id: 5,
        nome: "Estudante 05",
        idade: 17,
        frequencia: 86,
        media: 7.5,
        atividades: 16
    }
];
const totalEstudantes = estudantes.length;

const mediaFrequencia =
    estudantes.reduce((soma, estudante) => soma + estudante.frequencia, 0)
    / totalEstudantes;

const mediaNotas =
    estudantes.reduce((soma, estudante) => soma + estudante.media, 0)
    / totalEstudantes;

const mediaAtividades =
    estudantes.reduce((soma, estudante) => soma + estudante.atividades, 0)
    / totalEstudantes;

console.log("Total de estudantes:", totalEstudantes);
console.log("Média de frequência:", mediaFrequencia.toFixed(1) + "%");
console.log("Média das notas:", mediaNotas.toFixed(1));
console.log("Média de atividades:", mediaAtividades.toFixed(1));
document.getElementById("total-estudantes").textContent = totalEstudantes;

document.getElementById("media-frequencia").textContent =
    mediaFrequencia.toFixed(1) + "%";

document.getElementById("media-notas").textContent =
    mediaNotas.toFixed(1);

document.getElementById("media-atividades").textContent =
    mediaAtividades.toFixed(1);
    const grafico = document.getElementById("graficoFrequencia");

new Chart(grafico, {
    type: "bar",
    data: {
        labels: ["Estudante 01", "Estudante 02", "Estudante 03", "Estudante 04", "Estudante 05"],
        datasets: [{
            label: "Frequência (%)",
            data: [92, 78, 95, 69, 86]
        }]
    }
});

console.log("GRÁFICO FUNCIONANDO");