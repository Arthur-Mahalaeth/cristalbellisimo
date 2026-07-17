/* ============================================================================
   CRISTAL BELLÍSIMO — CONTEÚDO DO SITE
   ----------------------------------------------------------------------------
   Este é o ÚNICO ficheiro que precisa de editar para:
     • adicionar / trocar / remover peças do catálogo
     • trocar as fotos principais do site (topo, herança, faixa, rodapé)
     • adicionar fotos E vídeos a uma peça
     • escrever os textos em Português / Espanhol / Inglês

   Regras simples:
     • Texto vai sempre entre aspas:  "assim"
     • Cada peça termina com uma vírgula depois do }  -> },
     • As fotos ficam na pasta  images/ ... o caminho é sempre "images/pasta/ficheiro.jpg"
     • Nunca apague as chavetas { } nem os parêntesis retos [ ] — só o texto lá dentro.
   ============================================================================ */

window.SITE = {

  /* ==========================================================================
     1) FOTOS FIXAS DO SITE  (as partes que não são peças do catálogo)
     Basta trocar o caminho da imagem por outra que esteja na pasta images/.
     ========================================================================== */
  imagens: {
    hero:     "images/hero2/hero-flor-1.jpg",        // foto GRANDE do topo do site
    heranca:  "images/colecoes/flor-folha-1.jpg",    // foto da secção "A Mão do Mestre"
    ctaFundo: "images/colecoes/flor-roxas-2.jpg"      // foto de fundo do bloco "Junte-se ao Legado"
  },

  /* ==========================================================================
     2) PEÇAS DO CATÁLOGO
     --------------------------------------------------------------------------
     PARA ADICIONAR UMA PEÇA NOVA:
       1. Copie um bloco inteiro   {  ...  },   (desde o { até à vírgula final)
       2. Cole-o dentro dos [ ]  (pode ser no fim, antes do ] )
       3. Troque as fotos e os textos.

     Cada peça tem:
       fotos:    lista de fotos. A 1.ª é a foto grande; as outras são miniaturas.
       video:    (opcional) 1 vídeo. Deixe  ""  se a peça não tiver vídeo.
                 Ex.: "images/colecoes/passaro-video.mp4"
       destaque: true deixa o cartão MAIOR (fica bonito no meio de uma linha de 3).
                 Use false na maioria das peças.
       pt / es / en: os textos em cada idioma
                 meta   = linha pequena dourada (materiais / pedras)
                 titulo = nome da peça
                 desc   = descrição
     ========================================================================== */
  pecas: [

    {
      fotos: [
        "images/colecoes/flor-roxas-1.jpg",
        "images/colecoes/flor-folha-1.jpg",
        "images/colecoes/flor-folha-2.jpg",
        "images/colecoes/flor-roxas-2.jpg"
      ],
      video: "",
      destaque: false,
      pt: { meta: "Prata 950 · Ametista · Filigrana", titulo: "Anel Flor Ametista",
            desc: "Escultura botânica em prata 950 com filigrana artesanal. Ametista pear de corte facetado, engastada à mão entre folhas de prata." },
      es: { meta: "Plata 950 · Amatista · Filigrana", titulo: "Anillo Flor Amatista",
            desc: "Escultura botánica en plata 950 con filigrana artesanal. Amatista pear de corte facetado, engastada a mano entre hojas de plata." },
      en: { meta: "Sterling 950 · Amethyst · Filigree", titulo: "Flower Amethyst Ring",
            desc: "Botanical sculpture in sterling 950 with artisan filigree. Faceted pear amethyst hand-set among silver leaves." }
    },

    {
      fotos: [
        "images/brincos/brincos-galho-1.jpg",
        "images/brincos/brincos-galho-2.jpg",
        "images/brincos/brincos-galho-3.jpg",
        "images/brincos/brincos-madeira-1.jpg"
      ],
      video: "",
      destaque: true,
      pt: { meta: "Prata 950 · Ametista · Filigrana", titulo: "Brincos Ametista",
            desc: "Brincos escultóricos em prata 950. Forma fluida inspirada na corrente da água, com ametista oval engastada na ponta e detalhes de filigrana." },
      es: { meta: "Plata 950 · Amatista · Filigrana", titulo: "Aretes Amatista",
            desc: "Aretes escultóricos en plata 950. Forma fluida inspirada en la corriente del agua, con amatista oval engastada en la punta y detalles de filigrana." },
      en: { meta: "Sterling 950 · Amethyst · Filigree", titulo: "Amethyst Earrings",
            desc: "Sculptural sterling 950 earrings. Fluid form inspired by flowing water, with oval amethyst set at the tip and filigree details." }
    },

    {
      fotos: [
        "images/colecoes/granate-studio-2.jpg",
        "images/colecoes/granate-studio-1.jpg",
        "images/colecoes/granate-livro-2.jpg",
        "images/colecoes/granate-livro-1.jpg"
      ],
      video: "",
      destaque: false,
      pt: { meta: "Prata 950 · Granate Marquise", titulo: "Anel Granate",
            desc: "Granate em corte marquise engastado em prata 950 com arabescos de filigrana. A pedra cor de fogo contrasta com a pureza da prata." },
      es: { meta: "Plata 950 · Granate Marquise", titulo: "Anillo Granate",
            desc: "Granate en corte marquise engastado en plata 950 con arabescos de filigrana. La piedra color fuego contrasta con la pureza de la plata." },
      en: { meta: "Sterling 950 · Garnet Marquise", titulo: "Garnet Ring",
            desc: "Marquise-cut garnet set in sterling 950 with filigree arabesques. The fire-colored stone contrasts with the purity of silver." }
    },

    {
      fotos: [
        "images/colecoes/turquesa-flor-2.jpg",
        "images/colecoes/turquesa-flor-1.jpg",
        "images/colecoes/turquesa-flor-3.jpg"
      ],
      video: "",
      destaque: false,
      pt: { meta: "Prata 950 · Turquesa · Coral", titulo: "Turquesa & Coral",
            desc: "Design escultural que une o azul-céu da turquesa ao vermelho-vivo do coral. Filigrana delicada em toda a estrutura." },
      es: { meta: "Plata 950 · Turquesa · Coral", titulo: "Turquesa & Coral",
            desc: "Diseño escultural que une el azul-cielo de la turquesa al rojo vivo del coral. Filigrana delicada en toda la estructura." },
      en: { meta: "Sterling 950 · Turquoise · Coral", titulo: "Turquoise & Coral",
            desc: "A sculptural design uniting sky-blue turquoise with vivid red coral. Delicate filigree throughout the structure." }
    },

    {
      fotos: [
        "images/colecoes/aguamarinha-cristal-2.jpg",
        "images/colecoes/aguamarinha-cristal-1.jpg",
        "images/colecoes/aguamarinha-cristal-3.jpg",
        "images/colecoes/aguamarinha-cristal-4.jpg"
      ],
      video: "",
      destaque: true,
      pt: { meta: "Prata 950 · Água-Marinha", titulo: "Anel Água-Marinha",
            desc: "Duas pedras de água-marinha brasileira em prata 950, rodeadas por espirais de filigrana. A cor do oceano capturada em metal." },
      es: { meta: "Plata 950 · Agua Marina", titulo: "Anillo Agua Marina",
            desc: "Dos piedras de agua marina brasileña en plata 950, rodeadas por espirales de filigrana. El color del océano capturado en metal." },
      en: { meta: "Sterling 950 · Aquamarine", titulo: "Aquamarine Ring",
            desc: "Two Brazilian aquamarine stones in sterling 950, surrounded by filigree spirals. The color of the ocean captured in metal." }
    },

    {
      fotos: [
        "images/colecoes/passaro-arvore-1.jpg",
        "images/colecoes/passaro-parede-2.jpg",
        "images/colecoes/passaro-ombro-3.jpg",
        "images/colecoes/passaro-ombro-4.jpg",
        "images/colecoes/passaro-ombro-5.jpg"
      ],
      video: "",
      destaque: false,
      pt: { meta: "Prata 950 · Ametista · Esmeralda", titulo: "Anel Pássaro",
            desc: "Escultura em prata 950 inspirada no voo do beija-flor. Ametista oval e esmeralda engastadas à mão em estrutura figurativa." },
      es: { meta: "Plata 950 · Amatista · Esmeralda", titulo: "Anillo Pájaro",
            desc: "Escultura en plata 950 inspirada en el vuelo del colibrí. Amatista oval y esmeralda engastadas a mano en estructura figurativa." },
      en: { meta: "Sterling 950 · Amethyst · Emerald", titulo: "Bird Ring",
            desc: "Sculptural sterling 950 inspired by the hummingbird's flight. Oval amethyst and emerald hand-set in a figurative structure." }
    },

    {
      fotos: [
        "images/colecoes/citrino-1.jpg",
        "images/colecoes/citrino-2.jpg",
        "images/colecoes/citrino-3.jpg",
        "images/colecoes/citrino-4.jpg"
      ],
      video: "",
      destaque: false,
      pt: { meta: "Prata 950 · Citrino · Filigrana", titulo: "Anel Citrino",
            desc: "Citrino oval facetado engastado em prata 950. A folha esculpida desenha um movimento elíptico e espirais de filigrana — uma forma lítica em equilíbrio cósmico, modelada inteiramente à mão." },
      es: { meta: "Plata 950 · Citrino · Filigrana", titulo: "Anillo Citrino",
            desc: "Citrino oval facetado engastado en plata 950. La hoja esculpida dibuja un movimiento elíptico y espirales de filigrana — una forma lítica en equilibrio cósmico, modelada enteramente a mano." },
      en: { meta: "Sterling 950 · Citrine · Filigree", titulo: "Citrine Ring",
            desc: "Faceted oval citrine set in sterling 950. The sculpted leaf traces an elliptical movement and filigree spirals — a lithic form in cosmic balance, shaped entirely by hand." }
    }

    /* 👆 PARA UMA PEÇA NOVA: ponha uma vírgula depois do } acima e cole aqui o
       bloco copiado. Exemplo já pronto (basta tirar a barra e os asteriscos):

    ,{
      fotos: ["images/colecoes/NOVA-1.jpg", "images/colecoes/NOVA-2.jpg"],
      video: "",
      destaque: false,
      pt: { meta: "Prata 950 · Esmeralda", titulo: "Anel Esmeralda", desc: "Descrição em português." },
      es: { meta: "Plata 950 · Esmeralda", titulo: "Anillo Esmeralda", desc: "Descripción en español." },
      en: { meta: "Sterling 950 · Emerald", titulo: "Emerald Ring", desc: "Description in English." }
    }
    */

  ],

  /* ==========================================================================
     3) PEÇA EM DESTAQUE / EDITORIAL (a faixa larga com fundo azul)
     Deixe   editorial: null   se não quiser esta faixa.
     Também aceita  video: "..."  em vez de continuar com foto.
     ========================================================================== */
  editorial: {
    foto:  "images/colecoes/flores-vermelhas-1.jpg",
    video: "",
    pt: { meta: "Prata 950 · Safira · Pedra da Lua", titulo: "Flor do Campo",
          desc: "Um encontro entre a pedra escura e a luz branca da pedra da lua. Design naturalista que evoca as flores silvestres das montanhas." },
    es: { meta: "Plata 950 · Zafiro · Piedra de Luna", titulo: "Flor del Campo",
          desc: "Un encuentro entre la piedra oscura y la luz blanca de la piedra de luna. Diseño naturalista que evoca las flores silvestres de las montañas." },
    en: { meta: "Sterling 950 · Sapphire · Moonstone", titulo: "Field Flower",
          desc: "A meeting of dark stone and the white light of moonstone. Naturalist design evoking the wildflowers of the mountains." }
  }

};
