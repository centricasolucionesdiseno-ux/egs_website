import LegalDocument from '../components/ui/LegalDocument';
import { COMPANY } from '../data/company';

const nit = COMPANY.nit ? `, identificada con NIT ${COMPANY.nit}` : '';

const doc = {
  metaTitle: 'Términos de Servicio',
  crumb: 'Términos de servicio',
  title: 'Términos de Servicio',
  effective: COMPANY.effective,
  summary: [
    { icon: 'fas fa-handshake', text: 'Al usar nuestros servicios usted acepta estas condiciones.' },
    { icon: 'fas fa-shield-halved', text: 'Úselos de forma legal y responsable, sin afectar su seguridad.' },
    { icon: 'fas fa-copyright', text: 'El software y los contenidos son propiedad de EGS o de sus licenciantes.' },
    { icon: 'fas fa-gavel', text: 'Se rigen por las leyes de Colombia, con tribunales en Bogotá.' },
  ],
  sections: [
    {
      title: '1. Alcance del servicio',
      blocks: [
        { p: `Los presentes Términos de Servicio regulan el acceso y uso de los servicios ofrecidos por ${COMPANY.legalName} (en adelante, «EGS»)${nit}, domiciliada en ${COMPANY.city}, incluyendo el sitio web, las plataformas, herramientas tecnológicas y servicios asociados.` },
        { p: 'El uso de estos servicios implica la aceptación de las condiciones aquí descritas, así como de cualquier normativa aplicable. Cuando exista un contrato o propuesta firmada con EGS, sus condiciones particulares prevalecen sobre estos términos generales.' },
        { h: 'Servicios incluidos' },
        { ul: [
          'Organización integral de archivos.',
          'Digitalización y preservación digital.',
          'Lectura y acceso de medios magnéticos.',
          'Microfilmación.',
          'Custodia y administración de archivos físicos.',
          'Logística documental.',
          'Nebula Vault, software de preservación digital bajo el estándar OAIS.',
          'Consultoría archivística especializada.',
        ] },
      ],
    },
    {
      title: '2. Uso permitido',
      blocks: [
        { p: 'El usuario se compromete a utilizar los servicios de manera responsable, legal y conforme a los fines para los cuales fueron diseñados.' },
        { p: 'Queda prohibido el uso indebido de la plataforma, incluyendo actividades que puedan afectar su funcionamiento, seguridad o integridad, así como el acceso no autorizado a sistemas o datos.' },
        { h: 'Usos prohibidos' },
        { ul: [
          'Realizar actividades ilegales o fraudulentas.',
          'Intentar vulnerar la seguridad del sistema.',
          'Distribuir malware o contenido dañino.',
          'Acceder a información no autorizada.',
          'Sobrecargar la infraestructura del servicio, incluido el envío automatizado o masivo de formularios.',
        ] },
      ],
    },
    {
      title: '3. Cuentas y acceso',
      blocks: [
        { p: 'En caso de requerirse registro, el usuario será responsable de mantener la confidencialidad de sus credenciales de acceso.' },
        { p: 'EGS no será responsable por el uso indebido de cuentas derivado de negligencia en la protección de la información de acceso por parte del usuario.' },
        { h: 'Requisitos de registro' },
        { ul: [
          'Proporcionar información veraz y actualizada.',
          'Mantener la confidencialidad de la contraseña.',
          'Notificar inmediatamente cualquier uso no autorizado.',
          'Ser mayor de edad y legalmente capaz, o actuar en representación de una organización con facultades para ello.',
        ] },
      ],
    },
    {
      title: '4. Responsabilidad',
      blocks: [
        { p: 'Los servicios se proporcionan según su disponibilidad. EGS trabaja para mantenerlos seguros y en funcionamiento, pero no garantiza que sean ininterrumpidos o libres de errores.' },
        { p: 'En la medida permitida por la ley colombiana, EGS no será responsable por daños indirectos derivados del uso o la imposibilidad de uso de los servicios. Esta limitación no aplica cuando la ley no permita excluir la responsabilidad, como en los casos de dolo o culpa grave, ni afecta los derechos que el Estatuto del Consumidor reconoce a los consumidores.' },
        { h: 'Limitaciones de responsabilidad' },
        { ul: [
          'Interrupciones programadas o de emergencia.',
          'Pérdida de datos por causas externas o ajenas a EGS.',
          'Errores en el uso del servicio por parte del usuario.',
          'Contenido de terceros accesible desde el servicio.',
        ] },
      ],
    },
    {
      title: '5. Terminación',
      blocks: [
        { p: 'Nos reservamos el derecho de suspender o cancelar el acceso a los servicios en caso de incumplimiento de estos términos o uso indebido de la plataforma.' },
        { p: 'El usuario puede dejar de utilizar los servicios en cualquier momento, sin perjuicio de las obligaciones adquiridas previamente.' },
        { h: 'Causales de terminación' },
        { ul: [
          'Incumplimiento de los términos establecidos.',
          'Uso fraudulento o ilegal del servicio.',
          'Solicitud expresa del usuario.',
          'Decisión de EGS, con previo aviso.',
        ] },
      ],
    },
    {
      title: '6. Propiedad intelectual',
      blocks: [
        { p: 'Todo el contenido, software, diseños, logotipos y materiales disponibles en los servicios son propiedad de EGS o de sus licenciantes y están protegidos por las leyes de propiedad intelectual.' },
        { p: 'El usuario no adquiere ningún derecho de propiedad sobre los servicios o contenidos, más allá de los derechos de uso limitados otorgados en estos términos o en el contrato correspondiente.' },
        { h: 'Restricciones' },
        { ul: [
          'No copiar, modificar o distribuir el software.',
          'No descompilar ni realizar ingeniería inversa.',
          'No eliminar avisos de propiedad intelectual.',
        ] },
      ],
    },
    {
      title: '7. Protección de datos',
      blocks: [
        { p: 'EGS trata los datos personales de acuerdo con su Política de Tratamiento de Datos Personales y Aviso de Privacidad y la legislación aplicable en Colombia (Ley 1581 de 2012).' },
        { p: 'El usuario garantiza que los datos proporcionados son exactos y se compromete a notificar cualquier cambio.' },
        { h: 'Derechos del usuario' },
        { ul: [
          'Acceder, actualizar y corregir sus datos.',
          'Solicitar la eliminación de sus datos.',
          'Revocar el consentimiento para el tratamiento.',
          'Presentar quejas ante la Superintendencia de Industria y Comercio (SIC).',
        ] },
        { links: [{ label: 'Política de Tratamiento de Datos Personales y Aviso de Privacidad', to: '/politica-de-privacidad' }] },
      ],
    },
    {
      title: '8. Legislación aplicable',
      blocks: [
        { p: 'Estos términos se rigen por las leyes de la República de Colombia. Cualquier disputa relacionada con estos términos será sometida a los tribunales competentes de Bogotá D.C., Colombia.' },
        { h: 'Normativa aplicable' },
        { ul: [
          'Constitución Política de Colombia.',
          'Ley 527 de 1999 (Comercio Electrónico).',
          'Ley 1480 de 2011 (Estatuto del Consumidor).',
          'Ley 1581 de 2012 (Protección de Datos).',
          'Decreto 1074 de 2015 (Único Reglamentario del Sector Comercio).',
        ] },
        { h: 'Modificaciones' },
        { p: 'Podemos actualizar estos términos cuando cambien nuestros servicios o la normativa. Publicaremos los cambios en esta página con su fecha de actualización.' },
      ],
    },
  ],
};

export default function Terms() {
  return <LegalDocument doc={doc} />;
}