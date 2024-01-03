Cada usuário podera criar uma nova lista de compras

Propriedades:

```js
{
  titulo: 'Lista de Compras do Mercado - Mes Janeiro',
  relatedMonth: 'Date',
  createdDate: 'Date',
  valueTotal: '',
  items: [ /** Rever a lógica de adicionar ingredientes já cadastrados, com aqueles que não estao cadastrados **/
    {
      name: 'Feijão',
      ingredient_id: 'feijao', /** Relaciona os ingredientes previamente cadastrados com o Id**/
      qtd: '1000',
      priceUnd?: 20.00
      totalPrice: 400;
    },
    {
      name: 'Arroz',
      ingredient_id: 'arroz',
      qtd: '1000'
      priceUnd: 122;   //** Seria massa se tivesse uma interatividade entre escolher colocar o valor total, ou calcular pela und de cada ( como se tivesse uma calculadora) **/
      totalPrice: 300;
    }
  ]

}
```

Ações:

1. Usuário pode criar uma nova lista
2. Deverá ter um checklist na listagem ao usuário para adicionar novos items
3. Usuário pode escolher adicionar os ingredientes de uma nova receita
4. Valor total da compra é baseado no valor total de cada item.
5. Filtros:
   1. Data de criação da lista
   2. Data de relatedMonth 
   3. Valor total
