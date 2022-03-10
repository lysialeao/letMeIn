# letMeIn

A aplicação utilizada para o exercício consiste em uma página web, com a funcionalidade de login. A página é formada por um simples formulário que deve receber dados de login e senha, junto a um botão de acesso responsável por levar os dados ao servidor. 

## Descrição do caso de uso - Realizar Login

Ator prinicipal: Usuário

Cenário de sucesso:
    1. O usuário digita seu e-mail e login;
    2. O usuário clica no botão "Login";
    3. Os dados de autenticação são corretos e o backend deve retornar sucesso;
    4. O usuário deve visualizar um simples alerta ao canto esquerdo inferior da tela, sinalizando de que o login foi realizado com sucesso;
    5. O usuário é redirecionado para a página principal do sistema.

Fluxo alternativo :
    1. O usuário digita seu e-mail e login;
    2. O usuário clica no botão "Login";
    3. Os dados são inválidos e o backend deve retornar erro;
    4. O usuário deve visualizar um simples alerta ao canto esquerdo inferior da tela, sinalizando de que os dados inseridos estão incorretos.


Tudo foi desenvolvido utilizando o framework React.js e Material Design, junto ao cliente HTTP Axios.


![PrintScreen of Login Form](https://github.com/lysialeao/letMeIn/blob/main/imagem_2022-03-10_194852.png)
#REACT #MATERIALDESIGN #AXIOS

### Versão futura

Na próxima versão do aplicativo o backend da aplicação deve ser integrado a aplicação.