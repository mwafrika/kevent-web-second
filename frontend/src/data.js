import moment from 'moment';
export default {
  expeditions: [
    {
      key: 1,
      image:
        'https://res.cloudinary.com/ujuzi/image/upload/v1643570908/Kevent/Rectangle_5-2_qfo9sk.svg',
      date: moment(
        '2020-05-01T00:00:00.000Z',
        'YYYY-MM-DDTHH:mm:ss.SSSZ'
      ).fromNow(),
      prix: `${50}$`,
      lieu: 'VIRUNGA',
    },
    {
      key: 2,
      image:
        'https://res.cloudinary.com/ujuzi/image/upload/v1643570908/Kevent/Rectangle_5-3_odyxty.svg',
      date: moment(
        '2020-05-01T00:00:00.000Z',
        'YYYY-MM-DDTHH:mm:ss.SSSZ'
      ).fromNow(),
      prix: `${40}$`,
      lieu: 'KAHUZI BIEGA',
      description:
        'The href attribute requires a valid value to be accessible The href attribute requires a valid value to be accessible',
    },
    {
      key: 3,
      image:
        'https://res.cloudinary.com/ujuzi/image/upload/v1643570903/Kevent/Rectangle_5-4_dteojs.svg',
      date: moment(
        '2020-05-01T00:00:00.000Z',
        'YYYY-MM-DDTHH:mm:ss.SSSZ'
      ).fromNow(),
      prix: `${30}$`,
      lieu: 'SALONGA',
      description:
        'The href attribute requires a valid value to be accessible The href attribute requires a valid value to be accessible',
    },
    {
      key: 4,
      image:
        'https://images.pexels.com/photos/6231575/pexels-photo-6231575.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=5000',
      date: moment(
        '2020-05-01T00:00:00.000Z',
        'YYYY-MM-DDTHH:mm:ss.SSSZ'
      ).fromNow(),
      prix: `${800}$`,
      lieu: 'MAIKO',
      description:
        'The href attribute requires a valid value to be accessible The href attribute requires a valid value to be accessible',
    },
  ],
  packages: [
    {
      key: 1,
      image:
        'https://res.cloudinary.com/ujuzi/image/upload/v1643570905/Kevent/Rectangle5_balel4.svg',
      date: moment(
        '2020-05-01T00:00:00.000Z',
        'YYYY-MM-DDTHH:mm:ss.SSSZ'
      ).fromNow(),
      prix: `${50}$`,
      lieu: 'VIRUNGA',
      description:
        'The href attribute requires a valid value to be accessible The href attribute requires a valid value to be accessible',
    },
    {
      key: 2,
      image:
        'https://res.cloudinary.com/ujuzi/image/upload/v1643570906/Kevent/Rectangle_5_uursza.svg',
      date: moment(
        '2020-05-01T00:00:00.000Z',
        'YYYY-MM-DDTHH:mm:ss.SSSZ'
      ).fromNow(),
      prix: `${40}$`,
      lieu: 'KAHUZI BIEGA',
      description:
        'Note the space after "pull-right". You dont want to accidentally provide the class pull-rightshow instead of pull-right show Also the parentheses needs to be there',
    },
    {
      key: 3,
      image:
        'https://res.cloudinary.com/ujuzi/image/upload/v1643570906/Kevent/Rectangle_5_uursza.svg',
      date: moment(
        '2020-05-01T00:00:00.000Z',
        'YYYY-MM-DDTHH:mm:ss.SSSZ'
      ).fromNow(),
      prix: `${30}$`,
      lieu: 'SALONGA',
      description:
        'Thanks! I had to modify it slightly because for some reason it wasnt outputting btn-group pull-right at all. Just show or hidden.',
    },

    {
      key: 4,
      image:
        'https://res.cloudinary.com/ujuzi/image/upload/v1643570905/Kevent/Rectangle5_balel4.svg',
      date: moment(
        '2020-05-01T00:00:00.000Z',
        'YYYY-MM-DDTHH:mm:ss.SSSZ'
      ).fromNow(),
      prix: `${50}$`,
      lieu: 'VIRUNGA',
      description:
        'As others have commented, classnames utility is the currently recommended approach to handle conditional CSS class names in ReactJs.',
    },
    {
      key: 5,
      image:
        'https://res.cloudinary.com/ujuzi/image/upload/v1643570905/Kevent/Rectangle5_balel4.svg',
      date: moment(
        '2020-05-01T00:00:00.000Z',
        'YYYY-MM-DDTHH:mm:ss.SSSZ'
      ).fromNow(),
      prix: `${50}$`,
      lieu: 'VIRUNGA',
      description:
        'Be careful with the second approach, especially in large codebases, as it makes the class strings less greppable. For example, if someone searches for s-is-shown or s-is-hidden in the codebase, they',
    },
    {
      key: 6,
      image:
        'https://res.cloudinary.com/ujuzi/image/upload/v1643570905/Kevent/Rectangle5_balel4.svg',
      date: moment(
        '2020-05-01T00:00:00.000Z',
        'YYYY-MM-DDTHH:mm:ss.SSSZ'
      ).fromNow(),
      prix: `${50}$`,
      lieu: 'VIRUNGA',
      description:
        'The href attribute requires a valid value to be accessible The href attribute requires a valid value to be accessible',
    },
    {
      key: 7,
      image:
        'https://res.cloudinary.com/ujuzi/image/upload/v1643570905/Kevent/Rectangle5_balel4.svg',
      date: moment(
        '2020-05-01T00:00:00.000Z',
        'YYYY-MM-DDTHH:mm:ss.SSSZ'
      ).fromNow(),
      prix: `${50}$`,
      lieu: 'VIRUNGA',
      description:
        'How do I turn off dom link on my react routerWe can disable a link by setting the pointer-events attribute in our CSS. We have the disabled-link class name applied to the link.',
    },
  ],
};
