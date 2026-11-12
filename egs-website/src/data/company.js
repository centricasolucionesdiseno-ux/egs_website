// Datos de la empresa usados en los documentos legales. Edite aquí y se actualiza en las 4 páginas.
export const COMPANY = {
  legalName: 'EGS Soluciones Integrales S.A.S.',
  nit: '', // PENDIENTE: agregue el NIT. Si queda vacío, no se muestra.
  city: 'Carrera 69q #75-45 Bogotá D.C., Colombia',
  email: 'recursoshumanos@egssas.com',
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
 
// Redes sociales. PENDIENTE: pegue la URL de cada perfil. Las que queden vacías no se muestran en el footer.
export const SOCIAL = [
  { name: 'Facebook', icon: 'fab fa-facebook-f', url: 'https://www.facebook.com/people/EGS-SAS/100068304986555/' },
  { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://www.instagram.com/egs_sas/' },
  { name: 'X', icon: 'fab fa-x-twitter', url: 'https://x.com/Egs_sas' },
];