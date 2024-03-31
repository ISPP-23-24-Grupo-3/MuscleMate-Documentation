---
title: Software Review Guidelines
sidebar_position: 9
---

No matchmaking:

# Iniciar sesión en la aplicacón

Ingrese su nombre de usuario y su contraseña para poder acceder a las funcionalidades
de la plataforma

# Registro de un propietario de un gimansio (Owner)

Registro como propietario de un gimnasio

Para poder registrase en el sistema usted tiene que rellenar todos los campos
y aceptar nuestros terminos y condiciones.

Una vez que se haya registrado en la plataforma:

- Inicia sesión con su cuenta
- Le habrá llegado a su correo un código para verificar su correo electrónico
- Verifique su correo accediendo a la ruta `/verify` en su navegador, introduzque
  el token en el formulario de verificación de correo

# Gestión de gimnasios de un propietario

Como propietario de gimnasio puede ver los gimnasios que tiene en la plataforma
de dos formas:

- Haga click en la pestaña `Mis gimnasios` en la barra de navegación superior
- Visite la página principal de un propietario `/owner/home` y pulse en el botón
  Mis Gimnasios

## (WIP) Añadir nuevos gimnasios en el sistema

Como propietario puede añadir más gimnasios asociado a su perfil pulsando en el
botón `Crear Nuevo Gimnasio`

# Gestión de máquinas de gimnasio

Para ver las máquinas de su gimnasio (/owner/equipments):

- Haga click en la pestaña de `Mis máquinas` dentro de la barra de navegación o
  pulse el botón de `Mis máquinas` en la página principal del propietario (/owner/home).

Dentro de esta pestaña puede:

- Ver y editar los detalles de las máquinas de gimnasio (/owner/equipments/:id)
- Añadir máquinas a tus gimnasios (owner/equipments/add)

# Gestión de usuarios

Para visualizar los usuarios de su gimnasio:

Haga click en `Usuarios` situado en la barra de navegación o bien
pulse el botón `Usuarios` en la página principal del propietario
pulsando en el botón `Usuarios` (/owner/users)

En esta página puede registrar un nuevo usuario pulsando el botón de `Añadir nuevo usuario`.
También puede visualizar los datos de sus usuarios pulsando en algún perfil dentro de la
lista.

Para editar la información de un usuario pulse en algún perfil de la lista.
Dentro del perfil de la persona pulse el botón `Editar` y podrá modificar
la información de su perfil.

Cuando haya terminado de actualizar la información pulse el botón de `Guardar`.
Si quiere dar de baja o de alta a un usuario pulse el botón debajo de `Guardar`.

# Gestión de rutinas de los usuarios

Estando logueado como usuario puede crear rutinas dentro de la aplicación pulsando en
`Rutinas`

# Matchmaking

# Gestión de incidencias de los usuarios

Para consultar las incidencias que los usuarios registren en la aplicación
pulse en `Tickets` dentro de la barra de navegación o bien pulse `Tickes`
en la página principal del propietario.

Dentro de esta pestaña podrá ver las incidencias y marcarlas como resueltas
haciendo click en el checkbox de la incidencia correspondiente.

# Informar de una incidencia de una máquina

Para informar de una incidencia tiene que iniciar sesión como cliente de gimnasio
y pulsar en `Crear ticket` dentro de la barra de navegación o bien en la página
principal de su perfil (/user/home) pulsando en el botón `Crear ticket`
