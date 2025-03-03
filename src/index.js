    const express = require('express');
    const hbs = require('express-handlebars')
    const path = require('path');
    const app = express();
    const methodOverride = require('method-override');
    const port = 3000;
   

    const route = require('./routes')
    const db = require('./config/db');

    // Connect to DB
    db.connect();

    app.use(express.static(path.join(__dirname, 'public'))); // Đường dẫn đến thư mục public

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    app.use(methodOverride('_method'));

    //morgan HTTP logger
    // app.use(morgan('combined'));

    // Template engine
    app.engine('hbs', hbs.engine({
        extname: 'hbs',
        defaultLayout: 'main',
        // layoutsDir: path.join(__dirname, 'resources', 'views', 'layouts'),
        // partialsDir: path.join(__dirname, 'resources', 'views', 'partials'), // Đường dẫn đến partials
    }));
    app.set('view engine', 'hbs');
    app.set('views', path.join(__dirname, 'resources', 'views'));

    // console.log("Views Path:", path.join(__dirname, 'resources', 'views'));
    // console.log("Partials Path:", path.join(__dirname, 'resources', 'views', 'partials'));

    // Route init
    route(app);

  

    // 127.0.0.1 - localhost

    app.listen(port,() =>{
        console.log(`Server is running on port ${port}`)
    })