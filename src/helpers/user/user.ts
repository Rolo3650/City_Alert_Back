import { User } from "../../classes/user/user";

const returnUser = (user: User) => {
  return {
    id_user: user.getIdUser(),
    email: user.getEmail(),
    password: user.getPassword(),
    create_date: user.getCreateDate(),
    person: {
      id_person: user.getPerson()?.getIdPerson(),
      name: user.getPerson()?.getName(),
      last_name: user.getPerson()?.getLastName(),
      birthday: user.getPerson()?.getBirthday(),
      sex: {
        id_sex: user.getPerson()?.getSex()?.getIdSex(),
        sex: user.getPerson()?.getSex()?.getSex()
      },
      settlement: {
        name: user.getPerson()?.getSettlement()?.getName(),
        pc: {
          id_pc: user.getPerson()?.getSettlement()?.getZipPC()?.getIdPC(),
          state: {
            id_state: user.getPerson()?.getSettlement()?.getZipPC()?.getState()?.getIdState(),
            state: user.getPerson()?.getSettlement()?.getZipPC()?.getState()?.getState()
          },
          municipality: {
            id_municipality: user.getPerson()?.getSettlement()?.getZipPC()?.getMunicipality()?.getIdMunicipality(),
            municipality: user.getPerson()?.getSettlement()?.getZipPC()?.getMunicipality()?.getMunicipality()
          }
        },
        settlement: {
          id_settllement_type: user.getPerson()?.getSettlement()?.getSettlementType()?.getIdSettlementType(),
          settllement_type: user.getPerson()?.getSettlement()?.getSettlementType()?.getSettlementType()
        }
      }
    },
    user_type: {
      id_user_type: user.getUserType()?.getIdUserType(),
      user_type: user.getUserType()?.getUserType()
    }
  };
};

export { returnUser };
