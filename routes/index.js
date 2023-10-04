const express = require('express');

const router = express.Router();


 const PersonaRoutes = require ('./PersonasRoutes');
 const EmpresaRoutes = require ('./EmpresaRoutes');


 router.use('/persona',PersonaRoutes);
 router.use('/empresas',EmpresaRoutes); 


 module.exports =router;