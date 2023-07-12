module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('influencers', [
      {
        image: 'https://mixme.com.br/wp-content/uploads/2021/10/BillieProtesto.jpg',
        name: 'Billie Eilish',
        platform: 'Instagram',
        country: 'EUA',
        followers: 109000000,
        category: "Artista"
      },
      {
        image: 'https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2023-06/230629-travis-scott-mjf-1458-7f6898.jpg',
        name: 'Travis Scott',
        platform: 'Instagram',
        country: 'EUA',
        followers: 49800000,
        category: "Artista"
      },
      {
        image: 'https://pyxis.nymag.com/v1/imgs/181/5b4/959542d212df52641126e1605d1297f927-20-chester-bennington.jpg',
        name: 'Chester Bennington',
        platform: 'Instagram',
        country: 'EUA',
        followers: 1400000,
        category: "Artista"
      },
      {
        image: 'https://conteudo.imguol.com.br/c/esporte/eb/2022/09/27/neymar-comemora-gol-marcado-pela-selecao-brasileira-contra-a-tunisia-1664308063053_v2_450x600.jpg',
        name: 'Neymar Junior',
        platform: 'Instagram',
        country: 'BR',
        followers: 210000000,
        category: "Esporte"
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('influencers', null, {});
  },
};
