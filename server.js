const  express = require('express')
const connectDB = require('./config/db')
const dotenv = require('dotenv')
const cors = require('cors')


dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());


connectDB();

app.use('/api/messages', require('./routes/messageRoute'))
app.use('/api/projects', require('./routes/projectRoute'));
app.use('/api/experience', require('./routes/expericenceRoute'));


const PORT = process.env.X_ZOHO_CATALYST_LISTEN_PORT || 5000;

app.listen(PORT, ()=> console.log(`server running on port is ${PORT}`)
)