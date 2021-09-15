'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
//Teniendo rutas distintas podemos manejar distintas versiones de la API apuntando al mismo controlador
Route.group(() =>
{
  Route.post('usuariosThomy/registro', 'UserController.store');
  Route.post('usuariosThomy/login', 'UserController.login');
  Route.get('proyectos', 'ProyectoController.index').middleware('auth');
  Route.post('proyectos', 'UserController.create').middleware('auth');

}).prefix('api/v1/');


/*Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})*/
/*
Route.group(() =>
{
  Route.post('usuariosThomy/registro', 'UserController.store');
}).prefix('api/v1/');
*/
/*
Route.get('usuariosThomy/registro', () => 
{
  return {mensaje: 'Hola AcademiaCoder Registraste un usuario!!!'}
})*/