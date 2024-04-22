# Software Review Guidelines

| Versión | Fecha      | Autor | Descripción            |
| ------- | ---------- | ----- | ---------------------- |
| v1.0    | 2024-22-04 | Angel Muñoz   | Creación del documento |
| v1.1    | 2024-22-04 | Alejandro Sosa   | Adición de datos pedidos en la Software Review Guidelines  |

# Credenciales de Uso

Para probar la aplicación se tienen los siguientes enlaces al despliegue:
- Frontend (aplicación principal): https://musclemates3.oa.r.appspot.com/
- Backend (administración): https://desplieguebackendmuscle.pythonanywhere.com/admin/

Respecto a la tracking tool, la usada es Clockify y ya se proporcionó al profesorado las credenciales para acceder y se le invitó para ver el estado. Respecto a la demo se encuentra en la misma carpeta que este documento.

Aunque se puede registrar como se verá más adelante; se recomienda probar las funcionalidades con las siguientes credenciales para ver datos ya creados y comprobar de manera más cómoda:
- Credenciales de Cliente:
  - pabmoreno, musclemate123
  - carliberal, musclemate123
- Credenciales de Dueño:
  - aaromo, musclemate123
  - raquitori, musclemate123
- Credenciales de Administrador (backend):
  - ... (Indicadas de manera separada en la entrega por motivos de seguridad)

Cuando trate de suscribirse como dueño de gimnasio a un plan, en la pasarela de pago introduzca de numero de tarjeta "4242 4242 4242 4242", pudiendo inventarse el resto de datos.

# Inicio de Sesión

En la esquina superior derecha se encuentran los botones para iniciar sesión y para registrarse. Puede o bien pulsar el botón de entrar o el que pone 'Iniciar Sesion' para acceder a la pantalla que procesa esto. 
Una vez en la pantalla rellene el formulario con los datos proporcionados para iniciar sesión correctamente como cliente o propietario.

# Perfil

Sea cliente o propietario se puede acceder en todo momento a su perfil pulsando sobre su nombre en la esquina derecha.

# Funcionalidades de Cliente

Una vez inicia sesión sale una pantalla principal desde que la que podrá acceder rapidamente a las 3 funcionalidades principales de cliente; rutinas, eventos y evolución.

### Rutinas

Si inicia sesión como pabmoreno, podrá ver una ya. Para crear una nueva una pulse sobre "Tus Rutinas" y en "Añadir Rutina". Con esto podra incluir un nombre y crear una rutina de momento vacía.

A estas rutinas se les puede añadir ejercicios pulsando sobre el icono del lápiz. Ahí llegamos a la pantalla de ejercicios donde se pueden añadir ejercicios pulsado en "Añadir Ejercicio" e introduciendo un nombre y ninguna, una o más máquinas de el gimnasio al que esté apuntado. Luego confirma la creación con el tick. Estos ejercicios se pueden editar o borrar con los iconos del lápiz y de la X roja. En esta pantalla también se puede editar el nombre de la rutina con el lápiz que sale al lado del nombre.

Mediante el boton de "entrenar" en esta pantalla o el símnolo de mancuerna (pesa) en la anterior se entra en la pantalla de entrenamiento. En esta pantalla pulsando en cualquiera de los ejercicios se puede acceder a un cronómetro para marcar los descansos, que se reinicia solo cada vez que se para y se pueden crear series sobre el ejercicio añadiendo un peso, unas repeticiones y un tiempo, que luego servirán para crear las gráficas de evolución de repeticiones y peso.

Pulsando en "estadisticas" en esta misma pantalla o pulsando en "tu evolución" en el menu principal podemos acceder a gráficas sobre el peso o las repeticiones según una máquina en particular.

### Eventos

Desde el menú principal podemos acceder a "Tus eventos" que es un listado de eventos disponibles para el gimnasio al que estemos apuntados, en el que se puede buscar por nombre. Pulsando sobre uno podemos ver los detalles y hacer una reserva de uno o eliminar una reserva si ya la tenemos (aunque es necesario recargar para esto).

### Incidencias

Mediante el menu desplegable de la esquina tenemos la pantalla de "Crear una incidencia" donde completando los datos y la máquina afectada abrimos una incidencia que podra ver el dueño del gimnasio en su listado.

Al crear una se redirige a la pantalla de "Tus Incidencias" tambien accesible desde el menú desplegable, donde se listan todas las incidencias creadas y su estado actual.

### Máquinas

Entrando desde el menú desplegable en "Máquinas del Gimnasio" podemos acceder a un listado de las máquinas del gimnasio al que se pertenece y un buscador y varios filtros para esto (el panel a la derecha del buscador)

Pulsando sobre una máquina accedemos a los detalles de una máquina dónde podemos añadir una incidencia directamente unida a ella o valorarla pulsando sobre las estrellas en la cantidad seleccionada y luego en "enviar".

### Cerrar Sesión

Por último pulsamos sobre salir en el menú y cerramos sesión.

# Funcionalidades de Propietario

### Registro

Según el modelo de Musclemate solo los propietarios se podrán registran ellos mismos; para ello sin una sesión iniciada pulse en el registro en lugar de iniciar sesión en la esquina y rellene el formulario con datos correctos. Una vez registrado podrá iniciar sesión con estos datos.

### Máquinas

Una vez iniciada sesión se puede acceder a el listado de las máquinas de los gimnasios que pertenecen al propietario desde el botón "Mis Máquinas".
Ahí se puede añadir una máquina desde el botón para añadirlas completando correctamente el formulario, buscar una máquina por nombre y aplicar diversos filtros (funcionan igual que los vistos para cliente)

Pulsando sobre una máquina podemos ver los detalles de esta (que son editables) y las incidencias relacionadas (en caso de existir), que se pueden marcar como resueltas o no resueltas mediante el checkbox que poseen.

### Registrar Cliente

Pulsando ese botón se accede al registro de cliente. Como se ha explicado antes, por si mismo solo se registra el propietario. Esto es porque el propietario (o el perfil de gimnasio) es quien registra a los clientes de su propio gimnasio y luego les cede su usuario y contraseña para que usen la app.

Rellenando este formulario se crea un usuario en el gimnasio que el dueño seleccione (de los que son de su propiedad).

### Usuarios

Pulsando sobre ese menú se accede al listado de usuarios en los gimnasios que dispone el propietario. También se dispone de un buscador y filtros como en listados anteriores.

Pulsando sobre un cliente se accede al perfil de este, desde donde se puede editar su información.

### Ver Incidencias

Pulsando sobre ese botón en el menú se accede al listado de incidencias, que se pueden buscar por máquina o gimnasio y marcar como resuelto o no resuelto según sea necesario.

### Mis Gimnasios

Pulsando sobre ese botón en el menú se puede acceder al listado de gimnasios del propietario. Se pueden filtrar por nombre o crear mediante el botón "Crear Nuevo Gimnasio", que redirige a un formulario que los crea. Al crear un nuevo gimnasio se creará también un usuario propio de el gimnasio similar a el de dueño pero con funcionalidades limitadas a dicho gimnasio (usable por empleados u otras entidades relacionadas con el gimnasio).

Pulsando sobre un gimnasio podremos ver sus detalles y desde ahi se puede eliminar un gimnasio o ver sus estadísticas. Estas estadísticas consisten en un gráfico del uso de las máquinas en el tiempo.

### Mis Eventos

Pulsando sobre ese botón en el menú se accede a un listado de los eventos de tus gimnasios con su debido buscador y filtros.

Mediante el botón "Añadir Evento" se puede crear uno mediante un formulario al que se redirige.

Pulsando sobre un evento se accede a los detalles de este, pudiendo editarlos desde este menú. Así como a un botón para eliminarlo si se considerase necesario.

### Pagos y Suscripciones

Mediante el menú de la cabecera se puede acceder a "Planes" para seleccionar un plan y pagarlo para un gimnasio en concreto o a "Suscripciones" para ver el estado de las suscripciones de tus gimnasios.

En "Planes" tras seleccionar un plan se le redijirá a una pantalla donde seleccionamos para que gimnasio es y luego a la plataforma Stripe. Ahí se completa con los datos proporcionados al principio y con ello se llevaría a cabo la suscripción.

En "Suscripciones" puede listarlas todas y cancelar alguna si se estimase necesario.
