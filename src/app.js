const {admin} = require('./middleware/component');
const {app} = require('./config/database');
let users = [];


const User = require('./models/User'); // Import User Model

// POST Route to Add New User
app.post('/users', async (req, res) => {
  try {
    console.log(req.body);
    const { firstname, lastname, city, country, phonenumber } = req.body;

    // Create a new user instance
    const newUser = new User({
      firstname,
      lastname,
      city,
      country,
      phonenumber
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    res.status(201).json(savedUser); // Return the created user
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



// ✅ Get a Single User by ID
app.get('/users/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId); // Fetch user by ID

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});






