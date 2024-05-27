const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;



app.use(bodyParser.json());




app.listen(port, ()=>{
  console.log(`Server is running on :${port}`);
})


mongoose.connect('mongodb+srv://nadiya69:Nvhk1GfWYrJeozgu@drivesmart.r0uoyw3.mongodb.net/?retryWrites=true&w=majority&appName=DriveSmart');
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

const { Schema, model } = mongoose;
const userSchema = new Schema({
  name: String,
  age: Number,
  email: String
});
const User = model('User', userSchema);


app.post('/', (req, res)=>{
  const {name, age, email} = req.body
  const newUser = new User({name: name, age: age, email: email});
  newUser.save();
  res.json('Api is working')
});

app.get('/', async (req, res)=>{
  const users = await User.find();
  res.json(users)
});

app.put('/', async (req, res)=>{
  await User.findByIdAndUpdate(id, { $set: { name:"medhani"}}, {{{}}})
  res.json(users)
});




// app.delete('/:id', async (req, res) => {
//   const id = req.params.id;
//  await User.findByIdAndDelete(id);
//   res.json('Delete successfully');
// });

// //TODO:  this


// app.listen(port, () => {
//   console.log(`Server is running on :${port}`);
// });



