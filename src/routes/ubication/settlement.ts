import express from 'express';
import { SettlementDB } from '../../database/ubication/settlement.js';
import { middleware } from '../../middleware/index.js';

const settlementRoutes = express();
const settlementbd = new SettlementDB();

settlementRoutes.get('/get-settlements', middleware, async (req, res) => {

  const settlements = await settlementbd.getSettlements();
  const settlements_array = settlements.map(settlement => ({
    id_settlement: settlement.getIdSettlement(),
    name: settlement.getName(),
    pc: {
      id_pc: settlement.getZipPC()?.getIdPC(),
      state: {
        id_state: settlement.getZipPC()?.getState()?.getIdState(),
        state: settlement.getZipPC()?.getState()?.getState()
      },
      municipality: {
        id_municipality: settlement.getZipPC()?.getMunicipality()?.getIdMunicipality(),
        municipality: settlement.getZipPC()?.getMunicipality()?.getMunicipality()
      }
    },
    settlement_type: {
      id_settllement_type: settlement.getSettlementType()?.getIdSettlementType(),
      settllement_type: settlement.getSettlementType()?.getSettlementType()
    }
  }));

  return res.status(200).send({
    ok: true,
    settlements_array
  });

});


export { settlementRoutes };
