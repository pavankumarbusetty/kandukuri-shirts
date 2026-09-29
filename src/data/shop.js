// Confirm these business details before publishing the shop publicly.
const shop = {
  name: 'Kandukuri Shirts',
  subtitle: 'Pavan Enterprises · Tirupati',
  phone: '7330922678',
  whatsappNumber: '917330922678',
  address: '216, Gandhi Road, Tirupati, Andhra Pradesh 517501',
  directionsUrl:
    'https://www.google.com/maps/search/?api=1&query=Kandukuri+Shirts+216+Gandhi+Road+Tirupati',
  hours: 'Please call to confirm today’s opening hours.',
  catalogueNotice:
    'Preview catalogue · Sample prices and options. Please confirm availability and final prices with the shop.',
};
export function whatsappLink(message) {
  return `https://wa.me/${shop.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
export default shop;
