---
title: Plan de pruebas
---

![MUSCLEMATE](../logo.png)

## Musclemate, Grupo 3

## Historial de versiones

| Versión | Fecha      | Autor                  | Descripción            |
| ------- | ---------- | ---------------------- | ---------------------- |
| v1.0    | 2024-04-05 | González Marcos, Pedro | Creación del documento |

## Pruebas unitarias

Se hará una prueba unitaria si el módulo contiene lógica de
negocio que es vital para el funcionamiento del sistema.

## Pruebas de integración

Se hará una prueba de integración para comprobar si las entidades
se insertan en la BBDD así como para comprobar el contrato que devuelve
la API.

## Pruebas End to End

Las pruebas end to end se utilizarán sólo para verificar los casos de uso que necesiten mucha
interación con la interfaz grafica por parte de usuario. Se priorizarán otros tipos de casos
como los unitarios o de integración.

## Pruebas de aceptación

Las pruebas de aceptación se verificarán minuciosamente a la hora de poner en produción
una funcionalidad.

Nuestras pruebas de aceptación siguen el siguiente formato.

- Requisitos previos
- Descripción de la prueba de aceptación y criterios de aceptación
- Casos de prueba

## Pruebas de estrés

Se realizarán con locust siguientes pruebas de carga y estrés:

- Inicio de sesión el la plataforma con cualquier usuario
- Lectura y creación de rutinas siendo cliente
- Lectura de incidencias siendo propietario

### Guía del desarrollador

Una vez que el desarrollador termine de desarrollar las característica deberá:

- Comprobar que la funcionalidad no rompe el código de producción.
- Comprobar que la funcionalidad no rompe los tests definidos de otras caraceterísticas
- Probar la funcionalidad con una batería de datos de prueba positivos y negativos.
  El desarrollador seguirá iterando la funcionalidad si algún caso de prueba falla
  usando los datos proporcionados.
- Validar la funcionalidad usando los criterios de aceptación de la prueba de aceptación.

### Guía para reportar errores en el código

Si el desarrollador encuentra algún tipo error o comportamiento inesperado
en alguna característica o en algún test deberá reportarlo en Github siguiendo
el siguiente formato:

Característica afectada

- Incidencias de las máquinas

Pasos para producir el error

- Inicia sesión como cliente de gimnasio
- Cuelga una incidencia
- Inicia sesión como propietario
- Pulsa en incidencias del gimnasio

Comportamiento esperado

El propietario debería ver las incidencias que cuelgan los clientes de gimnasio

Comportamiendo actual

El propietario ve por unos segundos las incidencias luego la aplicación deja de funcionar.

## Pruebas del Sprint 3 al WPL

### Migrar lógica del frontend al backend

Migrar del frontend al backend la lógica de negocio para mostrar las gráficas
del propietario y del cliente.

En frontend filtramos por fecha, agrupamos los datos en bruto y hacemos transformaciones de los datos.
Esto se podría hacer en el servidor y no delegar todo el trabajo al navegador del usuario.

Se puede migrar esa lógica haciendo peticiones a una API con parámetros de búsqueda.

- https://musclemate/gym/?sort=date&order=asc
- https://musclemate/gyms/12345/stats?sort=date&order=asc
- https://musclemate/gyms/12345/stats?sort=weigth&order=desc

Se proponen las siguientes pruebas:

- Dependiendo de los parámetros de búsqueda se ejecutará una consulta (Unitaria)
- Para hacer los diferentes filtros de tienes que probar diferentes consultas a la BBDD (Integración)
- Comprobar que la consulta devuelve los datos esperados (Integración)

### Testing E2E para los planes de precio

Dependiendo del plan de precios que haya escogido el propietario del gimnasio el y sus clientes
disfrutaran de características diferentes. Este es un escenario perfecto para hacer un test
E2E.
