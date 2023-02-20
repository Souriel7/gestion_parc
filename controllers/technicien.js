import db from "../database/dbConnection.js";

// Getting all techniciens
export const getTechs = (req, res) => {
    db.query('SELECT * FROM technicien', (error, results) => {
        if(error) res.send('<h2>Error</h2>');
        res.send(results);
    });
}

// Getting technicien by his own ID
export const getTechID = (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM technicien where id = ?', id, (error, results) => {
        // if(error) res.send("Error");
        if (error) {
            res.send("Error");
        }else if (results.length === 0){
            res.send('<h2>Object not found</h2>')
        }else{
            res.send(results);
        }
    });
};

// Post new technicien
export const addTech = (req, res) => {
    let nom = req.body.nom;
    let prenom = req.body.prenom;
    let roles = req.body.roles;
    let password = req.body.password;
    let email = req.body.email;

    db.query(`INSERT INTO technicien (nom, prenom, roles, password, email) VALUES ("${nom}", "${prenom}", "${roles}", "${password}", "${email}")`, (error, results) => {
        if(error){
            res.send("Error");
        }else if(results){
            res.send(`<h2> Technicien ${req.body.nom} a été bien ajouté </h2>`);
        }else{
            res.send(results);
        }
    });
}

// Delete a technicien
export const deleteTech = (req, res) => {
    const id = req.params.id; 

    db.query('DELETE FROM technicien WHERE id = ?', id , (error, results) => {
        if(error){
            res.send('Error');
        }else if(results){
            res.send(`<h2> Technicien ${id} a été bien supprimé </h2>`);
        }else{
            res.send(results)
        }
    });
}

// Modify technicien info
export const editTech = (req, res) => {
    const id = req.params.id;
    const {nom, prenom, roles, password, email} = req.body;

    db.query('UPDATE technicien SET nom=?, prenom=?, roles=?, password=?, email=? WHERE id =?', [nom,prenom,roles,password,email,id] , (error, results) => {
        if(error){
            res.send('Error');
        }else if(results){
            res.send(`<h2> Technicien ${id} a été bien modifié </h2>`);
        }else{
            res.send(results);
        }
    });
}