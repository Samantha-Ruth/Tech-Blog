const express = require('express')
const routes = require('./controllers');
// import sequelize connection
const sequelize = require('./config/connection');
const path = require('path');
// setup sessions
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const exphbs = require('express-handlebars');
// const hbs = exphbs.create({});
const helpers =require('./utils/helpers');
const hbs = exphbs.create({helpers});

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// connect to front end
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);
 
// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
    });
