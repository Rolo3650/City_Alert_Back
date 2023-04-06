import { Municipality } from "../../classes/ubication/municipality.js";
import { PostalCode } from "../../classes/ubication/postalCode.js";
import { State } from "../../classes/ubication/state.js";

const returnPostalCodeJSON = (postalCode: PostalCode) => ({
  id_postalCode: postalCode.getIdPC(),
  state: {
    id_state: postalCode.getState()?.getIdState(),
    state: postalCode.getState()?.getState(),
  },
  municipality: {
    id_municipality: postalCode.getMunicipality()?.getIdMunicipality(),
    municipality: postalCode.getMunicipality()?.getMunicipality(),
  },
})

const returnPostalCode = (data: any) => {
  return new PostalCode(
    data.zip_pc,
    new State(data.id_state, data.state),
    new Municipality(data.id_municipality, data.municipality)
  )
}


export { returnPostalCodeJSON, returnPostalCode }
