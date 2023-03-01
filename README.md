# pz.JSpoo
# Repositorio del curso de Programación orientada a objetos con JavaScript

## Que es POO
Es un paradigma de programación que nos ayuda a resolver problemas de programación.
>💡JavaScript es un lenguaje orientado a objetos basado en prototipos:

Ventajas:
* Orden: Cada elemento de nuestro objetos debe vivir dentro de nuestro objeto.
> 🚀 Un objeto tiene atributos y metodos.

* Reusar codigo: Gracias a las clases, que son bloques de codigo donde definimos metodos y atributos base para nuestros objetos.
> 🚀 Justo como un molde.

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

## Abstracción

Es abstraer atributos y metodos que se repiten, crear la clase (prototipo) pqra crear instancias de estas clases.

## Encapsulamiento

Vamos a limitar el acceso a ciertas propiedades y metodoss, no permitir la alteracion de metodos y atributos.

> 💡 En JS no se puede Esconder metodos y atributos, lo que podemos es no permitir la alteracion de atributos y metodos. 
Como se realiza el encapsulamiento en JS:
* Getters Y setters
* Namespaces
* Object.defineProperties
* Módulos de ES6

<img src="https://static.platzi.com/media/user_upload/encapsulamiento-d05ab20d-4ea2-4a0d-8b69-0f9f80429042.jpg"/>
