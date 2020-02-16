const {Router} = require('express');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const {check, validationResult} = require('express-validator');
const router = Router();
const User = require('../models/User');

router.post('/register',
    [check('email','Некорректный email').isEmail(),
             check('password','Слишком короткий пароль').isLength({min: 6}),
          ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(400).json({message: 'Неправильный логин или пароль',
                errors: errors.array(),
                })
            }
            const {mail, password} = req.body;
            const isUserWillBe = await User.findOne({mail});
            if (isUserWillBe) {
                let cryptPassword = bcrypt.hash(password, 12);
                const newuser = new User({mail, password:cryptPassword});
                await newuser.save();
                return res.status(200).json({message: "Пользователь создан"});
            } else {
                return res.status(400).json({message: "Неверно введен логин или пароль"});
            }
        } catch (e) {
            return res.message(`Error in method post on register err:${e.message}`);
        }
    });
router.post('/login',
    [check('email','Неправильно введен email').isEmail(),
    check('password','Неправильно введен пароль').exists(),
    ],
    async (req, res) => {
  try {
      const errors = validationResult(req);
      if(!errors.isEmpty()){
          return res.status(400).json({message: 'Непраильно введен логин или пароль'});
      }
      const {email,password} = req.body;
      const findUser = await User.findOne({email});
      if(!findUser){
          return res.status(400).json({message: 'Некорректно введенные данные'});
      }
      const isHaveUser = bcrypt.compare(password,findUser.password);
      if(!isHaveUser){
          return res.status(400).json({message: 'Некорректно введенные данные'});
      }
      let token = jwt.sign(
          {userId: findUser.id,},
          config.get('jwtsecretKey'),
          {expiresIn: '1h'}
          );
      res.json({token,userId: findUser.id});

  } catch (e) {
      res.status(500).json({message:'Что-то пошло не так ошибка на сервере'});
  }
});

module.exports = router;