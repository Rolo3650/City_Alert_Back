import express from 'express';
import { SettlementDB } from '../../database/ubication/settlement.js';
import { returnSettlementJSON } from '../../helpers/ubication/settlement.js';
import { middleware } from '../../middleware/index.js';

const settlementRoutes = express();
const settlementbd = new SettlementDB();

settlementRoutes.get('/get-settlements', middleware, async (req, res) => {

  const settlements = await settlementbd.getSettlements();
  const settlements_array = settlements.map(settlement => returnSettlementJSON(settlement));

  return res.status(200).send({
    ok: true,
    settlements_array
  });

});


export { settlementRoutes };
