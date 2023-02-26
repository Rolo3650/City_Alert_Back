import { Publication } from "../../classes/publication/publication";

const returnPublication = (publication: Publication) => {
  return {
    id_publication: publication.getIdPublication(),
    description: publication.getDescription(),
    date: publication.getDate(),
    deleted: publication.getDeleted(),
    solved: publication.getSolved(),
    publication_type: {
      id_publication_type: publication.getPublicationType()?.getIdPublicationType(),
      publication_type: publication.getPublicationType()?.getPublicationType()
    },
    user: {
      id_user: publication.getUser()?.getIdUser(),
      email: publication.getUser()?.getEmail(),
      password: publication.getUser()?.getPassword(),
      create_date: publication.getUser()?.getCreateDate(),
      person: {
        id_person: publication.getUser()?.getPerson()?.getIdPerson(),
        name: publication.getUser()?.getPerson()?.getName(),
        last_name: publication.getUser()?.getPerson()?.getLastName(),
        birthday: publication.getUser()?.getPerson()?.getBirthday(),
        sex: {
          id_sex: publication.getUser()?.getPerson()?.getSex()?.getIdSex(),
          sex: publication.getUser()?.getPerson()?.getSex()?.getSex()
        },
        settlement: {
          name: publication.getUser()?.getPerson()?.getSettlement()?.getName(),
          pc: {
            id_pc: publication.getUser()?.getPerson()?.getSettlement()?.getZipPC()?.getIdPC(),
            state: {
              id_state: publication.getUser()?.getPerson()?.getSettlement()?.getZipPC()?.getState()?.getIdState(),
              state: publication.getUser()?.getPerson()?.getSettlement()?.getZipPC()?.getState()?.getState()
            },
            municipality: {
              id_municipality: publication.getUser()?.getPerson()?.getSettlement()?.getZipPC()?.getMunicipality()?.getIdMunicipality(),
              municipality: publication.getUser()?.getPerson()?.getSettlement()?.getZipPC()?.getMunicipality()?.getMunicipality()
            }
          },
          settlement: {
            id_settllement_type: publication.getUser()?.getPerson()?.getSettlement()?.getSettlementType()?.getIdSettlementType(),
            settllement_type: publication.getUser()?.getPerson()?.getSettlement()?.getSettlementType()?.getSettlementType()
          }
        }
      },
      user_type: {
        id_user_type: publication.getUser()?.getUserType()?.getIdUserType(),
        user_type: publication.getUser()?.getUserType()?.getUserType()
      }
    },
    settlement: {
      name: publication?.getSettlement()?.getName(),
      pc: {
        id_pc: publication?.getSettlement()?.getZipPC()?.getIdPC(),
        state: {
          id_state: publication?.getSettlement()?.getZipPC()?.getState()?.getIdState(),
          state: publication?.getSettlement()?.getZipPC()?.getState()?.getState()
        },
        municipality: {
          id_municipality: publication?.getSettlement()?.getZipPC()?.getMunicipality()?.getIdMunicipality(),
          municipality: publication?.getSettlement()?.getZipPC()?.getMunicipality()?.getMunicipality()
        }
      },
      settlement: {
        id_settllement_type: publication?.getSettlement()?.getSettlementType()?.getIdSettlementType(),
        settllement_type: publication?.getSettlement()?.getSettlementType()?.getSettlementType()
      }
    },
    reactions: publication?.getReactions()?.map(reaction => ({
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
    })),
    coments: publication?.getComents()?.map(coment => ({
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
    })),
    images: publication?.getImages()?.map(image => ({
      id_image: image.getIdImage(),
      image: image.getUrl(),
      deleted: image.getDeleted(),
    }))
  };
};

export { returnPublication };
