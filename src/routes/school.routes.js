const express = require('express');
const { regSchool,getSchoolData,updateSchoolData,deleteSchool } = require('../controllers/school.controller');


const router = express.Router();

router.route('/reg').post(regSchool)
router.route('/get-info').get(getSchoolData);

router.route('/updateSchool/:id').put(updateSchoolData)

router.route('/delete-school/:id').delete(deleteSchool)


module.exports = router;
