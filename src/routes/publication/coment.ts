import express from 'express';
import { ComentDB } from '../../database/publication/coment.js';
import { middleware } from '../../middleware/index.js';

const comentRoutes = express();
const comentbd = new ComentDB();

comentRoutes.get('/get-coments', middleware, async (req, res) => {

  const coments = await comentbd.getComents();
  const coments_array = coments.map(coment => ({
    id_coment: coment.getIdComent(),
    coment: coment.getComent(),
    date: coment.getDate(),
    deleted: coment.getDeleted(),
    user: {
      id_user: coment.getUser()?.getIdUser(),
      email: coment.getUser()?.getEmail(),
      password: coment.getUser()?.getPassword(),
      create_date: coment.getUser()?.getCreateDate(),
      person: {
        id_person: coment.getUser()?.getPerson()?.getIdPerson(),
        name: coment.getUser()?.getPerson()?.getName(),
        last_name: coment.getUser()?.getPerson()?.getLastName(),
        birthday: coment.getUser()?.getPerson()?.getBirthday(),
        sex: {
          id_sex: coment.getUser()?.getPerson()?.getSex()?.getIdSex(),
          sex: coment.getUser()?.getPerson()?.getSex()?.getSex()
        },
        settlement: {
          name: coment.getUser()?.getPerson()?.getSettlement()?.getName(),
          pc: {
            id_pc: coment.getUser()?.getPerson()?.getSettlement()?.getZipPC()?.getIdPC(),
            state: {
              id_state: coment.getUser()?.getPerson()?.getSettlement()?.getZipPC()?.getState()?.getIdState(),
              state: coment.getUser()?.getPerson()?.getSettlement()?.getZipPC()?.getState()?.getState()
            },
            municipality: {
              id_municipality: coment.getUser()?.getPerson()?.getSettlement()?.getZipPC()?.getMunicipality()?.getIdMunicipality(),
              municipality: coment.getUser()?.getPerson()?.getSettlement()?.getZipPC()?.getMunicipality()?.getMunicipality()
            }
          },
          settlement: {
            id_settllement_type: coment.getUser()?.getPerson()?.getSettlement()?.getSettlementType()?.getIdSettlementType(),
            settllement_type: coment.getUser()?.getPerson()?.getSettlement()?.getSettlementType()?.getSettlementType()
          }
        }
      },
      user_type: {
        id_user_type: coment.getUser()?.getUserType()?.getIdUserType(),
        user_type: coment.getUser()?.getUserType()?.getUserType()
      }
    }
  }));

  return res.status(200).send({
    ok: true,
    coments_array
  });

});


export { comentRoutes };
