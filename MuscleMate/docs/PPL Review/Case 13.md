---
title: Case 13 - Owner Requirements
---
![MUSCLEMATE](logo.png)

## Musclemate, Grupo 3, WPL

## Historial de Versiones
| Versión | Fecha      | Autor          | Descripción                  |
| ------- | ---------- | -------------- | ---------------------------- |
| v1.0    | 2024-05-20 | Luis García Parras | Creación del documento   |

- ¿Por qué tengo que dar un nombre de usuario y contraseña para crear un gimnasio?

El motivo es para que cuando se cree un gimnasio esas credenciales se le pasa a los empleados y puede acceder a las cuentas para poder añadir máquinas, clientes… sin tener que estar conectado con el propio propietario.

- ` `Cuando se ve la información del gimnasio no se ve la información de la persona que se asocia al crearlo. ¿Para qué la piden?

La entidad gimnasio está acoplada al modelo del usuario  que utilizan los empleados del gimnasio. Se podría haber separado pero también recortamos el usuario gym de los requisitos.
