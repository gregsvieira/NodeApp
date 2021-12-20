const questions = [
    "Qual seu nome?",
    "O que aprendi hoje?",
    "O que preciso rever?",
    "O que me deixou frustrado?",
    "O que poderia fazer para melhorar?",
]
const ask = ( index = 0) => {
process.stdout.write("\n" + questions[index] + ">")
}

ask()

const answers = []
process.stdin.on("data", data => {
   answers.push(data.toString().trim())
   if (answers.length < questions.length) {
       ask(answers.length)
    } else {
    console.log(answers)
    process.exit()
    }
})
process.on('exit', () => {
    console.log(`
    Bacana ${answers[0]}!

    O que aprendeu hoje foi:
    ${answers[1]}

    O que precisa rever e estudar novamente é:
    ${answers[2]}

    O que te deixou frustrado foi:
    ${answers[3]}

    E o que você pode fazer em relação a isso é:
    ${answers[4]}

    Volte amanhã para continuar evoluindo, ${answers[0]}!
    `)
})
