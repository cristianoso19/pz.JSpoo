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