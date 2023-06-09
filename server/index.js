const express = require('express');
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const app = express();
require('dotenv').config()

//since import is used add .js extension as well
const userRouter=require('./routes/users')
const attendanceRouter=require('./routes/attendance')
const unitRouter=require('./routes/units')
const loginRouter=require('./routes/login')
const proposalRouter=require('./routes/proposal')
const paymentRouter=require('./routes/payment')
const dashboardRouter=require('./routes/dashboard')
const membersRouter=require('./routes/memlist')
const announcementRouter=require('./routes/announcement')
const minutesRouter=require('./routes/minutes')

const cors = require("cors");
app.use(express.json());
app.use(cors());

app.use("/", userRouter);
app.use("/", attendanceRouter);
app.use("/", unitRouter)
app.use("/", loginRouter)
app.use("/",proposalRouter)
app.use("/",paymentRouter)
app.use("/",dashboardRouter)
app.use("/",membersRouter)
app.use("/",announcementRouter)
app.use("/",minutesRouter)


//console.log(process.env.url)
mongoose.connect(process.env.url);

app.listen(3005, () => {
    console.log('Server started on port 3005');
});