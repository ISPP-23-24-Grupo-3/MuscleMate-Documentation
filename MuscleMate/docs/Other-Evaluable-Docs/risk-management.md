---
title: Risk Management
---
![MUSCLEMATE](logo.png)

## Musclemate, Grupo 3
## Historial de Versiones

| Versión | Fecha       | Autor       | Descripción                            |
|---------|-------------|-------------|----------------------------------------|
| v1.0    | 2024-02-19  | Alejandro Sosa       | Creación del documento                 |
| v2.0    | 2024-03-18  | Luis García | Actualización del documento           |
| v3.0    | 2024-04-21  | Juan Jesús  | Añadido a Docusaurus                  |



## Riesgos

| ID  | Riesgo                                                          | Prob. de ocurrencia | Impacto | Factor (Prob x Impacto) | Nivel de peligro |
| --- | --------------------------------------------------------------- | -------------------- | ------- | ----------------------- | ----------------- |
| R1  | Ocurrencia de nueva característica post-planificación           | Bajo                 | Medio   | 15                      | Medio             |
| R2  | Característica de el producto poco detallada                   | Bajo                 | Alto    | 21                      | Importante        |
| R3  | Miembro del equipo no trabaja tanto como se comprometió        | Medio                | Alto    | 35                      | Catastrófico      |
| R4  | Testing demuestra que el producto no supera el estándar de calidad | Bajo               | Alto    | 21                      | Importante        |
| R5  | Disputa interna entre miembros del equipo                      | Alto                 | Muy bajo| 7                       | Pequeño           |
| R6  | Miembro del equipo desconoce una de las tecnologías a utilizar | Muy bajo             | Medio   | 5                       | Pequeño           |
| R7  | El equipo de un miembro del equipo se avería                   | Bajo                 | Muy alto| 27                      | Importante        |
| R8  | Ausencia notable de miembros en el equipo de front-end/back-end | Muy bajo             | Muy alto| 9                       | Pequeño           |
| R9  | Miembros del equipo pierden la dirección del trabajo           | Bajo                 | Medio   | 15                      | Medio             |
| R10 | El equipo de trabajo se queda sin tiempo debido a una fecha límite | Bajo             | Muy alto| 21                      | Importante        |
| R11 | Aumento de precio de la licencia de un producto que utilicemos | Muy bajo             | Alto    | 7                       | Pequeño           |
| R12 | Falta de usuarios piloto por parte de los gimnasios            | Medio                | Muy alto| 45                      | Catastrófico      |
| R13 | Caída de el servicio en el que hosteemos nuestra aplicación    | Muy bajo             | Muy alto| 9                       | Pequeño           |
| R14 | La competencia lanza un producto similar a el nuestro antes de nuestro lanzamiento | Bajo | Muy alto| 27                | Importante        |
| R15 | Comunicación ineficiente interna en el equipo                  | Bajo                 | Medio   | 15                      | Medio             |
| R16 | Los usuarios piloto dejan de comunicarse con los desarrolladores | Bajo               | Alto    | 21                      | Importante        |
| R17 | Menor uso del esperado de recursos                             | Muy bajo             | Medio   | 5                       | Positivo          |
| R18 | Hallazgo de una librería que agilice el desarrollo             | Bajo                 | Alto    | 21                      | Positivo          |
| R19 | Equipo de trabajo finaliza sus tareas en menos tiempo del planificado | Muy bajo        | Alto    | 7                       | Positivo          |

## Traducciones numéricas

- Muy bajo = 1
- Bajo = 3
- Medio = 5
- Alto = 7
- Muy alto = 9

## Plan de Contingencia (riesgos negativos)

| ID  | Plan de Contingencia                                           |
| --- | --------------------------------------------------------------- |
| R1  | Se analiza el tiempo que supondría implementar esta característica y si es viable, se puede implementar, añadiendo valor al producto. |
| R2  | El miembro del equipo que se encargue de implementar esta característica puede preguntar a el coordinador de su equipo (front-end/back-end) por más detalles. |
| R3  | Se avisará al miembro del equipo en cuestión de esta falta de trabajo. Si esta no se corrige y el miembro no dispone de un justificante tendrá una menor puntuación en la evaluación individual de rendimiento y tendrá que recuperar las horas no trabajadas en la siguiente semana. otro miembro de el equipo de trabajo deberá completar su parte. |
| R4  | El miembro del equipo que implementó la característica problemática deberá pulir la parte del código en la que se encuentra, ya que dicho miembro es el que mejor entiende el código. |
| R5  | El coordinador del equipo de trabajo (front-end/back-end) hará de mediador e intentará encontrar un punto medio en la discusión entre los miembros. |
| R6  | El miembro del equipo deberá dedicar tiempo a aprender la tecnología, ya sea mediante tutoriales o experimentando con esta. A poder ser se le asignarán tareas que no dependan de esta tecnología o se le cambiará a otro equipo de trabajo (de front-end a back-end o viceversa). |
| R7  | El miembro del equipo deberá encontrar un método alternativo para poder trabajar en sus partes asignadas. De mientras, otros miembros del equipo de trabajo con menos carga asignada deberán encargarse del trabajo de dicho miembro. No habrá penalización en la evaluación individual. |
| R8  | Miembros del equipo contrario (del equipo de front-end en el caso de back-end y viceversa) con menos trabajo asignado deberán apoyar a el equipo de trabajo para poder así acabar el trabajo de el sprint a tiempo. |
| R9  | Se realizará una reunión general en la que se discutirá el rumbo del proyecto para recordar a todos los miembros del equipo el rumbo de este, las tareas por realizar y las características aún por implementar en el producto. |
| R10 | Los miembros del equipo de trabajo deberán emplear más de sus 6 horas semanales a la asignatura para así poder asegurar que todas las tareas del sprint sean realizadas a tiempo. No se aceptará entregar tarde un elemento entregable del proyecto. |
| R11 | Si este aumento de precio es bajo, continuaremos haciendo uso de la misma tecnología, no obstante, si es notable y no podemos asumirlo, haremos una búsqueda exhaustiva de alternativas similares. |
| R12 | Deberemos pedir a nuestro grupo piloto (grupo 9) que centren sus esfuerzos en probar la parte de gimnasio de nuestra aplicación, ya que es aquella que realmente atraerá a los clientes que pagarán nuestro servicio. |
| R13 | Si la caída es corta y aislada, se continuará utilizando el mismo servicio. No obstante, si es larga o repetida, se comenzarán a investigar alternativas para el hosting. |
| R14 | Los equipos de trabajo analizarán este nuevo producto para discernir si realmente hace competencia a el nuestro y si es así, ver qué hace bien y qué hace mal para aplicar estas lecciones en nuestro producto. |
| R15 | Si esta comunicación ineficiente es exclusiva de un miembro, se realizará una llamada de atención y si el problema continúa, afectará negativamente a su evaluación individual. No obstante, si es común a un grupo de trabajo completo, se realizará una reunión donde se discutirá el problema y se tratará de hallar una solución. |
| R16 | Los equipos de trabajo tendrán que dedicar tiempo extra a encontrar nuevos usuarios piloto o a probar más la aplicación para encontrar los fallos que dichos usuarios piloto hubieran encontrado. |
