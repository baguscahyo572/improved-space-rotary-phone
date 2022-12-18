var routes = [
  { path: '/', componentUrl: 'pages/home.html' },
  { path: '/hitung/', componentUrl: 'pages/suhu.html' },
  { path: '/biodata/', componentUrl: 'pages/biodata.html' },
  { path: '/tambahbiodata/', componentUrl: 'pages/tambahbiodata.html' },
  { path: '/tambahbio/', componentUrl: 'pages/tambahbio.html' },
  { path: '(.*)', url: 'pages/404.html' }
];