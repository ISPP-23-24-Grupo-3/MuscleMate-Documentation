---
id: commitment-agreement
title: Commitment Agreement
sidebar_position: 7
---

![MUSCLEMATE](logo.png)

## Musclemate, Grupo 3

## Historial de Versiones

| Versión | Fecha      | Autor            | Descripción                                                                                                              |
| ------- | ---------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------ |
| v1.0    | 2024-01-01 | Manuel Ortega    | Versión inicial del documento sin firmar, incluye apartados de disponbilidad, dedicación del tiempo y política de avisos |
| v2.0    | 2024-02-18 | Manuel Ortega    | Se ha añadido un apartado de condiciones del acuerdo y se ha firmado el documento                                        |
| v3.0    | 2024-03-21 | Manuel Ortega    | Se mejora el commitment en cuanto a fórmula de puntuación                                                                |
| v4.0    | 2024-04-01 | David Zarandieta | Se actualiza el commitment en cuanto a fórmula de puntuación                                                             |
| v5.0    | 2024-04-04 | Manuel Ortega    | Nuevo agreement en cuanto a fallar en la entrega                                                                         |
| v5.1    | 2024-04-04 | Alejandro Sosa   | Relleno de recuento de cumplimiento                                                                                      |
| v6.0    | 2024-05-20 | Alejandro Sosa   | Relleno de recuento de cumplimiento                                                                                      |

## 1. Introducción

Al unirme a la asignatura de Ingeniería de Software y Práctica Profesional (ISPP) para el curso 2023-24, me comprometo a cumplir con los siguientes requisitos y condiciones como miembro de MuscleMate.

## 2. Compromisos y condiciones

### 2.1 Dedicación de tiempo

- Me comprometo a dedicar un esfuerzo de 10 horas semanales a las actividades y tareas asignadas. **MANDATORY**
- Acepto registrar el tiempo dedicado utilizando la herramienta Clockify y proporcionar el detalle necesario para cada tarea. **MANDATORY**
- Me comprometo a finalizar mis tareas asignadas dentro de la fecha fin para evitar retrasos en las actividades de otros compañeros.**MANDATORY**

### 2.2 Horario de disponibilidad

- Reconozco y acepto el horario de disponibilidad establecido para nuestras actividades.
- Se establece un horario de contacto de Lunes a Jueves de 8:00 - 22:00 y Viernes de 8:00 - 15:00, con opción de disponibilidad los fines de semana bajo condiciones específicas.

### 2.3 Compensación de tiempo

- Se establece un sistema de compensación para aquellos miembros que no cumplan con las 10 horas semanales asignadas, con el fin de mantener un equilibrio en la carga de trabajo. Las personas que no cumplan con el tiempo asignado deberán compensar el tiempo en la semana siguiente trabajando el doble de las horas no alcanzadas en esa semana en concreto.

### 2.4 Compromiso y realización de las tareas

- Las tareas se terminarán siempre aun que no sea en tiempo. **MANDATORY**
- Los conflictos serán abordados primero a nivel de grupo y luego a nivel de proyecto para mantener un ambiente de trabajo armonioso y productivo.
- Las tareas serán asignadas semanalmente con fechas límite establecidas.

### 2.5 Política de avisos

- Se vuelve imposible una política de avisos al uso, teniendo que hacerla de forma tajante, si un integrante no cumple con lo firmado de este acuerdo sera directamente expulsado del grupo.

### 2.6 Criterios de éxito

- Se realizarán revisiones semanales de las tareas, calificando del 0 al 10 y proporcionando una puntuación media de equipo.
- Se establecen niveles de cumplimiento del acuerdo de compromiso.

### 2.7 Fórmula para puntutar los sprint individualmente.

El cálculo de la puntuación obtenida por cada miembro en cada entrega se calculará con la siguiente fórmula llamada _evaluación_, abreviado _E(t,d)_:
Se dispondrán de puntos de historia _(d)_ todas las tareas de backend, frontend y documentación, abarcando un rango del 1 al 5 según su dificultad y tiempo esperado en su realización, se tendrá en cuenta también el tiempo total en la realización de dichas tareas _(t)_ en minutos.

Se calculará la media de tiempo por punto. _tiempo_por_punto = t/d_

Después, se evaluará el rendimiento del tiempo por punto en los siguientes rangos:

- Si _tiempo_por_punto < = 60, entonces E(t,d) = 5_
- Si _60 < tiempo_por_punto < = 90, entonces E(t,d) = 4.5_
- Si _90 < tiempo_por_punto < = 120, entonces E(t,d) = max(3, 4 - ((tiempo_por_punto - 90)/30)_
- Si _tiempo_por_punto > 120, entonces E(t,d) = max(1, 3 - ((tiempo_por_punto - 120)/30)_

Por último, se le sumará los 6 puntos base que disponemos de mínimo.

No se tendrán en cuenta para el cálculo de la fórmula las horas dedicadas a:

- Clases.
- Reuniones.
- Theroy pills.

- Gestión de github (revisión de pull request).

Las tareas realizadas por más de una persona solo valdrán 0.75 por cada persona extra que haya. Por ejemplo: una tarea con dos personas asignadas y valor 3, 0.75*3 = 2.25 puntos por persona. Una tarea con 3 personas asignadas y valor 3, (0.75*0.75)\*3 = 1.68 puntos por persona.

Si no se ha llegado a las horas semanales se tendrá un 0 en la fórmula de _E(t,d)_. Y, en función del cumplimiento del commitment agreement se valorará si podrá optar a la puntuación base.

En caso de que un miembro del grupo haya trabajado de manera eficiente sobrepasando los 10 puntos, se le guardará la diferencia para posteriores entregas, premiando así el buen desempeño.

Si el número de puntos de historia _(d)_ es mayor que el número de tiempo total del sprint (10 horas por _x_ semanas que abarque el sprint, _tiempo_total_sprint= x _ 600* ) dividido entre 90: *d > = tiempo_total_sprint/90* , el resultado será *max(4,E(t,d))\*.

### 2.8 Observaciones

- El acuerdo de compromiso puede ser utilizado como referencia para expulsar a un integrante al no cumplirse el mismo (igualmente se dejará explicar sus motivos, y si existitese una mayoria conforme y de forma extraoficial se le daria una ultima oprtunidad, siempre y cuando el motivo sea totalmente válido y su error no lo suficientemente grande).
- Se compromete a cumplirlo independientemente de la forma de firma utilizada.
- Se compromete a firmar el acuerdo aceptando que este pueda ser modificado en mayoria y no habiendo necesidad de una nueva firma.

### Recuento de cumplimiento

| Nombre                   | S1  | S2  | S3  | S4  | S5  | S6  | S7  | S8  | S9  | S10 | S11 | S12 | S13 | S14 | S15 |
| ------------------------ | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Pedro González Marcos    | 4/4 | 4/4 | 4/4 | 4/4 | 3/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 |
| David Del Hoyo Carboso   | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 3/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 |
| David Zarandieta Ortiz   | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 3/4 | 4/4 | 4/4 | 3/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 |
| Alejandro Sosa Corral    | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 |
| Elena Tomás Vela         | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 |
| Juan Jesús Martín Herndz | 4/4 | 4/4 | 3/4 | 4/4 | 4/4 | 4/4 | 3/4 | 3/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 |
| Jorge Romero Limón       | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 |
| David Dana Cabello       | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 3/4 | 3/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 |
| Ángel Muñoz Prieto       | 4/4 | 4/4 | 4/4 | 3/4 | 4/4 | 4/4 | 3/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 |
| Juan Carlos Moreno Pérez | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 3/4 | 3/4 | 3/4 | 3/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 |
| Manuel Ortega García     | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 |
| Agustín Devós Bono       | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 3/4 | 3/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 |
| Alejandro Mateo Capilla  | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 3/4 | 3/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 |
| Luis Garcia Parras       | 4/4 | 4/4 | 3/4 | 4/4 | 3/4 | 3/4 | 3/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 |
| Manuel Vázquez Martín    | 4/4 | 4/4 | 3/4 | 3/4 | 4/4 | 4/4 | 3/4 | 3/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 |

### Firmas

Firma de la versión 5.0

- Pedro González Marcos - 04/04/2024
- David Del Hoyo Carboso - 04/04/2024
- David Zarandieta Ortiz - 04/04/2024
- Alejandro Sosa Corral - 04/04/2024
- Elena Tomás Vela - 04/04/2024
- Juan Jesús Martín Hernández - 04/04/2024
- Jorge Romero Limón - 04/04/2024
- David Dana Cabello - 04/04/2024
- Ángel Muñoz Prieto - 04/04/2024
- Juan Carlos Moreno Pérez - 04/04/2024
- Manuel Ortega García - 04/04/2024
- Agustín Devós Bono - 04/04/2024
- Alejandro Mateo Capilla - 04/04/2024
- Luis Garcia Parras - 04/04/2024
- Manuel Vázquez Martín - 04/04/2024
