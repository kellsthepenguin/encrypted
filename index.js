// 어짜피 연습이라 TS 안씀

const express = require('express')

const app = express()

app.use(express.static('./static/'))

app.listen(8080)
