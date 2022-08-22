import openDatabase from "./../DataBaseController/databaseconfig.js";

export async function createTable() {
    openDatabase().then(db => {
        db.exec('')
    })
}

export async function getUser() {
    return openDatabase()
        .then(db => {
            return db.all('SELECT * FROM users')
        })
        .then(data => data)
}

export async function insertUser(user) {
    openDatabase()
        .then(db => {
            db.run('INSERT INTO user (name,brief) VALUES (?,?)', [user.name, user.brief]);
        }
        )
}

export async function updateUser(user) {
    openDatabase()
        .then(db => {
            db.run('UPDATE user SET name = ?, brief = ? WHERE id = ?', [user.name, user.brief, user.id]);
        }
        )
}