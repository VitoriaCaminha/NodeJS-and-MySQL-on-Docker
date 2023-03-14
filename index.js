const express = require('express')
const PORT = 3000
const app = express()
const mysql = require('mysql')

const connection = mysql.createConnection({
  user: 'root',
  password: '123456',
  database: 'pessoas',
  host: '192.168.0.114',
  port: 3306
})

connection.connect(err => {
  if (err) throw err
  console.log(`Conectado ao banco de dados`)
})

app.get('/:id', (req, res) => {
  const id = req.params.id
  const query = `SELECT * FROM pessoas WHERE id = ${id}`

  connection.query(query, (err, result) => {
    if (err) {
      throw err
    } else {
      res.send(result[0])
    }
  })
})

app.listen(PORT, () => console.log('rodando'))
