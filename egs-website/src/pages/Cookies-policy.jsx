import LegalDocument from '../components/ui/LegalDocument';
import { COMPANY } from '../data/company';

const doc = {
  metaTitle: 'Política de Cookies',
  crumb: 'Política de cookies',
  title: 'Política de Cookies',
  effective: COMPANY.effective,
  summary: [
    { icon: 'fas fa-eye-slash', text: 'No usamos cookies de analítica, publicidad ni redes sociales.' },
    { icon: 'fas fa-hard-drive', text: 'Hoy el sitio no guarda cookies propias ni datos en su navegador.' },
    { icon: 'fas fa-font', text: 'Las tipografías se cargan desde Google Fonts, que recibe datos técnicos de su navegador.' },
    { icon: 'fas fa-bell', text: 'Si algún día usamos cookies opcionales, le pediremos permiso antes.' },
  ],
  sections: [
    {
      title: '1. ¿Qué son las cookies?',
      blocks: [
        { p: 'Las cookies son pequeños archivos de texto que un sitio web guarda en su dispositivo cuando lo visita. Otras tecnologías cumplen una función parecida, como el almacenamiento local y el almacenamiento de sesión del navegador; en esta política las tratamos igual que a las cookies.' },
        { p: 'No dañan su dispositivo y puede borrarlas cuando quiera. En este sitio no las usamos para identificarlo, rastrearlo ni mostrarle publicidad.' },
        { h: '¿Qué hace este sitio hoy?' },
        { ul: [
          'No guarda sus preferencias ni borradores de formularios en su navegador.',
          'Carga las tipografías desde un servicio externo (Google Fonts).',
          'Enlaza a WhatsApp, un servicio externo con sus propias políticas.',
        ] },
      ],
    },
    {
      title: '2. Tipos de cookies',
      blocks: [
        { p: 'Según su finalidad, las cookies pueden ser técnicas (necesarias para que el sitio funcione), de preferencias (recuerdan sus elecciones), de análisis (miden cómo se usa el sitio), de publicidad (crean perfiles para mostrar anuncios) y de terceros (las gestiona un servicio externo integrado en el sitio).' },
        { compare: {
          yes: { title: 'Lo que usamos', items: [
            'Cookies técnicas o de preferencias propias: ninguna por ahora.',
            'De terceros: la entrega de tipografías desde Google Fonts.',
          ] },
          no: { title: 'Lo que no usamos', items: [
            'De análisis, como Google Analytics.',
            'De publicidad o remarketing.',
            'Botones o píxeles de redes sociales.',
            'Perfiles de navegación o venta de datos.',
          ] },
        } },
      ],
    },
    {
      title: '3. Qué guardamos exactamente',
      blocks: [
        { p: 'Esta es la lista completa de lo que el sitio puede guardar o intercambiar con su navegador. EGS no guarda ninguna cookie propia ni usa el almacenamiento local o de sesión. Lo que sigue corresponde a servicios de terceros.' },
        { table: {
          head: ['Nombre', 'Para qué sirve', 'Duración', 'De quién'],
          rows: [
            ['Tipografías (Google Fonts)', 'Cargar las tipografías del sitio. Google recibe datos técnicos del navegador, como la dirección IP.', 'La que defina Google', 'Google'],
            ['Enlaces a WhatsApp', 'Abrir una conversación con EGS. Solo se activa si usted pulsa el enlace.', 'La que defina WhatsApp', 'WhatsApp'],
          ],
        } },
        { p: 'Los servicios de terceros aplican sus propias políticas. Si bloquea estas conexiones en su navegador, el sitio seguirá funcionando con una tipografía del sistema.' },
      ],
    },
    {
      title: '4. Cómo gestionar o borrar las cookies',
      blocks: [
        { p: 'Puede aceptar, bloquear o borrar cookies de cualquier sitio, incluidas las de terceros, desde la configuración de su navegador:' },
        { ul: [
          'Chrome: Configuración → Privacidad y seguridad → Cookies de terceros.',
          'Firefox: Configuración → Privacidad y seguridad → Cookies y datos del sitio.',
          'Safari en Mac: Ajustes → Privacidad → Gestionar datos de sitios web.',
          'Safari en iPhone: Ajustes → Apps → Safari → Avanzado → Datos de sitios web.',
          'Edge: Configuración → Cookies y permisos del sitio → Administrar y eliminar cookies.',
        ] },
      ],
    },
    {
      title: '5. Marco legal y cambios',
      blocks: [
        { p: 'En Colombia no existe una ley exclusiva sobre cookies. Cuando la información que recogen permite identificar a una persona, se aplica el régimen de protección de datos personales, cuya autoridad es la Superintendencia de Industria y Comercio (SIC). Por eso esta política sigue sus principios de finalidad, libertad, transparencia y seguridad, y se complementa con nuestra Política de Tratamiento de Datos Personales y Aviso de Privacidad.' },
        { links: [{ label: 'Política de Tratamiento de Datos Personales y Aviso de Privacidad', to: '/politica-de-privacidad' }] },
        { h: 'Normativa aplicable' },
        { ul: [
          'Ley 1581 de 2012 (Protección de Datos Personales).',
          'Decreto 1074 de 2015, que compiló el Decreto 1377 de 2013 sobre la autorización del titular.',
          'Ley 1480 de 2011 (Estatuto del Consumidor), sobre información en el comercio electrónico.',
          'Ley 527 de 1999 (Comercio Electrónico).',
        ] },
        { h: 'Si esto cambia' },
        { p: 'Actualizaremos la lista de lo que guardamos y la fecha de esta política. Antes de activar cookies opcionales, como las de análisis, le pediremos autorización previa, expresa e informada, con la opción de rechazarlas tan fácil como aceptarlas.' },
        { p: 'Si rechaza las cookies opcionales, el sitio seguirá funcionando con normalidad.' },
      ],
    },
  ],
};

export default function CookiesPolicy() {
  return <LegalDocument doc={doc} />;
}