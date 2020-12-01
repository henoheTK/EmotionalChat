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
  }).then((icons) => {
    Parts.findAll({
    }).then((parts) => {
      console.log('わい')
      res.render('index', {
        icons: icons,
        parts: parts
      });
    });
  });
});

router.post('/set',(req, res, next) => {
  const IconId = uuid.v4();
  const parts_info=req.body;
  const makedAt = new Date();

    
  Icon.upsert({
    iconId: 0,
    userId: 0
  }).then((icon) => {
    Icon.findAll({

    }).then((icons)=>{

    console.log({
      iconId      : icons[0]['dataValues'].iconId,
      parts_kind  : 'face',
      parts_name  : parts_info['face[name]'],
      parts_posX  : Number(parts_info['face[posX]']),
      parts_posY  : Number(parts_info['face[posY]']),
      parts_sizeX : Number(parts_info['face[sizeX]']),
      parts_sizeY : Number(parts_info['face[sizeY]']),
      parts_rot   : Number(parts_info['face[rot]']),
    });
    console.log(icons[0]['dataValues']);

    Parts.upsert({
      iconId      : icons[0]['dataValues'].iconId,
      parts_kind  : 'face',
      parts_name  : parts_info['face[name]'],
      parts_posX  : Number(parts_info['face[posX]']),
      parts_posY  : Number(parts_info['face[posY]']),
      parts_sizeX : Number(parts_info['face[sizeX]']),
      parts_sizeY : Number(parts_info['face[sizeY]']),
      parts_rot   : Number(parts_info['face[rot]']),
    }).then((parts)=>{
      Parts.upsert({
        iconId      : icons[0]['dataValues'].iconId,
        parts_kind  : 'hair',
        parts_name  : parts_info['hair[name]'],
        parts_posX  : Number(parts_info['hair[posX]']),
        parts_posY  : Number(parts_info['hair[posY]']),
        parts_sizeX : Number(parts_info['hair[sizeX]']),
        parts_sizeY : Number(parts_info['hair[sizeY]']),
        parts_rot   : Number(parts_info['hair[rot]']),
      }).then(()=>{
        Parts.upsert({
          iconId      : icons[0]['dataValues'].iconId,
          parts_kind  : 'left-eye',
          parts_name  : parts_info['left-eye[name]'],
          parts_posX  : Number(parts_info['left-eye[posX]']),
          parts_posY  : Number(parts_info['left-eye[posY]']),
          parts_sizeX : Number(parts_info['left-eye[sizeX]']),
          parts_sizeY : Number(parts_info['left-eye[sizeY]']),
          parts_rot   : Number(parts_info['left-eye[rot]']),
        }).then(()=>{
          Parts.upsert({
            iconId      : icons[0]['dataValues'].iconId,
            parts_kind  : 'right-eye',
            parts_name  : parts_info['right-eye[name]'],
            parts_posX  : Number(parts_info['right-eye[posX]']),
            parts_posY  : Number(parts_info['right-eye[posY]']),
            parts_sizeX : Number(parts_info['right-eye[sizeX]']),
            parts_sizeY : Number(parts_info['right-eye[sizeY]']),
            parts_rot   : Number(parts_info['right-eye[rot]']),
          }).then(()=>{       
            Parts.upsert({
              iconId      : icons[0]['dataValues'].iconId,
              parts_kind  : 'nose',
              parts_name  : parts_info['nose[name]'],
              parts_posX  : Number(parts_info['nose[posX]']),
              parts_posY  : Number(parts_info['nose[posY]']),
              parts_sizeX : Number(parts_info['nose[sizeX]']),
              parts_sizeY : Number(parts_info['nose[sizeY]']),
              parts_rot   : Number(parts_info['nose[rot]']),
            }).then(()=>{              
              Parts.upsert({
                iconId      : icons[0]['dataValues'].iconId,
                parts_kind  : 'mouth',
                parts_name  : parts_info['mouth[name]'],
                parts_posX  : Number(parts_info['mouth[posX]']),
                parts_posY  : Number(parts_info['mouth[posY]']),
                parts_sizeX : Number(parts_info['mouth[sizeX]']),
                parts_sizeY : Number(parts_info['mouth[sizeY]']),
                parts_rot   : Number(parts_info['mouth[rot]']),
              }).then(()=>{
            
              });
            });
          });  
        });
      });
      console.log('ほう');
      console.log(parts_info);
      });
    });
  });
});
//  console.log(req.body); // TODO 予定と候補を保存する実装をする

module.exports = router;