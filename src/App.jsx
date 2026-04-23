import AppFooter from "./components/AppFooter"
import AppHeader from "./components/AppHeader"
import AppMain from "./components/AppMain"

function App() {

  //Object AppHeader
  const options = [

    {
      nome: 'CHARACTERS',
      link: '/characters'
    },
    {
      nome: 'COMICS',
      link: '/comics'
    },
    {
      nome: 'MOVIES',
      link: '/movies'
    },
    {
      nome: 'TV',
      link: '/tv'
    },
    {
      nome: 'GAMES',
      link: '/games'
    },
    {
      nome: 'COLLECTIBLES',
      link: '/collectibles'
    },
    {
      nome: 'VIDEOS',
      link: '/videos'
    },
    {
      nome: 'FANS',
      link: '/fans'
    },
    {
      nome: 'NEWS',
      link: '/news'
    },
    {
      nome: 'SHOP',
      link: '/shop'
    },

  ]

  //Object AppMain
  const catalog = [

    {
      img: '/img/buy-comics-digital-comics.png',
      nome: 'DIGITAL COMICS',
      link: '/digital-comics'
    },
    {
      img: '/img/buy-comics-merchandise.png',
      nome: 'DC MERCHANDISE',
      link: '/dc-merchandise'
    },
    {
      img: '/img/buy-comics-subscriptions.png',
      nome: 'SUBSCRIPTION',
      link: '/subscription'
    },
    {
      img: '/img/buy-comics-shop-locator.png',
      nome: 'COMIC SHOP LOCATOR',
      link: '/comic-shop'
    },
    {
      img: '/img/buy-dc-power-visa.svg',
      nome: 'DC POWER VISA',
      link: '/power-visa'
    }

  ]

  //Object AppFooter
  const DCComics = [

    {
      nome: 'Characters',
      link: '/characters'
    },
    {
      nome: 'Comics',
      link: '/comics'
    },
    {
      nome: 'Movies',
      link: '/movies'
    },
    {
      nome: 'TV',
      link: '/tv'
    },
    {
      nome: 'Games',
      link: '/games'
    },
    {
      nome: 'Videos',
      link: '/videos'
    },
    {
      nome: 'News',
      link: '/news'
    }

  ]

  const DC = [

    {
      nome: 'Term Of Use',
      link: '/term-of-use'
    },
    {
      nome: 'Privacy policy (New)',
      link: '/privacy'
    },
    {
      nome: 'Ad Choices',
      link: '/choices'
    },
    {
      nome: 'Advertising',
      link: '/advertising'
    },
    {
      nome: 'Jobs',
      link: '/jobs'
    },
    {
      nome: 'Subscriptions',
      link: '/subscriptions'
    },
    {
      nome: 'Talent Workshops',
      link: '/workshops'
    },
    {
      nome: 'CPSC Certificates',
      link: '/cpsc'
    },
    {
      nome: 'Ratings',
      link: '/ratings'
    },
    {
      nome: 'Shop Help',
      link: '/shop-help'
    },
    {
      nome: 'Contact Us',
      link: '/contact'
    }

  ]

  const Sites = [

    {
      nome: 'DC',
      link: '/dc'
    },
    {
      nome: 'MAD Magazine',
      link: '/magazine'
    },
    {
      nome: 'DC Kids',
      link: '/kids'
    },
    {
      nome: 'DC Universe',
      link: '/universe'
    },
    {
      nome: 'DC Power Visa',
      link: '/power-visa'
    }

  ]

  const Shop = [

    {
      nome: 'Shop DC',
      link: '/shop'
    },
    {
      nome: 'Shop DC Collectibles',
      link: '/shop-dc'
    }

  ]

  const Social = [

    {
      img: '/img/footer-facebook.png',
      nome: '',
      link: '/facebook'
    },
    {
      img: '/img/footer-twitter.png',
      nome: '',
      link: '/twitter'
    },
    {
      img: '/img/footer-youtube.png',
      nome: '',
      link: '/youtube'
    },
    {
      img: '/img/footer-pinterest.png',
      nome: '',
      link: '/pinterest'
    },
    {
      img: '/img/footer-periscope.png',
      nome: '',
      link: '/periscope'
    }


  ]

  return (
    <>
      <AppHeader options={options} />
      <AppMain catalog={catalog} />
      <AppFooter DCComics={DCComics} DC={DC} Sites={Sites} Shop={Shop} Social={Social} />
    </>
  )
}

export default App