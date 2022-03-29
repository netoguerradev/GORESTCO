const api = require('./apiController/apiConfig');

api.post('/public/v2/users/100/users', {
  name: 'valter', email: 'valter@teste', gender: 'male', status: 'active',
}).then((AllUsers) => {
  console.log(AllUsers.data);
}).catch((error) => console.log(error)); // Criando novo usuario

api.post('/public/v2/posts', {
  'id': 1936,
  'user_id': 4925,
  'title': 'Descricao usuario criado',
  'body': 'Corporis vito utilis. Credo derelinquo adipiscor. Calculus voco doloribus. ',
}).then((post) => {
  console.log(post);
}).catch((error) => console.log(error)); // Criando novo post

api.post('/public/v2/posts/100/comments', {
  'id': 1902,
  'post_id': 1892,
  'name': 'Valter',
  'email': 'valter@teste.com',
  'body': 'Et corporis et. Provident suscipit aliquid.',
}).then((post) => {
  console.log(post);
}).catch((error) => console.log(error)); // Criando novo comentario

api.delete('https://gorest.co.in/public/v2/posts/id?=1936').then((resolve) => console.log(resolve));
// deletando usuario criado
