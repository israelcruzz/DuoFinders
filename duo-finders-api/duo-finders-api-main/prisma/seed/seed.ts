import { Ad, Category, Game, User } from "@prisma/client";
import { prisma } from "../../src/lib/prisma";
import { randomUUID } from "crypto";

async function main() {
  prisma.$executeRaw``


  try {
    const user: User = await prisma.user.create({
      data: {
        id: randomUUID(),
        name: "Israel",
        avatar: "http://github.com/israelcruzz.png",
        banner: "fake-banner",
        discord: "Israel#1234",
      },
    });

    const categorys: Category[] = [
      { id: randomUUID(), name: "Battle Royale" },
      { id: randomUUID(), name: "MOBA" },
      { id: randomUUID(), name: "RPG" },
      { id: randomUUID(), name: "Esporte" },
      { id: randomUUID(), name: "Corrida" },
      { id: randomUUID(), name: "MMORPG" },
      { id: randomUUID(), name: "FPS" },
    ];

    for (let category of categorys) {
      await prisma.category.create({ data: category });

      console.log(`Categoria: ${category.name} Criada`);
    }

    const battleRoyaleGames: Game[] = [
      {
        id: randomUUID(),
        name: "Fornite",
        description:
          "Fortnite é um jogo de batalha real onde 100 jogadores competem para serem os últimos sobreviventes em uma ilha, construindo estruturas e combatendo uns aos outros em um ambiente colorido e cartunesco.",
        image: "https://static-cdn.jtvnw.net/ttv-boxart/33214-144x192.jpg",
        categoryId: categorys[0].id,
      },
      {
        id: randomUUID(),
        name: "Apex Legends",
        description:
          "Apex Legends é um Battle Royale de ritmo acelerado ambientado no universo de Titanfall, onde equipes de três jogadores escolhem entre uma variedade de lendas com habilidades únicas para competir em partidas intensas, utilizando trabalho em equipe e habilidade individual para sobreviver.",
        image: "https://static-cdn.jtvnw.net/ttv-boxart/511224-144x192.jpg",
        categoryId: categorys[0].id,
      },
      {
        id: randomUUID(),
        name: "Pubg Battlegrounds",
        description:
          "PUBG é um Battle Royale tático e realista que coloca até 100 jogadores em uma ilha remota, onde devem lutar pela sobrevivência em um ambiente de mundo aberto, buscando armas, veículos e suprimentos enquanto o mapa encolhe.",
        image: "https://static-cdn.jtvnw.net/ttv-boxart/493057-144x192.jpg",
        categoryId: categorys[0].id,
      },
      {
        id: randomUUID(),
        name: "Garena Free Fire",
        description:
          "Free Fire é um dos jogos de Battle Royale mais populares para dispositivos móveis, onde até 50 jogadores são colocados em uma ilha remota e lutam pela sobrevivência até que reste apenas um vencedor. Os jogadores devem procurar armas, equipamentos e veículos, enquanto enfrentam a zona de segurança em constante redução e lutam contra outros jogadores para se tornarem os últimos sobreviventes. Com partidas rápidas e intensas, Free Fire é conhecido por sua jogabilidade acessível e recompensadora, além de uma grande variedade de personagens, armas e modos de jogo.",
        image:
          "https://static-cdn.jtvnw.net/ttv-boxart/502732_IGDB-144x192.jpg",
        categoryId: categorys[0].id,
      },
      {
        id: randomUUID(),
        name: "Call of Duty: Warzone",
        description:
          "Warzone é um Battle Royale frenético e realista que coloca até 150 jogadores em um enorme mapa de guerra. Os jogadores devem explorar, coletar recursos, completar objetivos e lutar pela sobrevivência enquanto o círculo de gás mortal se fecha.",
        image: "https://static-cdn.jtvnw.net/ttv-boxart/512710-144x192.jpg",
        categoryId: categorys[0].id,
      },
    ];

    for (let game of battleRoyaleGames) {
      await prisma.game.create({ data: game });

      console.log(`Game: ${game.name} Criado`);
    }

    const mobaGames: Game[] = [
      {
        id: randomUUID(),
        name: "League Of Legends",
        description:
          "League of Legends é um jogo MOBA (Multiplayer Online Battle Arena) extremamente popular que coloca duas equipes de cinco jogadores uma contra a outra em uma batalha estratégica pela supremacia. Cada jogador escolhe um campeão com habilidades únicas e trabalha em equipe para destruir a base inimiga enquanto defende a sua própria. Com um vasto elenco de personagens, uma variedade de modos de jogo e uma comunidade ativa, o LoL é conhecido por sua jogabilidade competitiva e profundidade estratégica, atraindo milhões de jogadores ao redor do mundo.",
        image: "https://static-cdn.jtvnw.net/ttv-boxart/21779-144x192.jpg",
        categoryId: categorys[1].id,
      },
      {
        id: randomUUID(),
        name: "Dota 2",
        description:
          "Dota 2 é um jogo MOBA (Multiplayer Online Battle Arena) desenvolvido pela Valve Corporation, baseado no popular mod de Warcraft III, Defense of the Ancients (DotA). No Dota 2, duas equipes de cinco jogadores escolhem entre uma grande variedade de heróis, cada um com habilidades únicas, e competem para destruir a base inimiga, defendendo a sua própria. Os jogadores devem trabalhar em equipe, planejar estratégias, farmar ouro, comprar itens e conquistar objetivos no mapa para obter a vitória. Dota 2 é conhecido por sua complexidade, profundidade estratégica e comunidade competitiva ativa, sendo um dos jogos mais populares do gênero MOBA.",
        image: "https://static-cdn.jtvnw.net/ttv-boxart/29595-144x192.jpg",
        categoryId: categorys[1].id,
      },
    ];

    for (let game of mobaGames) {
      await prisma.game.create({ data: game });

      console.log(`Game: ${game.name} Criado`);
    }

    const rpgGames: Game[] = [
      {
        id: randomUUID(),
        name: "Genshin Impact",
        description:
          "Genshin Impact é um RPG de ação de mundo aberto desenvolvido pela empresa chinesa miHoYo. No jogo, os jogadores assumem o papel de Viajante, um ser misterioso que chega à terra de Teyvat em busca de seu irmão(a) sequestrado(a). Os jogadores exploram um vasto mundo de fantasia, repleto de paisagens deslumbrantes, cidades vibrantes e masmorras cheias de perigos. Com um sistema de combate dinâmico e fluido, os jogadores podem alternar entre personagens com habilidades elementais únicas para derrotar inimigos e resolver quebra-cabeças. Genshin Impact é conhecido por sua bela arte estilo anime, jogabilidade envolvente e um extenso elenco de personagens jogáveis, cada um com sua própria história e habilidades especiais.",
        image:
          "https://static-cdn.jtvnw.net/ttv-boxart/513181_IGDB-144x192.jpg",
        categoryId: categorys[2].id,
      },
    ];

    for (let game of rpgGames) {
      await prisma.game.create({ data: game });

      console.log(`Game: ${game.name} Criado`);
    }

    const sportGames: Game[] = [
      {
        id: randomUUID(),
        name: "NBA 2K24",
        description:
          "NBA 2K é uma série de jogos de simulação de basquete que oferece uma experiência autêntica da NBA, com gráficos de alta qualidade, jogabilidade realista e uma variedade de modos de jogo. Os jogadores podem assumir o controle de suas equipes e jogadores favoritos da NBA, competindo em partidas emocionantes, torneios, ligas e modos de carreira. Com recursos como MyCareer, MyTeam e MyLeague, NBA 2K oferece uma experiência completa de basquete para os fãs do esporte, permitindo que eles criem seus próprios jogadores, montem suas equipes dos sonhos e vivam o sonho de se tornarem uma lenda da NBA.",
        image:
          "https://static-cdn.jtvnw.net/ttv-boxart/623879571_IGDB-144x192.jpg",
        categoryId: categorys[3].id,
      },
      {
        id: randomUUID(),
        name: "Fifa 2023",
        description:
          "FIFA é uma série de jogos de simulação de futebol que oferece uma experiência autêntica do esporte mais popular do mundo. Os jogadores podem escolher entre uma ampla gama de times e ligas reais da FIFA, competindo em partidas emocionantes, torneios e modos de carreira. Com gráficos realistas, jogabilidade refinada e recursos inovadores, como o modo Ultimate Team, FIFA cativa os fãs de futebol ao redor do mundo, permitindo que eles construam e gerenciem suas próprias equipes, joguem online contra outros jogadores e vivenciem o drama e a emoção do futebol profissional.",
        image:
          "https://static-cdn.jtvnw.net/ttv-boxart/1745202732_IGDB-144x192.jpg",
        categoryId: categorys[3].id,
      },
    ];

    for (let game of sportGames) {
      await prisma.game.create({ data: game });

      console.log(`Game: ${game.name} Criado`);
    }

    const raceGames: Game[] = [
      {
        id: randomUUID(),
        name: "Mario Kart 8 Deluxe",
        description:
          "Mario Kart 8 Deluxe é um jogo de corrida de kart desenvolvido pela Nintendo para o console Nintendo Switch. Neste emocionante e colorido jogo de corrida, os jogadores assumem o controle de seus personagens favoritos do universo Mario, como Mario, Luigi, Peach, Bowser e muitos outros, competindo em uma variedade de pistas divertidas e desafiadoras. Com uma ampla seleção de personagens, karts e itens, os jogadores podem usar habilidades especiais e power-ups para ganhar vantagem sobre os adversários, desviar de obstáculos e cruzar a linha de chegada em primeiro lugar. Mario Kart 8 Deluxe oferece uma experiência multiplayer emocionante, permitindo que até oito jogadores corram juntos localmente ou online, além de uma variedade de modos de jogo, incluindo Grand Prix, Time Trials, Battle Mode e muito mais. Com gráficos vibrantes, controles intuitivos e uma jogabilidade envolvente, Mario Kart 8 Deluxe é uma celebração da diversão e da camaradagem, tanto para jogadores casuais quanto para fãs dedicados da franquia Mario.",
        image:
          "https://static-cdn.jtvnw.net/ttv-boxart/941530474_IGDB-144x192.jpg",
        categoryId: categorys[4].id,
      },
    ];

    for (let game of raceGames) {
      await prisma.game.create({ data: game });

      console.log(`Game: ${game.name} Criado`);
    }

    const mmorpgGames: Game[] = [
      {
        id: randomUUID(),
        name: "World of Warcraft",
        description:
          "World of Warcraft é um dos MMORPGs mais populares de todos os tempos, desenvolvido pela Blizzard Entertainment. Ambientado no mundo de fantasia de Azeroth, os jogadores podem escolher entre diferentes raças e classes para criar seus personagens e embarcar em aventuras épicas. Com uma história rica, vastos territórios para explorar, masmorras desafiadoras e batalhas épicas entre facções, WoW oferece uma experiência imersiva e social para milhões de jogadores em todo o mundo.",
        image: "https://static-cdn.jtvnw.net/ttv-boxart/18122-144x192.jpg",
        categoryId: categorys[5].id,
      },
    ];

    for (let game of mmorpgGames) {
      await prisma.game.create({ data: game });

      console.log(`Game: ${game.name} Criado`);
    }

    const fpsGames: Game[] = [
      {
        id: randomUUID(),
        name: "Counter-Strike",
        description:
          "Counter-Strike é uma série de jogos de tiro em primeira pessoa táticos e competitivos, desenvolvida inicialmente como um mod para o jogo Half-Life e posteriormente transformada em uma franquia independente pela Valve Corporation. Em Counter-Strike, os jogadores são divididos em duas equipes: Terroristas e Contra-Terroristas, cada uma com objetivos específicos, como plantar ou desarmar uma bomba, resgatar ou proteger reféns, ou eliminar todos os membros da equipe adversária. Com mapas bem projetados, jogabilidade tática, controle de recoil e uma comunidade competitiva ativa, Counter-Strike é um dos jogos de FPS mais icônicos e influentes da história dos videogames, com várias iterações, incluindo Counter-Strike 1.6, Counter-Strike: Source e Counter-Strike: Global Offensive (CS:GO).",
        image: "https://static-cdn.jtvnw.net/ttv-boxart/32399-144x192.jpg",
        categoryId: categorys[6].id,
      },
      {
        id: randomUUID(),
        name: "Valorant",
        description:
          "Counter-Strike é uma série de jogos de tiro em primeira pessoa táticos e competitivos, desenvolvida inicialmente como um mod para o jogo Half-Life e posteriormente transformada em uma franquia independente pela Valve Corporation. Em Counter-Strike, os jogadores são divididos em duas equipes: Terroristas e Contra-Terroristas, cada uma com objetivos específicos, como plantar ou desarmar uma bomba, resgatar ou proteger reféns, ou eliminar todos os membros da equipe adversária. Com mapas bem projetados, jogabilidade tática, controle de recoil e uma comunidade competitiva ativa, Counter-Strike é um dos jogos de FPS mais icônicos e influentes da história dos videogames, com várias iterações, incluindo Counter-Strike 1.6, Counter-Strike: Source e Counter-Strike: Global Offensive (CS:GO).",
        image: "https://static-cdn.jtvnw.net/ttv-boxart/516575-144x192.jpg",
        categoryId: categorys[6].id,
      },
    ];

    for (let game of fpsGames) {
      await prisma.game.create({ data: game });

      console.log(`Game: ${game.name} Criado`);
    }

    const randomNameAd = () => {
      const namesArray = [
        "Busco Jogadores",
        "Jogadores Online?",
        "Busco Duo",
        "Busco Duo Competitivo",
        "Busco Duo Casual",
        "Busco Jogadores com mais de 4 anos de jogo",
        "Busco Jogadores para fazer Amizade",
        "Busco Players Sem Call para Jogar",
      ];

      const randomIndexNumber = Math.floor(Math.random() * namesArray.length);

      return namesArray[randomIndexNumber];
    };

    const randomGameId = () => {
      const arrayGames = [
        battleRoyaleGames,
        mobaGames,
        rpgGames,
        sportGames,
        raceGames,
        mmorpgGames,
        fpsGames,
      ];

      const randomIndexNumber = Math.floor(Math.random() * arrayGames.length);

      const randomGame = arrayGames[randomIndexNumber];

      return randomGame[0].id;
    };

    const ads: Ad[] = [
      {
        id: randomUUID(),
        name: randomNameAd(),
        yearPlaying: 4,
        discord: user.discord,
        weekDays: "seg,ter,qua",
        hoursStart: 5,
        hoursEnd: 6,
        useVoiceChannel: true,
        createdAt: new Date(),
        userId: user.id,
        gameId: randomGameId(),
      },
      {
        id: randomUUID(),
        name: randomNameAd(),
        yearPlaying: 4,
        discord: user.discord,
        weekDays: "seg,ter,qua",
        hoursStart: 5,
        hoursEnd: 6,
        useVoiceChannel: true,
        createdAt: new Date(),
        userId: user.id,
        gameId: randomGameId(),
      },
      {
        id: randomUUID(),
        name: randomNameAd(),
        yearPlaying: 4,
        discord: user.discord,
        weekDays: "seg,ter,qua",
        hoursStart: 5,
        hoursEnd: 6,
        useVoiceChannel: true,
        createdAt: new Date(),
        userId: user.id,
        gameId: randomGameId(),
      },
      {
        id: randomUUID(),
        name: randomNameAd(),
        yearPlaying: 4,
        discord: user.discord,
        weekDays: "seg,ter,qua",
        hoursStart: 5,
        hoursEnd: 6,
        useVoiceChannel: true,
        createdAt: new Date(),
        userId: user.id,
        gameId: randomGameId(),
      },
      {
        id: randomUUID(),
        name: randomNameAd(),
        yearPlaying: 4,
        discord: user.discord,
        weekDays: "seg,ter,qua",
        hoursStart: 5,
        hoursEnd: 6,
        useVoiceChannel: true,
        createdAt: new Date(),
        userId: user.id,
        gameId: randomGameId(),
      },
      {
        id: randomUUID(),
        name: randomNameAd(),
        yearPlaying: 4,
        discord: user.discord,
        weekDays: "seg,ter,qua",
        hoursStart: 5,
        hoursEnd: 6,
        useVoiceChannel: true,
        createdAt: new Date(),
        userId: user.id,
        gameId: randomGameId(),
      },
      {
        id: randomUUID(),
        name: randomNameAd(),
        yearPlaying: 4,
        discord: user.discord,
        weekDays: "seg,ter,qua",
        hoursStart: 5,
        hoursEnd: 6,
        useVoiceChannel: true,
        createdAt: new Date(),
        userId: user.id,
        gameId: randomGameId(),
      },
      {
        id: randomUUID(),
        name: randomNameAd(),
        yearPlaying: 4,
        discord: user.discord,
        weekDays: "seg,ter,qua",
        hoursStart: 5,
        hoursEnd: 6,
        useVoiceChannel: true,
        createdAt: new Date(),
        userId: user.id,
        gameId: randomGameId(),
      },
      {
        id: randomUUID(),
        name: randomNameAd(),
        yearPlaying: 4,
        discord: user.discord,
        weekDays: "seg,ter,qua",
        hoursStart: 5,
        hoursEnd: 6,
        useVoiceChannel: true,
        createdAt: new Date(),
        userId: user.id,
        gameId: randomGameId(),
      },
      {
        id: randomUUID(),
        name: randomNameAd(),
        yearPlaying: 4,
        discord: user.discord,
        weekDays: "seg,ter,qua",
        hoursStart: 5,
        hoursEnd: 6,
        useVoiceChannel: true,
        createdAt: new Date(),
        userId: user.id,
        gameId: randomGameId(),
      },
      {
        id: randomUUID(),
        name: randomNameAd(),
        yearPlaying: 4,
        discord: user.discord,
        weekDays: "seg,ter,qua",
        hoursStart: 5,
        hoursEnd: 6,
        useVoiceChannel: true,
        createdAt: new Date(),
        userId: user.id,
        gameId: randomGameId(),
      },
      {
        id: randomUUID(),
        name: randomNameAd(),
        yearPlaying: 4,
        discord: user.discord,
        weekDays: "seg,ter,qua",
        hoursStart: 5,
        hoursEnd: 6,
        useVoiceChannel: true,
        createdAt: new Date(),
        userId: user.id,
        gameId: randomGameId(),
      },
      {
        id: randomUUID(),
        name: randomNameAd(),
        yearPlaying: 4,
        discord: user.discord,
        weekDays: "seg,ter,qua",
        hoursStart: 5,
        hoursEnd: 6,
        useVoiceChannel: true,
        createdAt: new Date(),
        userId: user.id,
        gameId: randomGameId(),
      },
      {
        id: randomUUID(),
        name: randomNameAd(),
        yearPlaying: 4,
        discord: user.discord,
        weekDays: "seg,ter,qua",
        hoursStart: 5,
        hoursEnd: 6,
        useVoiceChannel: true,
        createdAt: new Date(),
        userId: user.id,
        gameId: randomGameId(),
      },
      {
        id: randomUUID(),
        name: randomNameAd(),
        yearPlaying: 4,
        discord: user.discord,
        weekDays: "seg,ter,qua",
        hoursStart: 5,
        hoursEnd: 6,
        useVoiceChannel: true,
        createdAt: new Date(),
        userId: user.id,
        gameId: randomGameId(),
      },
      {
        id: randomUUID(),
        name: randomNameAd(),
        yearPlaying: 4,
        discord: user.discord,
        weekDays: "seg,ter,qua",
        hoursStart: 5,
        hoursEnd: 6,
        useVoiceChannel: true,
        createdAt: new Date(),
        userId: user.id,
        gameId: randomGameId(),
      },
      {
        id: randomUUID(),
        name: randomNameAd(),
        yearPlaying: 4,
        discord: user.discord,
        weekDays: "seg,ter,qua",
        hoursStart: 5,
        hoursEnd: 6,
        useVoiceChannel: true,
        createdAt: new Date(),
        userId: user.id,
        gameId: randomGameId(),
      },
      {
        id: randomUUID(),
        name: randomNameAd(),
        yearPlaying: 4,
        discord: user.discord,
        weekDays: "seg,ter,qua",
        hoursStart: 5,
        hoursEnd: 6,
        useVoiceChannel: true,
        createdAt: new Date(),
        userId: user.id,
        gameId: randomGameId(),
      },
      {
        id: randomUUID(),
        name: randomNameAd(),
        yearPlaying: 4,
        discord: user.discord,
        weekDays: "seg,ter,qua",
        hoursStart: 5,
        hoursEnd: 6,
        useVoiceChannel: true,
        createdAt: new Date(),
        userId: user.id,
        gameId: randomGameId(),
      },
      {
        id: randomUUID(),
        name: randomNameAd(),
        yearPlaying: 4,
        discord: user.discord,
        weekDays: "seg,ter,qua",
        hoursStart: 5,
        hoursEnd: 6,
        useVoiceChannel: true,
        createdAt: new Date(),
        userId: user.id,
        gameId: randomGameId(),
      },
      {
        id: randomUUID(),
        name: randomNameAd(),
        yearPlaying: 4,
        discord: user.discord,
        weekDays: "seg,ter,qua",
        hoursStart: 5,
        hoursEnd: 6,
        useVoiceChannel: true,
        createdAt: new Date(),
        userId: user.id,
        gameId: randomGameId(),
      },
      {
        id: randomUUID(),
        name: randomNameAd(),
        yearPlaying: 4,
        discord: user.discord,
        weekDays: "seg,ter,qua",
        hoursStart: 5,
        hoursEnd: 6,
        useVoiceChannel: true,
        createdAt: new Date(),
        userId: user.id,
        gameId: randomGameId(),
      },
      {
        id: randomUUID(),
        name: randomNameAd(),
        yearPlaying: 4,
        discord: user.discord,
        weekDays: "seg,ter,qua",
        hoursStart: 5,
        hoursEnd: 6,
        useVoiceChannel: true,
        createdAt: new Date(),
        userId: user.id,
        gameId: randomGameId(),
      },
      {
        id: randomUUID(),
        name: randomNameAd(),
        yearPlaying: 4,
        discord: user.discord,
        weekDays: "seg,ter,qua",
        hoursStart: 5,
        hoursEnd: 6,
        useVoiceChannel: true,
        createdAt: new Date(),
        userId: user.id,
        gameId: randomGameId(),
      },
      {
        id: randomUUID(),
        name: randomNameAd(),
        yearPlaying: 4,
        discord: user.discord,
        weekDays: "seg,ter,qua",
        hoursStart: 5,
        hoursEnd: 6,
        useVoiceChannel: true,
        createdAt: new Date(),
        userId: user.id,
        gameId: randomGameId(),
      },
      {
        id: randomUUID(),
        name: randomNameAd(),
        yearPlaying: 4,
        discord: user.discord,
        weekDays: "seg,ter,qua",
        hoursStart: 5,
        hoursEnd: 6,
        useVoiceChannel: true,
        createdAt: new Date(),
        userId: user.id,
        gameId: randomGameId(),
      },
      {
        id: randomUUID(),
        name: randomNameAd(),
        yearPlaying: 4,
        discord: user.discord,
        weekDays: "seg,ter,qua",
        hoursStart: 5,
        hoursEnd: 6,
        useVoiceChannel: true,
        createdAt: new Date(),
        userId: user.id,
        gameId: randomGameId(),
      },
      {
        id: randomUUID(),
        name: randomNameAd(),
        yearPlaying: 4,
        discord: user.discord,
        weekDays: "seg,ter,qua",
        hoursStart: 5,
        hoursEnd: 6,
        useVoiceChannel: true,
        createdAt: new Date(),
        userId: user.id,
        gameId: randomGameId(),
      },
      {
        id: randomUUID(),
        name: randomNameAd(),
        yearPlaying: 4,
        discord: user.discord,
        weekDays: "seg,ter,qua",
        hoursStart: 5,
        hoursEnd: 6,
        useVoiceChannel: true,
        createdAt: new Date(),
        userId: user.id,
        gameId: randomGameId(),
      },
      {
        id: randomUUID(),
        name: randomNameAd(),
        yearPlaying: 4,
        discord: user.discord,
        weekDays: "seg,ter,qua",
        hoursStart: 5,
        hoursEnd: 6,
        useVoiceChannel: true,
        createdAt: new Date(),
        userId: user.id,
        gameId: randomGameId(),
      },
      {
        id: randomUUID(),
        name: randomNameAd(),
        yearPlaying: 4,
        discord: user.discord,
        weekDays: "seg,ter,qua",
        hoursStart: 5,
        hoursEnd: 6,
        useVoiceChannel: true,
        createdAt: new Date(),
        userId: user.id,
        gameId: randomGameId(),
      },
      {
        id: randomUUID(),
        name: randomNameAd(),
        yearPlaying: 4,
        discord: user.discord,
        weekDays: "seg,ter,qua",
        hoursStart: 5,
        hoursEnd: 6,
        useVoiceChannel: true,
        createdAt: new Date(),
        userId: user.id,
        gameId: randomGameId(),
      },
      {
        id: randomUUID(),
        name: randomNameAd(),
        yearPlaying: 4,
        discord: user.discord,
        weekDays: "seg,ter,qua",
        hoursStart: 5,
        hoursEnd: 6,
        useVoiceChannel: true,
        createdAt: new Date(),
        userId: user.id,
        gameId: randomGameId(),
      },
      {
        id: randomUUID(),
        name: randomNameAd(),
        yearPlaying: 4,
        discord: user.discord,
        weekDays: "seg,ter,qua",
        hoursStart: 5,
        hoursEnd: 6,
        useVoiceChannel: true,
        createdAt: new Date(),
        userId: user.id,
        gameId: randomGameId(),
      },
      {
        id: randomUUID(),
        name: randomNameAd(),
        yearPlaying: 4,
        discord: user.discord,
        weekDays: "seg,ter,qua",
        hoursStart: 5,
        hoursEnd: 6,
        useVoiceChannel: true,
        createdAt: new Date(),
        userId: user.id,
        gameId: randomGameId(),
      },
      {
        id: randomUUID(),
        name: randomNameAd(),
        yearPlaying: 4,
        discord: user.discord,
        weekDays: "seg,ter,qua",
        hoursStart: 5,
        hoursEnd: 6,
        useVoiceChannel: true,
        createdAt: new Date(),
        userId: user.id,
        gameId: randomGameId(),
      },
      {
        id: randomUUID(),
        name: randomNameAd(),
        yearPlaying: 4,
        discord: user.discord,
        weekDays: "seg,ter,qua",
        hoursStart: 5,
        hoursEnd: 6,
        useVoiceChannel: true,
        createdAt: new Date(),
        userId: user.id,
        gameId: randomGameId(),
      },
      {
        id: randomUUID(),
        name: randomNameAd(),
        yearPlaying: 4,
        discord: user.discord,
        weekDays: "seg,ter,qua",
        hoursStart: 5,
        hoursEnd: 6,
        useVoiceChannel: true,
        createdAt: new Date(),
        userId: user.id,
        gameId: randomGameId(),
      },
      {
        id: randomUUID(),
        name: randomNameAd(),
        yearPlaying: 4,
        discord: user.discord,
        weekDays: "seg,ter,qua",
        hoursStart: 5,
        hoursEnd: 6,
        useVoiceChannel: true,
        createdAt: new Date(),
        userId: user.id,
        gameId: randomGameId(),
      },
      {
        id: randomUUID(),
        name: randomNameAd(),
        yearPlaying: 4,
        discord: user.discord,
        weekDays: "seg,ter,qua",
        hoursStart: 5,
        hoursEnd: 6,
        useVoiceChannel: true,
        createdAt: new Date(),
        userId: user.id,
        gameId: randomGameId(),
      },
    ];

    for (let ad of ads) {
      await prisma.ad.create({ data: ad });
      console.log(`Anúncio: ${ad.name} Criado`);
    }
  } catch (error) {
    console.log(`Error Creating Seed: ${error}`);
  }
}

main()
  .then()
  .catch((err) => console.log(err))
  .finally(() => {
    console.log(`Seed Was Created`);
  });
