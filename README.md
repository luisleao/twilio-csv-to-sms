# Como enviar notificações por SMS via Twilio usando um arquivo CSV

Para instalar este script, baixe este repositório e rode o comando:
```
npm install
```

A seguir, faça as seguintes operações:
* Crie sua conta Twilio e compre um número Twilio com capacidade de envio de SMS
* Renomeie o arquivo `.end.sample` para `.env` e inclua as informações do `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN` e `PHONE_NUMBER`
* Atualize o texto da notificação para estar de acordo com a mensagem que deseja enviar
* Monte seu arquivo CSV com os dados que deseja disparar


Ao concluir os passos acima, execute o script com o comando:
```
node index.js
````

