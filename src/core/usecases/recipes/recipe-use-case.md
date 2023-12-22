Cada Usuário poderá criar uma receita, abaixo estão cada uma das propriedades pertecentes a uma receita:

Propriedades:
```js
 {
  titulo: string,
  descrição: string,
  images: array[],
  duração: {

  }
  informações_nutricionais: {

  }
  ingredientes: array[]
  preparo: LinkedList[]
  categorias: array[]
 }
 ...
```

```js
ex: 'Essa busca de receitas poderá vir de uma inteligencia artificial'
  feijoada {
    titulo: 'Feijoada',
    descrição: 'Alimento rico em ferro, receita tradicional na familia brasileira',
    images: [
      'image1.png',
      'image2.jpg'
    ],
    tempo_de_preparo: '10:20:33'
    informações_nutricionais: [
      'Calorias':{},
      'Carboidratos líquidos': 	'5.10g'
      'Carboidratos':'13.60'
      'Proteínas'	4.80 g	1.60%
      'Gorduras totais'	0.50 g	0.91%
      'Gorduras saturadas'	0.10 g	0.45%
      'Fibra alimentar'	8.50 g	34.00%
      'Sódio'	2.00 mg	0.08%
    ]
    refeições: { /**  Como pode ser feito o calculo para dizer quantas refeições um prato servirá? */
      quantidade: 10,
      referencia: '80kg' 
    }
    ingredientes: [ /* como levar os ingredientes para a lista de compras?*/
      '1kg feijão',
      '200gr de calabresa',
      '200gr de cebola',
      '125 gr de bacon'
    ]
    preparo: LinkedList[
      '1: Levar o feijao a panela',
      '2: Cozinhar durante 50 minutos com 3 litros de agua',
      '3: Cortar a calabresa',
      '4: Cortar o bacon'
    ]
    categorias: array[
      'Comida Brasileira',
      'Comida de mãe'
    ]
}

```
  As ações que poderão ser feitas:
  Criar uma receita.
  Excluir uma receita.
  Listar as receitas.
  Vincular receitas a algum cardápio.
  Agrupar receita por alguma categoria.
  Pesquisar receitas.
  Os Ingredientes serão utilizados em outras partes do sistema.

  Cada receita poderá ter vinculo à uma lista compras.
  Por exemplo, na lista de compras poderá ser adicionado os ingredientes de alguma receita. 
```




