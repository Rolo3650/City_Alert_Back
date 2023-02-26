import express from 'express';
import { ReactionDB } from '../../database/publication/reaction.js';
import { middleware } from '../../middleware/index.js';

const reactionRoutes = express();
const reactionbd = new ReactionDB();

reactionRoutes.get('/get-reactions', middleware, async (req, res) => {

  const reactions = await reactionbd.getReactions();
  const reactions_array = reactions.map(reaction => ({
    id_reaction: reaction.getIdReaction(),
    user: {
      id_user: reaction.getUser()?.getIdUser(),
      email: reaction.getUser()?.getEmail(),
      password: reaction.getUser()?.getPassword(),
      create_date: reaction.getUser()?.getCreateDate(),
      person: {
        id_person: reaction.getUser()?.getPerson()?.getIdPerson(),
        name: reaction.getUser()?.getPerson()?.getName(),
        last_name: reaction.getUser()?.getPerson()?.getLastName(),
        birthday: reaction.getUser()?.getPerson()?.getBirthday(),
        sex: {
          id_sex: reaction.getUser()?.getPerson()?.getSex()?.getIdSex(),
          sex: reaction.getUser()?.getPerson()?.getSex()?.getSex()
        },
        settlement: {
          name: reaction.getUser()?.getPerson()?.getSettlement()?.getName(),
          pc: {
            id_pc: reaction.getUser()?.getPerson()?.getSettlement()?.getZipPC()?.getIdPC(),
            state: {
              id_state: reaction.getUser()?.getPerson()?.getSettlement()?.getZipPC()?.getState()?.getIdState(),
              state: reaction.getUser()?.getPerson()?.getSettlement()?.getZipPC()?.getState()?.getState()
            },
            municipality: {
              id_municipality: reaction.getUser()?.getPerson()?.getSettlement()?.getZipPC()?.getMunicipality()?.getIdMunicipality(),
              municipality: reaction.getUser()?.getPerson()?.getSettlement()?.getZipPC()?.getMunicipality()?.getMunicipality()
            }
          },
          settlement: {
            id_settllement_type: reaction.getUser()?.getPerson()?.getSettlement()?.getSettlementType()?.getIdSettlementType(),
            settllement_type: reaction.getUser()?.getPerson()?.getSettlement()?.getSettlementType()?.getSettlementType()
          }
        }
      },
      user_type: {
        id_user_type: reaction.getUser()?.getUserType()?.getIdUserType(),
        user_type: reaction.getUser()?.getUserType()?.getUserType()
      }
    },
    reacted: reaction.getReacted(),
  }));

  return res.status(200).send({
    ok: true,
    reactions_array
  });

});


export { reactionRoutes };
