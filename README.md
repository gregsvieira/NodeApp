
<h1 align="center">
  <br>
   :rocket: BestMe - NodeApp
  <br>  <br>
  </h1>

<p align="center">
 
</p>

<h4 align="center">
BestmeApp is a app for reflect about your evolution on studies
</h4>

<p align="center">
  <a href="#question">What is</a> |&nbsp;&nbsp;&nbsp;
  <a href="#how">How to use</a> |&nbsp;&nbsp;&nbsp;
  <a href="#work">How work</a> |&nbsp;&nbsp;&nbsp;
  <a href="#tech">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#lice">License</a> |&nbsp;&nbsp;&nbsp;
</p>
<p align="center">
<a href="https://ibb.co/tKHZRtq"><img src="https://i.ibb.co/541YZyr/node.png" alt="node" border="0"></a></p>

## <a name="question">❓ WHAT IS IT? <a/>
  
An application that uses [process.in], [process.out], [process.on] and asynchronism to help the user reflect. Designed to practice NodeJs.

  
## <a name="how">:rocket: HOW TO USE? <a/>

1. Make the download
2. Open your terminal git bash
3. Open the bestme app folder via the terminal: cd NodeApp
4. From the terminal open the index by typing: node index.js
5. Answer the questions through the terminal
6. ENJOY! 


## <a name="work"> 🔨 HOW WORK?<a/>

1. A const with questions (questions) with total length = 4
2. Another const to ask (ask) and starting with index = 0
3. Created an array that will receive the answers.
4. When executing the function it prints on the screen index = 0, or the first question (questions.lenght = 0)
5. When entering the standard input process line (process.stdin) it stores it in eventloop.
6. When it hears that it has an input of data (data) it makes the callback of the eventloop and puts us the function.
7. The eventloop does not terminate while the function is in on(process.stdin.on)
5. When responding, it collects the response and puts it in the corresponding array.
6. If the size of the answers is smaller than the size of the questions (answers < questions) it runs ask() again and prints the next question.
7. The process is turned on by .on until the answer size (answers.lenght) is greater than the question size (questions.lenght)
8. When the answers are bigger (answers >) it runs the exit process (process.exit)
9. The final process will listen for the exit event (process.on('exit')) and will call a callback function.
10. And by console.log it will print a literal template on the screen making callback with the answers (answers).

## <a name="tech">:rocket: Technologies</a>

This simple project was developed with the following technologies:

- [NODEJS](https://nodejs.org/en/)
- [JS](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/)
- [VS Code][vscode] with [Liveserver]

  ##<a name="lice"> License</a>

This project is under the MIT license. See the [LICENSE] for more information.

---

Made with ♥ your projects<br>
by Gregory Vieira :wave: [Get in touch!](https://www.linkedin.com/in/gregory-vieira-090a72219/)
