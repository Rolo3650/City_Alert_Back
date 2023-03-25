import { Municipality } from "../../classes/ubication/municipality.js";
import { PostalCode } from "../../classes/ubication/postalCode.js";
import { Settlement } from "../../classes/ubication/settlement.js";
import { SettlementType } from "../../classes/ubication/settlementType.js";
import { State } from "../../classes/ubication/state.js";

const returnSettlementJSON = (settlement: Settlement) => {
  return {
    id_settlement: settlement?.getIdSettlement(),
    name: settlement?.getName(),
    pc: {
      id_pc: settlement?.getZipPC()?.getIdPC(),
      state: {
        id_state: settlement?.getZipPC()?.getState()?.getIdState(),
        state: settlement?.getZipPC()?.getState()?.getState()
      },
      municipality: {
        id_municipality: settlement?.getZipPC()?.getMunicipality()?.getIdMunicipality(),
        municipality: settlement?.getZipPC()?.getMunicipality()?.getMunicipality()
      }
    },
    settlement_type: {
      id_settllement_type: settlement?.getSettlementType()?.getIdSettlementType(),
      settllement_type: settlement?.getSettlementType()?.getSettlementType()
    }
  }
}

const returnSettlement = (data: any) => {
  const st = new State(data.id_state, data.state);
  const mn = new Municipality(data.id_municipality, data.municipality);

  const pc = new PostalCode(data.zip_pc, st, mn);

  const stl_type = new SettlementType(data.id_settlement_type, data.settlement_type)

  return new Settlement(data.id_settlement, data.settlement, pc, stl_type)
}

export { returnSettlementJSON, returnSettlement }
