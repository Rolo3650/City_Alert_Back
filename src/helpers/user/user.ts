import { Municipality } from "../../classes/ubication/municipality.js";
import { PostalCode } from "../../classes/ubication/postalCode.js";
import { Settlement } from "../../classes/ubication/settlement.js";
import { SettlementType } from "../../classes/ubication/settlementType.js";
import { State } from "../../classes/ubication/state.js";
import { Person } from "../../classes/user/person.js";
import { Sex } from "../../classes/user/sex.js";
import { User } from "../../classes/user/user.js";
import { UserType } from "../../classes/user/userType.js";

const returnUserJSON = (user: User) => {
  return {
    id_user: user?.getIdUser(),
    email: user?.getEmail(),
    password: user?.getPassword(),
    create_date: user?.getCreateDate(),
    person: {
      id_person: user?.getPerson()?.getIdPerson(),
      name: user?.getPerson()?.getName(),
      last_name: user?.getPerson()?.getLastName(),
      birthday: user?.getPerson()?.getBirthday(),
      sex: {
        id_sex: user?.getPerson()?.getSex()?.getIdSex(),
        sex: user?.getPerson()?.getSex()?.getSex()
      },
      settlement: {
        id_settlement: user?.getPerson()?.getSettlement()?.getIdSettlement(),
        name: user?.getPerson()?.getSettlement()?.getName(),
        pc: {
          id_pc: user?.getPerson()?.getSettlement()?.getZipPC()?.getIdPC(),
          state: {
            id_state: user?.getPerson()?.getSettlement()?.getZipPC()?.getState()?.getIdState(),
            state: user?.getPerson()?.getSettlement()?.getZipPC()?.getState()?.getState()
          },
          municipality: {
            id_municipality: user?.getPerson()?.getSettlement()?.getZipPC()?.getMunicipality()?.getIdMunicipality(),
            municipality: user?.getPerson()?.getSettlement()?.getZipPC()?.getMunicipality()?.getMunicipality()
          }
        },
        settlement_type: {
          id_settllement_type: user?.getPerson()?.getSettlement()?.getSettlementType()?.getIdSettlementType(),
          settllement_type: user?.getPerson()?.getSettlement()?.getSettlementType()?.getSettlementType()
        }
      }
    },
    user_type: {
      id_user_type: user?.getUserType()?.getIdUserType(),
      user_type: user?.getUserType()?.getUserType()
    }
  };
};

const returnUser = (data: any) => {
  const st = new State(data.id_state, data.state);
  const mn = new Municipality(data.id_municipality, data.municipality);

  const pc = new PostalCode(data.zip_pc, st, mn);

  const stl_type = new SettlementType(data.id_settlement_type, data.settlement_type);

  const stl = new Settlement(data.id_settlement, data.settlement, pc, stl_type);

  const sex = new Sex(data.id_sex, data.sex);

  const pe = new Person(data.id_person, data.name, data.last_name, new Date(data.birthday), sex, stl);

  const us_type = new UserType(data.id_user_type, data.user_type)

  return new User(data.id_user, data.email, data.password, new Date(data.create_date), pe, us_type)
}

export { returnUserJSON, returnUser };
