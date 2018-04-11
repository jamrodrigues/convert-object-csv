# Convert Object CSV

E um simples função que converte Json em CSV no Charset UTF8.

### Via  GitHub
1 - Clone o projeto para o local de sua escolha

2 - Import o arquivo ../convert-object-csv/index.js em seu index.html

3 - E pronto é so usar.


### Via NPM

1 - npm i convert-object-csv

2 - 2 - Import o arquivo ..node-modules/convert-object-csv/index.js em seu index.html

3 - E pronto é so usar.

## Como usar:

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
    convertObjectCsv('prefixo_do_nome_do_arquivo', body, header);
```    
    
    
    
    - 1.2.0 => Fix para exportar pelo IE
