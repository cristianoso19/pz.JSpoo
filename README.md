# pz.JSpoo
# Repositorio del curso de Programaci贸n orientada a objetos con JavaScript

## Que es POO
Es un paradigma de programaci贸n que nos ayuda a resolver problemas de programaci贸n.
>馃挕JavaScript es un lenguaje orientado a objetos basado en prototipos:

Ventajas:
* Orden: Cada elemento de nuestro objetos debe vivir dentro de nuestro objeto.
> 馃殌 Un objeto tiene atributos y metodos.

* Reusar codigo: Gracias a las clases, que son bloques de codigo donde definimos metodos y atributos base para nuestros objetos.
> 馃殌 Justo como un molde.

## Que es un Objeto en JavaScript

* Objetos literales: son listas de llave y valor, **pero no son instancias**.

```javascript
const students_patzirank = {
    'Juan' : 110,
    'Juanita' : 300,
    'Nath' : 340,
    'Nora' : 150,
    'Luisa': 0; 
};
```
Todo son objetos en javascript:
* Objetos literales
* Instancias de prototipos
* Arrays
* Prototipo Object()

## Objetos literales y prototipos en JavaScript

## Abstracci贸n

Es abstraer atributos y metodos que se repiten, crear la clase (prototipo) pqra crear instancias de estas clases.

## Encapsulamiento

Vamos a limitar el acceso a ciertas propiedades y metodoss, no permitir la alteracion de metodos y atributos.

> 馃挕 En JS no se puede Esconder metodos y atributos, lo que podemos es no permitir la alteracion de atributos y metodos. 
Como se realiza el encapsulamiento en JS:
* Getters Y setters
* Namespaces
* Object.defineProperties
* M贸dulos de ES6

<img src="https://static.platzi.com/media/user_upload/encapsulamiento-d05ab20d-4ea2-4a0d-8b69-0f9f80429042.jpg"/>

## Getters y setters
Qu茅 son los getters y setters
Una funci贸n que obtiene un valor de una propiedad se llama getter y una que establece el valor de una propiedad se llama setter.

Esta caracter铆stica a sido implementada en ES2015, pudiendo modificar el funcionamiento normal de establecer u obtener el valor de una propiedad, a estas se les conoce como accessor properties.

Funcionamiento
En ocasiones queremos valores basados en otros valores, para esto los data accessors son bastante 煤tiles.

Para crearlos usamos los keywords get y set

## Modulos de ECMASCRIPT6
Hola, mi aporte es el siguiente:
El uso de los m贸dulos en JavaScript depende de las declaraciones Export e Import.

Para modular, solo basta que el archivo tenga la extensi贸n .js, pero el motor V8 que es el que corre en los navegadores, recomienda usar la extensi贸n .mjs

Esto es util porque queda claro cu谩l archivo es modulo y cual no.
Asegura que los archivos de modulo sean tratados como tal por la extensi贸n Babel o Node.js
驴Como Exportar?
hay dos formas de exportar:

Colocar en frente de cada elemento la palabra export
Exportar en una sola declaraci贸n al final del archivo modulo las caracter铆sticas que se quieren exportar, ejemplo:
```javascript
export {PlatziClass, Student, LearningPaths};
```
驴Como Importar?
La importaci贸n obviamente se hace en el script que queremos usar dichos elementos.

```javascript
import {PlatziClass, Student, LearningPaths} from '/ruta';
```
驴Como aplicar el modulo en HTML?

```javascript
<script type="module" src="main.js"></script>
```
## Herencia
La herencia nos permiten crear un molde general "Super Class" para que la comparta con las clases hijas
la palabra reservada es `extends`

## Polimorfismo

Le permite a nuestras subclases cambiar o anular los methodos y atributos de una superclase
Tipos de polimorfismo:
* Sobrecarga
* Parametrico
* Inclusion
JS solo nos permite el polimorfismo de inclusion de momento, esto nos permite sobre escribir los metodos y atributos de la superclase
