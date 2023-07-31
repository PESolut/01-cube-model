// Perspective Projection

// Computer Graphics Course
// Lecture videos for the introductory Computer Graphics class at Carnegie Mellon University. For more information
// http://15462.courses.cs.cmu.edu/fall2015/home
// from video https://www.youtube.com/watch?v=PhxV_JrXeVk&list=PL9_jI1bdZmz2emSh0UQ5iOdT2xRHFHL7E&index=3

var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
c.width = c.height = 500;
document.body.appendChild(c);
ctx.translate(250, 250);

var points = [
    {x: 1, y: 1, z: 1}, // 0 or A
    {x: -1, y: 1, z: 1}, // 1 or B
    {x: 1, y: -1, z: 1}, // 2 or C
    {x: -1, y: -1, z: 1}, // 3 or D
    {x: 1, y: 1, z: -1}, // 4 or E
    {x: -1, y: 1, z: -1}, // 5 or F
    {x: 1, y: -1, z: -1}, // 6 or G
    {x: -1, y: -1, z: -1} // 7 or H
]
//             AB     AC     AE     CD     BD     CG     EF     EG     BF     GH     FH     DH
EDGE_TABLE = [[0,1], [0,2], [0,4], [2,3], [1,3], [2,6], [4,5], [4,6], [1,5], [6,7], [5,7], [3,7]]
let ca = {x: 2, y: 3, z: 5}

points.push(points[0])
ctx.beginPath();

for(var i = 0; i < EDGE_TABLE.length; i++) {
    var edge = EDGE_TABLE[i];
    var point1 = points[edge[0]];
    var point2 = points[edge[1]];

    console.log(edge,'point1',point1,'point2',point2)

    // convert (X,Y,Z) of both endpoints (point1, point2) to (u,v)
    // 1. subtract camera (ca) from vertex to get (x,y,z) vector
    // 2. divide (x, y) b z to get (u, v) - write as fraction
    // 3. multiply (u, v) by 100 to get (u, v) in canvas coordinates
    // draw line from (u1, v1) to (u2, v2)
 
    let cameraSubtraction1 = {x: point1.x - ca.x, y: point1.y - ca.y, z: point1.z - ca.z};
    let u1 = cameraSubtraction1.x / cameraSubtraction1.z;
    let v1 = cameraSubtraction1.y / cameraSubtraction1.z;

    let cameraSubtraction2 = {x: point2.x - ca.x, y: point2.y - ca.y, z: point2.z - ca.z};
    let u2 = cameraSubtraction2.x / cameraSubtraction2.z;
    let v2 = cameraSubtraction2.y / cameraSubtraction2.z;

    ctx.moveTo(u1*100, v1*100);
    ctx.lineTo(u2*100, v2*100);

}
ctx.stroke();