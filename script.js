        /*Crie um objeto em JavaScript para colocar dois atributos de um produto. Atribua o preço e descrição do produto com o valor “90” e a descrição com o valor “Mouse”. Mostre no console o valor dos dois atributos.*/

        const produto = [
            {
                descriçao: 'Mouse',
                valor: 90
            }
            
        ]

        for (let i of produto) {
            console.log(`Descrição: ${i.descriçao}, Valor: ${i.valor}`)
        }


        /*Crie um objeto em JavaScript para colocar 5 atributos de um notebook. Atribua os seguintes atributos:
        Processador = i7
        Memória = 16GB
        Preço = 5000
        HD = 1TB
        SSD = 256GB
        Por fim, mostre o nome e valor de cada atributo no console, exatamente como está na atividade.*/

        const notebook = [
            {
                processador: 'i7',
                memoria:'16GB',
                preco: 5000,
                hd: '1TB',
                ssd: '256GB'
            }
        ]

        for (let componentes of notebook) {
            console.log(`Especificações do notebook: Processador: ${componentes.processador}, Memória:${componentes.memoria},Preço:${componentes.preco}, HD:${componentes.hd} SSD:${componentes.ssd}`)
        }

        /*Crie um objeto para colocar nome e duas notas. Atribua nome e duas notas para o primeiro objeto, que será nosso primeiro aluno.
        Agora crie mais um objeto para colocar informações do nosso segundo aluno. Mostre as informações de cada aluno no console.
        Mostre também a média do primeiro aluno e a média do segundo aluno. Por fim mostre a média desta turma de 2 alunos.*/

        const gustavo = 
        {
            nome:'Gustavo',
            nota1: 9,
            nota2: 10
        }
    
        const nalanda = 
        {
            nome:'Nalanda',
            nota1: 9,
            nota2: 8
        }

        console.log(nalanda)
        console.log(gustavo)

        console.log("média Gustavo:" + (gustavo.nota1 + gustavo.nota2) / 2);

        console.log("média Nalanda:" + (nalanda.nota1 + nalanda.nota2) / 2);

        console.log("Média da turma:" + (gustavo.nota1 + gustavo.nota2 + nalanda.nota1 + nalanda.nota2) / 4)

        /*Crie um cadastro de pessoas onde o usuário informe o nome, idade e se está trabalhando ou não, se a pessoa estiver trabalhando pergunte para ele o salário que está ganhando. Para cada pessoa cadastrada, pergunte ao usuário se ele deseja continuar cadastrando ou não. No final, mostre as pessoas que estão desempregadas, as pessoas que estão empregadas separadas pelas que ganham mais que 2500 e menos que 2500.

        Exemplo de resultado:
        Pessoas desempregadas:
        Nome: Alessandro, Idade: 28
        Nome: Alessandro, Idade: 28

        Pessoas empregadas com salários menores que 2500:
        Nome: Alessandro, Idade: 28, Salário: 1500
        Nome: Alessandro, Idade: 28, Salário: 2400

        Pessoas empregadas com salários maiores que 2500:
        Nome: Alessandro, Idade: 28, Salário: 2700
        Nome: Alessandro, Idade: 28, Salário: 3000*/

        let continuar = true

        const desempregados = []

        const empregadosmenos = []

        const empregadosmais = []

        while (continuar) {
            const nome = prompt('Insira um nome')
            const idade = Number(prompt('Insira uma idade'))
            const emprego =confirm('Está empregado?')

            if (emprego == false) {
                desempregados.push(nome, idade)
            } else {
                const salario = Number(prompt('Insira o salário.'))

                if (salario <= 2500) {
                    empregadosmenos.push(nome, idade, salario)
                } else {
                    empregadosmais.push(nome, idade, salario)
                }
            } 


            continuar = confirm('Deseja continuar cadastrando?')

        }
        
        document.write(`Pessoas desempregadas:</br>
        ${desempregados}</br> Pessoas empregadas com salários menores que 2500:</br> ${empregadosmenos}</br> Pessoas empregadas com salários maiores que 2500:</br> ${empregadosmais}`)