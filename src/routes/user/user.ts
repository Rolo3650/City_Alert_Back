import express from 'express';
import bcrypt from 'bcryptjs'
import { PersonDB } from '../../database/user/person.js';
import { UserDB } from '../../database/user/user.js';
import { returnUser, returnUserJSON } from '../../helpers/user/user.js';
import { middleware } from '../../middleware/index.js';
import { SettlementDB } from '../../database/ubication/settlement.js';
import { SexDB } from '../../database/user/sex.js';
import { AvatarDB } from '../../database/user/avatar.js';

const userRoutes = express();
const userdb = new UserDB();
const avatardb = new AvatarDB();
const personbd = new PersonDB();
const settlementbd = new SettlementDB();
const sexbd = new SexDB();

userRoutes.get('/get-users', middleware, async (req, res) => {

  const users = await userdb.getUsers();
  const users_array = users.map(user => returnUserJSON(user));

  return res.status(200).send({
    ok: true,
    users_array
  });

});

userRoutes.post('/get-user', middleware, async (req, res) => {

  let { body } = req;

  if (body.id_user) {
    if (typeof body.id_user === 'number') {

      const user = await userdb.getUser(body.id_user)

      if (user?.getIdUser()) {
        return res.status(200).send({
          ok: true,
          user: returnUserJSON(user)
        });
      } else {
        return res.status(200).send({
          ok: false,
          error: "User does not exist"
        });
      }

    } else {
      return res.status(200).send({
        ok: false,
        error: 'Invalid Data'
      });
    }
  } else {
    return res.status(200).send({
      ok: false,
      error: 'Missing Data'
    });
  }

});

userRoutes.post('/users-registered', middleware, async (req, res) => {

  let { body } = req;

  if (body?.email) {
    if (typeof body.email === 'string') {
      const already_exist = await userdb.userExist(body.email)

      if (already_exist.length == 0) {
        return res.status(200).send({
          ok: true,
          message: "User does not exist"
        });
      } else {
        return res.status(200).send({
          ok: false,
          error: 'User already exists'
        });
      }
    } else {
      return res.status(200).send({
        ok: false,
        error: 'Invalid Data'
      });
    }

  } else {
    return res.status(200).send({
      ok: false,
      error: 'Mising Data'
    });
  }

});

userRoutes.post('/sign-up', middleware, async (req, res) => {

  let { body } = req;

  body.create_date = new Date()

  if (body.email && body.name && body.last_name && body.birthday && body.id_sex && body.id_settlement && body.password && body.create_date) {

    if (typeof body.email == 'string' && typeof body.name == 'string' && typeof body.last_name == 'string' && typeof body.birthday == 'string' && typeof body.id_sex == 'number' && typeof body.id_settlement == 'number' && typeof body.password == 'string' && body.create_date instanceof Date) {

      let response = {
        ok: true,
        error: ""
      }

      const settlement = await settlementbd.getSettlement(body.id_settlement);
      const sex = await sexbd.getSex(body.id_sex);

      if (!settlement?.getIdSettlement()) {
        response.error = "Settlement does not exist"
        response.ok = false
      } else if (!sex?.getIdSex()) {
        response.error = "Sex does not exist"
        response.ok = false
      }

      if (response.ok) {
        const already_exist = await userdb.userExist(body.email)

        if (already_exist.length == 0) {
          const last_user = (await userdb.getLastUser())[0];
          const last_avatar = (await avatardb.getLastAvatar())[0];
          body.id_person = <number>last_user.getIdUser() + 1;
          body.id_user = <number>last_user.getIdUser() + 1;
          body.id_user_type = 2
          body.id_avatar = <number>last_avatar.getIdAvatar() + 1;
          body.url = "_";
          body.deleted = false;

          bcrypt.genSalt(10, (err, Salt) => {

            if (err) {
              return res.status(200).send({
                ok: false,
                error: "Bcrypt Base Error"
              });
            }

            bcrypt.hash(body.password, Salt, async (err, hash) => {

              if (err) {
                return res.status(200).send({
                  ok: false,
                  error: "Bcrypt Base Error"
                });
              }

              body.password = hash;

              const new_user = returnUser(body);

              const save_person = await personbd.savePerson(new_user.getPerson());
              if (save_person) {

                const save_avatar = await avatardb.saveAvatar(new_user.getAvatar())

                if (save_avatar) {
                  const save_user = await userdb.saveUser(new_user);

                  if (save_user) {
                    const response_user = await userdb.getUser(new_user.getIdUser());
                    return res.status(200).send({
                      ok: true,
                      user: returnUserJSON(response_user)
                    });
                  } else {
                    return res.status(200).send({
                      ok: false,
                      error: "Data Base Error"
                    });
                  }
                } else {
                  return res.status(200).send({
                    ok: false,
                    error: "Data Base Error"
                  });
                }


              } else {
                return res.status(200).send({
                  ok: false,
                  error: "Data Base Error"
                });
              }

            })

          })
        } else {
          return res.status(200).send({
            ok: false,
            error: "User Already Exist"
          });
        }
      } else {
        return res.status(200).send({
          ok: false,
          error: response.error
        });
      }

    } else {
      return res.status(200).send({
        ok: false,
        error: "Invalid Data"
      });
    }
  } else {
    return res.status(200).send({
      ok: false,
      error: "Missing Data"
    });
  }

});

userRoutes.post('/sign-in', middleware, async (req, res) => {

  let { body } = req;

  if (body.email && body.password) {

    const already_exist = await userdb.userExist(body.email)

    if (already_exist.length == 1) {

      const user = await userdb.getUserEmail(body.email)

      bcrypt.compare(body.password, <string>user.getPassword(), (err, result) => {
        if (result) {
          return res.status(200).send({
            ok: true,
            user: returnUserJSON(user)
          });
        } else {
          return res.status(200).send({
            ok: false,
            error: "Wrong password"
          });
        }
      });

    } else {
      return res.status(200).send({
        ok: false,
        error: "Not Found"
      });
    }

  } else {
    return res.status(200).send({
      ok: false,
      error: "Missing Data"
    });
  }
})

userRoutes.delete("/delete-user", middleware, async (req, res) => {

  let { body } = req;

  if (body.id_user && body.id_person) {

    if (typeof body.id_user == 'number' && typeof body.id_person == 'number') {

      let id_user = <number>body.id_user;

      let user = returnUser(body)

      const deletedUser = await userdb.deleteUser(user)

      if (deletedUser) {
        const deletedPerson = await personbd.deletePerson(user.getPerson());

        if (deletedPerson) {

          return res.status(200).send({
            ok: true,
            error: `Deleted user with id ${id_user}`
          })

        } else {
          return res.status(200).send({
            ok: false,
            error: "Data Base Error"
          });
        }

      } else {
        return res.status(200).send({
          ok: false,
          error: "Data Base Error"
        });
      }

    } else {
      return res.status(200).send({
        ok: false,
        error: "Invalid Data"
      })
    }

  } else {
    return res.status(200).send({
      ok: false,
      error: "Missing Params"
    })
  }

})

userRoutes.post('/user-update', middleware, async (req, res) => {

  let { body } = req

  if (body.id_user && body.name && body.last_name && body.birthday && body.id_sex && body.id_settlement && body.url) {

    if (typeof body.id_user == 'number' && typeof body.name == 'string' && typeof body.last_name && typeof body.birthday == 'string' && typeof body.id_sex == 'number' && typeof body.id_settlement == 'number' && typeof body.url == 'string') {

      const user = returnUser(body);

      const updated_person = await personbd.updatePerson(user.getPerson());
      const updated_avatar = await avatardb.updateAvatar(user.getAvatar());

      if (updated_avatar && updated_person) {
        const updated_user = await userdb.getUser(body.id_user);

        return res.status(200).send({
          ok: true,
          user: returnUserJSON(updated_user)
        })
      } else {
        return res.status(200).send({
          ok: false,
          error: "BD error"
        })
      }

    } else {
      return res.status(200).send({
        ok: false,
        error: "Invalid Data"
      })
    }
  } else {
    return res.status(200).send({
      ok: false,
      error: "Missing Params"
    })
  }

})

export { userRoutes };
