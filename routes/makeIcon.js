'use strict';
const express = require('express');
const router = express.Router();

const uuid = require('uuid');
const Icon = require('../models/icon');
const Parts = require('../models/head-parts');


router.get('/new',(req, res, next) => {
  res.render('icon');

});
router.get('/setget',(req, res, next) => {
  Icon.findAll({
    order: [['iconId', 'DESC']]
  }).then((icon) => {
    console.log('への');
    console.log(icon);
    console.log('への');
    res.render('index', {
      icon: icon
    });
  });
});


router.post('/set',(req, res, next) => {
  const IconId = uuid.v4();
  const parts_info=req.body;
  const makedAt = new Date();
  Icon.create({
    iconId: 0,
  }).then((icon) => {
    Parts.bulkCreate({
      iconId      : icon.iconId,
      parts_kind  : 'face',
      parts_name  : parts_info['head[name]'],
      parts_posX  : parts_info['head[posX]'],
      parts_posY  : parts_info['head[posY]'],
      parts_sizeX : parts_info['head[sizeX]'],
      parts_sizeY : parts_info['head[sizeY]'],
      parts_rot   : parts_info['head[rot]'],
    });
    Parts.bulkCreate({
      iconId      : icon.iconId,
      parts_kind  : 'hair',
      parts_name  : parts_info['hair[name]'],
      parts_posX  : parts_info['hair[posX]'],
      parts_posY  : parts_info['hair[posY]'],
      parts_sizeX : parts_info['hair[sizeX]'],
      parts_sizeY : parts_info['hair[sizeY]'],
      parts_rot   : parts_info['hair[rot]'],
    });
    Parts.bulkCreate({
      iconId      : icon.iconId,
      parts_kind  : 'left-eye',
      parts_name  : parts_info['left-eye[name]'],
      parts_posX  : parts_info['left-eye[posX]'],
      parts_posY  : parts_info['left-eye[posY]'],
      parts_sizeX : parts_info['left-eye[sizeX]'],
      parts_sizeY : parts_info['left-eye[sizeY]'],
      parts_rot   : parts_info['left-eye[rot]'],
    });
    Parts.bulkCreate({
      iconId      : icon.iconId,
      parts_kind  : 'right-eye',
      parts_name  : parts_info['right-eye[name]'],
      parts_posX  : parts_info['right-eye[posX]'],
      parts_posY  : parts_info['right-eye[posY]'],
      parts_sizeX : parts_info['right-eye[sizeX]'],
      parts_sizeY : parts_info['right-eye[sizeY]'],
      parts_rot   : parts_info['right-eye[rot]'],
    });
    Parts.bulkCreate({
      iconId      : icon.iconId,
      parts_kind  : 'nose',
      parts_name  : parts_info['nose[name]'],
      parts_posX  : parts_info['nose[posX]'],
      parts_posY  : parts_info['nose[posY]'],
      parts_sizeX : parts_info['nose[sizeX]'],
      parts_sizeY : parts_info['nose[sizeY]'],
      parts_rot   : parts_info['nose[rot]'],
    });
    Parts.bulkCreate({
      iconId      : icon.iconId,
      parts_kind  : 'mouth',
      parts_name  : parts_info['mouth[name]'],
      parts_posX  : parts_info['mouth[posX]'],
      parts_posY  : parts_info['mouth[posY]'],
      parts_sizeX : parts_info['mouth[sizeX]'],
      parts_sizeY : parts_info['mouth[sizeY]'],
      parts_rot   : parts_info['mouth[rot]'],
    });
  });
});
//  console.log(req.body); // TODO 予定と候補を保存する実装をする

module.exports = router;