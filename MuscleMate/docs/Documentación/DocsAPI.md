# MuscleMate Backend

Este archivo va a servir como guia para el uso de la **API** de el backend de MuscleMate, indicando todos los endpoints accesibles así como los **campos necesarios** a incluir en la request, en caso de que sean necesarios.

Por cada endpoint se indicará mediante corchetes [ ] el método a través de el cual se puede acceder así como cualquier permiso que sea necesario para acceder a este (generalmente estar logeado como **admin** o **owner**).


## Users

Estos endpoints permiten acceder a toda la información de los usuarios:

	users/

- GET [Admin]: Permite listar todos los usuarios registrados en la base de datos, incluyendo Owners, Clients y Gym.
<!-- -->

	users/create/

- POST [Admin]: Permite la creación de un nuevo usuario. Requiere:
	- username
	- password
 <!-- -->
 
	users/update/<str:username>/

- PUT [Admin]: Permite editar los datos de un usuario, por ejemplo, su contraseña. Requiere:
	- username
	- password
 <!-- -->
 
	 users/delete/<str:username>/
	
- DELETE [Admin]: Permite eliminar un usuario dado su username.

## Clients

Estos endpoints permiten acceder a toda la información de los clientes, una sub-clase de usuario.

	clients/
	
 - GET [Gym, Owner]: Permite el listado de todos los clientes de la base de datos.
<!-- -->

	clients/<int:gymId>/

- GET [Gym, Owner]: Permite el listado de todos los clientes asignados a el gym indicado en la URL. En el caso de Owner, permitirá la petición si es dueño de el gimnasio indicado.
<!-- -->

	clients/detail/<int:pk>/

- GET [Gym, Owner, Client]: Permite obtener información de un cliente concreto. Aceptará la petición sí:
	- Eres dueño o gimnasio
	- El cliente pedido es el mismo que el que está logeado.
<!-- -->

	clients/create/

- POST [Gym, Owner]: Permite la creación de un nuevo usuario así como un cliente asociado. Requiere:
	- name
	- lastName
	- zipCode
	- phoneNumber
	- email
	- address
	- city
	- username
	- password
	- user (username) {User}
	- gym {Gym}
Con campos opcionales:
	- birth
	- gender [Male, Female, Other]
	- register [True, False]

El motivo por el que es necesario introducir tanto un username como un user como campos (que será igual al username), es porque el endpoint se encarga tanto de crear un usuario como un cliente asociado.

	clients/update/<ind:pk>/

- POST [Owner, Gym, User]: Permite la edición de los datos de un cliente en la base de datos. Aceptará la petición si:
	- Eres dueño o gimnasio
	- El cliente pedido es el mismo que el que está logeado
	Requiere:
	- name
	- lastName
	- zipCode
	- phoneNumber
	- email
	- address
	- city
	- user (username) {User}
	- gym {Gym}
Con campos opcionales:
	- birth
	- gender [Male, Female, Other]
	- register [True, False]
<!-- -->

	clients/delete/<int:pk>/

- DELETE [Owner]: Permite eliminar a un usuario dada su clave primaria.
