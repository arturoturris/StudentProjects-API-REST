const router = require('express').Router()
const cors = require('cors')
const { route } = require('./cierre')

const corsOptions = {
    origin: '*',
    methods: ['GET','HEAD','PUT','PATCH','POST','DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}

//ROUTES
router.options('*',cors(corsOptions))
router.use(cors(corsOptions))
router.use('/alumnos',require('./alumnos'))
router.use('/profesores',require('./profesores'))
router.use('/carreras',require('./carreras'))
router.use('/materias',require('./materias'))
router.use('/proyectos',require('./proyectos'))
router.use('/archivos',require('./archivos'))
router.use('/asignacion',require('./asignacion'))
router.use('/entregables',require('./entregables'))
router.use('/cierre',require('./cierre'))
router.use('/usuarios',require('./usuarios'))
router.use('/',require('./login'))

module.exports = router
