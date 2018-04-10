# convert-object-csv

E um simples função que converte Json em CSV no Charset UTF8.

1 - Clone o projeto para o local de sua escolha

2 - Import o arquivo ../convert-object-csv/index.js em seu index.html

3 - E pronto é so usar.

##Exemplo:

```js
    //Setando o json
    var Body = [{
        {
                    "Nome": "João da silva",
                    "Telefone": "8190000-0000",
                    "Email": "joao@Email.com",
                    "Sexo": "M",
                    "Idade": 35
        }
    }];
    //Setando chave => Valor 
	var header = {
		'Nome': 'Nome',
		'Telefone': 'Telefone',
		'Email': 'Email',
		'Sexo': 'Sexo',
		'Idade': 'Idade'
    };
    //Convertendo
    convertObjectCsv('prefixo_do_nome_do_arqeuivo', body, header);
```