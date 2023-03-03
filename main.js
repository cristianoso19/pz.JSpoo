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
//POLIMORFISMO
class Comment {
    constructor({
        content,
        studentName,
        studentRol = "estudiante",
    }) {
        this.content = content;
        this.studentName = studentName;
        this.studentRol = studentRol;
        this.likes = 0;
    }

    publicar() {
        console.log(this.studentName + "(" + this.studentRol + ")");
        console.log(this.likes + "likes");
        console.log(this.content);
    }
}

// MODULOS
function videoPlay(id){
    const urlSecreta = "https://w.platzi.com/"+ id; 
    console.log("Playing "+urlSecreta);
}

function videoStop(id){
    const urlSecreta = "https://w.platzi.com/"+id;
    console.log("Stoping "+urlSecreta);
}

class PlatziClass {
    constructor({
        name, videoID,
    }) {
        this.name = name;
        this.videoID = videoID;
    }
    reproducir(){
        videoPlay(this.videoID);
    }
    pausar(){
        videoStop(this.videoID);
    }
}
//VENTAJAS de programacion orientada a objetos
class Course {
    constructor({
        id,
        name,
        teacher,
        lessons=[],
        isFree = false,
        lang = "spanish",
    }){
        this.id = id;
        this._name = name;
        this.teacher = teacher;
        this.lessons = lessons;
        this.isFree = isFree;
        this.lang = lang;
    }
// GETTER
    get name(){
        return this._name;
    }
//SETTER
    set name(nuevoNombreCurso){
        if(nuevoNombreCurso === "Curso Maldito de Prog Bàsica"){
            console.error('Web.. no');
        } else {
            this._name = nuevoNombreCurso;
        }
    }
}

const cursoProgBasica = new Course({
    name: 'Curso gratis de Programacion bàsica',
    isFree: true,
});
const cursoDefinitivoHTML = new Course({
    name: 'Curso Definitivo de Html',
    lang: 'english',
});
const cursoPracticoHTML = new Course({
    name: 'Curso práctico de Html',
});

cursoProgBasica.name = "new";
class learningPath {
    constructor({ id, name, courses = [],
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
        cursoProgBasica,
        "Introduccion JS",
        "Introduccion CSS",
        cursoPracticoHTML
    ]
});
const escuelaData = new learningPath({
    name: "Escuela DataScience",
    courses: [
        cursoProgBasica,
        cursoPracticoHTML,
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

//HERENCIA
class SuperStudent{
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
        this.learningPaths = learningPaths; 
    }
    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
        });
        comment.publicar();
    }
}

class TeacherStudent extends SuperStudent {
    constructor(props) {
        super(props);
    }
    approveCours(newCourse) {
        this.approvedCourses.push(newCourse);
    }
    publicarComentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRol: "profesor",
        });
        comment.publicar();
    }
}


class FreeStudent extends SuperStudent {
  constructor(props){
    //referencia al constructor de láclase madre
    super(props);
  } 
  approveCours(newCourse) {
    if (newCourse.isFree){
        this.approvedCourses.push(newCourse);
    } else {
        console.warn("Lo sentimos; " + this.name + ", Solo puedes tomar cursos abiertos");
    }

  }
}

class BasicStudent extends SuperStudent{
  constructor(props){
    super(props);
  }
  approveCours(newCourse) {
    if (newCourse.lang !== "english"){
        this.approvedCourses.push(newCourse);
    } else {
        console.warn("Lo sentimos; " + this.name + ", No puedes tomar cursos en ingles");
    }

  } 
}

class ExpertStudent extends SuperStudent{
   constructor(props){
    super(props);
  }
  approveCours(newCourse) {
    this.approvedCourses.push(newCourse);
  }
}
const freddy = new TeacherStudent ({
    name: 'Freedy Vega',
    username: "fvega",
    email: "dsf@fsda.com",
    twitter: "@fdsa",
    instagram: "@fdsa",
    
});

const juan2 = new FreeStudent ({
    name: 'JuanDC',
    username: "juandc",
    email: "dsf@fsda.com",
    twitter: "@fdsa",
    learningPaths:[
        escuelaWeb,
        escuelaVgs,
    ]
})

const miguelito2 = new BasicStudent ({
    name: 'miguelito',
    username: 'miki23',
    email: 'miki23@gmia.com',
    instagram: '@miki23',
    learningPaths: [
        escuelaData,
        escuelaVgs,
    ]
})