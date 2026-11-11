// Datos de la empresa usados en los documentos legales. Edite aquí y se actualiza en las 4 páginas.
export const COMPANY = {
  legalName: 'EGS Soluciones Integrales S.A.S.',
  nit: '', // PENDIENTE: agregue el NIT. Si queda vacío, no se muestra.
  city: 'Bogotá D.C., Colombia',
  email: 'gerencia@egssas.com',
  phoneFixed: '+57 601 322 5214',
  phoneMobile: '+57 300 205 7325',
  domain: 'egssas.com',
  effective: '10 de noviembre de 2026', // PENDIENTE: confirme la fecha de publicación
};

export const identityRows = [
  ['Razón social', COMPANY.legalName],
  ...(COMPANY.nit ? [['NIT', COMPANY.nit]] : []),
  ['Domicilio', COMPANY.city],
  ['Correo', COMPANY.email, `mailto:${COMPANY.email}`],
  ['Teléfonos', `${COMPANY.phoneFixed} · ${COMPANY.phoneMobile}`],
];

export const footerLine = [COMPANY.legalName, COMPANY.nit && `NIT ${COMPANY.nit}`, COMPANY.city, `Vigente desde el ${COMPANY.effective}`]
  .filter(Boolean)
  .join(' · ');