const mongoose = require("mongoose");
const usercontroller = require("./controllers/UserController");
const todoscontroller = require("./controllers/TodosController");
mongoose
  .connect("mongodb://localhost:27017/todos")
  .then(() => {
    console.log("conection successfully");
  })
  .catch((err) => {
    console.log(err);
  });

// usercontroller.Register("", "", "");
//usercontroller.Login("eng omar mostafa", "OMar2000");
// usercontroller.getAllUsers();
// usercontroller.editUser("eng omar mostafa", "omar tousa");
// usercontroller.deleteUser("eng omar mostafa");

//////////////todos//////////

// todoscontroller.createTodos("65a679607de4bb70f8686f99", "examination", [
//   "Edfo hospital,reseptions",
// ]);
//todoscontroller.getTodosbyid("65a679607de4bb70f8686f99");
// todoscontroller.edittodos("65a6c975e5bc3a5e7d9ca780", "doctorswork");
todoscontroller.deletetodos("65a6c975e5bc3a5e7d9ca780");
