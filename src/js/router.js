import crossroads from 'crossroads'
import homeController from './controllers/homeController'
import llamarPersonajes  from './controllers/personajesLista'
import guardados from './controllers/personajesGuardados'

				
			crossroads.addRoute('/', function () {
				$('#root').load('./partials/home.html', homeController)
			})

			crossroads.addRoute('#/personajes', function () {
				$('#root').load('./partials/personajes.html', llamarPersonajes)
			})
			crossroads.addRoute('#/guardados', function () {
				$('#root').load('./partials/guardados.html', guardados )
			})
			
			// En cada cambio del # va a verificar las rutas
			$(window).on('hashchange', function () {
			  crossroads.parse(window.location.hash)
			})

			crossroads.parse(window.location.hash) // necesario para que puedan funcionar varias paginas desde una sola
			