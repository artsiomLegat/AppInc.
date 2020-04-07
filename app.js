const express = require('express');
const {Router} = require('express');
const config = require('config');
const cors = require('cors');
const mongoose = require('mongoose');
const webpack = require('webpack');
const graphQlHTTP = require('express-graphql');
const schema = require('./schema/schemaGql');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackDevMiddleware = require('webpack-dev-middleware');
const WbpConfig = require('./Webpack-Project1/webpack.config');
const {dist,rootPath} = require('./Webpack-Project1/utils/paths');
const compiler = webpack(WbpConfig);
const app = express();
const router = Router();
const instance = webpackDevMiddleware(compiler,dist);
const staticMiddleware = express.static(dist);
const PORT = config.get('port') || 5000;
const URI = config.get('mongoUri');


app.use(cors());
app.use(instance);
app.use(webpackHotMiddleware(compiler, {
    log: console.log('server started'),
}));
app.use(staticMiddleware);
// app.use('/api/auth',require('./routes/auth.route'));
// app.use('/api/toDoList',require('./routes/'));
app.use('/graphql',graphQlHTTP({
    schema,
    graphiql: true,
}));


async function start (){
    try {
      await mongoose.connect("mongodb+srv://Archi:anton_1995450241@cluster0-h0liu.mongodb.net/cinemas?retryWrites=true&w=majority",{
           useNewUrlParser: true,
           useUnifiedTopology: true,
           useCreateIndex: true,
       });
        let server =  app.listen(0,()=>{console.log(`server has been started on port#${server.address().port}`)});
    } catch (e) {
        console.log(`Error from start server`,e.message);
        process.exit(1)
    }
};
start();
