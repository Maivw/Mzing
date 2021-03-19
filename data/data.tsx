export const albums = [
  {
    id: '1',
    title: 'Hoa hải đường',
    imageUri: 'https://res.cloudinary.com/maivw/image/upload/v1616095330/hoahaiduong_xf1xiu.jpg',
    artistHeadline :'J97'
  },
  {
    id: '2',
    title: 'Tuyển tập các ca khúc hay.',
    imageUri: 'https://res.cloudinary.com/maivw/image/upload/v1616095451/mix-pop_pwew0v.jpg',
    artistHeadline :'Nhiều ca sĩ Việt trẻ được yêu thích.'
  },
  {
    id: '3',
    title: 'Latin songs 2020',
    imageUri: 'https://res.cloudinary.com/maivw/image/upload/v1616095605/latinsongs2020_atlbr1.jpg',
    artistHeadline :'Top Latino Songs 2020 - Ozuna, Maluma, Anuel AA, Karol G, ...'
  },
  {
    id: '4',
    title: 'Latin',
    imageUri: 'https://res.cloudinary.com/maivw/image/upload/v1616095706/latinsongs2021_vqggtt.jpg',
    artistHeadline :'Maluma, Luis Fonsi, Rauw Alejandro, ...'
  },
  {
    id: '5',
    title: 'Best party songs',
    imageUri: 'https://res.cloudinary.com/maivw/image/upload/v1616096261/dancesongf_djr1gn.jpg',
    artistHeadline :'Dua Lipa, Luis Fonsi, J Balvin'
  },
  {
    id: '6',
    title: 'Nhạc Việt Dance',
    imageUri: 'https://res.cloudinary.com/maivw/image/upload/v1616096259/danceViet_vs2ieh.jpg',
    artistHeadline :'Nhiều ca sĩ.'
  },
  {
    id: '7',
    title: 'See Sing Share',
    imageUri: 'https://res.cloudinary.com/maivw/image/upload/v1616113514/Ha-Anh-Tuan-_-SSS1_zgie5m.jpg',
    artistHeadline :'Hà Anh Tuấn'
  },
  {
    id: '8',
    title: 'Romance songs',
    imageUri: 'https://res.cloudinary.com/maivw/image/upload/v1616096706/romancee_gpxy1s.jpg',
    artistHeadline :'Multi singers'
  },
  {
    id: '9',
    title: 'R&B Soul',
    imageUri: 'https://res.cloudinary.com/maivw/image/upload/v1616097280/r_be_cqi8u1.jpg',
    artistHeadline :'Multi singers'
  },
  {
    id: '10',
    title: 'R&B Việt',
    imageUri: 'https://res.cloudinary.com/maivw/image/upload/v1616113936/1474447819135_500_bqu5p4.jpg',
    artistHeadline :'Nhiều ca sĩ.'
  },
  {
    id: '11',
    title: 'Nhạc phim Việt Nam',
    imageUri: 'https://res.cloudinary.com/maivw/image/upload/v1616097693/nhacphimviet_xdvkc5.jpg',
    artistHeadline :'Nhiều ca sĩ.'
  },
  
  
]

export const albumCategories = [
  {
    id: '1',
    title: 'Pop',
    imageUri: 'https://res.cloudinary.com/maivw/image/upload/v1616187900/popcard_q5zx29.jpg',
    albums: [
      {
        id: '1',
        title: 'Hoa hải đường',
        imageUri: 'https://res.cloudinary.com/maivw/image/upload/v1616095330/hoahaiduong_xf1xiu.jpg',
        artistHeadline :'J97'
      },
      {
        id: '2',
        title: 'Tuyển tập các ca khúc hay.',
        imageUri: 'https://res.cloudinary.com/maivw/image/upload/v1616095451/mix-pop_pwew0v.jpg',
        artistHeadline :'Nhiều ca sĩ Việt trẻ được yêu thích.'
      }
    ],
    top: 0,
  },

  {
    id: '2',
    title: 'Latin',
    imageUri: 'https://res.cloudinary.com/maivw/image/upload/v1616187902/latincard_m4zj5l.jpg',
    albums: [
      {
        id: '3',
        title: 'Latin songs 2020',
        imageUri: 'https://res.cloudinary.com/maivw/image/upload/v1616113098/latin-music-licensing_lookaj.jpg',
        artistHeadline :'Top Latino Songs 2020 - Ozuna, Maluma, Anuel AA, Karol G, ...'
      },
      {
        id: '4',
        title: 'Latin',
        imageUri: 'https://res.cloudinary.com/maivw/image/upload/v1616112082/latin2021_igtyfl.jpg',
        artistHeadline :'Maluma, Luis Fonsi, Rauw Alejandro, ...'
      },
    ],
    top: 0,
  },
  {
    id: '3',
    title: 'Dance',
    imageUri: 'https://res.cloudinary.com/maivw/image/upload/v1616188321/dancecard_zfawna.jpg',
    albums:[
      {
        id: '5',
        title: 'Best party songs',
        imageUri: 'https://res.cloudinary.com/maivw/image/upload/v1616113311/1_MHLScq2WZ4dRkxByxDGf7w_u9el9i.jpg',
        artistHeadline :'Dua Lipa, Luis Fonsi, J Balvin'
      },
      {
        id: '6',
        title: 'Nhạc Việt Dance',
        imageUri: 'https://res.cloudinary.com/maivw/image/upload/v1616096259/danceViet_vs2ieh.jpg',
        artistHeadline :'Nhiều ca sĩ.'
      },
    ],
    top: 0,
  },
  {
    id: '4',
    title: 'Romance',
    imageUri: 'https://res.cloudinary.com/maivw/image/upload/v1616188213/romancard_synsrh.jpg',
    albums: [
      {
        id: '7',
        title: 'See Sing Share',
        imageUri: 'https://res.cloudinary.com/maivw/image/upload/v1616114273/Cover_bga1gh.jpg',
        artistHeadline :'Hà Anh Tuấn'
      },
      {
        id: '8',
        title: 'Romance songs',
        imageUri: 'https://res.cloudinary.com/maivw/image/upload/v1616114219/unnamed_mf6dje.jpg',
        artistHeadline :'Multi singers'
      },
    ],
    top: 0,
  },
  {
    id: '5',
    title: 'A&B',
    imageUri: 'https://res.cloudinary.com/maivw/image/upload/v1616187904/r_bcard_kv2avq.jpg',
    albums: [
      {
        id: '9',
        title: 'R&B Soul',
        imageUri: 'https://res.cloudinary.com/maivw/image/upload/v1616097280/r_be_cqi8u1.jpg',
        artistHeadline :'Multi singers'
      },
      {
        id: '10',
        title: 'R&B Việt',
        imageUri: 'https://res.cloudinary.com/maivw/image/upload/v1616114391/music-vector-20_god6eo.jpg',
        artistHeadline :'Nhiều ca sĩ.'
      },
    ],
    top: 0,
   
  },

  {
    id: '6',
    title: 'Movie Songs',
    imageUri: 'https://res.cloudinary.com/maivw/image/upload/v1616187903/moviecard_optmcx.jpg',
    albums:[
      {
        id: '11',
        title: 'Nhạc phim Việt Nam',
        imageUri: 'https://res.cloudinary.com/maivw/image/upload/v1616097693/nhacphimviet_xdvkc5.jpg',
        artistHeadline :'Nhiều ca sĩ.'
      },
    ],
    top: 0,
  },
  
]
