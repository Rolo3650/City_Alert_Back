import express from 'express';
import { PersonDB } from '../../database/user/person.js';
import { middleware } from '../../middleware/index.js';

const personRoutes = express();
const personbd = new PersonDB();

personRoutes.get('/get-persons', middleware, async (req, res) => {

  const persons = await personbd.getPersons();
  const persons_array = persons.map(person => ({
    id_person: person.getIdPerson(),
    name: person.getName(),
    last_name: person.getLastName(),
    birthday: person.getBirthday(),
    sex: {
      id_sex: person.getSex()?.getIdSex(),
      sex: person.getSex()?.getSex()
    },
    settlement: {
      name: person.getSettlement()?.getName(),
      pc: {
        id_pc: person.getSettlement()?.getZipPC()?.getIdPC(),
        state: {
          id_state: person.getSettlement()?.getZipPC()?.getState()?.getIdState(),
          state: person.getSettlement()?.getZipPC()?.getState()?.getState()
        },
        municipality: {
          id_municipality: person.getSettlement()?.getZipPC()?.getMunicipality()?.getIdMunicipality(),
          municipality: person.getSettlement()?.getZipPC()?.getMunicipality()?.getMunicipality()
        }
      },
      settlement: {
        id_settllement_type: person.getSettlement()?.getSettlementType()?.getIdSettlementType(),
        settllement_type: person.getSettlement()?.getSettlementType()?.getSettlementType()
      }
    }
  }));

  return res.status(200).send({
    ok: true,
    persons_array
  });

});


export { personRoutes };
