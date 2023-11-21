import { isValidObjectId } from "mongoose";

db.users.insertMany([
  {
    username: "user3",
    age: 50,
    email: "user3@gamil.com",
  },
  {
    username: "user4",
    age: 20,
    email: "user4@gamil.com",
  },
  {
    username: "user5",
    age: 30,
    email: "user5@gamil.com",
  },
]);

user6 = {
  username: "user6",
  age: 30,
  email: "user6@gamil.com",
};
db.users.save(user6);

db.users.insertMany([
  {
    username: "user7",
    age: 77,
    email: "user7@gamil.com",
    status: "inactive",
  },
  {
    username: "user8",
    age: 17,
    email: "user8@gamil.com",
    status: "inactive",
  },
  {
    username: "user9",
    age: 29,
    email: "user9@gamil.com",
    status: "active",
  },
  {
    username: "user10",
    age: 49,
    email: "user10@gamil.com",
    status: "active",
  },
]);
// obtener el usuario con username user7

db.users.find({
  //retorna cursor
  username: "user7",
});
db.users.findOne({
  //retorna un objeto
  username: "user7",
}); //obteren  los usuarios con edad mayor a 10 (>)

//gt mayoy que >
//gte mayoy igual >=
//lt menor que <
//lte menor igual <=
//ne !=
// exists
db.users.find({
  age: { $gt: 18 },
});

//obteren los usuarios con meor edad a 50

db.users.find({
  age: { $lt: 50 },
});

//contador de usuarios
db.users
  .find({
    age: { $lt: 50 },
  })
  .count();

//obteren los usuarios con edad mayor a 30 y estatus activo

db.users.find({
  $and: [{ age: { $gt: 18 } }, { status: "active" }],
});

//obteren los usuarios con edad cuya edad no sea 30
//ne no sea igual
db.users.find({
  age: { $ne: 30 },
});

//obteren los usuarios que tenga por edad 27 0 50 0 30

db.users.find({
  $or: [{ age: 30 }, { age: 50 }, { age: 17 }],
});
db.users.find({
  age: { $in: [30, 17, 50] },
});

//obteren los usuarios con el atributo status

db.users.find({
  status: { $exists: true },
});

//obteren los usuarios con el atributo status active

db.users.find({
  status: "active",
});
db.users.find({
  $and: [
    {
      status: { $exists: true },
    },
    {
      status: "active",
    },
  ],
});

//obteren los usuarios con el atributo status active y correo

db.users.find({
  $and: [{ status: "active" }, { email: { $exists: true } }],
});
//

//obteren los usuarios con mayor edad para abajo
//cursor .sort() ordena 1 -1
//cursor .limit() limita la cantidad

db.users
  .find()
  .sort({
    age: 1,
  })
  .limit(3);
//obteren a los tre usuarios mas jovenes

//atributo:valor ==
//atributo: {documento que se quiera buscar}

//buscar al final .com
db.users.find({ email: /.com$/ });
//buscar al inicio .com
db.users.find({ email: /^user1/ });
//buscar qsue el email posea @
db.users.find({ email: /@/ });
//buscar qsue el email posea @
db.users.find().count(); //contqar
db.users.find().limit(2); //limitar
db.users.find().skip(4); //saltaar
db.users.find().sort({ age: -1 }); //ordenar de forma ascendente
db.users.find().sort({ age: 1 }); //ordenar de forma descendente
db.users.find().sort({ age: 1 }).skip(3).limit(5).pretty();
db.users.find().forEach((user) => print(user.username)); //ordenar de forma descendente

db.users.find(
    {}, 
    { 
        status: "active", 
        email: true 
    });
db.users.find(
    {age :{$gte:40} },
    { _id:false,
        username: true,
        age:true
    });

    db.users.save() //guardar 
    db.users.update(
        {
            '_id': isValidObjectId("6549686aa8df49a14cd21ec7")
        },
        {
            $set:{
                username:"Dani",
                email:"danie@gmail.com"
            }
        }
    ) //actualizar
