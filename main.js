//OBJETO LITERAL
const natalia = {
    name:"Natalia Romanov",
    age:20,
    cursosAprobados: [
        "Curso Definitivo de Html y CSS",
        "Curso Practico de Html y CSS"
    ],
    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
    }
};

natalia.aprobarCurso("Curso de Responsive Desing ");

//PROTOTIPO

function Student(name,age,cursosAprobados){
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    /*UNA FORMA DE HACERLO 
        this.aprobarCurso = function (nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
    } */
}

Student.prototype.aprobarCurso = function (nuevoCurso){
    this.cursosAprobados.push(nuevoCurso);
} 

//Instancia del prototipo 
//Se coloca dentro del atributo '__proto__' en javascript
const juanita = new Student(
    'Juanita Alejandra',
    14,
    [
       "Curso de Python",
       "Curso de php" 
    ]
)

//Clases (En realidad son prototipos)
class Student2 {
    constructor({
        name,
        age,
        cursosAprobados
    }){
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }
    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
    }
}
/**
 * PATRÓN “RORO”

El patrón que menciona JuanDC se llama “RORO” del Inglés “Receive an object, return an object” (Recibe un objeto, devuelve un objeto).

Nos ayuda cuando tenemos muchos parámetros en nuestro constructor, ya que al instanciar la clase debemos acordarnos del orden de los parámetros y, además, no podemos tener parámetros por defecto.

No obstante, si recibimos un objeto, sí podemos poner parámetros por defecto y no recibir un parámetros si fuere el caso, sin que pase nada.
A la hora de enviar los argumentos al instanciar la clase, también debe enviarse un objeto, y otra ventaja es que esos argumentos no hace falta que estén en el mismo orden que están los parámetros del constructor. ¡Prácticamente son todo ventajas! 😃
 */
const miguelito = new Student2({
    name: "Miguel",
    age: 43,
    cursosAprobados: [
        "Analisis de datos",
        "Cloud en azure",
    ],
});

//VENTAJAS de programacion orientada a objetos
class Course {
    constructor({
        id,
        name,
        teacher,
        lessons=[],
    }){
        this.id = id;
        this.name = name;
        this.teacher = teacher;
        this.lessons = lessons;
    }
}
class learningPath {
    constructor({
        id,
        name,
        courses = [],
    }){
        this.id = id;
        this.name = name;
        this.courses = courses;
    }

    addCourse(course){
        this.courses.push(course);
    }
}

const escuelaWeb = new learningPath({
    name: "Escuela Web",
    courses: [
        "Introduccion Html",
        "Introduccion JS",
        "Introduccion CSS",
    ]
});
const escuelaData = new learningPath({
    name: "Escuela DataScience",
    courses: [
        "Introduccion Python",
        "Introduccion Panda",
        "Introduccion IA",
    ]
});
const escuelaVgs = new learningPath({
    name: "Escuela Video",
    courses: [
        "Introduccion Videos",
        "Introduccion Fotografia",
        "Introduccion a Produccion",
    ]
});
class Student3 {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        }
        this.approvedCourses = approvedCourses; 
        this.learningPaths = learningPaths 
    }
}

const juan2 = new Student3 ({
    name: 'JuanDC',
    username: "juandc",
    email: "dsf@fsda.com",
    twitter: "@fdsa",
    learningPaths:[
        escuelaWeb,
        escuelaVgs,
    ]
})