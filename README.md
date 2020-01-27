# WeatherForecast_2.0
Teste HBSIS

Tecnologias utilizadas

Backend: Java utilizando o Spring Framework(Spring Boot, Spring MVC, Spring Data JPA);
Frontend: Angular 8, Typescript, HTML, CSS e Bootstrap;
Banco de Dados: MySQL;
Utilizado a API publica do open weather ( http://openweathermap.org/api ).

Ferramentas utilizadas

IntelliJ IDEA Community Edition 2019.3.1;
MySQL Workbench 8.0 CE;
Visual Studio Code;
Angular CLI versão 8.3.23;
Node.js versão v12.14.1.

Fluxo de telas

1º Tela: Cadastro de cidade e listagem das cidades cadastradas.

Permite que o usuário possa cadastrar a cidade que deseja visualizar a previsão do tempo,
logo abaixo é listado em uma tabela todas as cidades já cadastradas, onde para cada cidade tem um link 
que direciona para a tela de previsão do tempo.

2º Tela: Previsão do tempo.

Permite que o usuário possa visualizar detalhes da previsão do tempo de até 5 dias para a cidade selecionada, 
os detalhes são: imagem representativa do tempo, data/hora, temperatura, temperatura mínima, temperatuda máxima e tempo.

Importar/rodar o projeto - Backend

Criar uma conexão no banco de dados MySQL com as seguintes informações:

Hostname: localhost

Port: 3306

username: root

password: root

Rodar o script do arquivo create_database.sql no banco de dados

Baixar a branch master do repositorio https://github.com/everton-goes/WeatherForecast_2.0.git

Importar o projeto WeatherForecast-API-Rest na IDE IntelliJ IDEA utilizando o Maven

Logo após o Maven importar todas as dependencias executar a classe Main WeatherforecastApplication
localizada em com.teste.web.hbsis.weatherforecast.WeatherforecastApplication

Importar/rodar o projeto - Frontend

Após ter baixado a branch master e configurado o backend:

Importar o projeto WeatherForecast-Angular na IDE Visual Studio Code

Com o Angular CLI execute ng serve no terminal

Após compilar e subir o servidor de front, acesse http://localhost:4200/

