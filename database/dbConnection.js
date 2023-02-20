import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: 'localhost',
    user: '',
    password: '',
    database: ''
})

connection.connect( (err) => {
    if(err){
        console.error('Connection error' + err.stack);
        return;
    }
    console.log('Connection ID is : ' + connection.threadId);
});

export default connection;