import LegalDocument from '../components/ui/LegalDocument';
import { COMPANY, identityRows } from '../data/company';

const doc = {
  metaTitle: 'Aviso Legal',
  crumb: 'Aviso legal',
  title: 'Aviso Legal',
  effective: COMPANY.effective,
  summary: [
    { icon: 'fas fa-handshake', text: 'Navegar por el sitio implica aceptar este aviso legal.' },
    { icon: 'fas fa-shield-halved', text: 'Úselo de buena fe, sin afectar su seguridad ni la de otros usuarios.' },
    { icon: 'fas fa-copyright', text: 'Textos, imágenes, marcas y software son de EGS o de sus licenciantes.' },
    { icon: 'fas fa-gavel', text: 'Se rige por las leyes de Colombia, con jueces en Bogotá.' },
  ],
  sections: [
    {
      title: '1. Titular del sitio',
      blocks: [
        { p: `El sitio web ${COMPANY.domain} es operado por ${COMPANY.legalName} (en adelante, «EGS»), firma consultora especializada en gestión documental, custodia, digitalización, preservación digital y desarrollo tecnológico para entidades públicas y privadas.` },
        { kv: identityRows },
        { p: 'Para cualquier consulta sobre este sitio puede escribirnos al correo indicado o usar los canales de la sección de contacto.' },
        { links: [{ label: 'Contacto', to: '/contacto' }] },
      ],
    },
    {
      title: '2. Condiciones de uso',
      blocks: [
        { p: 'El acceso y uso de este sitio web le otorga la condición de usuario e implica la aceptación de las disposiciones de este Aviso Legal. El acceso es gratuito, salvo el costo de la conexión a internet de cada usuario.' },
        { p: 'Usted se compromete a hacer un uso adecuado de los contenidos y servicios del sitio, evitando actividades ilícitas o contrarias a la buena fe y al orden público.' },
        { p: 'Los servicios contratados con EGS se rigen además por los Términos de Servicio y, cuando exista, por el contrato correspondiente.' },
        { links: [{ label: 'Términos de Servicio', to: '/terminos-de-servicio' }] },
        { h: 'Obligaciones del usuario' },
        { ul: [
          'No utilizar el sitio para fines ilegales o no autorizados.',
          'No intentar vulnerar ni interferir con la seguridad del sitio.',
          'No enviar contenido malicioso, ni formularios de forma automatizada o masiva.',
          'Suministrar información veraz en los formularios.',
          'Respetar los derechos de propiedad intelectual.',
        ] },
      ],
    },
    {
      title: '3. Propiedad intelectual',
      blocks: [
        { p: 'Todos los contenidos del sitio, incluidos textos, imágenes, diseños, logotipos, marcas y software, son propiedad de EGS o se usan con la licencia correspondiente, y están protegidos por la normativa colombiana e internacional de derechos de autor y propiedad industrial.' },
        { p: 'Queda prohibida su reproducción, distribución, transformación o comunicación pública, total o parcial, sin autorización previa y expresa de EGS.' },
        { compare: {
          yes: { title: '¿Qué está permitido?', items: [
            'Visualizar y navegar el sitio para uso personal.',
            'Compartir enlaces citando la fuente.',
            'Usar la información con fines informativos.',
          ] },
          no: { title: '¿Qué está prohibido?', items: [
            'Copiar o reproducir contenido sin autorización.',
            'Modificar o adaptar el contenido.',
            'Usar logotipos o marcas sin permiso.',
          ] },
        } },
      ],
    },
    {
      title: '4. Limitación de responsabilidad',
      blocks: [
        { p: 'La información publicada en este sitio es de carácter general y puede cambiar sin previo aviso. No constituye una oferta vinculante: las condiciones de cada servicio se definen en la propuesta o contrato correspondiente.' },
        { p: 'EGS aplica medidas técnicas para mantener el sitio seguro y disponible, pero no puede garantizar su funcionamiento ininterrumpido ni la ausencia total de errores. En la medida permitida por la ley colombiana, no responde por daños derivados de las siguientes situaciones, sin perjuicio de los casos de dolo o culpa grave y de los derechos que el Estatuto del Consumidor reconoce a los consumidores.' },
        { h: 'Exclusiones de responsabilidad' },
        { ul: [
          'Interrupciones o errores técnicos ajenos a EGS.',
          'Pérdida de datos por causas externas.',
          'Contenido de sitios de terceros enlazados desde este sitio.',
          'Uso indebido del sitio por parte del usuario.',
        ] },
      ],
    },
    {
      title: '5. Legislación y jurisdicción',
      blocks: [
        { p: 'Este Aviso Legal se rige por la legislación de la República de Colombia. Cualquier controversia derivada del acceso o uso del sitio será sometida a los jueces competentes de Bogotá D.C., Colombia, salvo que la ley disponga otro fuero a favor del consumidor.' },
        { h: 'Legislación aplicable' },
        { ul: [
          'Constitución Política de Colombia.',
          'Ley 527 de 1999 (Comercio Electrónico).',
          'Ley 1480 de 2011 (Estatuto del Consumidor).',
          'Ley 1581 de 2012 (Protección de Datos), desarrollada en nuestra Política de Tratamiento de Datos Personales y Aviso de Privacidad.',
          'Ley 23 de 1982 y Decisión Andina 351 de 1993 (Derechos de Autor).',
          'Decisión Andina 486 de 2000 (Propiedad Industrial).',
        ] },
        { h: 'Modificaciones' },
        { p: 'Podemos actualizar este aviso cuando cambie el sitio o la normativa. Publicaremos los cambios en esta página con su fecha de actualización.' },
      ],
    },
  ],
};

export default function LegalNotice() {
  return <LegalDocument doc={doc} />;
}
