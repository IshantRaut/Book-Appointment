const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin'); 
const sequelize = require('./util/database');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());


app.use(adminRoutes);


sequelize.sync()
.then(result=>{
    app.listen(3000);
})
.catch(err=>{console.log(err)});

   
 