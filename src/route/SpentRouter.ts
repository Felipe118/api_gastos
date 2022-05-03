const router = require('express').Router

const SpentController = require("../controller/SpentController")

router.get('/',SpentController.home)