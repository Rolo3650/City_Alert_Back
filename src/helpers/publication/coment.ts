import { Coment } from "../../classes/publication/coment.js"
import { Municipality } from "../../classes/ubication/municipality.js";
import { PostalCode } from "../../classes/ubication/postalCode.js";
import { Settlement } from "../../classes/ubication/settlement.js";
import { SettlementType } from "../../classes/ubication/settlementType.js";
import { State } from "../../classes/ubication/state.js";
import { Person } from "../../classes/user/person.js";
import { Sex } from "../../classes/user/sex.js";
import { User } from "../../classes/user/user.js";
import { UserType } from "../../classes/user/userType.js";

const returnComentJSON = (coment: Coment) => {
  return {
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
  }
};

const returnComent = (data: any) => {
  const st = new State(data.id_state, data.state);
  const mn = new Municipality(data.id_municipality, data.municipality);

  const pc = new PostalCode(data.zip_pc, st, mn);

  const stl_type = new SettlementType(data.id_settlement_type, data.settlement_type);

  const stl = new Settlement(data.id_settlement, data.settlement, pc, stl_type);

  const sex = new Sex(data.id_sex, data.sex);

  const pe = new Person(data.id_person, data.name, data.last_name, new Date(data.birthday), sex, stl);

  const us_type = new UserType(data.id_user_type, data.user_type)

  const us = new User(data.id_user, data.email, data.password, new Date(data.create_date), pe, us_type)


  return new Coment(data.id_coment, data.coment, new Date(data.date), data.deleted ? true : false, us)
}

export { returnComentJSON, returnComent };
