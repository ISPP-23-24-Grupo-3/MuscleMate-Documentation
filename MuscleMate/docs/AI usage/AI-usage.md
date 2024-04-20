---
title: AI Usage

sidebar_position: 6
---


##  Historial de Versiones







| Versión | Fecha       | Autor      | Descripción                            |
|---------|-------------|------------|----------------------------------------|
| v1.0    | 2024-01-01  | Manuel Ortega    | Creación del documento                 |
| v1.1    | 2024-02-15  | Manuel Vazquez    | Se agregaron secciones de introducción, Gestión, Lecciones aprendidas, Estimación de tiempo y alucinadiones |




## 1. Introducción
En este documento se encuentran las normas, gestión y procedimientos relacionados con el uso de la inteligencia artificial en nuestro proyecto, donde todos los miembros del equipo de trabajo estarán comprometidos a cumplir estas pautas.

## 2. Gestión de los Prompt
En primer lugar, vamos a definir el concepto de _Prompt_, que es una instrucción o texto inicial que se le proporciona a una herramienta de inteligencia artificial generativa para guiar su generación de respuestas.

En segundo lugar, para llevar a cabo el proceso de almacenamiento de los prompt, textos generados, etc., se han creado 4 categorías en la sección de _Discussions_ en el repositorio de GitHub de _MuscleMate-Documentation_. Estas categorías son las siguientes:
Prompt Backend.
Prompt Documentación.
Prompt Frontend.
Prompt Presentación.

Donde el registro del prompt se realizará en una de estas categorías correspondientes, por el miembro que haya utilizado IA, añadiendo el objetivo que se quería llegar con el prompt y la respuesta generada.

## 3. Lecciones aprendidas
* *Aprendizaje*: el uso de estas nuevas herramientas en los proyectos es una gran manera de comprender el proyecto.
* *Eficiencia*: utilizarlas a favor nuestro para mejorar la eficacia individual con trabajos que son tediosos para el equipo de trabajo.
* *Interpretación de resultados y código*: obtener explicaciones de nuestro proyecto obteniendo una mejor comprensión.
* *Refactorización de código*: para mejorar la estructura del código, consiguiendo un código mucho más legible para el equipo de trabajo, aplicando buenas prácticas generales.

## 4. Estimación de tiempo sin uso de las IAs
Como hemos dicho anteriormente, el uso de estas herramientas en nuestro proyecto ha mejorado en primer lugar la eficiencia personal de cada miembro del equipo de desarrollo.

Estas herramientas tienen una gran utilidad con trabajos que son muy tediosos para las personas, como por ejemplo el poblado de la base de datos siguiendo una estructura del modelo. La no utilización de estos modelos generativos hubiera llevado a una replanificación de estas tareas, debido a que realizar manualmente estas estructuras es un trabajo muy costoso y que llevaría a una dedicación de horas del proyecto inadecuada. 

Sin embargo, en otras tareas como documentación, presentación, etc., es más bien una ayuda extra que el equipo de trabajo ha logrado empleandolas a su favor. Por lo tanto, no haber usado estas herramientas en estas secciones del proyecto no hubiera generado ningún desaprovechamiento de las horas personales. 

Para finalizar con esta sección, podemos poner el primer ejemplo del poblado de la base de datos. Ayudándonos de estas herramientas, se generaron alrededor de 500 líneas de código para insertar datos en la entidad de _Equipment_, consumiendo un total de 34 minutos, donde se añadieron un total de 39 modelos.  

*FOTO*

En el caso contrario, donde no se hubiera empleado las herramientas generativas, podemos realizar una estimación aproximada. Para meter a mano un modelo, con su estructura específica y sus datos correspondientes, aproximadamente tardaríamos 3 minutos en completar un único modelo. Para realizar los 39 modelos ayudándonos de la IA hubiéramos necesitado aproximadamente 117 minutos. 

Como conclusión, vemos una diferencia bastante notable en cuanto a la gestión del tiempo si utilizamos estas herramientas a nuestro favor, dando como resultado más tiempo que se puede emplear en tareas con más prioridad. 

## 5. Alucinaciones de la IA
Podemos definir las alucinaciones de la IA, como aquellos textos generados que no cumplen con el objetivo final al que queríamos llegar con el uso de esta herramientas. 

Cómo hemos dicho en los puntos anteriores, estos modelos generativos nos aportan mucho al introducirlo en nuestro proyecto, sin embargo, también puede producir atrasos si no conseguimos el propósito que teníamos pensado llegar. Estas serán registradas también en el repositorio.



| ID  | MIEMBRO                | PROMPT   | OBJETIVO                | RESULTADO   | PAQUETE | LINK                                                               |
| --- | ---------------------- | -------- | ----------------------- | ----------- | ------- | ------------------------------------------------------------------ |
| 1   | González Marcos, Pedro | Ver link | Ver [Error 1](#error-1) | Error de IA |         | https://chat.openai.com/share/4cc7a386-d0ea-40ca-b977-6bb327056ba7 |
| 2   | Ortega García Manuel   |          |                         |             |         |                                                                    |
| 3   | Elena Tomás Vela const |          |                         |             |         |                                                                    |
| 4   | Luis García Parras     |          |                         |             |         |                                                                    |
| 5   | Elena Tomás Vela       |          |                         |             |         |                                                                    |
| 6   | Elena Tomás Vela       |          |                         |             |         |                                                                    |
| 7   | Manuel Ortega García   |          |                         |             |         |                                                                    |
| 8   | Manuel Ortega García   |          |                         |             |         |                                                                    |
| 9   | David Dana Cabello     |          |                         |             |         |                                                                    |
| 10  | David Dana Cabello     |          |                         |             |         |                                                                    |

# Errores cometidos por IA

## ChatGPT

## Error 1

Pedro González Marcos ha preguntado a ChatGPT (3.5) si es posible ver en Github
la marca de tiempo (timestamp) que deja mover una issue a una columna en un tablero Kanban.

ChatGPT dice que **no es posible** ver la marca de tiempo usando solo la interfaz de Github.

La siguiente captura demuestra que es posible ver este hecho:

![E001](/img/ia/IA-Error-01.png)

Tiempo Malgastado: 30 min
