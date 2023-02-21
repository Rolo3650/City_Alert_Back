import express from 'express';
import { SettlementTypeDB } from '../../database/ubication/settlementType.js';
import { middleware } from '../../middleware/index.js';

const settlementTypeRoutes = express();
const settlement_typebd = new SettlementTypeDB();

settlementTypeRoutes.get('/get-settlement-types', middleware, async (req, res) => {

  const settlement_types = await settlement_typebd.getSettlementTypes();
  const settlement_types_array = settlement_types.map(settlement_type => ({
    id_settlement_type: settlement_type.getIdSettlementType(),
    settlement_type: settlement_type.getSettlementType(),
  }));

  return res.status(200).send({
    settlement_types_array
  });

});


export { settlementTypeRoutes };
