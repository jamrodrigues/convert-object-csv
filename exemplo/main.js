(function () {
	'use strict';
	var convert = require('../returntocsv.js')

	var body =  [
			{
				"Nome": "João da silva",
				"Telefone": "8190000-0000",
				"Email": "joao@Email.com",
				"Sexo": "M",
				"Idade": 35
			},
			{
				"Nome": "Maria da silva",
				"Telefone": "8190000-0000",
				"Email": "maria@Email.com",
				"Sexo": "F",
				"Idade": 33
			},
			{
				"Nome": "Paula da Conceição",
				"Telefone": "8190000-0000",
				"Email": "paula@Email.com",
				"Sexo": "F",
				"Idade": 22
			}
		];
	var header = {
		'Nome': 'Nome',
		'Telefone': 'Telefone',
		'Email': 'Email',
		'Sexo': 'Sexo',
		'Idade': 'Idade'
	};

	convert('teste', body, header);

})();