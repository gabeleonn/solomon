<div align="center">
  <h1 align="center">Projeto Solomon</h1>
  <p align="justify">Este projeto tem por finalidade traduzir e espalhar a palavra do Senhor Jesus Cristo. Baseado na <a href="https://bereanbibles.com/about-berean-study-bible/">Berean Bible</a>, mantendo a idea de tradução literal, ou mesmo mais perto do original possível.</p>
  <p align="justify">O Projeto não tem fins lucrativos, portanto pode ser usado por terceiros. Com as condições devidas, que podem ser analisadas <a href="https://github.com/gabeleonn/solomon/blob/main/LICENSE">aqui</a>.</p>
  <font align="center" size="2" color="#999">Tanto o Web App que será criado, quanto a API (ou APIs) serão de uso gratuito. <b>Mateus 10:8</b></font>
</div>

<div>
     <h2>Ideais</h2>
    <ul>
        <li>Evangelização.</li>
        <li>Material de qualidade para todos de forma <i>GRATUITA</i>.</li>
        <li>Proximidade com o original.</li>
        <li>Colaboração entre todos.</li>
    </ul>
</div>

<div>
     <h2>Projetos</h2>
    <h3><a href="https://github.com/gabeleonn/solomon">Solomon</a></h3>
    ➥ API Bíblia + Strongs + Referências Cruzadas + Cabeçalho<br/>
    ➥ API Tradução
    <h3><a href="https://github.com/gabeleonn/charis">Charis</a></h3>
    ➥ Interface bíblia online interlinear português/inglês com original, strongs, referências cruzadas e cabeçalho.<br/>
    ➥ Interface para tradução da Bíblia Sagrada.
</div>

<div>
    <h2>Tecnologias</h2>
    <div align="center">
        <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
        <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="Typescript" />
        <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="Javascript" />
        <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
        <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="Express" />
        <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" alt="Jest" />
        <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
        <!-- <img src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white" alt="Mysql" /> -->
        <img src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D" alt="VueJS" />
        <img src="https://img.shields.io/badge/nuxt.js-00C58E?style=for-the-badge&logo=nuxtdotjs&logoColor=white" alt="NuxtJS" />
    </div>
</div>

<div>
    <h2>Scripts</h2>
    <h6>Generate JSON files from the xlsx data</h6>
    <pre>yarn generate:json</pre>

</div>

<div>
    <h2>Features</h2>
    <div>
        <h3>API</h3>
        <ul>
            <h4>Bíblia</h4>
            <li>
                Ler todos os livros<br />
                <font size="2" color="#999">➥ Trazer lista de livros da Bíblia com nome, descrição, categorias e quantidade de capítulos.</font>
            </li>
            <li>
                Ler versículos por livro e capítulo<br />
                <font size="2" color="#999">➥ Trazer lista de versículos por livro(short_name) e capítulo.</font>
            </li>
            <li>
                Ler versículo por livro, capítulo e versículo<br />
                <font size="2" color="#999">➥ Trazer um único versículo por livro(short_name), capítulo e versículo.</font>
            </li>
            <li>
                Ler strong por número de referência<br />
                <font size="2" color="#999">➥ Trazer definição da palavra, transliterado, original, ordenação e parsing com o número strong.</font>
            </li>
            <li>
                Ler todos os livros separando por categoria<br />
                <font size="2" color="#999">➥ Trazer lista de livros da Bíblia com nome, descrição, categorias e quantidade de capítulos separados pelas divisões bíblicas (ex: profetas menores, profetas maiores, etc).</font>
            </li>
            <li>
                Ler estatística de palavras<br />
                <font size="2" color="#999">➥ Trazer quantidade total de palavras, palavras traduzidas, palavras não traduzidas, quantas vezes uma mesma tradução se repete baseado no strong number, usuários e quantas traduções tiveram, porcentagem já traduzida.</font>
            </li>     
        </ul>
        <ul>
            <h4>Tradução</h4>
            <li>
                Ler todas as palavras (filtro por traduzidas ou não)<br />
                <font size="2" color="#999">➥ Trazer lista de todas as palavras apenas ligadas ao seu respectivo livro.</font>
            </li>
            <li>
                Ler todos os cabeçalhos (filtro por traduzidos ou não)<br />
                <font size="2" color="#999">➥ Trazer lista cabeçalhos ligados ao respectivo livro.</font>
            </li>
            <li>
                Ler todos os strongs (filtro por traduzidos ou não)<br />
                <font size="2" color="#999">➥ Trazer lista com todos os strongs e suas definições.</font>
            </li>
            <li>
                Enviar tradução de palavra para análise<br />
                <font size="2" color="#999">➥ Envia tradução de uma única palavra para análise.</font>
            </li>
            <li>
                Enviar tradução de strong para análise<br />
                <font size="2" color="#999">➥ Envia tradução de definição de strong para análise.</font>
            </li>
            <li>
                Enviar tradução de cabeçalho para análise<br />
                <font size="2" color="#999">➥ Envia tradução de cabeçalho para análise.</font>
            </li>
            <li>
                Enviar sugestão de novo cabeçalho para análise<br />
                <font size="2" color="#999">➥ Envia sugestão de novo cabeçalho para análise.</font>
            </li>
            <li>
                Enviar sugestão de nova referência cruzada para análise<br />
                <font size="2" color="#999">➥ Envia sugestão de nova referência cruzada para análise.</font>
            </li>
            <li>
                Enviar sugestão de nova descrição de livro para análise<br />
                <font size="2" color="#999">➥ Envia sugestão de nova descrição de livro para análise.</font>
            </li>
            --- (somente admin)
            <li>
                Ler todas as sugestões<br />
                <font size="2" color="#999">➥ Trazer a lista de todas sugestões feitas ligadas ao usuário.</font>
            </li>
            <li>
                Enviar aprovação/recusa de sugestão<br />
                <font size="2" color="#999">➥ Envia aprovação/recusa de sugestão, dando opção de responder sim ou não e porque (se não).</font>
            </li>
        </ul>
        <ul>
            <h4>Auth</h4>
            <li>
                SignUp<br />
                <font size="2" color="#999">➥ Criar novo usuário com nome, sobrenome, e-mail e senha. Fazer confirmação por e-mail (recolher autorização de uso de nome).</font>
            </li>
            <li>
                SignIn<br />
                <font size="2" color="#999">➥ Fazer login com usuário criado retornado token válido.</font>
            </li>
            <li>
                SignOut<br />
                <font size="2" color="#999">➥ Inválidar token de sign in.</font>
            </li>         
        </ul>
    </div>
</div>

<div>
    <h2>Entidades</h2>
    <pre>
        [
            {
                "entity": "word",
                "reference": {
                    "book": "1jo",
                    "chapter": 1,
                    "verse": 1,
                    "heading": "The Word of Life",
                    "cross_references": [ "Luke 24:36–49", "John 20:19–23" ]
                },
                "hebrew_sort": 999999,
                "greek_sort": 125211,
                "bsb_sort": 430707,
                "translation": "Who",
                "strong": 3739,
                "created_at": "",
                "updated_at": "",
                "updated_by": ""
            },
            {
                "entity": "book",
                "id": "1jo",
                "name": "1 John",
                "description": "a description",
                "categories": [ "love", "new life", "care", "etc" ],
                "chapter_count": 55,
                "verse_count": 1555,
                "created_at": "",
                "updated_at": "",
                "updated_by": ""
            },
            {
                "entity": "definition",
                "strong": 3739,
                "original": "Ὃ",
                "translit": "Ho",
                "parsing_short": "RelPro-NNS",
                "parsing_long": "Personal / Relative Pronoun - Nominative Neuter Singular",
                "definition": "Who, which, what, that. ",
                "created_at": "",
                "updated_at": "",
                "updated_by": ""
            },
            {
                "entity": "user",
                "name": "John Doe",
                "email": "john@doe.com",
                "password": "mypass",
                "anonymize": false,
                "token": "last_valid_token"
            },
            {
                "entity": "sugestion",
                "user": "john@doe.com",
                "entity_to_update": "what_entity",
                "payload": {
                    "word": "translated",
                    "word_reference": {
                        "book": "1jo",
                        "chapter": 1,
                        "verse": 1
                    }, // ends word payload
                    "definition": "definition translated",
                    "strong": 3739, // ends definition payload
                    "heading": "heading translated",
                    "heading_reference": {
                        "book": "1jo",
                        "chapter": 1
                    } // ends heading payload
                }
            }
        ]
      </pre>
</div>

<div justify="center">
    <h2>Contato</h2>
    <p>Entre em contato via <a href="mailto:gableonn@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" /></a>
    ou <a href="https://www.linkedin.com/in/gabeleonn/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a></p>
</div>

<div justify="center">
    <p align="center">
        The Holy Bible, Berean Interlinear Bible, BSB<br/>
        Copyright ©2016, 2020 by Bible Hub<br/>
        Used by Permission. All Rights Reserved Worldwide.<br/>
    </p>
</div>
