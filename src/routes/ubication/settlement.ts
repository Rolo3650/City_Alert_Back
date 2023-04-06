import express from 'express';
import { SettlementDB } from '../../database/ubication/settlement.js';
import { returnSettlementJSON } from '../../helpers/ubication/settlement.js';
import { middleware } from '../../middleware/index.js';
import { config } from '../../utils/config.js';

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

settlementRoutes.get('/get-settlements-by-id-municipality', middleware, async (req, res) => {

  let { id }: any = req.query;

  if (id) {
    if (config.regex.number.test(id)) {

      const settlements = await settlementbd.getSettlementsByMunicipality(parseInt(id));
      const settlements_array = settlements.map(settlement => returnSettlementJSON(settlement));

      return res.status(200).send({
        ok: true,
        settlements_array
      });
    } else {
      return res.status(200).send({
        ok: false,
        error: "Invalid Data"
      });
    }
  } else {
    return res.status(200).send({
      ok: false,
      error: "Missing Data"
    });
  }

});

settlementRoutes.get('/get-settlements-by-id-pc', middleware, async (req, res) => {

  let { id }: any = req.query;

  if (id) {
    if (config.regex.number.test(id)) {

      const settlements = await settlementbd.getSettlementsByPC(parseInt(id));
      const settlements_array = settlements.map(settlement => returnSettlementJSON(settlement));

      return res.status(200).send({
        ok: true,
        settlements_array
      });
    } else {
      return res.status(200).send({
        ok: false,
        error: "Invalid Data"
      });
    }
  } else {
    return res.status(200).send({
      ok: false,
      error: "Missing Data"
    });
  }

});


export { settlementRoutes };
