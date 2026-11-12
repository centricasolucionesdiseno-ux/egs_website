import LegalDocument from '../components/ui/LegalDocument';
import { COMPANY, identityRows } from '../data/company';

const doc = {
  metaTitle: 'Política de Tratamiento de Datos Personales y Aviso de Privacidad',
  crumb: 'Política de privacidad',
  title: 'Política de Tratamiento de Datos Personales y Aviso de Privacidad',
  effective: COMPANY.effective,
  summary: [
    { icon: 'fas fa-user-check', text: 'Solo usamos los datos que usted nos entrega para atender su solicitud.' },
    { icon: 'fas fa-ban', text: 'No vendemos, alquilamos ni cedemos sus datos personales.' },
    { icon: 'fas fa-eye-slash', text: 'Sin cookies de rastreo ni publicidad.' },
    { icon: 'fas fa-shield-halved', text: 'Usted puede consultar, corregir o eliminar sus datos cuando quiera.' },
  ],
  sections: [
    {
      title: '1. Fecha de vigencia',
      blocks: [
        { p: `La presente Política de Tratamiento de Datos Personales y Aviso de Privacidad entra en vigor el ${COMPANY.effective} y se aplica a los datos que ${COMPANY.legalName} (en adelante, «EGS») recibe a través de ${COMPANY.domain}. Describe qué datos recopilamos, para qué los usamos, cómo los protegemos y cómo puede ejercer sus derechos, conforme a la Ley 1581 de 2012, el Decreto 1377 de 2013 (compilado en el Decreto 1074 de 2015) y demás normas colombianas de protección de datos personales.` },
        { p: 'Al enviar sus datos en nuestros formularios y marcar la casilla de aceptación, usted autoriza su tratamiento en los términos aquí descritos.' },
        { h: 'Modificaciones de la política' },
        { p: 'Podemos actualizar esta política cuando cambien nuestros servicios o la normativa. Publicaremos los cambios en esta página con su fecha de actualización y, si son sustanciales, los comunicaremos antes de aplicarlos a quienes nos hayan entregado sus datos.' },
      ],
    },
    {
      title: '2. Responsable del tratamiento',
      blocks: [
        { p: 'El responsable de decidir sobre el tratamiento de sus datos personales es:' },
        { kv: identityRows },
        { p: 'Para cualquier asunto relacionado con esta política puede escribirnos al correo indicado.' },
      ],
    },
    {
      title: '3. Información recopilada',
      blocks: [
        { p: 'Solo recopilamos los datos que usted nos entrega voluntariamente. No solicitamos datos sensibles (como salud, orientación política o religiosa, o datos biométricos) ni datos de menores de edad.' },
        { h: 'Cuando nos contacta mediante el formulario' },
        { ul: [
          'Datos de identificación y contacto: nombre completo, correo electrónico y teléfono.',
          'Datos profesionales: entidad o empresa.',
          'Datos de su solicitud: servicio de interés y el mensaje que usted escribe.',
        ] },
        { p: 'Según la configuración del sitio, el formulario envía su solicitud a un servicio de recepción de formularios o abre su programa de correo con el mensaje ya redactado.' },
        { h: 'Datos técnicos' },
        { p: 'Como cualquier sitio web, el servidor que aloja este sitio puede registrar datos técnicos básicos de cada visita (dirección IP, navegador, fecha y hora) con fines de seguridad y funcionamiento. No los usamos para identificarlo ni para crear perfiles.' },
        { h: 'Contenido de terceros' },
        { p: 'Este sitio carga sus tipografías desde Google Fonts, por lo que Google puede recibir datos técnicos de su navegador (como la dirección IP) según su propia política de privacidad. Si usted pulsa un enlace de WhatsApp o de nuestras redes sociales (Facebook, Instagram, TikTok y X), la navegación se rige por las políticas de ese servicio.' },
      ],
    },
    {
      title: '4. Uso de la información',
      blocks: [
        { p: 'Usamos sus datos únicamente para las finalidades que le informamos al recogerlos:' },
        { ul: [
          'Responder sus consultas y dar seguimiento comercial a su solicitud.',
          'Enviarle propuestas o información relacionada con el servicio que le interesa.',
          'Mantener la seguridad del sitio y prevenir el uso abusivo de los formularios.',
          'Cumplir obligaciones legales y requerimientos de autoridades competentes.',
        ] },
        { p: 'Solo le enviaremos boletines o comunicaciones comerciales generales si nos da su autorización expresa para ello, y podrá retirarla en cualquier momento. No vendemos, alquilamos ni cedemos sus datos personales.' },
      ],
    },
    {
      title: '5. Con quién compartimos sus datos',
      blocks: [
        { p: 'Para prestar el servicio nos apoyamos en proveedores que actúan como encargados del tratamiento, siguiendo nuestras instrucciones:' },
        { ul: [
          'Proveedores de alojamiento y correo: almacenan y entregan las páginas del sitio y, cuando aplica, reciben y reenvían las solicitudes que usted envía por el formulario.',
          'Google (Google Fonts): entrega las tipografías del sitio y recibe datos técnicos de su navegador.',
        ] },
        { p: 'Algunos de estos proveedores almacenan información en servidores ubicados fuera de Colombia (por ejemplo, en Estados Unidos). Al aceptar esta política usted autoriza esa transmisión internacional, que se realiza con proveedores que ofrecen niveles adecuados de protección de datos.' },
        { p: 'Solo compartiremos sus datos con autoridades cuando exista una obligación legal o una orden judicial.' },
      ],
    },
    {
      title: '6. Protección de datos',
      blocks: [
        { p: 'Aplicamos medidas técnicas, humanas y administrativas razonables para proteger su información contra el acceso no autorizado, la pérdida, la alteración o la divulgación indebida.' },
        { h: 'Medidas de seguridad' },
        { ul: [
          'Cifrado de la información en tránsito (HTTPS/TLS).',
          'Acceso restringido a las personas autorizadas del equipo.',
          'Validación de los datos recibidos en los formularios.',
        ] },
        { p: 'Ningún sistema es completamente infalible. Si ocurriera un incidente de seguridad que afecte sus datos, se lo informaremos y lo reportaremos a la Superintendencia de Industria y Comercio, como lo exige la ley.' },
        { h: 'Conservación' },
        { p: 'Conservamos sus datos durante el tiempo necesario para cumplir las finalidades descritas y las obligaciones legales aplicables. Después los eliminamos o anonimizamos, salvo que la ley exija conservarlos.' },
      ],
    },
    {
      title: '7. Cookies y almacenamiento local',
      blocks: [
        { p: 'Este sitio no usa cookies publicitarias ni de analítica, y no rastrea su navegación.' },
        { p: 'Solo guarda en su propio navegador (almacenamiento local, sin enviarlo a nuestros servidores) un dato para mejorar su experiencia: su preferencia de tema, claro u oscuro, y únicamente si usted la cambia. Puede borrarlo en cualquier momento desde la configuración de su navegador.' },
        { links: [{ label: 'Política de Cookies', to: '/politica-de-cookies' }] },
      ],
    },
    {
      title: '8. Derechos del usuario',
      blocks: [
        { p: 'Como titular de sus datos personales usted tiene derecho a (artículo 8 de la Ley 1581 de 2012):' },
        { ul: [
          'Conocer, actualizar y rectificar sus datos.',
          'Solicitar prueba de la autorización que nos otorgó.',
          'Ser informado sobre el uso que les damos.',
          'Revocar la autorización o solicitar la supresión de sus datos, cuando no exista un deber legal de conservarlos.',
          'Acceder gratuitamente a sus datos.',
          'Presentar quejas ante la Superintendencia de Industria y Comercio (SIC), una vez agotado el trámite ante nosotros.',
        ] },
        { h: 'Cómo ejercer sus derechos' },
        { p: `Escriba a ${COMPANY.email} con el asunto «Habeas data» e incluya:` },
        { ul: [
          'Su nombre completo y número de identificación.',
          'La descripción clara de los hechos o de lo que solicita (consultar, corregir, actualizar, suprimir sus datos o revocar su autorización).',
          'Una dirección física o electrónica para notificarle la respuesta.',
          'Los documentos que quiera hacer valer, si los hay.',
        ] },
        { p: 'Si actúa en representación de otra persona, adjunte el documento que lo acredite.' },
        { h: 'Trámite de los reclamos' },
        { ol: [
          'Solicitud incompleta: si su reclamo no trae la información necesaria, le pediremos que lo complemente dentro de los 5 días siguientes a su recepción. Si pasados 2 meses desde ese requerimiento no ha entregado la información, entenderemos que desistió del reclamo.',
          'Reclamo completo: dentro de los 2 días hábiles siguientes a recibirlo completo, incluiremos en nuestra base de datos la leyenda «reclamo en trámite» junto al dato cuestionado. Esa leyenda se mantendrá hasta que el reclamo se resuelva.',
          'Falta de competencia: si no somos la entidad competente para resolver su reclamo, se lo informaremos indicando la autoridad o entidad a la cual debe acudir.',
        ] },
        { h: 'Plazos de respuesta' },
        { ul: [
          'Consultas: máximo 10 días hábiles contados desde el día siguiente a la fecha de recibo. Si no es posible atenderla en ese plazo, se informarán los motivos de la demora y la fecha de respuesta, la cual no superará 5 días hábiles adicionales.',
          'Reclamos (corrección, actualización, supresión o revocatoria): máximo 15 días hábiles contados desde el día siguiente a la fecha de recepción del reclamo completo. Si no es posible atenderlo en dicho plazo, se informarán los motivos de la demora y la fecha de solución, la cual no superará 8 días hábiles adicionales.',
        ] },
      ],
    },
  ],
};

export default function PrivacyPolicy() {
  return <LegalDocument doc={doc} />;
}